export interface Skill {
  label: string;
  icon?: string;
  iconType?: "iconify" | "local"; // iconify = Icon component, local = img from public/logos
}

export const domains: Skill[] = [
  { label: "Machine Learning" },
  { label: "Data Science" },
  { label: "Data Analysis" },
  { label: "Natural Language Processing (NLP)" },
  { label: "Language Models (LMs)" },
  { label: "Knowledge Graphs" },
  { label: "Semantic Web" },
  { label: "Retrieval Augmented Generation (RAG)" },
  { label: "AI Agents" },
  { label: "Entity Resolution" },
  { label: "API Development" },
  { label: "Model Context Protocol (MCP)" },
  { label: "SQL" },
  { label: "Data Engineering" },
  { label: "Data Pipelines" },
  { label: "Data Clean Rooms" },
  { label: "Data Visualization" },
  { label: "Web Development" },
];

export const technologies: Skill[] = [
  { label: "Python", icon: "devicon:python" },
  { label: "MySQL", icon: "devicon:mysql" },
  { label: "PostgreSQL", icon: "devicon:postgresql" },
  { label: "R", icon: "devicon:r" },
  { label: "C++", icon: "devicon:cplusplus" },
  { label: "LangChain", icon: "logos/langgraph-color.svg", iconType: "local" },
  { label: "LangGraph", icon: "logos/langgraph-color.svg", iconType: "local" },
  { label: "Neo4j", icon: "devicon:neo4j" },
  { label: "OpenAI API", icon: "simple-icons:openai" },
  { label: "Anthropic API", icon: "simple-icons:anthropic" },
  {
    label: "Hugging Face",
    icon: "logos/huggingface-color.svg",
    iconType: "local",
  },
  { label: "FastAPI", icon: "devicon:fastapi" },
  { label: "Pandas", icon: "devicon:pandas" },
  { label: "NumPy", icon: "devicon:numpy" },
  { label: "Scikit-learn", icon: "devicon:scikitlearn" },
  { label: "Jupyter", icon: "devicon:jupyter" },
  { label: "Power BI", icon: "logos/power-bi-icon.png", iconType: "local" },
  { label: "Excel", icon: "logos/excel.svg", iconType: "local" },
  {
    label: "Google Analytics",
    icon: "logos/google_analytics-icon.svg",
    iconType: "local",
  },
  { label: "PySpark", icon: "devicon:apachespark" },
  { label: "Flask", icon: "devicon:flask" },
  { label: "Git", icon: "devicon:git" },
  { label: "VS Code", icon: "devicon:vscode" },
  { label: "Linux", icon: "devicon:linux" },
  { label: "BigQuery ML", icon: "logos/BigQuery.svg", iconType: "local" },
  { label: "Snowflake", icon: "logos/snowflake.svg", iconType: "local" },
  { label: "Azure AI", icon: "devicon:azure" },
  { label: "Google Vertex AI", icon: "devicon:googlecloud" },
  {
    label: "Google Gemini Enterprise",
    icon: "logos/google-gemini-enterprise.svg",
    iconType: "local",
  },
  { label: "Tableau", icon: "logos/tableau-icon.svg", iconType: "local" },
  { label: "R Studio", icon: "devicon:rstudio" },
  {
    label: "Google Studio",
    icon: "logos/google-datastudio.svg",
    iconType: "local",
  },
  {
    label: "Flourish",
    icon: "logos/flourish-icon-only.svg",
    iconType: "local",
  },
  { label: "Weka", icon: "logos/weka.svg", iconType: "local" },
  { label: "Astro", icon: "devicon:astro" },
  { label: "TypeScript", icon: "devicon:typescript" },
  { label: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { label: "HTML/CSS", icon: "devicon:html5" },
  { label: "JavaScript", icon: "devicon:javascript" },
  { label: "GitHub Actions", icon: "devicon:githubactions" },
  { label: "GitHub Pages", icon: "devicon:github" },
];

export const languages = [
  { flag: "\u{1F1EC}\u{1F1E7}", name: "English" },
  { flag: "\u{1F1F5}\u{1F1F0}", name: "Urdu" },
  { flag: "\u{1F1E9}\u{1F1EA}", name: "German" },
  { flag: "\u{1F1F5}\u{1F1F0}", name: "Punjabi" },
];

export interface FeaturedCertification {
  text: string;
  badgeUrl?: string;
  certificateUrl?: string;
  badgeAlt?: string;
  textSize?: string;
}

export const featuredCertifications: FeaturedCertification[] = [
  {
    text: "Google Certified Generative AI Leader",
    badgeUrl:
      "/certificates/gcp_gen_ai_leader/generative-ai-leader-certification.png",
    certificateUrl:
      "/certificates/gcp_gen_ai_leader/Generative AI Leader certificate.pdf",
    badgeAlt: "Google Generative AI Leader certification badge",
    textSize: "text-sm md:text-base", // Smaller text
  },
  {
    text: "RSS Certified Professional Data Scientist and Data Analyst",
    textSize: "text-sm md:text-base",
  },
];

export const publications = [
  {
    title: "Features matching using natural language processing",
    journal: "International Journal on Cybernetics & Informatics (IJCI)",
    date: "Mar 24, 2023",
    abstract:
      "The feature matching is a basic step in matching different datasets. This article shows a new hybrid model of a pretrained Natural Language Processing (NLP) based model called BERT used in parallel with a statistical model based on Jaccard similarity to measure the similarity between list of features from two different datasets. This reduces the time required to search for correlations or manually match each feature from one dataset to another.",
    link: "https://arxiv.org/abs/2303.12804",
  },
  {
    title:
      "Analysis Photovoltaic System in Relation to Tracking and Non-Tracking System",
    journal: "Journal of Fundamentals of Renewable Energy and Applications",
    date: "Feb 15, 2021",
    abstract:
      "The increasing demand of electricity has been a great concern in recent years. The increasing demand and environmental (global warming) issues urged scientists to evolve in the field of renewable energy. Solar energy is one of the major sources of renewable energy. Electrical energy is produced by photovoltaic cells when they allow light particles to knock free electrons from atoms. The amount of electrical output produced by the system is dependent on amount of solar energy received by PV cells. To increase solar energy output, a fixed solar panel inclined towards the optimal point is usually used. The collection of solar energy is increased by using solar tracking systems i.e. single axis or dual axis, which continuously track the sun using incidence angle of sunlight. The analysis is carried out to compare the performance between tracking and non-tracking photovoltaic systems. Data of specific solar panel systems is analysed and compared with simulations and actual outputs to compute performance ratios and deduce conclusions. The average performance ratio is found out to be 0.73 for non-tracking system and 0.90 (17% more than non-tracking systems) for tracking systems. The accuracy of estimated output of a PV system can be improved by using more accurate solar irradiance data, accurate weather conditions, exact system losses and matched inverter efficiency. The efficiency of a PV system can be improved by using solar trackers, using more efficient solar panels, installing them in a less shaded area, cleaning the panels on regular intervals, and using more efficient electrical components.",
    link: "https://clok.uclan.ac.uk/36933/1/36933%20analysis-photovoltaic-system-in-relation-to-tracking-and-nontracking-system.pdf",
  },
];
