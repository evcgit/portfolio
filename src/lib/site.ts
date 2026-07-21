export const siteConfig = {
  name: "Evan Cortez",
  title: "Evan Cortez — Software Engineer & Product Builder",
  description:
    "Full-stack engineer who ships end-to-end—frontend, backend, and infrastructure. Builds payment systems, workflow automation, and production SaaS around real business operations.",
  url: "https://evancortez.me",
  email: "evanvcortez@gmail.com",
  github: "https://github.com/evcgit",
  linkedin: "https://www.linkedin.com/in/evan-cortez-bb52a9240",
  resume: "/resume.pdf",
  bidzbase: "https://bidzbase.com",
  demo: "https://bidzbase.com/login?demo=1",
  location: "Provo, Utah",
  employer: "Right Angle Engineering",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "BidzBase", href: "#bidzbase" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const impactStats = [
  {
    value: "Payments",
    label: "Automated billing at workflow milestones—less unpaid AR, less chase",
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
    value: "66%",
    label: "Fewer API requests through frontend architecture",
  },
  {
    value: "Digitized",
    label: "Document workflows that used to require in-office handoffs",
  },
  {
    value: "Zero-downtime",
    label: "Containerized deploy path replacing brittle one-box releases",
  },
] as const;

export const focusBadges = [
  "Production",
  "Real Users",
  "Recruiter Demo Available",
  "Actively Shipping",
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
    title: "Tied billing to the workflow",
    result:
      "Built Stripe payment flows that charge when work is approved—so collections follow the job, not a spreadsheet chase.",
    detail:
      "Card-on-file Autopay, settlement jobs, and failed-payment alerts across the full payment lifecycle.",
  },
  {
    title: "Automated high-volume intake",
    result:
      "Owned integrations that pull work from external portals into internal APIs—cutting intake ops time roughly in half.",
    detail:
      "Higher throughput on the same book of work without proportional headcount; grounded in prior PM experience on those workflows.",
  },
  {
    title: "Digitized document production",
    result:
      "Solo-built in-app stamping, packet customization, and digital signing so deliverables no longer depended on physical office handoffs.",
    detail:
      "A high-frequency production path that works for distributed teams—not just people in the same building.",
  },
  {
    title: "Made commercial terms first-class",
    result:
      "Led per-customer pricing catalogs and custom bid tooling so sales could express real deals in the system—not only in people’s heads.",
    detail:
      "Estimate helpers and a standardized bid→accept flow for consistent quoting as the product expanded.",
  },
  {
    title: "Made the hottest screens fast",
    result:
      "Cut API traffic by ~66% and made the heaviest screens roughly 3× faster through request architecture, pagination, and serializer cleanup.",
    detail:
      "Day-to-day views feel near-instant; operators spend time working, not waiting.",
  },
  {
    title: "Owned permissions and platform reliability",
    result:
      "Solo permissions refactor across org, user, and job surfaces—plus owning the containerized ECS/ALB migration for safer deploys.",
    detail:
      "Safe multi-role access as the product grew; zero-downtime path instead of brittle one-box releases.",
  },
  {
    title: "Raised quality control standards",
    result:
      "Built configurable checklist and QC flows that made review consistent across jobs and handoffs.",
    detail:
      "Fewer bad billable states before approval; clearer signal for operators and managers.",
  },
] as const;

export const technologies = {
  Frontend: ["React", "TypeScript", "Next.js", "React Query", "MUI", "CSS"],
  Backend: ["Python", "Django", "Django REST Framework", "Dramatiq", "Node.js"],
  Integrations: ["Puppeteer", "Stripe webhooks", "S3 uploads"],
  Cloud: ["AWS", "ECS", "ALB", "EFS", "S3", "Secrets Manager"],
  Infrastructure: ["Docker", "AWS CDK", "Nginx"],
  Databases: ["PostgreSQL", "MySQL", "Redis"],
  DevOps: ["GitHub Actions", "Docker Compose", "CI/CD", "Release notes"],
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
    program: "Web Development",
    detail: "Completed 2024",
  },
  {
    school: "Utah Valley University",
    program: "Information Systems",
    detail: "Currently pursuing coursework",
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
    id: "customers",
    title: "Target Customers",
    body: "Independent subcontractors and small trade shops that need professional proposals, clear job status, and faster collections—without enterprise software overhead.",
  },
  {
    id: "philosophy",
    title: "Product Philosophy",
    body: "Solve contractor workflows first. Keep the product focused on estimates, proposals, payments, scheduling, and accountability. No feature for its own sake—especially not AI bolted on without a clear operational job to do.",
  },
  {
    id: "architecture",
    title: "Architecture",
    body: "Multi-tenant by organization. A Django API owns domain logic. React powers the operator experience across breakpoints. PostgreSQL, Redis, and S3 back the core. Stripe, SendGrid, and real-time channels connect the product to money, messaging, and live updates.",
  },
  {
    id: "decisions",
    title: "Technical Decisions",
    body: "Django for durable domain modeling and permissions. Stripe Billing for self-serve plans and Stripe Connect for customer payments. Docker on AWS for predictable deploys. Responsive UI so field use does not require a native app.",
  },
  {
    id: "lessons",
    title: "Lessons Learned",
    body: "Shipping a usable core early beats polishing adjacent surfaces. Multi-tenant edge cases show up fast once real users arrive. Payments, permissions, and mobile ergonomics deserve more design time than almost anything else in the stack.",
  },
  {
    id: "roadmap",
    title: "Roadmap",
    body: "Deepen the operations layer for growing crews, tighten analytics around cash and throughput, and keep expanding the parts of the workflow that still live in inboxes and spreadsheets.",
  },
] as const;
