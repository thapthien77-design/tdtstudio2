import { Globe, Cpu, Rocket, Gift, Server, Shield, Search } from 'lucide-react';
import { WebDesignIcon, AppDevIcon, GameDesignIcon } from './components/CustomIcons';
import { ServiceItem, NavItem, ProjectStat, ProjectItem, TestimonialItem, PricingPlan } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Dịch vụ', href: '/services' },
  { label: 'Dự án', href: '/portfolio' },
  { label: 'Quy trình', href: '/process' },
  { label: 'Liên hệ', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web',
    title: 'Thiết Kế Website',
    description: 'Xây dựng website doanh nghiệp, E-commerce, Landing page với công nghệ hiện đại, chuẩn SEO và tối ưu trải nghiệm người dùng.',
    icon: WebDesignIcon,
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimization', 'High Performance'],
    detailContent: {
      heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
      longDescription: 'Trong kỷ nguyên số, Website không chỉ là bộ mặt của doanh nghiệp mà còn là cỗ máy bán hàng tự động 24/7. Tại TDT Studio, chúng tôi không chỉ tạo ra những website đẹp mắt, mà còn tập trung vào trải nghiệm người dùng (UX) và tối ưu hóa tỷ lệ chuyển đổi (CRO). Sử dụng các công nghệ Frontend mới nhất như ReactJS, Next.js kết hợp với hạ tầng Cloud mạnh mẽ, website của bạn sẽ luôn vận hành ổn định, bảo mật và tốc độ vượt trội.',
      benefits: [
        { title: 'Tốc độ tải trang < 1s', desc: 'Tối ưu hóa hình ảnh và mã nguồn giúp giữ chân khách hàng.' },
        { title: 'Chuẩn SEO Google', desc: 'Cấu trúc code thân thiện với các công cụ tìm kiếm, giúp lên top dễ dàng.' },
        { title: 'Quản trị dễ dàng', desc: 'Hệ thống CMS tùy biến giúp bạn làm chủ nội dung mà không cần biết code.' },
        { title: 'Bảo mật đa lớp', desc: 'Tích hợp SSL, chống DDoS và bảo vệ dữ liệu khách hàng tuyệt đối.' }
      ],
      processSteps: [
        { title: 'Nghiên cứu thị trường', desc: 'Phân tích đối thủ và hành vi khách hàng mục tiêu.' },
        { title: 'Wireframe & UI Kit', desc: 'Xây dựng khung sườn và hệ thống Design System.' },
        { title: 'Lập trình Frontend/Backend', desc: 'Biến thiết kế thành sản phẩm chạy thực tế.' },
        { title: 'Deploy & Monitoring', desc: 'Triển khai lên Server và cài đặt công cụ theo dõi.' }
      ]
    }
  },
  {
    id: 'app',
    title: 'Phát Triển Ứng Dụng',
    description: 'Thiết kế Mobile App đa nền tảng (iOS/Android) với giao diện mượt mà, tính năng ưu việt giúp kết nối khách hàng hiệu quả.',
    icon: AppDevIcon,
    features: ['Flutter/React Native', 'UI/UX Design', 'Real-time Features', 'App Store Deploy'],
    detailContent: {
      heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
      longDescription: 'Thế giới đang chuyển dịch về Mobile First. Một ứng dụng di động chuyên nghiệp giúp bạn tiếp cận khách hàng mọi lúc, mọi nơi. Chúng tôi cung cấp giải pháp phát triển App đa nền tảng (Cross-platform) bằng Flutter hoặc React Native, giúp tiết kiệm 40% chi phí và thời gian so với phát triển Native thuần túy mà vẫn đảm bảo hiệu năng 99%. Từ ứng dụng đặt hàng, ví điện tử đến mạng xã hội nội bộ, chúng tôi đều có giải pháp.',
      benefits: [
        { title: 'Đa nền tảng (iOS & Android)', desc: 'Chỉ cần viết code một lần, chạy mượt mà trên cả hai hệ điều hành.' },
        { title: 'Trải nghiệm Native', desc: 'Hiệu ứng chuyển cảnh, gesture mượt mà như ứng dụng gốc.' },
        { title: 'Thông báo đẩy (Push Noti)', desc: 'Giữ kết nối và remarketing hiệu quả với người dùng.' },
        { title: 'Tích hợp phần cứng', desc: 'Dễ dàng truy cập Camera, GPS, Bluetooth của thiết bị.' }
      ],
      processSteps: [
        { title: 'User Flow Diagram', desc: 'Vẽ luồng người dùng để tối ưu trải nghiệm.' },
        { title: 'Prototyping', desc: 'Dựng bản mẫu tương tác để review trước khi code.' },
        { title: 'App Development', desc: 'Code logic và tích hợp API.' },
        { title: 'Store Publishing', desc: 'Hỗ trợ đưa app lên Apple Store và Google Play.' }
      ]
    }
  },
  {
    id: 'game',
    title: 'Sáng Tạo Game',
    description: 'Phát triển game 2D/3D trên Unity và Unreal Engine. Từ ý tưởng kịch bản đến lập trình logic và thiết kế đồ họa.',
    icon: GameDesignIcon,
    features: ['Unity/Unreal', '2D & 3D Art', 'Game Logic', 'Multiplayer'],
    detailContent: {
      heroImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
      longDescription: 'Ngành công nghiệp Game đang bùng nổ, và TDT Studio ở đây để giúp bạn hiện thực hóa ý tưởng triệu đô. Với đội ngũ Artist và Developer dày dạn kinh nghiệm sử dụng Unity và Unreal Engine, chúng tôi tạo ra những thế giới ảo sống động và gameplay cuốn hút. Dù là Hyper-casual game đơn giản hay dự án MMORPG phức tạp, chúng tôi đều cam kết chất lượng đồ họa đỉnh cao và logic game chặt chẽ.',
      benefits: [
        { title: 'Đồ họa đỉnh cao', desc: 'Sử dụng công nghệ Shader và Lighting mới nhất.' },
        { title: 'Hiệu năng tối ưu', desc: 'Game chạy mượt trên cả các thiết bị cấu hình thấp.' },
        { title: 'Multiplayer Realtime', desc: 'Hệ thống server mạnh mẽ hỗ trợ hàng ngàn người chơi cùng lúc.' },
        { title: 'Monetization', desc: 'Tích hợp quảng cáo và In-app Purchase thông minh để tối ưu doanh thu.' }
      ],
      processSteps: [
        { title: 'Game Design Document', desc: 'Viết kịch bản, luật chơi và cân bằng game.' },
        { title: 'Art Concept & Asset', desc: 'Vẽ nhân vật, môi trường và UI.' },
        { title: 'Programming', desc: 'Lập trình chuyển động, vật lý và AI.' },
        { title: 'QA & Polishing', desc: 'Test lỗi và trau chuốt hiệu ứng (Juice) cho game.' }
      ]
    }
  }
];

export const STATS: ProjectStat[] = [
  { label: 'Dự án hoàn thành', value: '150+' },
  { label: 'Khách hàng hài lòng', value: '98%' },
  { label: 'Năm kinh nghiệm', value: '5+' },
  { label: 'Giải thưởng', value: '12' },
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Tư vấn & Phân tích',
    desc: 'Lắng nghe ý tưởng, phân tích yêu cầu nghiệp vụ và đề xuất giải pháp công nghệ tối ưu.',
    icon: Globe
  },
  {
    id: 2,
    title: 'Thiết kế UI/UX',
    desc: 'Phác thảo Wireframe, thiết kế giao diện chi tiết đảm bảo tính thẩm mỹ và tiện dụng.',
    icon: Cpu
  },
  {
    id: 3,
    title: 'Lập trình & Dev',
    desc: 'Viết code sạch, bảo mật, tối ưu hiệu năng và tích hợp các tính năng theo yêu cầu.',
    icon: WebDesignIcon // Reusing the custom web icon for the "Dev" step
  },
  {
    id: 4,
    title: 'Kiểm thử & Bàn giao',
    desc: 'Test kỹ lưỡng, fix lỗi, triển khai lên server và hướng dẫn sử dụng chi tiết.',
    icon: Rocket
  }
];

export const TECH_STACK = [
  "ReactJS", "NodeJS", "Flutter", "Unity", "Unreal Engine", "Python", "AI Integration", "AWS Cloud", "Blockchain"
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Luxury Fashion",
    category: "Website",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    client: "Vogue Style Co.",
    tech: ["Next.js", "Shopify", "Tailwind"]
  },
  {
    id: 2,
    title: "Fintech Banking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    client: "SecureBank",
    tech: ["Flutter", "Firebase", "NodeJS"]
  },
  {
    id: 3,
    title: "Cyber RPG Adventure",
    category: "Game",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    client: "Indie Studio",
    tech: ["Unity", "C#", "Blender"]
  },
  {
    id: 4,
    title: "Real Estate Booking",
    category: "Website",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    client: "HomeFinder",
    tech: ["ReactJS", "MongoDB", "Google Maps API"]
  },
  {
    id: 5,
    title: "Fitness Tracking AI",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop",
    client: "GymPro",
    tech: ["React Native", "TensorFlow", "AWS"]
  },
  {
    id: 6,
    title: "Space Shooter 3D",
    category: "Game",
    image: "https://images.unsplash.com/photo-1614720332168-ea6e169d303a?q=80&w=1000&auto=format&fit=crop",
    client: "Galaxy Ent",
    tech: ["Unreal Engine 5", "C++", "VFX Graph"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Trần Minh Tuấn",
    role: "CEO, TechSolutions",
    content: "TDT Studio đã thực sự thay đổi bộ mặt online của chúng tôi. Website mới không chỉ đẹp mà còn tăng tỷ lệ chuyển đổi lên 200%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Nguyen",
    role: "Founder, Sarah Boutique",
    content: "Đội ngũ làm việc cực kỳ chuyên nghiệp và tận tâm. Ứng dụng mobile chạy mượt mà trên cả iOS và Android.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Lê Hoàng",
    role: "Game Producer",
    content: "Khả năng xử lý đồ họa và logic game của TDT rất ấn tượng. Dự án game của chúng tôi đã phát hành thành công nhờ sự hỗ trợ của họ.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Cơ Bản',
    price: '5.000.000 VNĐ',
    description: 'Phù hợp cho cá nhân, Landing Page hoặc website giới thiệu đơn giản.',
    features: [
      'Giao diện mẫu hiện đại',
      'Tối ưu chuẩn SEO cơ bản',
      'Tốc độ tải trang nhanh',
      'Miễn phí Hosting 1 năm',
      'Hỗ trợ kỹ thuật 24/7'
    ],
    buttonText: 'Chọn Gói Cơ Bản'
  },
  {
    id: 'pro',
    name: 'Chuyên Nghiệp',
    price: '12.000.000 VNĐ',
    description: 'Giải pháp hoàn hảo cho doanh nghiệp vừa và nhỏ, tích hợp bán hàng.',
    features: [
      'Thiết kế giao diện độc quyền',
      'Hệ thống quản trị (CMS) cao cấp',
      'Tích hợp cổng thanh toán',
      'Bảo mật SSL doanh nghiệp',
      'Tối ưu hiệu năng & SEO nâng cao',
      'Bảo hành trọn đời'
    ],
    isPopular: true,
    buttonText: 'Chọn Gói Chuyên Nghiệp'
  },
  {
    id: 'enterprise',
    name: 'Cao Cấp',
    price: '25.000.000+ VNĐ',
    description: 'Dành cho các dự án lớn: App Mobile, Game 3D, Hệ thống SaaS.',
    features: [
      'Phát triển App Mobile (iOS/Android)',
      'Game Unity/Unreal Engine',
      'Hệ thống Backend Microservices',
      'Tích hợp AI & Blockchain',
      'Hạ tầng Cloud Scalable',
      'Đội ngũ hỗ trợ riêng biệt'
    ],
    buttonText: 'Liên Hệ Báo Giá'
  }
];

export const PROMOTIONS = [
    {
        id: 1,
        title: "Tặng Hosting & Tên Miền",
        desc: "Miễn phí 01 năm sử dụng Hosting tốc độ cao và Tên miền quốc tế (.com/.net) cho hợp đồng thiết kế Website.",
        icon: Server
    },
    {
        id: 2,
        title: "Gói SEO Basic Miễn Phí",
        desc: "Tối ưu hóa On-page, cài đặt Google Analytics & Search Console giúp website dễ dàng lên Top tìm kiếm.",
        icon: Search
    },
    {
        id: 3,
        title: "Bảo Trì & Bảo Hành",
        desc: "Miễn phí bảo trì kỹ thuật 12 tháng. Hỗ trợ backup dữ liệu hàng tuần và quét virus định kỳ.",
        icon: Shield
    }
];