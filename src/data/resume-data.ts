import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Mohammad Rahimi",
  initials: "MR",
  location: "Berlin, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Berlin",
  about:
    "Software Engineer | Architect & Builder of High-Scale Systems | Building with AI across the dev lifecycle",
  summary:
    "Software Engineer with 9+ years designing and building high-scalability backend systems, currently in Fintech and Financial Services. I think in architecture, not languages: Domain-Driven Design, event-driven systems, Architecture as Code, Residuality Theory. I've shipped production systems in Java, Kotlin, PHP and more — the stack changes, the design principles don't. Increasingly focused on AI engineering: integrating AI across the full development and delivery lifecycle, and building AI-powered developer tooling — code review, documentation, automated testing.",
  avatarUrl: "https://avatars.githubusercontent.com/u/28873155?v=4",
  personalWebsiteUrl: "https://www.linkedin.com/in/samyarahimi",
  contact: {
    email: "mammad.rsh@gmail.com",
    tel: "+491777610542",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/smyrdev",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samyarahimi",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/samyrahimi",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Shahid Chamran University of Ahvaz (Jundi Shapur)",
      degree: "Bachelor's Degree in Computer Software Engineering",
      start: "2014",
      end: "2019",
    },
    {
      school:
        "National Organization for Development of Exceptional Talents (Sampad)",
      degree: "High School Diploma, Mathematics",
      start: "2009",
      end: "2014",
    },
  ],
  work: [
    {
      company: "DKB Code Factory GmbH",
      link: "https://www.dkb.de",
      badges: ["Berlin", "Java", "Kotlin", "Spring Boot", "AI", "Fintech"],
      title: "Software Engineer",
      start: "2022",
      end: null,
      description:
        "Building high-throughput banking microservices and internal AI developer tooling for a leading German digital bank.",
      highlights: [
        "Delivered a greenfield cash-transaction microservice processing EUR 5M+ in its first month of operation",
        "Built internal AI developer tooling — an AI-powered chatbot and automated code reviewer — improving developer productivity and stakeholder knowledge access",
        "Implemented SEPA Instant Payments and Verification of Payee (VoP) flows for compliant real-time payment processing",
        "Cut API response times from 1s to under 200ms across high-throughput account and transaction microservices (Java 17/21, Kotlin, Spring Boot)",
        "Led the incident response lifecycle — post-mortems and root-cause analysis — improving system reliability",
        "Maintained code quality through TDD (JUnit, Mockito), enabling safe refactoring in a fast-moving codebase",
      ],
    },
    {
      company: "AUTO1 Group",
      link: "https://www.auto1-group.com",
      badges: ["Berlin", "Java", "Spring Boot", "Kafka", "PHP", "Docker"],
      title: "Software Engineer",
      start: "2020",
      end: "2022",
      description:
        "Automated core B2B/B2C financial workflows and payment processing for Europe's largest digital automotive platform.",
      highlights: [
        "Developed and automated SEPA Direct Debit and bank-transfer payment methods, including rejection handling, for end-to-end payment processing",
        "Automated the core B2B/B2C financial workflows — user profile creation, credit-line requests, loan origination, payments, and collections",
        "Designed and built a mini CMS on Java Spring Boot microservices, with Kafka messaging and Docker packaging",
        "Architected and developed a PHP module connecting the integration layer to a new Contract Management System",
      ],
    },
    {
      company: "Ziggurat",
      link: "https://www.linkedin.com/in/samyarahimi",
      badges: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Nginx",
        "FFmpeg",
        "Docker",
      ],
      title: "Full Stack Developer",
      start: "2019",
      end: "2020",
      description:
        "Built and ran a video streaming platform (HLS) serving 200k+ registered users with 10k+ concurrent streams — React/Spring Boot APIs, Nginx + FFmpeg pipeline, PostgreSQL, Docker on dedicated servers.",
    },
    {
      company: "DIACO Studios",
      link: "https://www.linkedin.com/in/samyarahimi",
      badges: ["Laravel", "Vue.js", "PHP", "CI/CD"],
      title: "Junior → Mid-Level Full Stack Developer",
      start: "2016",
      end: "2019",
      description:
        "Grew from junior to mid-level engineer building web platforms and APIs across healthcare, fitness, and e-commerce products.",
      highlights: [
        "Built the API and web platform for a patient–doctor management product (Laravel, Vue.js), with CI/CD and automated testing",
        "Developed the backend API for a fitness Android app and built e-commerce websites with Laravel",
      ],
    },
    {
      company: "Yana Group",
      link: "https://www.linkedin.com/in/samyarahimi",
      badges: ["PHP", "MySQL", "REST"],
      title: "Junior Back End Developer",
      start: "2014",
      end: "2016",
      description:
        "Built websites and REST APIs for mobile applications (PHP, MySQL).",
    },
  ],
  skills: [
    "Java",
    "Kotlin",
    "Spring Boot",
    "PHP",
    "Software Architecture",
    "Domain-Driven Design",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Kafka",
    "Generative AI",
    "Docker",
    "PostgreSQL",
    "TDD",
  ],
  projects: [],
} as const;
