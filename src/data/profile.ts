export const profile = {
  name: "Muneeb Faruqi",
  title:
    "Senior PHP Laravel Developer & Backend Architect | Engineering Scalable Fintech & Telephony Ecosystems",
  location: "Lahore, PK",
  email: "muneebfaruqi6@gmail.com",
  phone: "+92 314 4327451",
  languages: ["English (Fluent)", "Urdu (Native Speaker)"],
  education: "BS Computer Sciences \u2013 University of South Asia (2012\u20132016)",
  bio: "Senior PHP/Laravel backend engineer with 9+ years of professional experience specializing in building scalable, service-based web applications with clean, maintainable code and high-performance MySQL databases. Deep expertise encompasses custom call-center solutions (VICIdial/Asterisk PBX) and complex third-party API configurations connecting production call data directly to leading enterprise CRMs.",
  interests: ["Photography", "Traveling", "Science & Tech Articles"],
  asyncWorkflow:
    "Available for global contract engagements from Lahore, Pakistan. Structured communication via Slack, ClickUp/Jira, and Loom with dependable overlap across international time zones.",
  resumeUrl: "/resume.pdf",
};

export const impactMetrics = [
  {
    value: "10000+",
    label: "Daily Transactions",
    description:
      "Scalable FinTech infrastructure built for global remittance platforms handling strict compliance and wallet engines.",
  },
  {
    value: "+75%",
    label: "Customer Engagement",
    description:
      "Achieved by engineering customized telephony event-triggers that automate immediate SMS/Email workflows.",
  },
  {
    value: "90%",
    label: "Tech Debt Reduction",
    description:
      "Accomplished through systematic refactoring of monolithic legacy CorePHP/CodeIgniter systems into modular Laravel codebases.",
  },
  {
    value: "80%",
    label: "Test Coverage",
    description:
      "Realized by leading strict unit and integration testing pipelines to neutralize defects before production deployments.",
  },
  {
    value: "+50%",
    label: "Team Productivity",
    description:
      "Achieved through technical mentorship, code reviews, and structured Agile/Scrum sprint frameworks.",
  },
];

export const toolkit = [
  {
    category: "Languages & Frameworks",
    items: [
      "PHP 8.x",
      "CorePHP",
      "Laravel 11/12",
      "CodeIgniter",
      "JavaScript",
      "jQuery",
    ],
  },
  {
    category: "Databases & Architecture",
    items: [
      "MySQL Optimization",
      "Advanced Indexing",
      "Query Caching",
      "Schema Refinement",
      "REST API Design",
      "SOLID Principles",
      "Service-Based Architecture",
    ],
  },
  {
    category: "Telephony & CRM Integrations",
    items: [
      "VICIdial Customization",
      "Asterisk PBX",
      "GoHighLevel (GHL)",
      "Zoho CRM",
      "HubSpot CRM",
      "Custom Communication Reports",
    ],
  },
  {
    category: "Automation & DevOps",
    items: [
      "Linux Cron Jobs",
      "Laravel Queues",
      "Redis Caching",
      "Git Version Control",
      "CI/CD Pipelines",
      "Repository Mirroring Workflows",
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      "OAuth2",
      "JWT Authentication",
      "Data Encryption",
      "KYC/AML Workflows",
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  achievement?: string;
}

export const experience: Experience[] = [
  {
    role: "Team Lead (Laravel)",
    company: "ACE Money Transfer",
    location: "Lahore, PK",
    period: "March 2024 \u2013 Present",
    description: [
      "Lead a dedicated engineering squad, enforcing strict coding standards, modern design patterns, and architectural best practices.",
      "Oversee the complete lifecycle\u2014design, development, and delivery\u2014of complex, large-scale Laravel ecosystems.",
      "Coordinate with cross-functional product, mobile, and QA teams using Agile/Scrum methodologies to deliver high-performance software.",
      "Provide hands-on technical mentorship, lifting junior developer velocity and delivery throughput by 50%.",
    ],
    achievement:
      "Architected and deployed a highly secure, scalable backend framework processing 10000+ daily financial transactions, configuring custom wallets and resilient transaction engines.",
  },
  {
    role: "Senior Laravel Developer",
    company: "Alfain Tech",
    location: "Lahore, PK",
    period: "Jan 2024 \u2013 Feb 2024",
    description: [
      "Built and sustained mission-critical backend features utilizing PHP and modern Laravel.",
      "Conducted system performance optimization and streamlined complex API structures under strict project deadlines.",
    ],
  },
  {
    role: "Senior Laravel Developer",
    company: "Novelty Soft",
    location: "Lahore, PK",
    period: "March 2023 \u2013 Dec 2023",
    description: [
      "Spearheaded robust backend architectures leveraging PHP frameworks (Laravel, CodeIgniter) and designed clean REST APIs for enterprise scale.",
    ],
    achievement:
      "Delivered feature-rich platforms including the 'VoyceAdmins' engine and the 'tepaas SMS Portal'.",
  },
  {
    role: "Senior PHP/Laravel Developer",
    company: "Primo Dialler",
    location: "Lahore, PK",
    period: "July 2020 \u2013 March 2023",
    description: [
      "Directed custom development lifecycles for core software suites using native PHP, Laravel, and optimized MySQL databases.",
      "Enhanced end-user application interactions by seamlessly integrating frontend JavaScript and jQuery components.",
    ],
    achievement:
      "Successfully architected and deployed Vicidial Dialler Development, corporate Staff Portals, and complex Report Builder frameworks while directly managing enterprise client feature pipelines.",
  },
  {
    role: "PHP/Laravel Developer",
    company: "LEAD Concept",
    location: "Lahore, PK",
    period: "Aug 2018 \u2013 June 2020",
    description: [
      "Managed engineering scopes for custom product tiers utilizing PHP, Laravel, CodeIgniter, JavaScript, jQuery, and MySQL.",
    ],
    achievement:
      "Core shipments: Vital Blinks (post-market surveillance automation), LNQ (high-throughput REST APIs for service distribution), LIQUID 8 (optimized data storage consuming Google REST APIs).",
  },
  {
    role: "PHP/Laravel Developer",
    company: "Programming Studio",
    location: "Gujranwala, PK",
    period: "June 2016 \u2013 June 2018",
    description: [
      "Founded and operated an agile development studio catering custom PHP web solutions.",
      "Consulted directly with clients to translate business objectives into production software within strict resource constraints.",
    ],
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-architecture-global-remittance",
    title: "FinTech Architecture & Global Remittance",
    subtitle: "ACE Money Transfer Backend",
    summary:
      "Engineering high-volume transactional engines for a global remittance platform processing 10000+ daily financial transactions.",
    problem:
      "ACE Money Transfer required a scalable, highly secure backend framework capable of handling hundreds of daily cross-border remittance transactions while maintaining strict compliance with KYC/AML regulations. The legacy system suffered from latency bottlenecks under peak loads and lacked a unified wallet engine capable of managing multi-currency settlement across diverse corridors. Security audits demanded OAuth2 and JWT-based authentication with full data encryption at rest and in transit, requiring a complete architectural overhaul of the transaction processing pipeline.",
    solution:
      "Architected a modular Laravel-based microservices ecosystem with dedicated wallet engines, transaction orchestrators, and compliance validation layers. Integrated multiple payment gateways including Checkout, Nuvei, JazzCash Wallet, Easy Paisa Wallet, Bill Payment Solutions, and PayCross to support diverse remittance corridors. Implemented OAuth2 and JWT token-based authentication for all API endpoints with role-based access controls. Deployed data encryption protocols (AES-256 at rest, TLS 1.3 in transit) across the entire data flow. Performance-tuned MySQL queries through advanced indexing strategies, query caching with Redis, and schema normalization that dramatically reduced query execution time. Built a robust queuing system with Laravel Horizon to handle asynchronous transaction processing and real-time balance reconciliation.",
    technologies: [
      "Laravel 11",
      "MySQL 8",
      "Redis",
      "OAuth2",
      "JWT",
      "AES-256 Encryption",
      "Laravel Horizon",
      "Docker",
      "REST API",
      "Checkout",
      "Nuvei",
      "JazzCash Wallet",
      "Easy Paisa Wallet",
      "Bill Payment Solutions",
      "PayCross",
    ],
    results: [
      "Processes 10000+ daily financial transactions with zero critical incidents",
      "Transaction latency reduced by 60% through query optimization",
      "Full KYC/AML compliance achieved with automated validation pipelines",
      "Multi-currency wallet engine supporting 15+ global currencies",
      "Integrated 6 payment gateways spanning local and international remittance corridors",
    ],
  },
  {
    slug: "telephony-automation-crm-sync",
    title: "Telephony Automation & CRM Synchronization",
    subtitle: "VICIdial & Asterisk Core",
    summary:
      "Customizing campaign dialer screens and orchestrating automated CRM synchronization through real-time telephony event triggers.",
    problem:
      "Call centers operating on VICIdial and Asterisk PBX needed a unified system that could automatically synchronize call data with leading enterprise CRMs including Zoho, HubSpot, and GoHighLevel. Manual data entry was causing significant overhead, human error, and delayed follow-ups. The existing outbound/inbound campaign logic lacked the flexibility to support complex dialing strategies, and there was no mechanism to trigger automated SMS or email communications based on specific call outcomes (answered, voicemail, busy, failed).",
    solution:
      "Developed custom VICIdial screen pop-ups and altered core inbound/outbound campaign execution logic to capture granular call event data in real time. Designed Linux cron job schedulers and Redis-backed worker queues that consumed Asterisk AMI (Manager Interface) events and pushed structured payloads to CRM webhook endpoints. Implemented automated SMS and email workflow triggers that activated instantly upon call disposition events, reducing manual intervention. Built a comprehensive reporting layer that unified call logs with CRM activity streams for full visibility.",
    technologies: [
      "VICIdial",
      "Asterisk PBX",
      "PHP 8.x",
      "Redis",
      "Linux Cron",
      "Zoho API",
      "HubSpot API",
      "GoHighLevel API",
      "Webhooks",
      "Laravel Queues",
    ],
    results: [
      "+75% customer engagement through automated post-call SMS/Email workflows",
      "Eliminated manual CRM data entry for 100% of call dispositions",
      "Real-time synchronization reduced lead response time from hours to seconds",
      "Custom reporting dashboards provided actionable call analytics",
    ],
  },
  {
    slug: "enterprise-school-automation",
    title: "Enterprise School Automation Engines",
    subtitle: "Examination & Result Modules",
    summary:
      "Comprehensive multi-role examination engine featuring zero-fault validation, high-volume data imports, and secure parent portals.",
    problem:
      "A multi-campus school system operating from LKG through Class 8 required a digital examination and result management platform that could replace fragmented paper-based processes. The system needed to handle high-volume student data imports via CSV/Excel, support complex exam scheduling across multiple grades and sections, enforce anti-cheat validation mechanisms during online assessments, generate professional PDF result cards with school branding, and provide secure parent portals for result access. The existing manual process was prone to data entry errors, delays in result publication, and lacked transparency for parents.",
    solution:
      "Designed and deployed a modular Laravel-based school automation suite with distinct engines for examination management, result computation, and parent communication. Built a high-volume data import pipeline that processed CSV/Excel uploads with batch validation, duplicate detection, and rollback capabilities. Engineered the examination module with role-based access for administrators, teachers, and students, incorporating automated seating plans, timetable generation, and zero-fault anti-cheat validation through randomized question pools and time-bound submissions. Developed a PDF result builder using Laravel-based rendering pipelines that generated branded report cards with term-wise grade calculations. Implemented secure parent portals with unique authentication tokens for accessing results and attendance records.",
    technologies: [
      "Laravel",
      "MySQL",
      "PHP 8.x",
      "CSV/Excel Import Pipelines",
      "PDF Generation",
      "REST API",
      "Role-Based Access Control",
      "Redis Caching",
    ],
    results: [
      "Eliminated manual data entry errors through automated validation",
      "Result publication time reduced from weeks to under 24 hours",
      "Zero security incidents across thousands of parent portal sessions",
      "Scaled to support 10+ campuses with 15,000+ students",
    ],
  },
  {
    slug: "cross-platform-ecommerce-sync",
    title: "Cross-Platform E-Commerce Sync",
    subtitle: "Zarfoni.com Ecosystem",
    summary:
      "Scaling a production-ready organic brand web infrastructure with cross-platform mobile data feeds and automated inventory syncing.",
    problem:
      "Zarfoni.com, a growing organic brand, needed a unified e-commerce backend that could synchronize product listings, inventory levels, and order data across multiple sales channels including their web platform, mobile application, and marketplace integrations. The existing setup suffered from inventory discrepancies between channels, manual order fulfillment workflows, and inconsistent product data that led to overselling and customer dissatisfaction. Additionally, the platform required localized semantic SEO to capture organic traffic across regional markets with distinct search behaviors.",
    solution:
      "Architected a centralized Laravel-based e-commerce backend that served as the single source of truth for product data, inventory, and order management. Implemented automated inventory syncing across all channels using Redis pub/sub and queue workers that reconciled stock levels in real time. Built secure REST API feeds powering the cross-platform mobile application with consistent product data, pricing, and availability. Deployed a semantic SEO layer with localized meta-data, structured product schemas (JSON-LD), and automated XML sitemap generation for improved organic visibility. Integrated automated order fulfillment pipelines that pushed confirmed orders to the warehouse management system and triggered customer notification workflows.",
    technologies: [
      "Laravel",
      "MySQL",
      "Redis Pub/Sub",
      "REST API",
      "Mobile API Integration",
      "JSON-LD Structured Data",
      "Queue Workers",
      "Docker",
      "CI/CD",
    ],
    results: [
      "Eliminated inventory discrepancies across all sales channels",
      "Order fulfillment time reduced by 70% through automation",
      "Organic traffic increased through localized semantic SEO",
      "Mobile application data feeds achieved 99.9% uptime",
    ],
  },
];

export interface Service {
  slug: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "senior-backend-developer-for-startups",
    title: "Senior Backend Developer for Startups",
    description:
      "Seasoned backend architect available for early-stage and growth-stage startups needing robust, scalable PHP/Laravel foundations. From MVP architecture to production-grade systems, I deliver clean, maintainable codebases that scale with your user base.",
    features: [
      "End-to-end Laravel architecture and development",
      "Scalable REST API design and implementation",
      "Database schema design and MySQL optimization",
      "Third-party API integrations and middleware",
      "Code review and technical debt reduction",
    ],
  },
  {
    slug: "hire-remote-senior-laravel-developer",
    title: "Hire Remote Senior Laravel Developer",
    description:
      "Remote-first senior Laravel engineer with 9+ years of experience building enterprise-grade web applications. Available for full-time contract or dedicated project engagement with timezone overlap across US, UK, and EU business hours.",
    features: [
      "Full-time remote dedication with daily standups",
      "Slack/ClickUp/Jira/Loom communication workflow",
      "Strict adherence to Agile/Scrum methodologies",
      "Code documentation and knowledge transfer",
      "CI/CD pipeline setup and deployment automation",
    ],
  },
  {
    slug: "custom-e-commerce-backend-architect",
    title: "Custom E-Commerce Backend Architect",
    description:
      "Specialized in building custom e-commerce backends that go beyond off-the-shelf platforms. I design and implement tailored product engines, inventory management systems, and multi-channel synchronization layers for brands needing full control over their commerce infrastructure.",
    features: [
      "Custom product catalog and inventory engines",
      "Multi-channel sales platform synchronization",
      "Payment gateway integration and wallet systems",
      "Order management and fulfillment automation",
      "Semantic SEO and structured data optimization",
    ],
  },
  {
    slug: "laravel-mvp-developer-for-hire",
    title: "Laravel MVP Developer for Hire",
    description:
      "Rapid Laravel MVP development for startups needing to validate ideas and get to market fast. I translate product requirements into working software within weeks, establishing solid architectural foundations that avoid technical debt in later stages.",
    features: [
      "Rapid prototyping and MVP delivery (4-8 weeks)",
      "Core feature implementation with clean architecture",
      "Authentication, authorization, and user management",
      "Admin dashboards and reporting interfaces",
      "Scalable foundation for post-MVP growth",
    ],
  },
  {
    slug: "custom-telephony-asterisk-integrator",
    title: "Custom Telephony and Asterisk Integrator",
    description:
      "Expert VICIdial and Asterisk PBX customization engineer with proven track record in call center infrastructure. From campaign dialer development to CRM synchronization, I deliver end-to-end telephony solutions that automate communication workflows.",
    features: [
      "VICIdial screen customization and campaign logic",
      "Asterisk AMI event integration and automation",
      "Real-time call data synchronization with CRMs",
      "Automated SMS/Email workflows triggered by call events",
      "Custom call reporting and analytics dashboards",
    ],
  },
  {
    slug: "freelance-php-backend-architect-lahore",
    title: "Freelance PHP Backend Architect in Lahore",
    description:
      "Lahore-based senior PHP backend architect available for freelance and contract engagements. I bring enterprise-grade engineering standards to projects of all sizes, with deep expertise in PHP, Laravel, MySQL, and telephony systems.",
    features: [
      "PHP/Laravel architecture consulting and development",
      "MySQL performance tuning and optimization",
      "Legacy system migration and modernization",
      "API design and system integration",
      "Technical team leadership and mentorship",
    ],
  },
];
