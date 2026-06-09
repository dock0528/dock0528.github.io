const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const languageToggles = [...document.querySelectorAll("[data-lang-toggle]")];
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const translations = {
  zh: {
    railName: "陳怡蓁",
    navAbout: "About",
    navResume: "Resume",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navAwards: "Awards",
    navContact: "Contact",
    profileName: "陳怡蓁",
    contactEmailLabel: "電子信箱",
    contactPhoneLabel: "電話",
    contactLocationLabel: "所在地",
    contactBirthLabel: "出生日期",
    contactEducationLabel: "學歷",
    contactLanguagesLabel: "語言",
    locationValue: "新北市，台灣",
    degreeValue: "NYCU 生物醫學資訊所 碩士",
    languageValue: "中文 • 英文 TOEIC 785",
    contactButton: "Contact",
    cvButton: "Download CV",
    heroTitle: "About me",
    heroLead:
      "我是具生物醫學資訊背景的資料分析者，熟悉資料清理、統計分析、機器學習建模與資料視覺化。能運用 Python、R 、Linux等工具處理複雜資料，並將分析結果轉化為清楚、可解釋且具決策價值的洞察。具備醫學資料分析與研究專案經驗，擅長結合資料科學方法與領域知識解決實際問題。",
    statEducationLabel: "Education",
    statEducationTitle: "NYCU 碩士",
    statEducationBody: "生物醫學資訊所",
    statPresentationLabel: "Presentation",
    statPresentationBody: "國際生物資訊研討會",
    statAwardLabel: "Award",
    statAwardBody: "生醫資訊所專題論文比賽",
    focusBioTitle: "生醫資料分析",
    focusBioBody:
      "分析生醫多體學資料，完成資料前處理、統計分析、特徵篩選與視覺化。",
    focusMlTitle: "機器學習建模",
    focusMlBody:
      "建立分類與預測模型，涵蓋特徵工程、模型訓練、效能評估與結果解讀。",
    focusWorkflowTitle: "研究流程建置",
    focusWorkflowBody:
      "運用 Python、R 與 Linux 建立研究分析流程，整合資料分析、結果彙整與圖表呈現。",
    educationHeading: "Education",
    experienceHeading: "Experience",
    skillCategoryOneTitle: "程式與資料處理",
    skillCategoryTwoTitle: "統計與建模",
    skillCategoryThreeTitle: "資料視覺化",
    skillCategoryFourTitle: "嵌入式系統與硬體應用",
    timelineNycuTitle: "國立陽明交通大學",
    timelineNycuBody:
      "生物醫學資訊所碩士，研究方向涵蓋多體學資料、Data Science 與 Data Analysis。",
    timelineNcuTitle: "國立中央大學",
    timelineNcuBody:
      "生醫科學與工程學系學士，培養生醫資料分析、程式設計與跨領域研究能力。",
    timelineTmrTitle: "台灣行銷研究有限公司 TMR",
    timelineTmrBody:
      "行銷資料科學分析實習生，參與資料前處理、特徵工程、模型建立、視覺化分析與商業結果解讀。",
    timelineTutorDate: "2020 - 至今",
    timelineTutorTitle: "國高中家教老師",
    timelineTutorBody:
      "教授數學、物理、化學與生物，累積長期教學、問題拆解與溝通表達經驗。",
    projectOneTitle: "Integrative analysis of breast cancer in TCGA for identification of potential microRNA diagnostic panel and uncovering oncogenic role",
    projectOneBody:
      "以 Python 與 R 建立微小核糖核酸與核糖核酸分析流程，涵蓋資料前處理、特徵篩選、機器學習分類與模型效能評估。",
    projectTwoTitle: "Elucidating Immune Dysregulation in Neuromyelitis Optica Spectrum Disorder Through Bulk and Single-Cell RNA-seq Characterization of Interferon-Related Gene Expression",
    projectTwoBody:
      "整合群體轉錄體與單細胞轉錄體資料，建立完整分析流程，涵蓋資料前處理、統計分析、特徵篩選與視覺化，並探討第一型干擾素在 NMOSD 免疫失調中的致病機制。",
    projectThreeTitle: "乳癌良惡性與肺癌發病因子預測",
    projectThreeBody:
      "運用資料前處理、特徵工程與機器學習模型，建立分類與預測流程，並完成模型評估與結果解讀。",
    projectFourTitle: "產品銷售量與房價預測",
    projectFourBody:
      "透過資料清理、特徵工程、視覺化與預測模型，將資料轉化為可解釋的商業與市場觀察。",
    awardOneTitle: "TSBME 生物醫學工程科技研討會口頭論文比賽",
    awardOneBody: "特優",
    awardTwoTitle: "生物醫學資訊所專題論文比賽",
    awardTwoBody: "第一名",
    awardThreeTitle: "臺灣神經免疫醫學會研討會口頭論文比賽",
    awardThreeBody: "第二名",
    awardFourTitle: "第 27 屆罕見疾病博碩士論文獎助學金",
    awardFourBody: "獲獎",
    awardFiveTitle: "ISMB 國際生物資訊研討會",
    awardFiveBody: "Poster 發表",
    awardSixTitle: "Ewant 課程證書",
    awardSixBody: "R 語言、資料科學",
    contactHeading: "Contact Me",
    contactInfoLabel: "聯絡資訊",
    contactCardTitle: "合作與職涯洽詢",
    contactBody:
      "歡迎正在尋找數據分析師、資料工程師或專案管理人才的人與我聯繫。我樂於討論資料分析、資料工程流程、機器學習建模、資料視覺化與跨部門專案協作機會，期待將資料轉化為清楚、可解釋且具決策價值的洞察。",
    contactEmailTitle: "電子信箱",
    contactPhoneTitle: "手機號碼",
    contactEmailButton: "直接寄信"
  },
  en: {
    railName: "YI-JEN CHEN",
    navAbout: "About",
    navResume: "Resume",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navAwards: "Awards",
    navContact: "Contact",
    profileName: "YI-JEN CHEN",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone",
    contactLocationLabel: "Location",
    contactBirthLabel: "Date of Birth",
    contactEducationLabel: "Education",
    contactLanguagesLabel: "Languages",
    locationValue: "NEW TAIPEI CITY, TAIWAN",
    degreeValue: "M.S. in Biomedical Informatics, NYCU",
    languageValue: "Mandarin • English TOEIC 785",
    contactButton: "Contact",
    cvButton: "Download CV",
    heroTitle: "About me",
    heroLead:
      "I am a data analyst with a biomedical informatics background, familiar with data cleaning, statistical analysis, machine learning modeling, and data visualization. I use Python, R, and Linux to process complex data and translate analytical results into clear, interpretable, decision-relevant insights. I have experience in medical data analysis and research projects, combining data science methods with domain knowledge to solve practical problems.",
    statEducationLabel: "Education",
    statEducationTitle: "NYCU M.S.",
    statEducationBody: "Biomedical Informatics",
    statPresentationLabel: "Presentation",
    statPresentationBody: "International bioinformatics conference",
    statAwardLabel: "Award",
    statAwardBody: "Biomedical Informatics thesis competition",
    focusBioTitle: "Biomedical Data Analysis",
    focusBioBody:
      "Analyze biomedical multi-omics data, covering preprocessing, statistical analysis, feature selection, and visualization.",
    focusMlTitle: "Machine Learning Modeling",
    focusMlBody:
      "Build classification and prediction models covering feature engineering, model training, performance evaluation, and result interpretation.",
    focusWorkflowTitle: "Research Workflow Setup",
    focusWorkflowBody:
      "Use Python, R, and Linux to build research analysis workflows that integrate data analysis, result summarization, and figure presentation.",
    educationHeading: "Education",
    experienceHeading: "Experience",
    skillCategoryOneTitle: "Programming & Data Processing",
    skillCategoryTwoTitle: "Statistics & Modeling",
    skillCategoryThreeTitle: "Data Visualization",
    skillCategoryFourTitle: "Embedded Systems & Hardware Applications",
    timelineNycuTitle: "National Yang Ming Chiao Tung University",
    timelineNycuBody:
      "M.S. in Biomedical Informatics, with research focused on multi-omics data, Data Science, and Data Analysis.",
    timelineNcuTitle: "National Central University",
    timelineNcuBody:
      "B.S. in Biomedical Sciences and Engineering, building foundations in biomedical data analysis, programming, and interdisciplinary research.",
    timelineTmrTitle: "Taiwan Marketing Research Co., Ltd. (TMR)",
    timelineTmrBody:
      "Marketing data science intern working on preprocessing, feature engineering, modeling, visualization, and business interpretation.",
    timelineTutorDate: "2020 - Present",
    timelineTutorTitle: "Private Tutor",
    timelineTutorBody:
      "Tutored mathematics, physics, chemistry, and biology, building long-term communication and problem-solving experience.",
    projectOneTitle: "Integrative analysis of breast cancer in TCGA for identification of potential microRNA diagnostic panel and uncovering oncogenic role",
    projectOneBody:
      "Built microRNA and RNA analysis workflows with Python and R, covering preprocessing, feature selection, machine learning classification, and model performance evaluation.",
    projectTwoTitle: "Elucidating Immune Dysregulation in Neuromyelitis Optica Spectrum Disorder Through Bulk and Single-Cell RNA-seq Characterization of Interferon-Related Gene Expression",
    projectTwoBody:
      "Integrated bulk transcriptomic and single-cell transcriptomic data to build a complete analysis workflow covering preprocessing, statistical analysis, feature selection, and visualization, while investigating the pathogenic role of type I interferon in NMOSD immune dysregulation.",
    projectThreeTitle: "Breast Cancer and Lung Cancer Prediction",
    projectThreeBody:
      "Built classification and prediction workflows using preprocessing, feature engineering, and machine learning models, completing model evaluation and result interpretation.",
    projectFourTitle: "Product Sales and Housing Price Prediction",
    projectFourBody:
      "Used data cleaning, feature engineering, visualization, and predictive modeling to turn data into interpretable business and market insights.",
    awardOneTitle: "TSBME Biomedical Engineering Technology Conference Oral Paper Competition",
    awardOneBody: "Excellent Award",
    awardTwoTitle: "Biomedical Informatics Thesis Competition",
    awardTwoBody: "First Place",
    awardThreeTitle: "Taiwan Neuroimmunology Medical Society Oral Paper Competition",
    awardThreeBody: "Second Place",
    awardFourTitle: "27th Rare Disease Graduate Thesis Scholarship",
    awardFourBody: "Awarded",
    awardFiveTitle: "ISMB International Bioinformatics Conference",
    awardFiveBody: "Poster presentation",
    awardSixTitle: "Ewant Course Certificate",
    awardSixBody: "R Language, Data Science",
    contactHeading: "Contact Me",
    contactInfoLabel: "Contact Information",
    contactCardTitle: "Open to Opportunities & Collaboration",
    contactBody:
      "I am interested in opportunities in data analysis, data engineering, and project management, as well as collaborations in machine learning modeling, data visualization, and workflow optimization. Feel free to reach out through the following channels.",
    contactEmailTitle: "Email Address",
    contactPhoneTitle: "Mobile Phone",
    contactEmailButton: "Send Email Directly"
  }
};

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.zh;
  document.documentElement.lang = language === "en" ? "en" : "zh-Hant";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageToggles.forEach((toggle) => {
    toggle.textContent = language === "en" ? "中" : "EN";
    toggle.setAttribute(
      "aria-label",
      language === "en" ? "切換為中文" : "Switch to English"
    );
  });
};

const getInitialLanguage = () => {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  if (requestedLanguage === "en" || requestedLanguage === "zh") {
    return requestedLanguage;
  }

  try {
    return localStorage.getItem("portfolio-language") || "zh";
  } catch {
    return "zh";
  }
};

let currentLanguage = getInitialLanguage();
applyLanguage(currentLanguage);

languageToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    applyLanguage(currentLanguage);

    try {
      localStorage.setItem("portfolio-language", currentLanguage);
    } catch {
      // Ignore storage restrictions in private or embedded browsers.
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("is-open");
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -52% 0px", threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));
