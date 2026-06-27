export const resumeData = {
  personalInfo: {
    name: "NEKETHA SURESH",
    title: "Technical Product Manager & AI Builder",
    summary: "Technical Product Manager with three years owning AI products end to end, engineer by background. I work close to users and to ML and backend teams alike: reading the design docs, defining the eval metrics, and making the quality, latency, cost, and reliability trade-offs that turn nondeterministic model behavior into product users trust.",
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
      gpa: "3.77/4.00",
      location: "Charlotte, North Carolina",
      period: "2023 – 2025",
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
      period: "2019 – 2023",
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
      title: "Founding Engineer, Product Lead",
      company: "BlueRobins",
      location: "Berkeley, CA · UC Berkeley SkyDeck Pad-13",
      period: "Dec 2025 – Apr 2026",
      responsibilities: [
        "Shipped v1 in 5 weeks as the founding product and engineering lead: interviewed customers and the founder to isolate the real problem, prototyped with the designer in Cursor and GitHub Copilot, and validated each build with users before and after release.",
        "Led 3 interns to independent feature ownership across 30+ PR reviews, set the code quality and review standards that scaled the platform to 250 users, and kept velocity high with tight documentation and relentless feedback loops.",
        "Drove core product calls with the CEO and SkyDeck mentors: ran pricing experiments to find the packaging that stuck, and used product usage analytics to decide what to build, keep, and cut before scaling.",
        "Wrote the PRDs and shipped the build for multi-role access across 4 user types and Stripe webhook handling across 7 subscription lifecycle events, powering reliable subscription commerce."
      ]
    },
    {
      title: "AI Operations Associate",
      company: "Sedna Consulting Group",
      location: "Philadelphia, PA (Remote)",
      period: "May 2025 – Aug 2025",
      responsibilities: [
        "Owned an internal AI product end to end: a multi-agent RAG system (Python, FastAPI, LangChain) that auto-drafts RFP responses behind human-in-the-loop approval gates. Scoped it with the internal RFP writer, prototyped, deployed, and tuned, cutting drafting and review time ~45% (200+ hours per quarter across 10+ clients).",
        "Defined the approval gates and eval checks that kept generated drafts trustworthy, then demoed the tool at the NACo Conference to 37+ external stakeholders, validating product-market signals and capturing qualified leads."
      ]
    },
    {
      title: "Associate Product Manager",
      company: "Apollo Trident",
      location: "Dallas, TX (Remote)",
      period: "May 2022 – May 2025",
      responsibilities: [
        "Owned the flagship override-with-reason feature from insight to launch on an AI clinical triage platform used daily by 150+ clinicians across 6 hospital departments: sat with clinicians, saw they overrode the model's triage recommendations with no way to capture why, then wrote the specs, partnered with engineering, and ran a 3-week pilot as the go-live gate. Reason capture rose from near zero to 90%+ and recommendation acceptance lifted to ~80%.",
        "Turned that override signal into the team's quality loop: instrumented structured reason capture as labeled human feedback, defined the acceptance and override metrics that became the north star for recommendation quality, and used them to surface where model guidance drifted from clinical judgment.",
        "Cut triage intake time 65% (about 12 minutes to under 4) by iterating workflow design on user feedback, A/B testing changes, and validating each release before rollout, trading speed against clinician trust at every step.",
        "Influenced a roadmap call without authority: ran a demand gap analysis across 50+ clinical fields (SQL, Python), recommended reallocating staffing to three under-served units, and won leadership approval, lifting patient flow throughput ~18% the next quarter."
      ]
    }
  ],
  researchExperience: [],
  projects: [
    {
      title: "BlueRobins Platform",
      subtitle: "Founding Engineer, Product Lead · Dec 2025 — Apr 2026",
      description: "Shipped v1 in 5 weeks as the founding product and engineering lead. Scaled to 250 users with AI-powered chat, multi-role access, and reliable Stripe subscription commerce. Ran pricing experiments, used usage analytics to decide what to build, and led 3 interns through 30+ PRs.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "RBAC", "LLM chat"],
      status: "Live" as const,
      liveLink: "https://my.bluerobins.com"
    },
    {
      title: "Clinical Triage Tool",
      subtitle: "Associate Product Manager · May 2022 — May 2025 · Healthcare client",
      description: "Owned the override-with-reason feature on an AI triage platform used daily by 150+ clinicians across 6 hospital departments. Reason capture rose from near zero to 90%+, recommendation acceptance to ~80%, and intake time dropped 65% (~12 min to under 4). Screenshots and client name protected — happy to discuss on a call.",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Python", "SQL"],
      status: "NDA" as const,
      liveLink: null
    },
    {
      title: "RFP Review Tool",
      subtitle: "AI Operations Associate · Sedna Consulting · May — Aug 2025",
      description: "Owned an internal AI product end to end: a multi-agent RAG system that auto-drafts RFP responses behind human-in-the-loop approval gates. Cut drafting and review time ~45% (200+ hours per quarter across 10+ clients). Defined eval checks that kept generated drafts trustworthy. Internal tool — happy to walk through the product and architecture on a call.",
      technologies: ["Python", "FastAPI", "LangChain", "RAG", "Amazon S3", "Docker", "AWS EKS"],
      status: "NDA" as const,
      liveLink: null
    },
    {
      title: "Agentic Ingredient Analyzer",
      subtitle: "Personal Project · 2026",
      description: "Consumer web app (Next.js, FastAPI, Python) that breaks down product ingredient lists with a multi-step LLM agent: tool use to look up ingredients, RAG over a curated reference corpus (Postgres and pgvector), and structured outputs that flag concerns and explain them in plain language, gated by an evals harness that catches quality regressions before release.",
      technologies: ["Next.js", "FastAPI", "Python", "PostgreSQL", "pgvector", "RAG", "LLM agents"],
      status: "Live" as const,
      liveLink: null
    },
    {
      title: "NACo Interactive AI Game",
      subtitle: "Sedna · NACo Conference · Summer 2025",
      description: "AI-powered interactive game built to engage conference attendees and capture leads. Designed, built, and demoed the experience on the floor — then used it as a live product-market signal validation. 37+ participants engaged · measurable lift in lead capture.",
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
    aiSystems: [
      "LLM-based systems", "multi-agent systems", "RAG", "eval frameworks",
      "offline metrics", "online experiments", "human feedback", "prompt & pipeline iteration",
      "hallucination mitigation", "bias & drift mitigation", "guardrails", "human-in-the-loop"
    ],
    product: [
      "PRDs & specs", "acceptance criteria", "roadmap prioritization",
      "quality / latency / cost / reliability trade-offs", "A/B testing & experimentation",
      "product usage analytics", "zero-to-one product", "pricing experiments"
    ],
    engineering: [
      "Python", "FastAPI", "LangChain", "SQL", "system design",
      "technical design docs", "Tableau", "Power BI", "QuickSight"
    ],
    leadership: [
      "founding team leadership", "mentorship", "stakeholder management"
    ]
  }
};
