// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
// SEO note: heroHeadline and subtitle use Cluster 1 + Cluster 4 keywords
export const personalInfo = {
  name: 'Muneeb Faruqi',
  // ✅ H1 — exact match from keyword report
  title: 'Senior PHP Laravel Developer for SaaS, Fintech & VICIdial Solutions',
  // ✅ Subtitle — hits Clusters 1, 2, 4 in one line
  subtitle: 'Laravel Backend Engineer · Multi-Tenant SaaS Architect · VICIdial & Asterisk PBX Specialist',
  location: 'Lahore, Pakistan',
  email: 'muneebfaruqi@email.com',
  github: 'https://github.com/muneebfaruqi',
  linkedin: 'https://linkedin.com/in/muneeb-faruqi',
  available: true,

  // ✅ Hero headline — confident, technical, keyword-dense
  heroHeadline: 'Senior Laravel Backend Engineer for SaaS, Fintech & Telephony.',

  // ✅ Hero subtext — conversational format favored by AI search
  heroSubtext:
    'Nine years building the backend infrastructure fintech platforms and contact center companies depend on — payment APIs, multi-tenant SaaS systems, VICIdial contact center customization, and Asterisk PBX integrations that process tens of thousands of daily calls.',

  // ✅ About paragraphs — written to be cited by AI search engines
  aboutText: [
    "I'm a Senior PHP Laravel Developer and backend systems architect with 9+ years of experience across fintech and telephony infrastructure. My specialization sits at an unusual intersection: Laravel SaaS architecture, payment gateway integration, and VICIdial contact center development — a combination very few engineers hold at senior depth.",
    "At ACE Money Transfer, I architect the Laravel backend powering cross-border remittances across 100+ countries. At Primo Dialler, I built a multi-tenant VICIdial SaaS platform processing 50,000+ daily calls — extending Asterisk PBX with custom AGI scripts, IVR trees, and CRM API bridges. I bring the same engineering discipline to both: fault tolerance, query optimization, and architecture that scales without a rewrite.",
    "I'm available for remote Laravel developer roles, fintech backend contracts, VICIdial customization engagements, and SaaS architecture consulting — serving clients in the US, UK, UAE, Canada, and Australia.",
  ],
};

// ─── STATS ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '9+', label: 'Years Engineering' },
  { value: '30+', label: 'Production Systems' },
  { value: '5', label: 'Companies Served' },
  { value: '100+', label: 'Countries Served' },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
// ✅ Highlight text uses keyword clusters naturally
export const experience = [
  {
    id: 1,
    role: 'Senior PHP Laravel Developer',
    company: 'ACE Money Transfer',
    type: 'Full-time · On-site',
    period: 'Mar 2024 – Present',
    duration: '2 yrs 3 mos',
    location: 'Lahore, Punjab, Pakistan',
    industry: 'Fintech · Cross-border Payments',
    color: '#3b82f6',
    highlights: [
      'Laravel fintech backend architect for a global remittance platform serving 350,000+ agent locations across 100+ countries',
      'Design and optimize high-throughput REST APIs handling real-time payment processing, multi-currency conversion, and KYC compliance checks',
      'Payment gateway integration with third-party banking partners, sanction screening APIs, and KYC providers — with fault-tolerant retry logic and circuit breakers',
      'Lead backend performance engineering — query optimization, Redis caching strategy, and connection pooling reducing p95 latency by 40%',
      'Drive architecture decisions for new fintech feature domains: scheduled payments, beneficiary management, and transaction reporting dashboards',
    ],
    skills: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Redis', 'AWS', 'REST APIs', 'Docker', 'Git'],
  },
  {
    id: 2,
    role: 'Senior PHP Developer',
    company: 'Noveltysoft',
    type: 'Full-time · On-site',
    period: 'Mar 2023 – Jan 2024',
    duration: '11 mos',
    location: 'Lahore, Punjab, Pakistan',
    industry: 'Software Development · CRM Integration',
    color: '#06b6d4',
    highlights: [
      'GoHighLevel API developer — built Laravel-based integration layer automating lead ingestion, CRM routing, and client communication workflows',
      'Zoho CRM integration expert for enterprise B2B clients, including webhook-driven lead scoring and pipeline automation',
      'Implemented 10DLC SMS campaign compliance workflows, reducing carrier rejection rates to near zero across client campaigns',
      'Developed RESTful API layers consumed by React and React Native mobile frontends, with PHPUnit test coverage at 85%+',
      'Established Git branching workflows and code review standards adopted across the engineering team',
    ],
    skills: ['Laravel', 'CodeIgniter', 'GoHighLevel', 'Zoho CRM', 'PHPUnit', 'REST API', 'MySQL'],
  },
  {
    id: 3,
    role: 'Senior Software Engineer',
    company: 'Primo Dialler',
    type: 'Full-time · On-site',
    period: 'Jul 2020 – Mar 2023',
    duration: '2 yrs 9 mos',
    location: 'Lahore, Punjab, Pakistan',
    industry: 'Telecommunications · Contact Center SaaS',
    color: '#10b981',
    highlights: [
      'VICIdial customization expert — extended the VICIdial contact center platform into a multi-tenant SaaS handling 50,000+ daily calls across multiple client accounts',
      'Asterisk PBX developer — authored custom dialplans, AGI scripts for dynamic IVR routing, call recording pipelines, and real-time AMI-based agent dashboards',
      'Predictive dialer developer — tuned dial ratio algorithms and campaign logic for outbound contact center efficiency',
      'Built PHP-based API bridges between VICIdial, GoHighLevel CRM, and custom reporting platforms for unified agent workflows',
      'Designed and optimized MySQL CDR (call data record) schemas supporting real-time analytics and agent performance dashboards',
    ],
    skills: ['VICIdial', 'Asterisk PBX', 'PHP', 'MySQL', 'AGI Scripts', 'SIP/VoIP', 'Linux', 'AMI'],
  },
  {
    id: 4,
    role: 'Software Engineer (PHP)',
    company: 'LEADconcept',
    type: 'Full-time · On-site',
    period: 'Aug 2018 – Jun 2020',
    duration: '1 yr 11 mos',
    location: 'Lahore, Punjab, Pakistan',
    industry: 'Software Development · Lead Management',
    color: '#8b5cf6',
    highlights: [
      'Built CRM and lead management systems using Yii framework for B2B enterprise clients',
      'MySQL-backed reporting dashboards with complex aggregate queries and CSV/Excel export pipelines',
      'Collaborated with cross-functional teams to deliver full-stack PHP web applications on schedule',
    ],
    skills: ['PHP', 'Yii', 'MySQL', 'JavaScript', 'jQuery', 'HTML5'],
  },
  {
    id: 5,
    role: 'PHP Developer',
    company: 'Programming Studio',
    type: 'Full-time · On-site',
    period: 'Jun 2016 – Jun 2018',
    duration: '2 yrs 1 mo',
    location: 'Lahore, Punjab, Pakistan',
    industry: 'Web Development · Custom Software',
    color: '#f59e0b',
    highlights: [
      'Built custom PHP REST API backends for e-commerce, healthcare, and logistics clients',
      'Microsoft SQL Server integrations and C# utility scripts for enterprise data migration projects',
      'Delivered responsive front-end implementations using jQuery, HTML5, and CSS3',
    ],
    skills: ['PHP', 'REST API', 'C#', 'Microsoft SQL Server', 'MySQL', 'jQuery'],
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skills = {
  backend: [
    { name: 'PHP 8.x', level: 97 },
    { name: 'Laravel 11', level: 96 },
    { name: 'CodeIgniter', level: 85 },
    { name: 'RESTful API Design', level: 95 },
    { name: 'PHPUnit / TDD', level: 82 },
    { name: 'Yii Framework', level: 75 },
  ],
  database: [
    { name: 'MySQL / MariaDB', level: 95 },
    { name: 'Query Optimization', level: 92 },
    { name: 'Redis / Caching', level: 88 },
    { name: 'Database Architecture', level: 90 },
    { name: 'Microsoft SQL Server', level: 72 },
  ],
  telephony: [
    { name: 'VICIdial Customization', level: 95 },
    { name: 'Asterisk PBX', level: 90 },
    { name: 'SIP / VoIP', level: 85 },
    { name: 'AGI Scripting', level: 88 },
    { name: 'IVR Design', level: 85 },
  ],
  cloud: [
    { name: 'AWS (EC2, S3, RDS)', level: 80 },
    { name: 'Docker / Containers', level: 78 },
    { name: 'Linux / Bash', level: 85 },
    { name: 'Git / CI-CD', level: 90 },
    { name: 'Nginx / Apache', level: 82 },
  ],
  integrations: [
    { name: 'GoHighLevel API', level: 88 },
    { name: 'Zoho CRM', level: 85 },
    { name: 'Payment Gateway APIs', level: 90 },
    { name: 'KYC / Compliance APIs', level: 82 },
    { name: 'AI / LLM Integrations', level: 75 },
  ],
  frontend: [
    { name: 'JavaScript / jQuery', level: 82 },
    { name: 'React.js', level: 70 },
    { name: 'React Native', level: 65 },
    { name: 'Flutter', level: 60 },
    { name: 'HTML5 / CSS3', level: 85 },
  ],
};

// ─── TECH STACK ───────────────────────────────────────────────────────────────
export const techStack = [
  { name: 'PHP 8.x', category: 'Backend', icon: '🐘', color: '#7a86c8' },
  { name: 'Laravel 11', category: 'Framework', icon: '🔴', color: '#ff2d20' },
  { name: 'MySQL', category: 'Database', icon: '🐬', color: '#00758f' },
  { name: 'Redis', category: 'Cache', icon: '⚡', color: '#dc382d' },
  { name: 'VICIdial', category: 'Telephony', icon: '📞', color: '#10b981' },
  { name: 'Asterisk PBX', category: 'PBX', icon: '🔊', color: '#f59e0b' },
  { name: 'GoHighLevel', category: 'CRM', icon: '🎯', color: '#3b82f6' },
  { name: 'AWS', category: 'Cloud', icon: '☁️', color: '#ff9900' },
  { name: 'Docker', category: 'DevOps', icon: '🐳', color: '#2496ed' },
  { name: 'Git', category: 'Version Control', icon: '🌿', color: '#f05032' },
  { name: 'React Native', category: 'Mobile', icon: '📱', color: '#61dafb' },
  { name: 'Flutter', category: 'Mobile', icon: '🦋', color: '#54c5f8' },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// ✅ Titles and descriptions use exact-match keywords for AI citation
export const projects = [
  {
    id: 1,
    title: 'Cross-Border Fintech Payment Platform',
    company: 'ACE Money Transfer',
    description:
      'Laravel fintech backend for a global remittance platform operating across 100+ countries with 350,000+ agent locations. Architected for high-volume, real-time payment processing with multi-currency support, KYC compliance, and PCI-compliant payment gateway integration.',
    impact: 'Powers millions in daily remittance volume across 4 continents with 99.95% API uptime',
    tags: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Redis', 'AWS', 'Payment Gateway API', 'KYC Integration'],
    category: 'Fintech',
    color: '#3b82f6',
    metrics: [
      { label: 'Agent Locations', value: '350K+' },
      { label: 'Countries', value: '100+' },
      { label: 'Latency Reduction', value: '40%' },
    ],
    status: 'Live',
  },
  {
    id: 2,
    title: 'VICIdial Multi-Tenant Contact Center SaaS',
    company: 'Primo Dialler',
    description:
      'Extended VICIdial into a multi-tenant SaaS contact center platform. Custom Asterisk PBX AGI scripts, predictive dialer tuning, dynamic IVR routing, real-time agent dashboards, and CRM API bridges — backed by a high-performance MySQL CDR store.',
    impact: 'Processing 50,000+ daily calls across multiple tenant accounts with 99.9% uptime',
    tags: ['VICIdial', 'Asterisk PBX', 'PHP', 'AGI Scripts', 'MySQL', 'SIP/VoIP', 'Linux'],
    category: 'Telephony',
    color: '#10b981',
    metrics: [
      { label: 'Daily Calls', value: '50K+' },
      { label: 'Tenants', value: 'Multi' },
      { label: 'Uptime', value: '99.9%' },
    ],
    status: 'Live',
  },
  {
    id: 3,
    title: 'GoHighLevel CRM & Lead Automation Platform',
    company: 'Noveltysoft',
    description:
      'GoHighLevel API developer engagement building a Laravel-based integration layer. Automated lead ingestion, scoring, and routing from GoHighLevel into Zoho CRM, with 10DLC-compliant SMS campaign workflows and full PHPUnit test coverage.',
    impact: 'Reduced manual lead routing effort by 60%; carrier SMS rejection rate near zero',
    tags: ['Laravel', 'GoHighLevel API', 'Zoho CRM', 'REST API', '10DLC', 'PHPUnit', 'MySQL'],
    category: 'SaaS',
    color: '#8b5cf6',
    metrics: [
      { label: 'Response Time', value: '-60%' },
      { label: 'SMS Rejection', value: '~0%' },
      { label: 'Test Coverage', value: '85%' },
    ],
    status: 'Live',
  },
  {
    id: 4,
    title: 'KYC & Payment Compliance API Gateway',
    company: 'ACE Money Transfer',
    description:
      'Fault-tolerant integration layer connecting the remittance platform with KYC providers, sanction screening APIs, and banking partners. Built with Laravel circuit breakers, idempotency keys, retry policies, dead-letter queues, and full audit trails for regulatory compliance.',
    impact: 'Zero compliance incidents since deployment; 100% audit trail coverage for regulatory review',
    tags: ['PHP 8.3', 'Laravel', 'API Gateway', 'KYC Compliance', 'MySQL', 'Redis', 'Queues'],
    category: 'Fintech',
    color: '#06b6d4',
    metrics: [
      { label: 'Compliance Incidents', value: '0' },
      { label: 'API Uptime', value: '99.95%' },
      { label: 'Audit Coverage', value: '100%' },
    ],
    status: 'Live',
  },
];

// ─── ARCHITECTURE CAPABILITIES ────────────────────────────────────────────────
// ✅ Section headings match AI search query patterns
export const architectureCapabilities = [
  {
    title: 'Laravel SaaS Architecture',
    description:
      'Multi-tenant application design, tenant isolation patterns, shared vs. schema-per-tenant trade-offs, and the middleware/policy layers that keep client data cleanly separated at scale.',
    icon: '⚙️',
  },
  {
    title: 'Payment Gateway Integration',
    description:
      'Fault-tolerant payment API integration with circuit breakers, retry policies, idempotency keys, and dead-letter queues — built for the reality that external payment APIs fail unpredictably.',
    icon: '💳',
  },
  {
    title: 'MySQL Database Architecture',
    description:
      'Schema design for high-volume write workloads, read replica strategies, index optimization, and query analysis that eliminate N+1 problems and slow reports at production scale.',
    icon: '🗄️',
  },
  {
    title: 'REST API Design & Versioning',
    description:
      'API-first design from the contract out — versioned endpoints, consistent error schemas, rate limiting, and OpenAPI documentation that frontend and mobile teams build against confidently.',
    icon: '📡',
  },
  {
    title: 'Event-Driven Backend Systems',
    description:
      'Laravel Queues, Redis pub/sub, and webhook-based integrations that decouple services, handle backpressure, and process workloads asynchronously without blocking critical paths.',
    icon: '🔄',
  },
  {
    title: 'AWS Laravel Deployment',
    description:
      'Production Laravel deployments on AWS EC2, RDS, S3, and Elasticache — with Nginx configuration, environment hardening, and deployment pipelines for zero-downtime releases.',
    icon: '☁️',
  },
];

// ─── TELEPHONY CAPABILITIES ───────────────────────────────────────────────────
export const telephonyCapabilities = [
  {
    title: 'VICIdial Customization Expert',
    description:
      'Deep VICIdial platform customization — custom campaign logic, predictive dial ratio tuning, multi-tenant SaaS configuration, and agent interface extensions for complex contact center workflows.',
    icon: '📞',
    tech: ['VICIdial', 'PHP', 'MySQL', 'Linux'],
  },
  {
    title: 'Asterisk PBX Developer',
    description:
      'Dialplan authoring, AGI script integration, SIP trunk configuration, call recording pipelines, and Asterisk Manager Interface (AMI) automation for real-time call control and monitoring.',
    icon: '🔊',
    tech: ['Asterisk', 'AGI', 'AMI', 'SIP', 'Bash'],
  },
  {
    title: 'Predictive Dialer Developer',
    description:
      'Predictive dialer algorithm tuning, outbound campaign optimization, dial ratio management, and answer machine detection configuration for high-efficiency outbound contact centers.',
    icon: '📊',
    tech: ['VICIdial', 'PHP', 'MySQL', 'Linux'],
  },
  {
    title: 'IVR Design & Implementation',
    description:
      'Dynamic IVR trees that route calls based on CRM data, business hours, agent availability, and campaign rules — reducing transfers and improving first-call resolution rates.',
    icon: '🌲',
    tech: ['Asterisk', 'AGI', 'PHP', 'TTS'],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Development Lead',
    company: 'ACE Money Transfer',
    text: 'Muneeb has been instrumental in scaling our Laravel fintech backend. His ability to identify performance bottlenecks and design clean API contracts has raised the bar for the entire engineering team.',
    avatar: 'EL',
  },
  {
    id: 2,
    name: 'CTO',
    company: 'Primo Dialler',
    text: 'The VICIdial SaaS platform Muneeb built runs our entire contact center operation. He understood Asterisk and telephony infrastructure at a depth most PHP developers never reach.',
    avatar: 'CT',
  },
  // {
  //   id: 3,
  //   name: 'Project Manager',
  //   company: 'Noveltysoft',
  //   text: 'Muneeb consistently delivered complex GoHighLevel and CRM integrations on schedule. His code reviews pushed our junior developers to write genuinely better, more maintainable code.',
  //   avatar: 'PM',
  // },
];

// ─── FAQ DATA — Drives FAQPage Schema & AI Visibility ─────────────────────────
// ✅ These mirror the FAQ schema in index.html for consistency
export const faq = [
  {
    q: 'What does Muneeb Faruqi specialize in?',
    a: 'Senior PHP Laravel development with deep specialization in multi-tenant SaaS architecture, fintech payment platform backend, VICIdial contact center customization, Asterisk PBX integration, and GoHighLevel CRM API development.',
  },
  {
    q: 'Is Muneeb Faruqi available for remote work?',
    a: 'Yes — available globally for remote Laravel developer roles, fintech backend contracts, VICIdial customization engagements, and SaaS architecture consulting across US, UK, UAE, Canada, and Australia.',
  },
  {
    q: 'Can Muneeb Faruqi customize VICIdial?',
    a: 'Yes. 6+ years of deep VICIdial customization including multi-tenant SaaS deployment, Asterisk PBX AGI scripting, predictive dialer tuning, IVR design, and CRM API integration.',
  },
  {
    q: 'What fintech experience does Muneeb Faruqi have?',
    a: 'Currently the Senior Laravel Backend Developer at ACE Money Transfer — architecting the payment and remittance platform for 26+ sending locations and 100+ receiving locations.',
  },
];
