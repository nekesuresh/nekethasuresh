export const resumeData = {
  personalInfo: {
    name: "NEKETHA SURESH",
    title: "Full Stack & AI Engineer",
    summary: "Full Stack & AI Engineer with experience building production systems, LLM-powered tools, and clinical software.",
  },
  contactInfo: {
    location: "San Francisco, CA",
    email: "sureshneketha@gmail.com",
    phone: "+1 (704)-222-6867",
    linkedin: "https://www.linkedin.com/in/nekethasuresh/",
    github: "https://github.com/nekesuresh",
    citizenship: "US Citizen"
  },
  education: [
    {
      institution: "University of North Carolina at Charlotte",
      degree: "Master of Science in Computer Science",
      gpa: "3.77/4",
      location: "Charlotte, North Carolina",
      period: "2023 - 2025",
      courses: [
        "AI-Driven Development",
        "Network Based Application Development",
        "Data Structures and Algorithms",
        "Software System Design and Implementation",
        "Database Management Systems",
        "Big Data Analytics",
        "Visual Analytics",
        "Knowledge Discovery in Databases"
      ]
    },
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      gpa: "8.2/10",
      location: "Chennai, Tamil Nadu",
      period: "2019 - 2023",
      campusInvolvement: [
        "Research Assistant, School of Computer Science and Engineering",
        "Associate Head of Marketing, Roteract Club VIT Chennai",
        "Head of Visual Content, GirlUp VIT Chennai",
        "Content Writer, GirlUp VIT Chennai"
      ]
    }
  ],
  experiences: [
    {
      title: "Founding Engineer (Full Stack, Contract)",
      company: "BlueRobins",
      location: "Berkeley, CA · UC Berkeley Skydeck Pad-13",
      period: "Dec 2025 – Apr 2026",
      responsibilities: [
        "Joined as the founding engineer rebuilding the platform from an early-stage codebase into a production-ready Next.js + PostgreSQL system, shipping the first live deployment within 5 weeks and leaving behind a stable v1 with all core features and AI-powered chat in active use by customers.",
        "Designed a multi-role PostgreSQL schema with role-based access control supporting 4 distinct user roles across enrollment, scheduling, and payments.",
        "Built backend infrastructure including Stripe webhook handling for 7 subscription lifecycle events, covering edge cases like failed payments, plan changes, and refunds.",
        "Owned onboarding for 3 interns who joined post-launch, guiding them through 30+ pull request reviews and establishing shared code quality standards."
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Sedna Consulting Group",
      location: "Philadelphia, PA",
      period: "May 2025 – Aug 2025",
      responsibilities: [
        "Worked directly with internal stakeholders to scope and prototype an RFP review tool using Python, FastAPI, and LangChain, iterating with feedback from 6 reviewers across 3 review cycles.",
        "Owned the feature end-to-end from gathering requirements through deployment and post-launch tuning, reducing manual review time by ~45% on the workflows it covered.",
        "Built an integration layer connecting ClickUp, Excel, and SQL data sources so executives could pull common reports in seconds, cutting time-to-data from hours to under 30 seconds on the top 10 queries.",
        "Designed and launched an AI-powered interactive game with Ollama and Svelte, showcased at the NACo Conference, engaging 37+ participants and increasing lead captures."
      ]
    },
    {
      title: "Full Stack Software Engineer",
      company: "Apollo Trident",
      location: "Remote",
      period: "May 2023 – May 2025",
      responsibilities: [
        "Joined as an early engineer contributing to a clinical triage tool used daily by 150+ doctors, nurses, and intake staff across 6 hospital departments.",
        "Worked across the React, TypeScript, and Python stack, including the React intake UI, FastAPI services, and a PostgreSQL schema covering 50+ symptom and vitals fields, growing from frontend tickets to owning mid-sized features end-to-end by year 3.",
        "Sat in on 4 rounds of user testing and a 3-week pilot per major release, working alongside senior engineers to translate clinician and hospital admin feedback into shippable changes.",
        "Contributed to a project that cut average triage intake time from ~12 to under 4 minutes per patient, reached ~80% recommendation acceptance from nurses, and closed most post-launch issues within a day or two."
      ]
    }
  ],
  researchExperience: [],
  projects: [
    {
      title: "BlueRobins Platform",
      subtitle: "Founding Engineer · Dec 2025 — Apr 2026",
      description: "Rebuilt an early-stage codebase into a production-ready Next.js + PostgreSQL system. Shipped first live deployment in 5 weeks and left behind a stable v1 with AI-powered chat in active use by customers. v1 shipped in 5 weeks · 4 user roles · 7 Stripe lifecycle events · mentored 3 interns through 30+ PRs.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "RBAC", "LLM chat"],
      status: "Live" as const,
      liveLink: "https://my.bluerobins.com"
    },
    {
      title: "Clinical Triage Tool",
      subtitle: "Full Stack & AI Engineer · May 2023 — May 2025 · Healthcare client",
      description: "Contributed across React, TypeScript, and Python on a daily-use intake tool serving 150+ clinicians and intake staff across 6 hospital departments. Grew from frontend tickets to owning mid-sized features end-to-end. Triage intake cut from ~12 min to under 4 min per patient · ~80% recommendation acceptance from nurses. Screenshots and client name protected — happy to discuss on a call.",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      status: "NDA" as const,
      liveLink: null
    },
    {
      title: "RFP Review Tool",
      subtitle: "AI Intern · Sedna Consulting · May — Aug 2025",
      description: "Scoped and prototyped an LLM-powered RFP review tool with 6 internal reviewers across 3 review cycles. Owned the feature end-to-end — requirements through deployment and post-launch tuning. ~45% reduction in manual review time on covered workflows. Internal tool — happy to walk through architecture on a call.",
      technologies: ["Python", "FastAPI", "LangChain", "RAG"],
      status: "NDA" as const,
      liveLink: null
    },
    {
      title: "Executive Reporting Layer",
      subtitle: "AI Intern · Sedna Consulting · Summer 2025",
      description: "Built an integration layer connecting ClickUp, Excel, and SQL sources so executives could pull common reports in seconds instead of waiting on manual data pulls. Time-to-data on top 10 queries cut from hours to under 30 seconds. Internal tool — happy to discuss the integration design.",
      technologies: ["Python", "ClickUp API", "SQL", "Excel automation"],
      status: "NDA" as const,
      liveLink: null
    },
    {
      title: "NACo Interactive AI Game",
      subtitle: "Sedna · NACo Conference · Summer 2025",
      description: "AI-powered interactive game built to engage conference attendees and capture leads. Designed, built, and demoed the experience on the floor. 37+ participants engaged · measurable lift in lead capture.",
      technologies: ["Svelte", "Ollama", "Local LLM"],
      status: "Open source" as const,
      liveLink: "https://github.com/nekesuresh/sednagame-small"
    },
    {
      title: "IntelliClaim.ai",
      subtitle: "AI-driven Insurance Claims Assessment Solution",
      description: "Engineered and deployed IntelliClaim.ai, utilizing Python, TensorFlow, and React to incorporate multimodal AI, enhancing the accuracy of insurance claims processing and reducing fraud identification false positives by 30%.",
      technologies: ["Python", "TensorFlow", "React", "Machine Learning"],
      status: "Academic" as const,
      liveLink: "https://devpost.com/software/intelliclaim-ai"
    },
    {
      title: "Dr. COCO",
      subtitle: "AI-Powered Mental Health Support Tool for Children",
      description: "Engineered Dr. COCO, an AI chatbot leveraging Python, Flask, and OpenAI to identify early mental health issues in children, utilizing interactive games and storytelling for engagement.",
      technologies: ["Python", "Flask", "OpenAI", "NLP"],
      status: "Academic" as const,
      liveLink: "https://devpost.com/software/dr-coco"
    },
    {
      title: "Antibiotic Resistance Prediction",
      subtitle: "Capstone Project: Predicting Antibiotic Resistance in Azithromycin and Ciprofloxacin",
      description: "Compared four machine learning models (XGBoost, Random Forest, SVM, Elastic Net) for antibiotic resistance prediction, with Random Forest achieving 91% accuracy and Elastic Net the fastest training time at 0.05 seconds per fold. Conducted 5-fold cross-validation on bacterial resistance phenotypes.",
      technologies: ["Python", "Machine Learning", "Random Forest", "XGBoost", "SVM"],
      status: "Academic" as const,
      liveLink: "https://drive.google.com/file/d/1Z45NBbfQfl9ZxcwYZ_fHH-U-WRSNYKkb/view?usp=sharing"
    },
    {
      title: "K Means Clustering with DTW Metric",
      subtitle: "Time Series Classification Using Dynamic Time Warping",
      description: "Implemented the DTW algorithm to find the best alignment between time series data using dynamic programming algorithms similar to the needleman-wunsch algorithm. Used DTW distance to classify time series data with KNN, achieving performance comparable to LSTM models.",
      technologies: ["Python", "Dynamic Programming", "K-Means", "Multiprocessing", "Time Series Analysis"],
      status: "Academic" as const,
      liveLink: "https://github.com/nekesuresh/K-Means-Clustering-with-DTW-Metric"
    }
  ],
  skills: {
    programming: [
      "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"
    ],
    backend: [
      "Node.js", "FastAPI", "REST APIs", "Webhooks", "PostgreSQL", "Supabase", "Git", "CI/CD", "Docker"
    ],
    ai: [
      "LangChain", "LLM Integration", "RAG", "Vector Search", "OpenAI API", "Anthropic API", "Prompt Engineering", "System Design", "Rapid Prototyping"
    ]
  }
};
