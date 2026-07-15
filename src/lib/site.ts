export const siteConfig = {
  name: "Evan Cortez",
  title: "Evan Cortez — Software Engineer & Product Builder",
  description:
    "I build software that improves business operations. From internal automation platforms to production SaaS products, I turn complicated workflows into software people actually use.",
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
    value: "60%",
    label: "Revenue-critical workflow automated",
  },
  {
    value: "66%",
    label: "Reduction in API requests",
  },
  {
    value: "70%",
    label: "Faster application loading",
  },
  {
    value: "99.99%",
    label: "Deployment uptime",
  },
  {
    value: "Production SaaS",
    label: "Live with real users",
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
      "I learn how work actually happens—handoffs, exceptions, and bottlenecks—before proposing software.",
  },
  {
    title: "Technology should support business goals",
    description:
      "Stack choices follow the outcome. Reliability, cost, and speed to value matter more than novelty.",
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
      "Fewer requests, faster load times, less manual work, and healthier cash flow—not story points.",
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
    title: "Automated a revenue-critical workflow",
    result:
      "Automated approximately 60% of a revenue-critical workflow, allowing the business to support significantly larger clients.",
    detail: "Reduced operational overhead so the team could scale without proportional headcount.",
  },
  {
    title: "Cut API traffic at the architecture layer",
    result:
      "Reduced API traffic by approximately 66% through architectural improvements.",
    detail: "Fewer calls, less load, and a clearer contract between frontend and backend services.",
  },
  {
    title: "Made applications feel instant",
    result: "Reduced application loading times by roughly 70%.",
    detail: "Users spend more time working and less time waiting on screens.",
  },
  {
    title: "Hardened deployment infrastructure",
    result:
      "Introduced Docker and AWS CDK infrastructure to support rolling deployments and approximately 99.99% uptime.",
    detail: "Shipping became routine instead of risky.",
  },
  {
    title: "Brought visibility to operations",
    result:
      "Designed internal analytics systems and introduced new operational metrics that improved quality assurance.",
    detail: "Teams could spot issues earlier and act with clearer signal.",
  },
  {
    title: "Raised quality control standards",
    result:
      "Built a configurable checklist platform that significantly improved quality control.",
    detail: "Consistent checks, less guesswork, better handoffs between stages.",
  },
  {
    title: "Accelerated collections",
    result:
      "Implemented automated payment workflows that accelerated collections and eliminated large amounts of overdue receivables.",
    detail: "Cash moved faster because follow-up stopped depending on memory.",
  },
] as const;

export const technologies = {
  Frontend: ["React", "TypeScript", "Next.js", "CSS"],
  Backend: ["Python", "Django", "Django REST Framework", "Node.js"],
  Cloud: ["AWS", "S3", "Lightsail"],
  Infrastructure: ["Docker", "AWS CDK", "Nginx"],
  Databases: ["PostgreSQL", "MySQL", "Redis"],
  DevOps: ["GitHub Actions", "Docker Compose", "CI/CD"],
  Payments: ["Stripe Billing", "Stripe Connect"],
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
    body: "BidzBase is a production SaaS that follows the real workflow: estimate → send proposal → customer accept/decline → invoice → get paid. Scheduling, time tracking, and analytics sit on top of the same job data so the business runs from one system of record.",
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
    body: "Multi-tenant by organization. A Django API owns domain logic. React powers the operator experience. PostgreSQL, Redis, and S3 back the core. Stripe, SendGrid, and real-time channels connect the product to money, messaging, and live updates.",
  },
  {
    id: "decisions",
    title: "Technical Decisions",
    body: "Django for durable domain modeling and permissions. Stripe Billing for self-serve plans and Stripe Connect for customer payments. Docker on AWS for predictable deploys. Branded PDF generation so proposals look as serious as the work they represent.",
  },
  {
    id: "lessons",
    title: "Lessons Learned",
    body: "Shipping a usable core early beats polishing adjacent surfaces. Multi-tenant edge cases show up fast once real users arrive. Payments and permissions deserve more design time than almost anything else in the stack.",
  },
  {
    id: "roadmap",
    title: "Roadmap",
    body: "Deepen the operations layer for growing crews, tighten analytics around cash and throughput, and keep expanding the parts of the workflow that still live in inboxes and spreadsheets.",
  },
] as const;
