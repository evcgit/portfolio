export const siteConfig = {
  name: "Evan Cortez",
  title: "Evan Cortez — Software Engineer",
  description:
    "Software engineer at Right Angle Engineering. Owns frontend and DevOps on a 3-person team, with heavy backend influence. Builds billing systems, financial dashboards, and production tools around real operations.",
  url: "https://evancortez.me",
  email: "evanvcortez@gmail.com",
  github: "https://github.com/evcgit",
  linkedin: "https://www.linkedin.com/in/evan-cortez",
  resume: "/resume.pdf",
  bidzbase: "https://bidzbase.com",
  demo: "https://bidzbase.com/login?demo=1",
  location: "Provo, Utah",
  employer: "Right Angle Engineering",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const impactStats = [
  {
    value: "~70%",
    label: "Company MRR now running through the bidding and invoicing system I built—and growing",
  },
  {
    value: "Billing",
    label: "Per-company billing cycles so commercial terms live in software, not spreadsheets",
  },
  {
    value: "Dashboards",
    label: "Analytics used for company financial analysis—MRR, collections, commercial performance",
  },
  {
    value: "~2×",
    label: "Throughput on high-volume intake after portal automation",
  },
  {
    value: "~3×",
    label: "Faster load on the heaviest production screens",
  },
  {
    value: "Zero-downtime",
    label: "Containerized ECS/ALB deploy path I own, replacing brittle one-box releases",
  },
] as const;

export const focusAreas = [
  {
    kicker: "Right Angle Engineering",
    title: "Frontend and DevOps, owned.",
    body: "I own the production frontend and the DevOps path, with heavy influence on the backend. Day to day that means billing, operator UI, CI/CD, and the systems people actually run the company on.",
    status: "Shipping in production",
    href: "#experience",
    hrefLabel: "See what I shipped",
  },
  {
    kicker: "Right Angle Engineering",
    title: "Billing the company runs on.",
    body: "Custom bidding and invoicing that now accounts for ~70% of company MRR, per-company billing cycles, Stripe collections, and dashboards so leadership can see the numbers without exporting to a spreadsheet.",
    status: "Shipping in production",
    href: "#impact",
    hrefLabel: "See the numbers",
  },
] as const;

export const principles = [
  {
    title: "Understand the workflow before writing code",
    description:
      "I learn how work actually happens—handoffs, exceptions, and bottlenecks—before proposing software. Prior ops experience makes the constraints concrete.",
  },
  {
    title: "Technology should support business goals",
    description:
      "Stack choices follow the outcome: cash collected, hours saved, reliability under load—not novelty for its own sake.",
  },
  {
    title: "Prefer simple systems over unnecessary complexity",
    description:
      "Clear boundaries and boring defaults beat clever abstractions that nobody wants to maintain.",
  },
  {
    title: "Ship early and improve through feedback",
    description:
      "A usable product in users' hands beats a perfect plan. Iteration is the product process.",
  },
  {
    title: "Measure outcomes instead of output",
    description:
      "Fewer requests, faster load times, less manual work, and healthier collections—not story points.",
  },
  {
    title: "Build products that solve real problems",
    description:
      "If it does not reduce friction in a real workflow, it does not belong in the roadmap.",
  },
  {
    title: "Design software around users—not developers",
    description:
      "Interfaces and data models should match how operators think about their day.",
  },
] as const;

export const experience = [
  {
    title: "Built the billing system the company runs on",
    result:
      "Designed and shipped the custom bidding and invoicing platform that now accounts for ~70% of company MRR—and growing—including per-company billing cycles so each customer can run on its own commercial calendar.",
    detail:
      "Pricing catalogs, bid→invoice APIs and UI, and commercial terms that used to live in people’s heads.",
  },
  {
    title: "Tied collections to the work",
    result:
      "Built Stripe payment flows that charge when work is approved—so collections follow the job, not a spreadsheet chase.",
    detail:
      "Card-on-file Autopay, settlement jobs, and failed-payment alerts across the full payment lifecycle.",
  },
  {
    title: "Made the numbers visible",
    result:
      "Built analytics dashboards used for company financial analysis—MRR, collections, and commercial performance—so leadership can see the business without exporting to a spreadsheet.",
    detail:
      "Operators and finance looking at the same system of record.",
  },
  {
    title: "Automated high-volume intake",
    result:
      "Owned integrations that pull work from external portals into internal APIs—cutting intake ops time roughly in half.",
    detail:
      "Higher throughput on the same book of work without proportional headcount; grounded in prior PM experience on those workflows.",
  },
  {
    title: "Made the hottest screens fast",
    result:
      "Cut API traffic by ~66% and made the heaviest screens roughly 3× faster through request architecture, pagination, and serializer cleanup.",
    detail:
      "Day-to-day views feel near-instant; operators spend time working, not waiting.",
  },
  {
    title: "Owned the deploy path",
    result:
      "I own DevOps on a 3-person team: containerized ECS/ALB migration, GitHub Actions CI/CD, and production tests in Jest and PyTest.",
    detail:
      "Zero-downtime deploys instead of brittle one-box releases. Mentored a software intern as the day-to-day technical contact.",
  },
  {
    title: "Digitized document production",
    result:
      "Solo-built in-app stamping and packet customization so deliverables no longer depended on physical office handoffs or third party software.",
    detail:
      "A high-frequency production path that works for distributed teams—not just people in the same building.",
  },
] as const;

export const technologies = {
  Frontend: ["React", "TypeScript", "Next.js", "React Query", "Three.js", "MUI", "CSS"],
  Backend: ["Python", "Django", "Django REST Framework", "Dramatiq", "Node.js"],
  Integrations: ["Puppeteer", "Stripe webhooks", "S3 uploads", "GraphQL (Linear)"],
  Cloud: ["AWS", "ECS", "ALB", "EFS", "S3", "Secrets Manager"],
  Infrastructure: ["Docker", "AWS CDK", "Nginx"],
  Databases: ["PostgreSQL", "MySQL", "Redis"],
  DevOps: ["GitHub Actions", "Docker Compose", "CI/CD", "Jest", "PyTest"],
  Payments: ["Stripe Billing", "Stripe Connect", "PaymentIntents", "Autopay"],
} as const;

export const architectureNodes = [
  {
    id: "users",
    label: "Users",
    description: "Operators, managers, and customers interacting with the product every day.",
  },
  {
    id: "frontend",
    label: "React Frontend",
    description: "A responsive SPA for day-to-day operator workflows without unnecessary client complexity.",
  },
  {
    id: "api",
    label: "Django API",
    description: "Clear domain boundaries, multi-tenant isolation, and predictable business logic.",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    description: "Reliable relational storage for customers, jobs, bids, invoices, and permissions.",
  },
  {
    id: "redis",
    label: "Redis",
    description: "Caching and real-time channels that keep interactive surfaces snappy.",
  },
  {
    id: "s3",
    label: "AWS S3",
    description: "Durable object storage for proposals, invoices, and generated documents.",
  },
] as const;

export const architectureIntegrations = [
  {
    id: "stripe",
    label: "Stripe",
    description: "Subscriptions for the product itself and Connect for contractor card payments.",
  },
  {
    id: "sendgrid",
    label: "SendGrid",
    description: "Transactional email for proposals, accept/decline flows, and operational alerts.",
  },
] as const;

export const education = [
  {
    school: "Mountainland Technical College",
    program: "Web Development Certificate",
    detail: "Completed 2024 · JavaScript, React, Node.js, REST APIs",
  },
  {
    school: "Utah Valley University",
    program: "Information Systems",
    detail: "Coursework toward B.S. · ~3 semesters remaining",
  },
] as const;

export const bidzbaseCapabilities = [
  "Multi-tenant SaaS architecture",
  "Responsive / mobile-friendly UI",
  "Stripe subscriptions",
  "Stripe Connect payments",
  "Scheduling",
  "Time tracking",
  "Analytics dashboard",
  "Role-based permissions",
  "Email automation",
  "Docker deployment",
  "AWS infrastructure",
  "PDF generation",
  "Real-time updates",
] as const;

export const bidzbaseSections = [
  {
    id: "problem",
    title: "The Problem",
    body: "Small subcontractors and trade shops still stitch estimating, proposals, scheduling, and collections together across spreadsheets, texts, and disconnected tools. Work falls through the cracks. Payments slow down. Owners spend their evenings chasing paperwork instead of running the shop.",
  },
  {
    id: "solution",
    title: "The Solution",
    body: "BidzBase is a production SaaS that follows the real workflow: estimate → send proposal → customer accept/decline → invoice → get paid. Scheduling, time tracking, and analytics sit on top of the same job data so the business runs from one system of record—on desktop or phone.",
  },
  {
    id: "architecture",
    title: "Architecture",
    body: "Multi-tenant by organization. A Django API owns domain logic. React powers the operator experience across breakpoints. PostgreSQL, Redis, and S3 back the core. Stripe, SendGrid, and real-time channels connect the product to money, messaging, and live updates.",
  },
  {
    id: "lessons",
    title: "What I learned shipping it",
    body: "A usable core in a month beats polishing adjacent surfaces. Multi-tenant edge cases show up fast once real users arrive. Payments, permissions, and mobile ergonomics deserve more design time than almost anything else in the stack.",
  },
] as const;
