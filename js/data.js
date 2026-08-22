// Portfolio Data Store for Abdullah Hossain

const portfolioData = {
  profile: {
    name: "Abdullah Hossain",
    initials: "AH",
    title: "Full Stack Software Engineer | Mobile App Developer",
    subtitle: "Full Stack Software Engineer | Mobile App Developer | Vibe Coder | Tech Enthusiast",
    availability: "Available for new projects & full-time roles",
    tagline: "Mobile App Engineer with 4+ years of experience building production-ready mobile apps with clean architecture, real-time systems, and scalable API integrations.",
    bio: "Mobile App Engineer with 4+ years of experience building production-ready mobile apps with clean architecture, real-time systems, and scalable API integrations. Specializing in high-performance Flutter applications, real-time systems, and pixel-perfect mobile UI implementation. Currently working at RazinSoft Limited as a Flutter Developer with a strong focus on maintainable architecture and reliable product delivery.",
    location: "Dhaka, Bangladesh",
    stats: [
      { label: "Years Experience", value: 4, suffix: "+" },
      { label: "Projects Completed", value: 40, suffix: "+" },
      { label: "Happy Clients", value: 80, suffix: "+" },
      { label: "Location", value: "Dhaka, BD", suffix: "" }
    ],
    contact: {
      email: "iamabdullahhossain@gmail.com",
      phone: "+8801624563436",
      whatsapp: "+8801624563436",
      linkedin: "https://linkedin.com/in/iamabdullahhossain",
      github: "https://github.com/iamabdullahhossain"
    }
  },

  experience: [
    /*    {
         role: "Software Engineer",
         company: "N.I.Biz Soft",
         duration: "2026 - Present",
         type: "Full-Time",
         isCurrent: true,
         description: "Building end-to-end software solutions—engineering cross-platform mobile apps with Flutter and developing robust backend APIs & services using PHP & Laravel."
       }, */
    {
      role: "Flutter Developer (Mid-Level)",
      company: "RazinSoft Limited",
      duration: "2025 - Present",
      type: "Full-Time",
      isCurrent: true,
      description: "Leading Flutter app development with Riverpod and clean architecture. Engineering real-time chat, Google Maps geolocation, and offline-first data sync for enterprise and marketplace applications."
    },
    {
      role: "Flutter Developer",
      company: "Chuty Bangladesh PVT Ltd",
      duration: "2023 - 2025",
      type: "Full-Time",
      isCurrent: false,
      description: "Engineered scalable Flutter mobile applications using Clean Architecture and offline-first data sync. Collaborated closely with cross-functional teams to integrate complex RESTful APIs, push notifications, and payment gateways."
    },
    {
      role: "Android Developer",
      company: "Authentic Four Technology",
      duration: "2021 - 2022",
      type: "Full-Time",
      isCurrent: false,
      description: "Built native Android mobile applications utilizing Java/Kotlin and Jetpack components. Focused on UI optimization, smooth background service processing, and efficient REST API communication."
    }
  ],

  education: [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Port City International University",
      duration: "Graduated",
      description: "Completed core coursework in Software Engineering, Data Structures & Algorithms, Database Systems, Computer Networks, and Mobile Computing."
    }
  ],

  pillars: [
    {
      icon: "smartphone",
      title: "Flutter & Mobile Apps",
      description: "High-performance cross-platform Flutter applications with pixel-perfect UI implementation and clean layered architecture."
    },
    {
      icon: "code",
      title: "Object-Oriented Programming",
      description: "Writing maintainable, scalable, and reusable code adhering to SOLID principles and OOP design patterns."
    },
    {
      icon: "zap",
      title: "Real-Time Systems",
      description: "Real-time chat, Pusher integration, WebSocket streaming, and instant push notification systems (Firebase Cloud Messaging)."
    },
    {
      icon: "layers",
      title: "Clean Architecture",
      description: "Feature-first & layered architectures using Riverpod, GetX, Provider, MVC, and MVVM design patterns."
    },
    {
      icon: "database",
      title: "Offline & API Integration",
      description: "Offline-first app design using Hive database, Dio HTTP client, and robust RESTful backend APIs (PHP / Laravel / MySQL)."
    },
    {
      icon: "map-pin",
      title: "Maps & Mobile Features",
      description: "Google Maps integration, Geolocation, In-App Purchases, device media/camera APIs, and app store release workflows."
    },
    {
      icon: "bot",
      title: "AI Integration",
      description: "Smart AI assistants, LLM integration, OpenAI/Gemini APIs, prompt engineering, and intelligent features in mobile apps."
    },

  ],

  services: [
    {
      id: "flutter",
      icon: "smartphone",
      title: "Flutter Mobile App Engineering",
      description: "Cross-platform Android & iOS application development with high performance, 60fps animations, and maintainable clean architecture.",
      features: ["Flutter & Dart Expertise", "Riverpod, GetX & Provider", "Feature-First & Layered Architecture", "Figma to Pixel-Perfect UI"]
    },
    {
      id: "realtime",
      icon: "zap",
      title: "Real-Time Messaging & Chat",
      description: "Building responsive real-time chat systems, push notification infrastructures, and live data streaming.",
      features: ["Firebase FCM Push Notifications", "Pusher Real-Time Chat Systems", "WebSocket Connections", "Background Download & Sync"]
    },
    {
      id: "backend",
      icon: "server",
      title: "Backend & API Integration",
      description: "Connecting mobile applications to robust backend services with high reliability and offline caching capabilities.",
      features: ["Dio & REST API Integration", "PHP, Laravel & MySQL Backends", "Hive Offline Local Database", "Offline-First Synchronization"]
    },
    {
      id: "location",
      icon: "map-pin",
      title: "Maps & Monetization Features",
      description: "Embedding location-aware services, Google Maps navigation, and app monetization systems.",
      features: ["Google Maps & Geolocation", "Geocoding & Location Services", "In-App Purchases & Subscriptions", "Camera & Media Handling"]
    }
  ],

  techStack: [
    {
      category: "Core Mobile Development",
      skills: [
        { name: "Flutter Development", level: "Expert", icon: "smartphone" },
        { name: "Dart Programming", level: "Expert", icon: "code" },
        { name: "Android Development", level: "Advanced", icon: "smartphone" },
        { name: "Object-Oriented Programming (OOP)", level: "Expert", icon: "layers" }
      ]
    },
    {
      category: "State & Architecture",
      skills: [
        { name: "Riverpod", level: "Expert", icon: "git-branch" },
        { name: "GetX", level: "Expert", icon: "zap" },
        { name: "Provider", level: "Advanced", icon: "box" },
        { name: "Go Router", level: "Advanced", icon: "compass" },
        { name: "Feature-First & Layered Arch", level: "Expert", icon: "layers" },
        { name: "MVC & MVVM Design Patterns", level: "Expert", icon: "cpu" }
      ]
    },
    {
      category: "Local Storage & Backend",
      skills: [
        { name: "Hive (Local DB)", level: "Expert", icon: "database" },
        { name: "Offline-First Design", level: "Expert", icon: "hard-drive" },
        { name: "PHP & Laravel", level: "Intermediate", icon: "server" },
        { name: "MySQL Database", level: "Intermediate", icon: "database" },
        { name: "REST API Integration & Dio", level: "Expert", icon: "send" }
      ]
    },
    {
      category: "Services & Integrations",
      skills: [
        { name: "Firebase Auth & Realtime", level: "Expert", icon: "shield-check" },
        { name: "FCM Push Notifications", level: "Expert", icon: "bell" },
        { name: "Real-time Chat & Pusher", level: "Expert", icon: "message-square" },
        { name: "Google Maps & Geolocation", level: "Expert", icon: "map-pin" },
        { name: "In-App Purchases & Subscriptions", level: "Advanced", icon: "credit-card" },
        { name: "Git, Postman, Android Studio, Xcode", level: "Expert", icon: "terminal" }
      ]
    }
  ],

  projects: [
    {
      id: "supraskills-tm",
      title: "Supraskills TM",
      tagline: "Productivity & Task Management Platform",
      category: "Productivity",
      role: "Flutter Developer",
      impact: "Flutter-based task management platform featuring push notifications, offline support, timeline scheduling, and localization.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Riverpod", "Hive DB", "Firebase FCM", "Localization"],
      overview: "Supraskills TM is a comprehensive task management platform built with Flutter. It streamlines workflow management with real-time push notifications, internal messaging, timeline scheduling, media uploads, and multi-language localization.",
      features: [
        "Firebase push notifications & internal messaging system",
        "Riverpod state management & Hive local database offline support",
        "Interactive timeline scheduling & media file uploads",
        "Multi-language localization support"
      ],
      storeLinks: {
        appStore: "https://apps.apple.com/us/app/supraskills-tm/id6757388694"
      }
    },
    {
      id: "ready-classify",
      title: "Ready Classify",
      tagline: "Real-Time Classifieds Marketplace",
      category: "Marketplace",
      role: "Flutter Developer",
      impact: "Feature-rich mobile marketplace with social authentication, real-time chat updates, location services, and Dio API integrations.",
      image: "https://images.unsplash.com/photo-1556742049-0a674d89a4ee?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Google Maps", "Pusher", "Riverpod", "Dio API"],
      overview: "Ready Classify is a high-performance marketplace application enabling users to list and buy products locally. Integrated with Google Maps for location pinpointing, Pusher for instant messaging, and Riverpod for fluid state management.",
      features: [
        "Firebase authentication & social sign-in (Google, Facebook)",
        "Google Maps & geolocation integration for nearby listings",
        "Dio HTTP client APIs, Riverpod state management & Pusher real-time updates",
        "Permission-driven mobile workflows (camera, storage, location)"
      ],
      storeLinks: {
        playStore: "https://play.google.com/store/apps/details?id=com.readyclassify"
      }
    },
    {
      id: "bridge-lms",
      title: "Bridge LMS",
      tagline: "EdTech Learning Management Platform",
      category: "EdTech",
      role: "Flutter Developer",
      impact: "Cross-platform mobile LMS application delivering course tracking, student assignment submissions, and backend integrations.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Dart", "REST API", "State Management"],
      overview: "Bridge LMS connects students and instructors seamlessly. Features include interactive course progress tracking, assignment submissions, digital quizzes, and fast backend synchronization.",
      features: [
        "Course progress & lesson tracking with interactive modules",
        "Assignment submissions & digital grading overview",
        "Scalable backend API integrations with optimized data loading",
        "Clean feature-first mobile architecture"
      ],
      storeLinks: {
        appStore: "https://apps.apple.com/us/app/bridge-%D8%AC%D8%B3%D8%B1-%D8%B9%D8%A0%D9%88%D8%B1%D9%83/id6751279145"
      }
    },
    {
      id: "chuty-rooms",
      title: "Chuty Rooms",
      tagline: "Hospitality & Hotel Booking Platform",
      category: "Hospitality",
      role: "Flutter Developer",
      impact: "Hotel room booking mobile platform featuring real-time room availability, Google Maps navigation, and rating/review systems.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Google Maps", "Hotel Booking", "Reviews", "Real-time DB"],
      overview: "Chuty Rooms provides travelers with a seamless hotel booking experience. Offers interactive map search, real-time room reservation status, detailed amenities listing, and verified guest reviews.",
      features: [
        "Google Maps integration for hotel search & location routing",
        "Real-time room availability calendar & instant booking",
        "Verified review & star-rating submission system",
        "Responsive, pixel-perfect mobile UI design"
      ],
      storeLinks: {
        playStore: "https://play.google.com/store/apps/details?id=com.chutyrooms.crapp"
      }
    }
  ],

  testimonials: [
    {
      quote: "I've had the pleasure of working with Abdullah Hossain, an exceptionally talented Associate Programmer (App) at ChutyRooms... Abdullah always responds swiftly, resolving issues with remarkable efficiency and precision. Beyond his technical expertise, Abdullah is a proactive and collaborative team player.",
      client: "Anisur Rahman Akib",
      role: "Software Quality Assurance · RILO IT & Software Ltd.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGwjK8UTgTrBg/profile-displayphoto-crop_800_800/B56Z9K9IapG4AI-/0/1783668967724?e=1787788800&v=beta&t=wLPIIppK6LdAbEzbcyr7sUWzuD1o7txZFH7vac__QDI"
    },
    {
      quote: "I can confidently say that he is an exceptional developer with a deep understanding of Flutter and Android development. His ability to solve complex problems efficiently and his keen eye for detail make him a valuable asset to any development team.",
      client: "Joyanta Dutta",
      role: "Senior Backend Developer · Chuty Bangladesh Pvt Ltd",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQHLOQVzni8KZA/profile-displayphoto-crop_800_800/B56Z0T5NpLKAAI-/0/1774155262595?e=1787788800&v=beta&t=lB-HuRtzTWUqzKPWsGwiOVvJVDXDw4dIWrzyNPkjh-w"
    },
    {
      quote: "He is skilled in software development, writes clean and efficient code, and is always eager to learn new technologies. Abdullah is a proactive problem-solver and a great team player.",
      client: "Shimanta Mutsuddi",
      role: "Senior Mobile Application Developer · Softrobotics Bangladesh Limited",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQG57VC5dFN7Fg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1695279924069?e=1787983200&v=beta&t=uwmjcKFBLyWIS3d1N_XIJxMWhCgvjcthxMeXOG60BP8"
    },
    {
      quote: "During our time working together, I found him dedicated, helpful, and supportive. He always handled his work with responsibility and stayed focused on quality. His communication was clear, and working as a team was easy with him.",
      client: "Md Tarik Bin Aziz",
      role: "Sr. Flutter Developer · Razinsoft LTD",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGn4RRD9a-EYA/profile-displayphoto-crop_800_800/B56ZlYErouKIAI-/0/1758119249169?e=1787788800&v=beta&t=EpclHBUv4O4ApU3ReyKDGpYQkiDzEDSOzrXcaK90_6Q"
    }
  ],

  faqs: [
    {
      question: "What types of projects do you specialize in?",
      answer: "I specialize in high-performance Flutter mobile app development, cross-platform Android & iOS apps, real-time messaging/chat systems, offline-first applications with Hive DB, Google Maps integrations, and backend API connections (Dio, PHP, Laravel, MySQL)."
    },
    {
      question: "Which state management solutions do you use?",
      answer: "I am experienced in Riverpod, GetX, and Provider, choosing the optimal architecture (MVC, MVVM, or Feature-First Clean Architecture) depending on your project size and requirements."
    },
    {
      question: "Can you build offline-first mobile applications?",
      answer: "Yes, I build robust offline-first applications using Hive database, local caching strategies, Dio HTTP clients, and seamless background sync protocols when connectivity is restored."
    },
    {
      question: "What is your work experience?",
      answer: "I have 4+ years of professional experience as a Flutter and Android developer across companies like RazinSoft Limited (Mid-Level Flutter Developer), Chuty Bangladesh PVT Ltd, and Authentic Four Technology."
    },
    {
      question: "How can we get in touch or start a project?",
      answer: "You can reach out directly via Phone/WhatsApp (+8801624563436), Email (iamabdullahhossain@gmail.com), or submit the project scope form on this website."
    }
  ]
};
