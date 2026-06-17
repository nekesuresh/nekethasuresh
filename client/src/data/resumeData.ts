export const resumeData = {
  personalInfo: {
    name: "NEKETHA SURESH",
    title: "Full Stack & AI Engineer",
    summary: "Full stack engineer who has often been the early engineer on small teams, the person who builds the product and the pipeline that ships it. Over three years has taken clinical and B2B tools from rough prototype to production, owning React and FastAPI end to end, standing up the containerized CI/CD that deploys them, and turning real user behavior into the signal that makes the product better.",
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
      title: "Founding Engineer (Full Stack, Contract)",
      company: "BlueRobins",
      location: "Berkeley, CA · UC Berkeley SkyDeck Pad-13",
      period: "Dec 2025 – Apr 2026",
      responsibilities: [
        "Rebuilt an early stage codebase into a production Next.js and PostgreSQL platform, shipping the first live deployment in 5 weeks and leaving a stable v1, including AI powered chat, in active customer use.",
        "Designed a multi role PostgreSQL schema with RBAC across 4 user types spanning enrollment, scheduling, and payments.",
        "Integrated Stripe webhook handling for 7 subscription lifecycle events (failed payments, plan changes, refunds), powering reliable subscription commerce.",
        "Accelerated prototype to production with GitHub Copilot and Cursor, and onboarded 3 interns through 30+ PR reviews, written code quality standards, and a structured ramp to independent contributors."
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Sedna Consulting Group",
      location: "Remote (US)",
      period: "May 2025 – Aug 2025",
      responsibilities: [
        "Partnered with internal stakeholders to scope and prototype a cloud based multi agent RAG system for RFP review (Python, FastAPI, LangChain) with retrieval and drafting agents, a human in the loop, and source documents stored in Amazon S3, iterating across 3 review cycles with 6 reviewers and cutting manual review time about 45% on covered workflows.",
        "Owned the feature end to end, from requirements through post launch tuning, containerizing the service with Docker and shipping it to the team's AWS EKS cluster, and turning a rough concept into a shipped internal product.",
        "Designed, built and demoed a real time offline LLM application (Ollama, Svelte) for the NACo Conference."
      ]
    },
    {
      title: "Full Stack Software Engineer",
      company: "Apollo Trident",
      location: "Remote (US)",
      period: "May 2022 – May 2025",
      responsibilities: [
        "Embedded as an early engineer on a clinical triage platform used daily by 150+ doctors, nurses, and intake staff across 6 hospital departments, wearing full stack and infrastructure hats and growing from frontend tickets to owning mid sized features and the delivery pipeline.",
        "Contributed to building full stack web applications across Python, TypeScript, JavaScript, React, HTML, and CSS: intake UI, FastAPI services, a PostgreSQL schema spanning 50+ symptom and vitals fields, SQLite for local and test data, and Amazon S3 for clinical document and image storage.",
        "Helped build and operate the platform's GitLab CI/CD and containerized deployment, shipping Docker images to Kubernetes on AWS EKS with Helm charts, which cut release friction across the team.",
        "Supported the build and maintenance of a shared frontend component library and design tokens used across product modules, keeping interfaces consistent and accelerating UI build.",
        "Built internal dashboards that pulled live data from the platform's APIs into SQL backed views, giving the team visibility into adoption, usage, and release health.",
        "Built and owned an override with reason flow on the triage recommendation engine that turned live clinician usage into an evaluation signal, lifting reason capture from near zero to 90%+ and recommendation acceptance to about 80%, and cut average intake from about 12 minutes to under 4.",
        "Worked in an Agile team, integrated GitHub Copilot to speed development, ran user testing and a 3 week pilot per release, and mentored newer engineers."
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
      subtitle: "Full Stack Software Engineer · May 2022 — May 2025 · Healthcare client",
      description: "Contributed across React, TypeScript, and Python on a daily-use intake tool serving 150+ clinicians and intake staff across 6 hospital departments. Grew from frontend tickets to owning mid-sized features end-to-end. Triage intake cut from ~12 min to under 4 min per patient · ~80% recommendation acceptance from nurses. Screenshots and client name protected — happy to discuss on a call.",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "AWS EKS"],
      status: "NDA" as const,
      liveLink: null
    },
    {
      title: "RFP Review Tool",
      subtitle: "AI Intern · Sedna Consulting · May — Aug 2025",
      description: "Scoped and prototyped a cloud-based multi-agent RAG system for RFP review with retrieval and drafting agents, a human-in-the-loop, and source documents stored in Amazon S3. Iterating across 3 review cycles with 6 reviewers, cutting manual review time ~45% on covered workflows. Containerized with Docker and shipped to AWS EKS. Internal tool — happy to walk through architecture on a call.",
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
    languages: [
      "Python", "TypeScript", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3",
      "React", "Next.js", "Tailwind CSS", "design systems", "CSS tokens", "shared component libraries"
    ],
    backend: [
      "FastAPI", "Node.js", "REST APIs", "webhooks", "PostgreSQL", "SQLite",
      "Supabase", "Redis", "Amazon S3"
    ],
    devops: [
      "Docker", "Kubernetes", "AWS EKS", "Helm", "GitLab CI/CD", "GitHub Actions",
      "CI/CD", "git workflow automation", "data pipelines", "Agile"
    ],
    ai: [
      "Prompt engineering", "AI agents & tool use", "GitHub Copilot", "Cursor",
      "RAG", "pgvector", "evals", "Langfuse", "structured outputs",
      "OpenAI", "Anthropic (Claude)", "Gemini", "LangChain"
    ]
  }
};
