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
      title: "Web3 & Smart Contracts",
      skills: [
        "Solidity",
        "Ethereum",
        "Arbitrum",
        "EVM",
        "Smart Contract Development",
        "Ethers.js",
        "Wallet Integration",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
      ],
    },
    {
      title: "AI & Developer Tools",
      skills: [
        "AI / ML Fundamentals",
        "LLMs",
        "RAG",
        "AI Agents",
        "LangChain",
        "Git",
        "Vercel",
        "AWS",
      ],
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
      title: "Pandu",
      dates: "ETHJKT Hackathon · 2026",
      description:
        "A Web3 real-world asset (RWA) project built during ETHJKT. Pandu explores how onchain rails can make real-world assets easier to access and use.",
      tags: ["Web3", "RWA", "Ethereum", "Hackathon"],
      image: "/ethjkt.png",
      github: "https://github.com/PANDUWEB3/pandu",
    },
  ],
  hackathons: [
    {
      title: "ETHJKT Hackathon",
      location: "Jakarta, Indonesia",
      dates: "Ethereum Jakarta · 2026",
      logoUrl: "/ethjkt.png",
      description:
        "Built Pandu, a Web3 RWA project, alongside other Indonesian builders. The weekend was a focused sprint of product thinking, rapid prototyping, and sharing ideas with the local Ethereum community.",
      github: "https://github.com/wakhidpangestu",
    },
  ],
  work: [
    {
      company: "Freelance",
      location: "Jakarta, Indonesia",
      title: "Freelance Software Engineer",
      start: "May 2024",
      end: "Present",
      highlights: [
        "Built responsive landing pages, company profiles, and CMS platforms with HTML5, TypeScript, React, and Next.js.",
        "Integrated REST APIs with PHP or Node.js and SQL backends to deliver complete web products.",
        "Created polished interfaces with SCSS / SASS, animation, and reusable UI components.",
        "Managed client work from requirements gathering through deployment on Vercel and AWS.",
      ],
    },
    {
      company: "Dicoding Community Network UNINDRA",
      location: "Jakarta, Indonesia",
      title: "Technical Mentor",
      start: "November 2025",
      end: "May 2026",
      highlights: [
        "Mentored the AI Engineer learning path across Python, AI / ML fundamentals, LLMs, RAG, AI Agents, LangChain, and API integration.",
        "Delivered AI Engineering sessions on emerging technology, career paths, and practical engineering skills.",
        "Guided hands-on projects and contributed to learning activities and technical content for the community program.",
      ],
    },
    {
      company: "ZenLabs",
      location: "Jakarta, Indonesia",
      title: "Founder & Freelance Developer",
      start: "August 2023",
      end: "Present",
      highlights: [
        "Founded a freelance technology brand serving individuals, startups, and small businesses with end-to-end digital solutions.",
        "Designed and developed websites, responsive interfaces, and custom web applications using React, JavaScript, and Tailwind CSS.",
        "Led requirements, UI / UX design, development, deployment, maintenance, and client support.",
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
