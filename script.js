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
    railSubtitle: "Portfolio",
    navAbout: "About",
    navResume: "Resume",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navAwards: "Awards",
    navContact: "Contact",
    profileName: "陳怡蓁",
    profileRole: "Data Scientist",
    degreeValue: "NYCU 生物醫學資訊所 碩士",
    languageValue: "中文精通 · TOEIC 785",
    contactButton: "Contact",
    cvButton: "Download CV",
    heroTitle: "About me",
    heroLead:
      "我是生物醫學資訊背景的資料分析者，擅長 Data Science、Data Analysis、統計分析與機器學習建模，致力於把複雜資料整理成清楚、可解釋的研究洞察。",
    statEducationLabel: "Education",
    statEducationTitle: "NYCU 碩士",
    statEducationBody: "生物醫學資訊所",
    statPresentationLabel: "Presentation",
    statPresentationBody: "國際生物資訊研討會",
    statAwardLabel: "Award",
    statAwardBody: "生醫資訊所專題論文比賽",
    focusBioTitle: "生醫資料分析",
    focusBioBody:
      "處理 Data Science、Data Analysis 與多體學資料，從資料前處理到統計分析與視覺化。",
    focusMlTitle: "機器學習建模",
    focusMlBody:
      "建立分類與預測模型，涵蓋資料清理、特徵工程、模型訓練、評估與結果解讀。",
    focusWorkflowTitle: "研究流程建置",
    focusWorkflowBody:
      "具備 Python、R 與 Linux 實作能力，可支援分析流程、資料處理與研究成果整理。",
    educationHeading: "Education",
    experienceHeading: "Experience",
    toolHeading: "常用工具",
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
    projectOneType: "專題計畫（一）",
    projectOneTitle: "乳癌 TCGA 整合分析",
    projectOneBody:
      "整合 TCGA 乳癌資料，辨識潛在 microRNA 診斷組合，並探索其在致癌機制中的角色。",
    projectTwoType: "專題計畫（二）",
    projectTwoTitle: "視神經脊髓炎免疫失調分析",
    projectTwoBody:
      "以 Bulk and Single-Cell Data Characterization 探討 interferon-related gene expression 與免疫失調訊號。",
    projectThreeType: "其他作品集",
    projectThreeTitle: "乳癌良惡性與肺癌發病因子預測",
    projectThreeBody:
      "運用資料前處理、特徵工程與機器學習模型，建立分類與預測流程，支援模型評估與結果解讀。",
    projectFourType: "其他作品集",
    projectFourTitle: "產品銷售量與房價預測",
    projectFourBody:
      "透過資料清理、特徵工程、視覺化與預測模型，將資料轉化為可解釋的商業與市場觀察。",
    awardOneTitle: "生物醫學資訊所專題論文比賽",
    awardOneBody: "第一名",
    awardTwoTitle: "TSBME 生物醫學工程研討會論文競賽",
    awardTwoBody: "特優",
    awardThreeTitle: "校內生醫資訊研究成果競賽",
    awardThreeBody: "第一名",
    awardFourTitle: "第 27 屆罕見疾病博碩士論文獎助學金",
    awardFourBody: "獲獎",
    awardFiveTitle: "ISMB 國際生物資訊研討會",
    awardFiveBody: "Poster 發表",
    awardSixTitle: "Ewant 課程證書",
    awardSixBody: "R 語言",
    contactHeading: "Contact",
    contactBody: ""
  },
  en: {
    railName: "YI-JEN CHEN",
    railSubtitle: "Portfolio",
    navAbout: "About",
    navResume: "Resume",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navAwards: "Awards",
    navContact: "Contact",
    profileName: "YI-JEN CHEN",
    profileRole: "Data Scientist",
    degreeValue: "M.S. in Biomedical Informatics, NYCU",
    languageValue: "Mandarin · TOEIC 785",
    contactButton: "Contact",
    cvButton: "Download CV",
    heroTitle: "About me",
    heroLead:
      "I am a biomedical informatics data scientist skilled in Data Science, Data Analysis, statistical analysis, and machine learning modeling, turning complex data into clear and interpretable insights.",
    statEducationLabel: "Education",
    statEducationTitle: "NYCU M.S.",
    statEducationBody: "Biomedical Informatics",
    statPresentationLabel: "Presentation",
    statPresentationBody: "International bioinformatics conference",
    statAwardLabel: "Award",
    statAwardBody: "Biomedical Informatics thesis competition",
    focusBioTitle: "Biomedical Data Analysis",
    focusBioBody:
      "Analyze Data Science, Data Analysis, and multi-omics data from preprocessing to statistics and visualization.",
    focusMlTitle: "Machine Learning Modeling",
    focusMlBody:
      "Build predictive workflows covering data cleaning, feature engineering, model training, evaluation, and interpretation.",
    focusWorkflowTitle: "Research Workflow Setup",
    focusWorkflowBody:
      "Use Python, R, and Linux to support analysis pipelines, data processing, and research deliverables.",
    educationHeading: "Education",
    experienceHeading: "Experience",
    toolHeading: "Tools I Work With",
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
    projectOneType: "Project Plan 1",
    projectOneTitle: "Breast Cancer TCGA Integrative Analysis",
    projectOneBody:
      "Integrated TCGA breast cancer data to identify a potential microRNA diagnostic panel and explore its oncogenic role.",
    projectTwoType: "Project Plan 2",
    projectTwoTitle: "Immune Dysregulation in NMOSD",
    projectTwoBody:
      "Used Bulk and Single-Cell Data Characterization to investigate interferon-related gene expression and immune dysregulation signals.",
    projectThreeType: "Portfolio Works",
    projectThreeTitle: "Breast Cancer and Lung Cancer Prediction",
    projectThreeBody:
      "Built classification and prediction workflows using preprocessing, feature engineering, and machine learning for model evaluation and interpretation.",
    projectFourType: "Portfolio Works",
    projectFourTitle: "Product Sales and Housing Price Prediction",
    projectFourBody:
      "Used data cleaning, feature engineering, visualization, and predictive modeling to turn data into interpretable business and market insights.",
    awardOneTitle: "Biomedical Informatics Thesis Competition",
    awardOneBody: "First Place",
    awardTwoTitle: "TSBME Biomedical Engineering Conference Paper Competition",
    awardTwoBody: "Excellent Award",
    awardThreeTitle: "Biomedical Informatics Research Showcase",
    awardThreeBody: "First Place",
    awardFourTitle: "27th Rare Disease Graduate Thesis Scholarship",
    awardFourBody: "Awarded",
    awardFiveTitle: "ISMB International Bioinformatics Conference",
    awardFiveBody: "Poster presentation",
    awardSixTitle: "Ewant Course Certificate",
    awardSixBody: "R Language",
    contactHeading: "Contact",
    contactBody: ""
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
