export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  gradient: string;
  textColor: string;
  tags: { label: string; isLightCard?: boolean }[];
  demoUrl: string;
  githubUrl: string;
  iconType: 'voltammetry' | 'oralabs';
  status: string;
  isOngoing?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  iconType:
    | 'python'
    | 'java'
    | 'swing'
    | 'jdbc'
    | 'sqlite'
    | 'git'
    | 'htmlcss'
    | 'dataanalysis'
    | 'ml'
    | 'cv'
    | 'powerbi'
    | 'excel'
    | 'genai'
    | 'copilot'
    | 'responsibleai'
    | 'ailiteracy';
}

export interface SocialLink {
  name: string;
  url: string;
  title: string;
  type: 'github' | 'email' | 'linkedin';
}

export const portfolioData = {
  personal: {
    name: "Vaka Abhiram",
    role: "Software Development",
    location: "Hyderabad, India",
    degree: "B.Tech in Computer Science and Engineering",
    college: "Keshav Memorial College of Engineering",
    graduationYear: "2028",
    github: "https://github.com/abhiram210106",
    email: "ganaanjan51@gmail.com",
    emailLink: "mailto:ganaanjan51@gmail.com",
    // -----------------------------------------------------------------------------------------
    // VERIFIED LINKEDIN PROFILE URL:
    // -----------------------------------------------------------------------------------------
    linkedinUrl: "https://www.linkedin.com/in/abhiram-vaka-92b549403/",
    certificates: [
      "Career Essentials in Generative AI",
      "Your Top AI Questions Answered: AI Literacy for Everyone",
    ],
    interests: [
      "Machine learning",
      "Computer vision",
      "Data analysis",
      "Web development",
    ],
  },
  hero: {
    name: "Vaka Abhiram",
    role: "Software Development",
  },
  about: {
    emojiSrc: "/assets/images/emoji.png",
    avatarSrc: "/assets/images/memoji-alt.png",
    introBold: "I'm Vaka Abhiram, a computer science student from Hyderabad, India.",
    paragraph1:
      "Building a foundation in computer science at Keshav Memorial College of Engineering, exploring machine learning, computer vision, data analysis, and software development through projects.",
    paragraph2:
      "Currently pursuing my B.Tech in Computer Science and Engineering at Keshav Memorial College of Engineering (Expected graduation: 2028).",
    location: "Hyderabad, India",
    educationLabel: "B.Tech CSE '28 • Keshav Memorial College of Engineering",
    certificationsLabel:
      "Certifications: Career Essentials in Generative AI • AI Literacy for Everyone",
  },
  makeThings: {
    heading: "I make things.",
    subheading:
      "I'm always looking for new challenges, exploring new technologies, and building meaningful solutions through machine learning and software development.",
    // EXACTLY TWO PROJECTS ONLY
    projects: [
      {
        id: "cv-ml-supercapacitor-bfo",
        title: "CV-ML Supercapacitor BFO",
        subtitle: "Machine Learning for Cyclic Voltammetry in Supercapacitor Materials",
        description:
          "A machine-learning application developed for cyclic voltammetry analysis, feature extraction, and electrochemical response modeling in supercapacitor materials.",
        gradient: "linear-gradient(220.55deg, #339AF0 0%, #364FC7 100%)",
        textColor: "text-neutral-100",
        tags: [
          { label: "PYTHON" },
          { label: "DATA ANALYSIS" },
          { label: "MACHINE LEARNING" },
          { label: "COMPUTER VISION" },
        ],
        demoUrl: "https://anirudhrao-24.github.io/cv-ml-supercapacitor-bfo/",
        githubUrl: "https://github.com/abhiram210106/cv-ml-supercapacitor-bfo",
        iconType: "voltammetry" as const,
        status: "Completed Project",
        isOngoing: false,
      },
      {
        id: "oralabspredict",
        title: "ORALABSPREDICT",
        subtitle: "Predictions of HIA & HOB from Chemical Structures",
        description:
          "An ongoing machine-learning project exploring predictions of human intestinal absorption (HIA) and human oral bioavailability (HOB) from chemical structures.",
        gradient: "linear-gradient(to top, #ecf2f7 0%, white 100%)",
        textColor: "text-neutral-900",
        tags: [
          { label: "MACHINE LEARNING", isLightCard: true },
          { label: "CHEMINFORMATICS", isLightCard: true },
          { label: "IN DEVELOPMENT", isLightCard: true },
        ],
        demoUrl: "https://oralabspredict-crq44pa2vrfxhdz6xkhptf.streamlit.app/",
        githubUrl: "https://github.com/abhiram210106/ORALABSPREDICT",
        iconType: "oralabs" as const,
        status: "Currently in development",
        isOngoing: true,
      },
    ] as Project[],
  },
  craftExperiences: {
    heading: "I craft experiences.",
    subheading:
      "Building a foundation in computer science at Keshav Memorial College of Engineering, exploring machine learning, computer vision, data analysis, and software development through projects.",
    // ONLY SUPPLIED SKILLS (no invented experience, no KMCE/Hyderabad as skills)
    items: [
      {
        id: "python",
        name: "Python",
        category: "CV-ML Supercapacitor BFO",
        iconType: "python" as const,
      },
      {
        id: "data-analysis",
        name: "Data Analysis",
        category: "CV-ML & Numerical Processing",
        iconType: "dataanalysis" as const,
      },
      {
        id: "ml",
        name: "Machine Learning",
        category: "CV-ML & Predictive Models",
        iconType: "ml" as const,
      },
      {
        id: "cv",
        name: "Computer Vision",
        category: "CV-ML Supercapacitor BFO",
        iconType: "cv" as const,
      },
      {
        id: "java",
        name: "Java",
        category: "Online Reservation System",
        iconType: "java" as const,
      },
      {
        id: "swing",
        name: "Java Swing",
        category: "Online Reservation System",
        iconType: "swing" as const,
      },
      {
        id: "jdbc",
        name: "JDBC",
        category: "Database Connectivity",
        iconType: "jdbc" as const,
      },
      {
        id: "sqlite",
        name: "SQLite",
        category: "Online Reservation System",
        iconType: "sqlite" as const,
      },
      {
        id: "git",
        name: "Git",
        category: "Version Control",
        iconType: "git" as const,
      },
      {
        id: "html-css",
        name: "HTML & CSS",
        category: "Web Presentation & UI",
        iconType: "htmlcss" as const,
      },
      {
        id: "power-bi",
        name: "Microsoft Power BI",
        category: "Data Visualization & Dashboards",
        iconType: "powerbi" as const,
      },
      {
        id: "excel",
        name: "Microsoft Excel",
        category: "Data Modeling & Spreadsheets",
        iconType: "excel" as const,
      },
      {
        id: "genai",
        name: "Generative AI",
        category: "Career Essentials in GenAI",
        iconType: "genai" as const,
      },
      {
        id: "copilot",
        name: "Microsoft 365 Copilot",
        category: "Productivity & AI Tools",
        iconType: "copilot" as const,
      },
      {
        id: "responsible-ai",
        name: "Responsible AI",
        category: "Ethical AI Concepts",
        iconType: "responsibleai" as const,
      },
      {
        id: "ai-literacy",
        name: "AI Literacy",
        category: "AI Literacy for Everyone",
        iconType: "ailiteracy" as const,
      },
    ] as SkillItem[],
  },
  contact: {
    heading: "I'd love to talk!",
    subheading:
      "I'm always looking to collaborate on projects, learn new technologies, or discuss machine learning and software development.",
    callToAction: "Now let's bring your projects to life.",
    email: "ganaanjan51@gmail.com",
    emailLink: "mailto:ganaanjan51@gmail.com",
    subtext: "Or reach out directly via email or GitHub.",
    avatarSrc: "/assets/images/memoji-contact.png",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/abhiram210106",
        title: "@abhiram210106 on GitHub",
        type: "github" as const,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhiram-vaka-92b549403/",
        title: "Visit my LinkedIn profile",
        type: "linkedin" as const,
      },
      {
        name: "Email",
        url: "mailto:ganaanjan51@gmail.com",
        title: "ganaanjan51@gmail.com",
        type: "email" as const,
      },
    ] as SocialLink[],
  },
};
