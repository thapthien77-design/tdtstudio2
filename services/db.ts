
// This service handles SQLite via sql.js (WASM)
// Note: In a real environment, you would use a backend API.
// Here we use browser-side SQLite for demonstration of functionality.

let db: any = null;
const DB_NAME = 'tdt_studio_db.sqlite';

export const initDB = async () => {
  if (db) return db;

  // @ts-ignore
  const SQL = await window.initSqlJs({
    locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
  });

  // Check if we have saved data in LocalStorage
  const savedData = localStorage.getItem(DB_NAME);
  
  if (savedData) {
    const binaryArray = new Uint8Array(JSON.parse(savedData));
    db = new SQL.Database(binaryArray);
  } else {
    db = new SQL.Database();
    createTables();
  }

  // Ensure Admin Exists (Seeding)
  seedAdmin();

  return db;
};

const createTables = () => {
  if (!db) return;

  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      phone TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT DEFAULT 'user'
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      plan_name TEXT NOT NULL,
      price TEXT NOT NULL,
      status TEXT DEFAULT 'Pending',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      position TEXT NOT NULL,
      cv_link TEXT,
      message TEXT,
      status TEXT DEFAULT 'New',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );
  `;
  db.run(sql);
  
  // Default Settings
  const checkSettings = db.exec("SELECT count(*) as count FROM settings");
  if (checkSettings[0].values[0][0] === 0) {
      const stmt = db.prepare("INSERT INTO settings (key, value) VALUES (?, ?)");
      stmt.run(['hotline', '0908531701']);
      stmt.run(['email', 'contact@tdtstudio.tech']);
      stmt.run(['address', 'Tầng 12, Tòa nhà TechTower, TP.HCM']);
      stmt.run(['logoUrl', '']); // Empty means use default SVG
      stmt.free();
  }
  
  saveDB();
};

const seedAdmin = () => {
  if (!db) return;
  const adminPhone = '0908531701';
  // Check if admin exists
  const res = DBService.exec("SELECT id FROM users WHERE phone = ?", [adminPhone]);
  if (res.length === 0) {
    DBService.run(
      "INSERT INTO users (phone, password, name, role) VALUES (?, ?, ?, ?)",
      [adminPhone, 'Thien0108%', 'Administrator', 'admin']
    );
    console.log("Admin account seeded");
  }
};

const saveDB = () => {
  if (!db) return;
  const data = db.export();
  const arr = Array.from(data);
  localStorage.setItem(DB_NAME, JSON.stringify(arr));
};

export const DBService = {
  // Execute a query
  run: (sql: string, params: any[] = []) => {
    if (!db) throw new Error("Database not initialized");
    db.run(sql, params);
    saveDB();
  },

  // Fetch results
  exec: (sql: string, params: any[] = []) => {
    if (!db) throw new Error("Database not initialized");
    const res = db.exec(sql, params);
    // Convert sql.js result format to a friendlier array of objects
    if (res.length > 0) {
      const columns = res[0].columns;
      const values = res[0].values;
      return values.map((row: any[]) => {
        const obj: any = {};
        columns.forEach((col: string, i: number) => {
          obj[col] = row[i];
        });
        return obj;
      });
    }
    return [];
  },

  // Helper: Get single result
  get: (sql: string, params: any[] = []) => {
    const res = DBService.exec(sql, params);
    return res.length > 0 ? res[0] : null;
  },

  // Admin: Get all orders with user info
  getAllOrders: () => {
    const sql = `
      SELECT o.id, o.user_id as userId, o.plan_name as planName, o.price, o.status, o.created_at as createdAt,
             u.name as userName, u.phone as userPhone
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.id DESC
    `;
    return DBService.exec(sql);
  },

  updateOrderStatus: (orderId: number, status: string) => {
    DBService.run("UPDATE orders SET status = ? WHERE id = ?", [status, orderId]);
  },

  // Applications
  createApplication: (name: string, email: string, phone: string, position: string, cvLink: string, message: string) => {
    DBService.run(
      "INSERT INTO applications (name, email, phone, position, cv_link, message) VALUES (?, ?, ?, ?, ?, ?)", 
      [name, email, phone, position, cvLink, message]
    );
  },

  getApplications: () => {
    const sql = `
      SELECT id, name, email, phone, position, cv_link as cvLink, message, status, created_at as createdAt
      FROM applications
      ORDER BY id DESC
    `;
    return DBService.exec(sql);
  },

  updateApplicationStatus: (appId: number, status: string) => {
    DBService.run("UPDATE applications SET status = ? WHERE id = ?", [status, appId]);
  },

  getSettings: () => {
    const res = DBService.exec("SELECT key, value FROM settings");
    const settings: any = {};
    res.forEach((row: any) => {
      settings[row.key] = row.value;
    });
    return settings;
  },

  saveSetting: (key: string, value: string) => {
    // Upsert logic
    const exists = DBService.get("SELECT key FROM settings WHERE key = ?", [key]);
    if (exists) {
      DBService.run("UPDATE settings SET value = ? WHERE key = ?", [value, key]);
    } else {
      DBService.run("INSERT INTO settings (key, value) VALUES (?, ?)", [key, value]);
    }
  }
};