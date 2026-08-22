// Bilingual Portfolio Data Store for Abdullah Hossain (English & Bengali)

const portfolioTranslations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      services: "Services",
      highlights: "Highlights",
      tech: "Tech Stack",
      github: "GitHub",
      projects: "Projects",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact"
    },
    profile: {
      name: "Abdullah Hossain",
      initials: "AH",
      title: "Full Stack Software Engineer | Mobile App Developer",
      subtitle: "Full Stack Software Engineer | Mobile App Developer | Vibe Coder | Tech Enthusiast",
      availability: "Available for new projects & full-time roles",
      statusPill: "Actively working as mobile application developer",
      heroHeadline: 'Full Stack Software Engineer & <span class="highlight">Mobile App Developer</span>',
      heroSubheadline: "Mobile App Engineer with 4+ years of experience building production-ready mobile apps with clean architecture, real-time systems, and scalable API integrations. Specializing in high-performance Flutter applications.",
      viewPackagesCta: "View Packages",
      viewProjectsCta: "View Projects",
      badgeExp: "4+ Yrs Exp.",
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
    sections: {
      aboutTag: "Pillars & Specialization",
      aboutTitle: "Core Architectural <span>Pillars</span>",
      aboutSubtitle: "Engineering high-performance applications with clean code principles, real-time sync, and scalable foundations.",
      
      expTag: "Career History",
      expTitle: "Work <span>Experience</span>",
      expSubtitle: "4+ years of driving mobile architecture, feature engineering, and cross-platform product delivery.",
      
      servicesTag: "What I Offer",
      servicesTitle: "Services & <span>Solutions</span>",
      servicesSubtitle: "From architectural planning to production app store deployment.",
      
      galleryTag: "Moments & Lifestyle",
      galleryTitle: "Life Behind The <span>Code</span>",
      gallerySubtitle: "Snapshots from tech hackathons, work sessions, workspace setups, and memorable life journeys.",
      
      techTag: "Skills & Arsenal",
      techTitle: "Tech Stack & <span>Matrix</span>",
      techSubtitle: "A curated list of frameworks, state management tools, and libraries I use daily.",
      
      projectsTag: "Portfolio Showcase",
      projectsTitle: "Featured <span>Projects</span>",
      projectsSubtitle: "A glimpse of battle-tested mobile and cross-platform apps deployed to production.",
      
      testimonialsTag: "Client Endorsements",
      testimonialsTitle: "What People <span>Say</span>",
      testimonialsSubtitle: "Recommendations and feedback from managers, colleagues, and collaborators.",
      
      faqTag: "Got Questions?",
      faqTitle: "Frequently Asked <span>Questions</span>",
      faqSubtitle: "Quick answers about workflow, collaboration, technology choices, and timelines.",
      
      contactTag: "Let's Collaborate",
      contactTitle: "Ready to Build Something <span>Extraordinary?</span>",
      contactSubtitle: "Send a direct message or choose from tailored project packages."
    },
    experience: [
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
      }
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
  },

  bn: {
    nav: {
      about: "পরিচিতি",
      experience: "অভিজ্ঞতা",
      services: "সেবাসমূহ",
      highlights: "হাইলাইটস",
      tech: "টেক স্ট্যাক",
      github: "গিটহাব",
      projects: "প্রজেক্টস",
      reviews: "মতামত",
      faq: "প্রশ্নোত্তর",
      contact: "যোগাযোগ"
    },
    profile: {
      name: "আবদুল্লাহ হোসাইন",
      initials: "AH",
      title: "ফুল স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার | মোবাইল অ্যাপ ডেভেলপার",
      subtitle: "ফুল স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার | মোবাইল অ্যাপ ডেভেলপার | টেক উৎসাহী",
      availability: "নতুন প্রজেক্ট এবং ফুল-টাইম রোলের জন্য উন্মুক্ত",
      statusPill: "মোবাইল অ্যাপ্লিকেশন ডেভেলপার হিসেবে সক্রিয়ভাবে কর্মরত",
      heroHeadline: 'ফুল স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার ও <span class="highlight">মোবাইল অ্যাপ ডেভেলপার</span>',
      heroSubheadline: "৪+ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন মোবাইল অ্যাপ ইঞ্জিনিয়ার। ক্লিন আর্কিটেকচার, রিয়েল-টাইম সিস্টেম এবং স্কেলেবল API ইন্টিগ্রেশনের মাধ্যমে প্রোডাকশন-রেডি ফ্ল্যাটার অ্যাপ নির্মাণে পারদর্শী।",
      viewPackagesCta: "প্যাকেজ দেখুন",
      viewProjectsCta: "প্রজেক্ট দেখুন",
      badgeExp: "৪+ বছর অভিজ্ঞতা",
      tagline: "৪+ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন মোবাইল অ্যাপ ইঞ্জিনিয়ার। ক্লিন আর্কিটেকচার ও রিয়েল-টাইম সিস্টেমে দক্ষ।",
      bio: "৪+ বছরের অভিজ্ঞতাসম্পন্ন মোবাইল অ্যাপ্লিকেশন ইঞ্জিনিয়ার। ক্লিন আর্কিটেকচার, রিয়েল-টাইম মেসেজিং সিস্টেম ও পিক্সেল-পারফেক্ট মোবাইল UI নির্মাণে পারদর্শী। বর্তমানে রাজিনসফট লিমিটেডে মিড-লেভেল ফ্ল্যাটার ডেভেলপার হিসেবে কর্মরত।",
      location: "ঢাকা, বাংলাদেশ",
      stats: [
        { label: "বছরের অভিজ্ঞতা", value: 4, suffix: "+" },
        { label: "সম্পন্ন প্রজেক্ট", value: 40, suffix: "+" },
        { label: "সন্তুষ্ট ক্লায়েন্ট", value: 80, suffix: "+" },
        { label: "অবস্থান", value: "ঢাকা, বিডি", suffix: "" }
      ],
      contact: {
        email: "iamabdullahhossain@gmail.com",
        phone: "+8801624563436",
        whatsapp: "+8801624563436",
        linkedin: "https://linkedin.com/in/iamabdullahhossain",
        github: "https://github.com/iamabdullahhossain"
      }
    },
    sections: {
      aboutTag: "মূল ভিত্তি ও দক্ষতা",
      aboutTitle: "আর্কিটেকচারাল <span>মূল স্তম্ভসমূহ</span>",
      aboutSubtitle: "ক্লিন কোড নীতি, রিয়েল-টাইম সিঙ্ক এবং নির্ভরযোগ্য ভিত্তির মাধ্যমে উচ্চ-কার্যক্ষম অ্যাপ্লিকেশন নির্মাণ।",
      
      expTag: "ক্যারিয়ার জার্নি",
      expTitle: "কর্মক্ষেত্রের <span>অভিজ্ঞতা</span>",
      expSubtitle: "৪+ বছর ধরে মোবাইল আর্কিটেকচার ও ক্রস-প্ল্যাটফর্ম প্রোডাক্ট ডেলিভারিতে নেতৃত্ব দিচ্ছি।",
      
      servicesTag: "আমি যা প্রদান করি",
      servicesTitle: "সেবা ও <span>সলিউশনসমূহ</span>",
      servicesSubtitle: "পরিকল্পনা ও ডিজাইন থেকে শুরু করে অ্যাপ স্টোরে প্রোডাকশন ডিপ্লয়মেন্ট পর্যন্ত সম্পূর্ণ সেবা।",
      
      galleryTag: "মুহূর্ত ও লাইফস্টাইল",
      galleryTitle: "কোডিংয়ের পেছনের <span>জীবন</span>",
      gallerySubtitle: "টেক হ্যাকাথন, টিমওয়ার্ক, ওয়ার্কস্পেস সেটআপ এবং স্মরণীয় মুহূর্তের কিছু ঝলক।",
      
      techTag: "দক্ষতা ও টেকনোলজি",
      techTitle: "টেক স্ট্যাক ও <span>ম্যাট্রিক্স</span>",
      techSubtitle: "দৈনন্দিন কাজে ব্যবহৃত ফ্রেমওয়ার্ক, স্টেট ম্যানেজমেন্ট টুলস ও লাইব্রেরিসমূহ।",
      
      projectsTag: "পোর্টফোলিও শোকেস",
      projectsTitle: "বাস্তবায়িত <span>প্রজেক্টসমূহ</span>",
      projectsSubtitle: "সফলভাবে প্রোডাকশন এবং লাইভ অ্যাপ স্টোরে ডিপ্লয়কৃত মোবাইল অ্যাপস।",
      
      testimonialsTag: "ক্লায়েন্ট মতামত",
      testimonialsTitle: "সহকর্মী ও ক্লায়েন্টদের <span>মূল্যায়ন</span>",
      testimonialsSubtitle: "কোম্পানি টিম লিড ও ক্লায়েন্টদের আন্তরিক মূল্যায়ন ও সুপারিশ।",
      
      faqTag: "সাধারণ প্রশ্নাবলী",
      faqTitle: "সচরাচর জিজ্ঞাসিত <span>প্রশ্নোত্তর</span>",
      faqSubtitle: "কাজের ধারা, প্রযুক্তিগত পছন্দ ও কোলাবোরেশন সম্পর্কে দ্রুত উত্তর।",
      
      contactTag: "একসাথে কাজ শুরু করুন",
      contactTitle: "আপনার নতুন প্রজেক্ট <span>শুরু করতে চান?</span>",
      contactSubtitle: "সরাসরি ইনবক্সে মেসেজ পাঠান অথবা আপনার পছন্দসই প্যাকেজ বেছে নিন।"
    },
    experience: [
      {
        role: "ফ্ল্যাটার ডেভেলপার (মিড-লেভেল)",
        company: "রাজিনসফট লিমিটেড (RazinSoft)",
        duration: "২০২৫ - বর্তমান",
        type: "ফুল-টাইম",
        isCurrent: true,
        description: "রিভারপড (Riverpod) ও ক্লিন আর্কিটেকচারের মাধ্যমে এন্টারপ্রাইজ ফ্ল্যাটার অ্যাপ তৈরি। রিয়েল-টাইম চ্যাট, গুগল ম্যাপস জিওলোকেশন ও অফলাইন ডাটা সিঙ্ক পরিচালনা।"
      },
      {
        role: "ফ্ল্যাটার ডেভেলপার",
        company: "ছুটি বাংলাদেশ প্রাঃ লিঃ (Chuty BD)",
        duration: "২০২৩ - ২০২৫",
        type: "ফুল-টাইম",
        isCurrent: false,
        description: "ক্লিন আর্কিটেকচার ও অফলাইন-ফার্স্ট ডাটা সিঙ্ক ব্যবহার করে স্কেলেবল ফ্ল্যাটার অ্যাপস ডেভেলপমেন্ট। জটিল RESTful API, পুশ নোটিফিকেশন ও পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।"
      },
      {
        role: "অ্যান্ড্রয়েড ডেভেলপার",
        company: "অথেন্টিক ফোর টেকনোলজি",
        duration: "২০২১ - ২০২২",
        type: "ফুল-টাইম",
        isCurrent: false,
        description: "জাভা ও কোটলিনের মাধ্যমে নেটিভ অ্যান্ড্রয়েড মোবাইল অ্যাপ্লিকেশন নির্মাণ। UI অপটিমাইজেশন ও স্মুথ ব্যাকগ্রাউন্ড সার্ভিস প্রসেসিং নিশ্চিতকরণ।"
      }
    ],
    pillars: [
      {
        icon: "smartphone",
        title: "ফ্ল্যাটার ও মোবাইল অ্যাপস",
        description: "পিক্সেল-পারফেক্ট UI এবং ক্লিন আর্কিটেকচার সহ হাই-পারফরম্যান্স ক্রস-প্ল্যাটফর্ম ফ্ল্যাটার অ্যাপ্লিকেশন।"
      },
      {
        icon: "code",
        title: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং",
        description: "SOLID প্রিন্সিপাল ও ডিজাইন প্যাটার্ন মেনে সহজে মেইনটেইনেবল এবং ক্লিন কোড লেখা।"
      },
      {
        icon: "zap",
        title: "রিয়েল-টাইম সিস্টেম",
        description: "রিয়েল-টাইম লাইভ চ্যাট, Pusher ইন্টিগ্রেশন, ওয়েবসকেট ও ইনস্ট্যান্ট পুশ নোটিফিকেশন সিস্টেম।"
      },
      {
        icon: "layers",
        title: "ক্লিন আর্কিটেকচার",
        description: "Riverpod, GetX, Provider, MVC ও MVVM প্যাটার্ন নির্ভর ফিচার-ফার্স্ট আর্কিটেকচার।"
      },
      {
        icon: "database",
        title: "অফলাইন ও ব্যাকএন্ড ইন্টিগ্রেশন",
        description: "Hive ডাটাবেসের সাহায্যে অফলাইন-ফার্স্ট অ্যাপ ডিজাইন এবং শক্তিশালী RESTful API হ্যান্ডলিং।"
      },
      {
        icon: "map-pin",
        title: "ম্যাপস ও ডিভাইস ফিচার",
        description: "গুগল ম্যাপস নেভিগেশন, ইন-অ্যাপ পারচেস ও ডিভাইস ক্যামেরা/মিডিয়া ইন্টিগ্রেশন।"
      },
      {
        icon: "bot",
        title: "AI ইন্টিগ্রেশন",
        description: "স্মার্ট এআই অ্যাসিস্ট্যান্ট, OpenAI/Gemini API এবং ইন্টেলিজেন্ট ফিচার মোবাইল অ্যাপে যুক্ত করা।"
      }
    ],
    services: [
      {
        id: "flutter",
        icon: "smartphone",
        title: "ফ্ল্যাটার মোবাইল অ্যাপ ইঞ্জিনিয়ারিং",
        description: "উচ্চ পারফরম্যান্স, 60fps অ্যানিমেশন ও ক্লিন আর্কিটেকচার সহ ক্রস-প্ল্যাটফর্ম অ্যান্ড্রয়েড ও আইওএস অ্যাপ তৈরি।",
        features: ["ফ্ল্যাটার ও ডার্ট এক্সপার্টাইজ", "Riverpod, GetX ও Provider", "ফিচার-ফার্স্ট ক্লিন আর্কিটেকচার", "ফিগমা টু পিক্সেল-পারফেক্ট UI"]
      },
      {
        id: "realtime",
        icon: "zap",
        title: "রিয়েল-টাইম চ্যাট ও নোটিফিকেশন",
        description: "ফায়ারবেস পুশ নোটিফিকেশন ও দ্রুতগতির লাইভ রিয়েল-টাইম চ্যাট সিস্টেম বাস্তবায়ন।",
        features: ["Firebase FCM পুশ নোটিফিকেশন", "Pusher রিয়েল-টাইম চ্যাট ইঞ্জিন", "ওয়েবসকেট লাইভ ডাটা কানেকশন", "ব্যাকগ্রাউন্ড ডাটা সিঙ্ক"]
      },
      {
        id: "backend",
        icon: "server",
        title: "ব্যাকএন্ড ও API ইন্টিগ্রেশন",
        description: "মোবাইল অ্যাপের সাথে ব্যাকএন্ড সার্ভার ও ডাটাবেসের নির্ভরযোগ্য এবং দ্রুত কানেকশন।",
        features: ["Dio ও REST API ইন্টিগ্রেশন", "PHP, Laravel ও MySQL ব্যাকএন্ড", "Hive অফলাইন লোকাল ডাটাবেস", "অফলাইন-ফার্স্ট ডাটা সিঙ্ক্রোনাইজেশন"]
      },
      {
        id: "location",
        icon: "map-pin",
        title: "ম্যাপস ও মনেটাইজেশন ফিচার",
        description: "গুগল ম্যাপস লাইভ লোকেশন, জিওকোডিং এবং অ্যাপ মনেটাইজেশন/সাবস্ক্রিপশন সিস্টেম।",
        features: ["Google Maps ও জিওলোকেশন", "লোকেশন রাউটিং ও সার্চ", "ইন-অ্যাপ পারচেস ও সাবস্ক্রিপশন", "ক্যামেরা ও ডিভাইস পারমিশন"]
      }
    ],
    techStack: [
      {
        category: "কোর মোবাইল ডেভেলপমেন্ট",
        skills: [
          { name: "Flutter Development", level: "Expert", icon: "smartphone" },
          { name: "Dart Programming", level: "Expert", icon: "code" },
          { name: "Android Development", level: "Advanced", icon: "smartphone" },
          { name: "OOP & Clean Code", level: "Expert", icon: "layers" }
        ]
      },
      {
        category: "স্টেট ম্যানেজমেন্ট ও আর্কিটেকচার",
        skills: [
          { name: "Riverpod", level: "Expert", icon: "git-branch" },
          { name: "GetX", level: "Expert", icon: "zap" },
          { name: "Provider", level: "Advanced", icon: "box" },
          { name: "Go Router", level: "Advanced", icon: "compass" },
          { name: "Clean Architecture", level: "Expert", icon: "layers" },
          { name: "MVC & MVVM Patterns", level: "Expert", icon: "cpu" }
        ]
      },
      {
        category: "লোকাল স্টোরেজ ও ব্যাকএন্ড",
        skills: [
          { name: "Hive (Local DB)", level: "Expert", icon: "database" },
          { name: "Offline-First Design", level: "Expert", icon: "hard-drive" },
          { name: "PHP & Laravel", level: "Intermediate", icon: "server" },
          { name: "MySQL Database", level: "Intermediate", icon: "database" },
          { name: "REST API & Dio", level: "Expert", icon: "send" }
        ]
      },
      {
        category: "সার্ভিস ও ইন্টিগ্রেশন",
        skills: [
          { name: "Firebase Auth & Realtime", level: "Expert", icon: "shield-check" },
          { name: "FCM Push Notifications", level: "Expert", icon: "bell" },
          { name: "Real-time Chat & Pusher", level: "Expert", icon: "message-square" },
          { name: "Google Maps & Geolocation", level: "Expert", icon: "map-pin" },
          { name: "In-App Purchases", level: "Advanced", icon: "credit-card" },
          { name: "Git, Postman, Android Studio", level: "Expert", icon: "terminal" }
        ]
      }
    ],
    projects: [
      {
        id: "supraskills-tm",
        title: "Supraskills TM",
        tagline: "প্রোডাক্টিভিটি ও টাস্ক ম্যানেজমেন্ট প্ল্যাটফর্ম",
        category: "Productivity",
        role: "ফ্ল্যাটার ডেভেলপার",
        impact: "পুশ নোটিফিকেশন, অফলাইন সাপোর্ট ও টাইমলাইন শিডিউলিং সমন্বিত প্রোডাক্টিভিটি মোবাইল অ্যাপ।",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
        tags: ["Flutter", "Riverpod", "Hive DB", "Firebase FCM", "Localization"],
        overview: "Supraskills TM একটি পূর্ণাঙ্গ টাস্ক ম্যানেজমেন্ট প্ল্যাটফর্ম। রিয়েল-টাইম পুশ নোটিফিকেশন, টাইমলাইন শিডিউলিং ও মাল্টিপল ল্যাঙ্গুয়েজ সাপোর্ট সমৃদ্ধ।",
        features: [
          "ফায়ারবেস পুশ নোটিফিকেশন ও ইন্টারনাল চ্যাট",
          "রিভারপড স্টেট ম্যানেজমেন্ট ও Hive অফলাইন সাপোর্ট",
          "ইন্টারঅ্যাক্টিভ টাইমলাইন শিডিউলিং ও মিডিয়া আপলোড",
          "বহুভাষিক (Multi-language) লোকালাইজেশন"
        ],
        storeLinks: {
          appStore: "https://apps.apple.com/us/app/supraskills-tm/id6757388694"
        }
      },
      {
        id: "ready-classify",
        title: "Ready Classify",
        tagline: "রিয়েল-টাইম ক্লাসিফায়েড মার্কেটপ্লেস",
        category: "Marketplace",
        role: "ফ্ল্যাটার ডেভেলপার",
        impact: "সোশ্যাল লগইন, রিয়েল-টাইম লাইভ চ্যাট ও গুগল ম্যাপস সমৃদ্ধ মোবাইল মার্কেটপ্লেস।",
        image: "https://images.unsplash.com/photo-1556742049-0a674d89a4ee?auto=format&fit=crop&q=80&w=800",
        tags: ["Flutter", "Google Maps", "Pusher", "Riverpod", "Dio API"],
        overview: "লোকাল পণ্য কেনাবেচার জন্য উচ্চ-পারফরম্যান্স মোবাইল মার্কেটপ্লেস। গুগল ম্যাপস লোকেশন সার্চ এবং Pusher ইনস্ট্যান্ট চ্যাট সমৃদ্ধ।",
        features: [
          "ফায়ারবেস অথেন্টিকেশন ও গুগল/ফেসবুক সোশ্যাল সাইন-ইন",
          "গুগল ম্যাপস ও নিকটস্থ পণ্য খোঁজার জিওলোকেশন",
          "Dio ক্লায়েন্ট ও Pusher রিয়েল-টাইম আপডেট",
          "ক্যামেরা ও ডিভাইস পারমিশন ম্যানেজমেন্ট"
        ],
        storeLinks: {
          playStore: "https://play.google.com/store/apps/details?id=com.readyclassify"
        }
      },
      {
        id: "bridge-lms",
        title: "Bridge LMS",
        tagline: "এডটেক লার্নিং ম্যানেজমেন্ট প্ল্যাটফর্ম",
        category: "EdTech",
        role: "ফ্ল্যাটার ডেভেলপার",
        impact: "কোর্স ট্র্যাকিং, অ্যাসাইনমেন্ট সাবমিশন ও দ্রুতগতির ব্যাকএন্ড সমন্বিত মোবাইল LMS।",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        tags: ["Flutter", "Dart", "REST API", "State Management"],
        overview: "শিক্ষক ও শিক্ষার্থীদের নিরবচ্ছিন্নভাবে সংযুক্ত করতে তৈরি। কোর্স প্রগ্রেস ট্র্যাক, কুইজ ও অ্যাসাইনমেন্ট সাবমিশন ফিচার সমৃদ্ধ।",
        features: [
          "ইন্টারঅ্যাক্টিভ মডিউল সহ কোর্স প্রগ্রেস ট্র্যাকিং",
          "ডিজিটাল অ্যাসাইনমেন্ট সাবমিশন ও গ্রেডিং সিস্টেম",
          "অপটিমাইজড ডাটা লোডিং সহ ব্যাকএন্ড API",
          "ক্লিন ফিচার-ফার্স্ট মোবাইল আর্কিটেকচার"
        ],
        storeLinks: {
          appStore: "https://apps.apple.com/us/app/bridge-%D8%AC%D8%B3%D8%B1-%D8%B9%D8%A0%D9%88%D8%B1%D9%83/id6751279145"
        }
      },
      {
        id: "chuty-rooms",
        title: "Chuty Rooms",
        tagline: "হোটেল ও রুম বুকিং প্ল্যাটফর্ম",
        category: "Hospitality",
        role: "ফ্ল্যাটার ডেভেলপার",
        impact: "রিয়েল-টাইম রুম বুকিং, গুগল ম্যাপস নেভিগেশন ও কাস্টমার রিভিউ সমৃদ্ধ প্ল্যাটফর্ম।",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
        tags: ["Flutter", "Google Maps", "Hotel Booking", "Reviews", "Real-time DB"],
        overview: "ভ্রমণকারীদের হোটেল খোঁজা ও দ্রুত বুকিংয়ের জন্য তৈরি অ্যাপ। ইন্টারেক্টিভ ম্যাপ সার্চ, রিয়েল-টাইম রুম ক্যালেন্ডার ও ভেরিফাইড রিভিউ যুক্ত।",
        features: [
          "হোটেল সার্চ ও রাউটিংয়ের জন্য গুগল ম্যাপস ইন্টিগ্রেশন",
          "রিয়েল-টাইম রুম অ্যাভেইলেবিলিটি ক্যালেন্ডার ও বুকিং",
          "যাচাইকৃত কাস্টমার রিভিউ ও স্টার রেটিং সিস্টেম",
          "রেসপনসিভ ও পিক্সেল-পারফেক্ট মোবাইল UI"
        ],
        storeLinks: {
          playStore: "https://play.google.com/store/apps/details?id=com.chutyrooms.crapp"
        }
      }
    ],
    testimonials: [
      {
        quote: "আমি ছুটিরুমসে আবদুল্লাহ হোসাইনের সাথে কাজ করতে পেরে আনন্দিত। আবদুল্লাহ যেকোনো জটিল সমস্যার দ্রুত ও নিখুঁত সমাধান করেন। অসাধারণ কোডিং দক্ষতার পাশাপাশি তিনি অত্যন্ত সহযোগিতাপূর্ণ একজন টিম প্লেয়ার।",
        client: "আনিসুর রহমান আকিব (Anisur Rahman Akib)",
        role: "সফটওয়্যার কোয়ালিটি অ্যাসুরেন্স · RILO IT & Software Ltd.",
        avatar: "https://media.licdn.com/dms/image/v2/D5603AQGwjK8UTgTrBg/profile-displayphoto-crop_800_800/B56Z9K9IapG4AI-/0/1783668967724?e=1787788800&v=beta&t=wLPIIppK6LdAbEzbcyr7sUWzuD1o7txZFH7vac__QDI"
      },
      {
        quote: "আমি নিঃসন্দেহে বলতে পারি তিনি ফ্ল্যাটার ও অ্যান্ড্রয়েড ডেভেলপমেন্টে দারুণ দক্ষ। যেকোনো কঠিন চ্যালেঞ্জ দ্রুত সমাধান করার দক্ষতা তাকে যেকোনো ডেভেলপমেন্ট টিমের জন্য অপরিহার্য সম্পদ করে তুলেছে।",
        client: "জয়ন্ত দত্ত (Joyanta Dutta)",
        role: "সিনিয়র ব্যাকএন্ড ডেভেলপার · Chuty Bangladesh Pvt Ltd",
        avatar: "https://media.licdn.com/dms/image/v2/D5603AQHLOQVzni8KZA/profile-displayphoto-crop_800_800/B56Z0T5NpLKAAI-/0/1774155262595?e=1787788800&v=beta&t=lB-HuRtzTWUqzKPWsGwiOVvJVDXDw4dIWrzyNPkjh-w"
      },
      {
        quote: "আবদুল্লাহ অত্যন্ত পরিচ্ছন্ন কোড লেখেন এবং সবসময় নতুন প্রযুক্তি শিখতে আগ্রহী। তিনি একজন প্রঅ্যাক্টিভ সমস্যা সমাধানকারী ও আন্তরিক টিম মেম্বার।",
        client: "সীমান্ত মুৎসুদ্দী (Shimanta Mutsuddi)",
        role: "সিনিয়র মোবাইল অ্যাপ ডেভেলপার · Softrobotics Bangladesh Limited",
        avatar: "https://media.licdn.com/dms/image/v2/D5635AQG57VC5dFN7Fg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1695279924069?e=1787983200&v=beta&t=uwmjcKFBLyWIS3d1N_XIJxMWhCgvjcthxMeXOG60BP8"
      },
      {
        quote: "একসাথে কাজ করার সময় তাকে সবসময় নিবেদিত ও দায়িত্বশীল পেয়েছি। তিনি কাজের মানের ব্যাপারে অবিচল থাকেন এবং যোগাযোগে অত্যন্ত স্পষ্টভাষী।",
        client: "মো. তারিক বিন আজিজ (Md Tarik Bin Aziz)",
        role: "সিনিয়র ফ্ল্যাটার ডেভেলপার · Razinsoft LTD",
        avatar: "https://media.licdn.com/dms/image/v2/D5603AQGn4RRD9a-EYA/profile-displayphoto-crop_800_800/B56ZlYErouKIAI-/0/1758119249169?e=1787788800&v=beta&t=EpclHBUv4O4ApU3ReyKDGpYQkiDzEDSOzrXcaK90_6Q"
      }
    ],
    faqs: [
      {
        question: "আপনি কী ধরণের প্রজেক্টে বিশেষজ্ঞ?",
        answer: "আমি উচ্চ-পারফরম্যান্স ফ্ল্যাটার মোবাইল অ্যাপ ডেভেলপমেন্ট, ক্রস-প্ল্যাটফর্ম অ্যান্ড্রয়েড ও আইওএস অ্যাপস, রিয়েল-টাইম লাইভ চ্যাট সিস্টেম, অফলাইন-ফার্স্ট অ্যাপ্লিকেশন, গুগল ম্যাপস ইন্টিগ্রেশন ও ব্যাকএন্ড RESTful API সংযোগে বিশেষজ্ঞ।"
      },
      {
        question: "আপনি কোন কোন স্টেট ম্যানেজমেন্ট ব্যবহার করেন?",
        answer: "আমি Riverpod, GetX, এবং Provider-এ পারদর্শী। প্রজেক্টের সাইজ ও প্রয়োজনীয়তা অনুযায়ী সর্বোত্তম আর্কিটেকচার (MVC, MVVM, বা Feature-First Clean Architecture) বেছে নেই।"
      },
      {
        question: "আপনি কি অফলাইন-ফার্স্ট মোবাইল অ্যাপ্লিকেশন তৈরি করতে পারেন?",
        answer: "হ্যাঁ, আমি Hive লোকাল ডাটাবেস ও স্মার্ট ক্যাশিং স্ট্র্যাটেজি ব্যবহার করে শক্তিশালী অফলাইন-ফার্স্ট অ্যাপ তৈরি করি যা ইন্টারনেট ফিরে এলে ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে ডাটা সিঙ্ক করে।"
      },
      {
        question: "আপনার কাজের অভিজ্ঞতা কেমন?",
        answer: "ফ্ল্যাটার এবং অ্যান্ড্রয়েড ডেভেলপার হিসেবে আমার ৪+ বছরের বাস্তব অভিজ্ঞতা রয়েছে। আমি রাজিনসফট লিমিটেড (মিড-লেভেল ফ্ল্যাটার ডেভেলপার), ছুটি বাংলাদেশ এবং অথেন্টিক ফোর টেকনোলজিতে সফলভাবে কাজ করেছি।"
      },
      {
        question: "আপনার সাথে কীভাবে যোগাযোগ বা প্রজেক্ট শুরু করতে পারি?",
        answer: "আপনি সরাসরি ফোন/হোয়াটসঅ্যাপ (+8801624563436), ইমেইল (iamabdullahhossain@gmail.com) অথবা ওয়েবসাইটের কন্টাক্ট ফর্মের মাধ্যমে যোগাযোগ করতে পারেন।"
      }
    ]
  }
};

// Current active language store (Defaults to 'en' or saved choice)
let currentLanguage = localStorage.getItem('portfolio_language') || 'en';

// Getter helper for active dataset
function getPortfolioData() {
  return portfolioTranslations[currentLanguage] || portfolioTranslations.en;
}

// Backward compatibility proxy
const portfolioData = new Proxy({}, {
  get: function(target, prop) {
    const activeData = getPortfolioData();
    return activeData[prop];
  }
});
