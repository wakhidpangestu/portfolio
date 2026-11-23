import { Icons } from "@/components/icons";
import { HomeIcon, InstagramIcon } from "lucide-react";

export const DATA = {
  name: "Wakhid Pangestu",
  initials: "WP",
  url: "https://wakhidpangestu.vercel.app",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  description:
    "Software Engineer and Indonesian Web3 Builder based in Jakarta, Indonesia.",
  summary:
    "I turn ambitious ideas into products people can actually use. As a software engineer and Indonesian Web3 builder, I craft thoughtful interfaces and the systems behind them - from React and Next.js products to smart contracts and onchain experiments. I enjoy working where product craft, AI, and decentralized technology meet, and I learn fastest by shipping with communities and hackathons.",
  avatarUrl: "/me.png",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "wakhidpangestu1@gmail.com",
    tel: "+6285190615356",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wakhidpangestu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wakhidpangestu",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/wakhidpangestu/",
        icon: InstagramIcon,
        navbar: true,
      },
      Email: {
        name: "Send email",
        url: "mailto:wakhidpangestu1@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  skillGroups: [
    {
      title: "Frontend",
      skills: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Systems & Backend",
      skills: ["Rust", "Java", "Node.js", "Python", "PostgreSQL"],
    },
    {
      title: "Web3 & AI",
      skills: ["Solidity", "Viem", "AI Agents"],
    },
  ],
  web3Highlights: [
    {
      title: "First Web3 Hackathon",
      meta: "Offline · Ethereum Jakarta",
      description:
        "Joined an in-person Web3 hackathon hosted by the Ethereum Jakarta community, building and learning alongside fellow builders.",
    },
  ],
  projects: [
    {
      title: "ZAP (Zero Answer Policy)",
      dates: "LOGICODIX 2026 · #10 Top Semifinalist",
      description:
        "Socratic cognitive AI math tutor and real-time 3D interactive whiteboard powered by Three.js/WebGL and SymPy deterministic verification—guiding students to discover solutions instead of giving away answers.",
      tags: ["Next.js", "TypeScript", "Three.js", "Python", "SymPy", "AI Tutor"],
      image: "/zap.svg",
      github: "https://github.com/wakhidpangestu/ZAP",
      website: "https://chatzap.web.id",
    },
    {
      title: "Zaky",
      dates: "UINIC 8.0 · #9 Top Semifinalist",
      description:
        "Federated zakat distribution verification network featuring 4-eyes segregation, append-only hash-chain audit trails, Ed25519 cross-institutional cryptographic attestation, and an interactive 3D office simulation.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Three.js", "Ed25519", "Tailwind CSS"],
      image: "/zaky.svg",
      github: "https://github.com/wakhidpangestu/zaky",
      website: "https://zakyapp.vercel.app",
    },
    {
      title: "Guyub",
      dates: "GDGoC ITB STACK 2026 · Top Semifinalist (In Progress)",
      description:
        "All-in-one event operations platform for communities and campus organizations—unifying admin, organizer, committee, and attendee workflows in a single Flutter Web & Firebase application.",
      tags: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Firestore"],
      image: "/guyub.svg",
      github: "https://github.com/wakhidpangestu/guyub",
      website: "https://guyubapp.web.id",
    },
    {
      title: "Pandu",
      dates: "ETHJKT Hackathon · #12 · 2026",
      description:
        "A Web3 real-world asset (RWA) project built during ETHJKT. Pandu explores how onchain rails can make real-world assets easier to access and use.",
      tags: ["Web3", "RWA", "Ethereum", "Hackathon"],
      image: "/ethjkt.png",
      github: "https://github.com/PANDUWEB3/pandu",
    },
  ],
  hackathons: [
    {
      title: "GDGoC ITB STACK 2026",
      location: "Bandung, Indonesia",
      dates: "Top Semifinalist (In Progress) · 2026",
      logoUrl: "/gdg.svg",
      description:
        "Building Guyub, an all-in-one event operations platform for communities and campus organizations using Flutter Web and Firebase. Currently advancing as a Top Semifinalist.",
      github: "https://github.com/wakhidpangestu/guyub",
    },
    {
      title: "LOGICODIX 2026",
      location: "Surabaya, Indonesia",
      dates: "#10 Top Semifinalist · 2026",
      logoUrl: "/logicodix.png",
      description:
        "Built ZAP (Zero Answer Policy) with team unindra_coders—a Socratic cognitive AI math tutor and real-time 3D interactive whiteboard powered by Three.js/WebGL and SymPy deterministic verification.",
      github: "https://github.com/wakhidpangestu/ZAP",
    },
    {
      title: "UINIC 8.0 — Web Development Competition",
      location: "Yogyakarta, Indonesia",
      dates: "#9 Top Semifinalist · 2026",
      logoUrl: "/uinic.png",
      description:
        "Led team Veritas to build Zaky, a federated zakat distribution verification network with 4-eyes segregation, append-only hash-chain audit trails, Ed25519 attestation, and an interactive 3D office simulation.",
      github: "https://github.com/wakhidpangestu/zaky",
    },
    {
      title: "ETHJKT Hackathon",
      location: "Jakarta, Indonesia",
      dates: "#12 · Ethereum Jakarta · 2026",
      logoUrl: "/ethjkt.png",
      description:
        "Built Pandu, a Web3 RWA project, alongside other Indonesian builders. The weekend was a focused sprint of product thinking, rapid prototyping, and sharing ideas with the local Ethereum community.",
      github: "https://github.com/wakhidpangestu",
    },
  ],
  work: [
    {
      company: "ZenLab Studio",
      location: "Jakarta, Indonesia",
      title: "Founder, CTO & Software Engineer",
      start: "August 2023",
      end: "Present",
      highlights: [
        "Founded a SaaS startup and software engineering studio building custom business software and digital products for UMKM through enterprise clients.",
        "Architected and shipped end-to-end web applications, SaaS platforms, and APIs using TypeScript, React, Next.js, Node.js, and SQL databases.",
        "Expanded into hardware services through Teknify.id, a home-service division providing on-demand gadget diagnostics, repair, and maintenance.",
        "Led product strategy, system architecture, engineering execution, deployment, and client operations.",
      ],
    },
    {
      company: "CV. Fenta Mitra Teknologi",
      location: "Pancoran Mas, Indonesia",
      title: "IT Support Technician",
      start: "January 2023",
      end: "May 2023",
      highlights: [
        "Installed and configured Windows across 30+ organizational workstations.",
        "Diagnosed hardware, software, and network issues; configured local network devices, printers, and peripherals.",
        "Performed preventive maintenance, operating system deployment, software updates, and Active Directory account support.",
        "Documented recurring support procedures and assisted users with technical troubleshooting.",
      ],
    },
  ],
  education: [
    {
      school: "Universitas Indraprasta PGRI (UNINDRA)",
      degree: "Bachelor of Technology, Informatics Engineering",
      href: "https://www.unindra.ac.id/",
      logoUrl: "/unindra.png",
      start: "July 2024",
      end: "September 2028",
      detail: "GPA: 3.72",
      coursework:
        "Java Programming, Database Design, SQL, Backend Development, Object-Oriented Programming, Data Structures & Algorithms",
    },
    {
      school: "SMK Negeri 3 Depok",
      degree: "High School Diploma, Computer and Network Engineering",
      href: "https://www.smkn3depok.sch.id/",
      logoUrl: "/1643812092153.jpg",
      start: "June 2021",
      end: "March 2024",
      detail: "Grade: 87",
      coursework:
        "Network Configuration, MikroTik RouterOS, Cisco Packet Tracer, Linux & Windows Administration, HTML / CSS / JavaScript, Java, SQL, Git",
    },
  ],
  certifications: [
    { name: "Ethereum Builder", issuer: "HackQuest", date: "" },
    { name: "Arbitrum Builder", issuer: "HackQuest", date: "" },
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "CloudSewa", date: "January 2024" },
    { name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", date: "June 2024" },
    { name: "Certificate of Appreciation - Speaker, Breaking Into Data & AI", issuer: "Dicoding Community Network UNINDRA", date: "January 2026" },
    { name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", date: "December 2025 - expires December 2028" },
  ],
} as const;
