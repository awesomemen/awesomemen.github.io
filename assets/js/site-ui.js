const UI_LANG_KEY = "site-ui-lang";
const UI_THEME_KEY = "site-ui-theme";

const translations = {
  zh: {
    "nav.ariaLabel": "主导航",
    "nav.home": "首页",
    "nav.posts": "文章",
    "nav.topics": "专题",
    "nav.projects": "项目",
    "toolbar.ariaLabel": "界面设置",
    "toolbar.language": "语言切换",
    "toolbar.languageLabel": "语言",
    "toolbar.langZh": "中文",
    "toolbar.langEn": "EN",
    "toolbar.theme": "配色切换",
    "toolbar.themeLabel": "配色",
    "toolbar.themeLight": "亮色",
    "toolbar.themeDark": "暗色",
    "toolbar.themeGreen": "绿色",
    "footer.note": "Built with Hugo and GitHub Pages.",
    "home.heroEyebrow": "Technical Notes",
    "home.heroTagline": "记录技术实践、系统设计与长期思考。",
    "home.heroIntro": "这里整理工程经验、开发笔记与长期沉淀，让文章成为方法论的索引，让项目成为实践的注脚。",
    "home.readPosts": "阅读最新文章",
    "home.visitGithub": "访问 GitHub",
    "home.highlightsTitle": "站点重点",
    "home.metaFocusLabel": "内容定位",
    "home.metaFocusValue": "技术记录与工程沉淀",
    "home.metaTopicsLabel": "优先阅读",
    "home.metaTopicsValue": "按专题浏览文章",
    "home.metaContactLabel": "联系",
    "home.latestPostsTitle": "最新文章",
    "home.latestPostsIntro": "优先展示近期的技术记录、实践复盘和系统化整理。",
    "home.allPosts": "查看全部文章",
    "home.emptyPosts": "文章内容还在整理中，稍后会补充首批技术记录。",
    "home.topicsTitle": "技术专题",
    "home.topicsIntro": "聚合长期关注的技术主题，方便从不同文章之间建立上下文。",
    "home.enterTopics": "进入专题页",
    "home.tagsTitle": "标签",
    "home.emptyTags": "标签会随着文章积累逐步形成。",
    "home.categoriesTitle": "分类",
    "home.emptyCategories": "分类页会在文章增多后更完整。",
    "home.projectsTitle": "精选项目",
    "home.projectsIntro": "少量项目作为文章背后的实践注脚，强调长期维护而非铺陈数量。",
    "home.allProjects": "查看项目列表",
    "home.emptyProjects": "项目区会随着公开仓库整理逐步补全。",
    "home.contactTitle": "联系",
    "home.contactIntro": "站点内容与仓库更新都以 GitHub 为主，沟通入口保留 Email。",
    "page.projectsTitle": "项目",
    "page.postsTitle": "文章",
    "page.projectsDescription": "少量精选项目，用来补充文章背后的工程实践。",
    "page.postsDescription": "按时间沉淀的工程实践、开发记录与系统化复盘。",
    "page.projectsEyebrow": "projects",
    "page.postsEyebrow": "posts",
    "page.projectsDefaultDescription": "持续维护的项目与实践索引。",
    "page.postsDefaultDescription": "按时间沉淀的技术文章与复盘记录。",
    "page.emptyProjects": "这里会放持续维护中的项目与仓库。",
    "page.emptyPosts": "内容还在整理中，稍后会出现首批文章。",
    "single.projectEyebrow": "Project",
    "single.articleEyebrow": "Article",
    "single.categoryLabel": "分类：",
    "single.techStackLabel": "技术栈：",
    "single.viewRepo": "查看仓库",
    "topics.eyebrow": "Topics",
    "topics.title": "专题",
    "topics.description": "从标签和分类进入内容，快速查看某个主题下的累计文章。",
    "topics.defaultDescription": "聚合长期关注的技术主题，方便从不同文章之间建立上下文。",
    "topics.byTags": "按标签浏览",
    "topics.emptyTags": "标签专题会随着文章发布逐步形成。",
    "topics.byCategories": "按分类浏览",
    "topics.emptyCategories": "分类归档会在内容积累后更完整。",
    "taxonomy.empty": "这个专题下暂时还没有文章。",
    "terms.summary": "按主题快速浏览文章归档。",
    "terms.empty": "这里会展示按主题聚合的内容。",
    "projectCard.featured": "精选项目",
    "projectCard.repo": "仓库",
    "projectCard.details": "详情",
    "pagination.ariaLabel": "分页",
    "pagination.prev": "上一页",
    "pagination.next": "下一页"
  },
  en: {
    "nav.ariaLabel": "Primary navigation",
    "nav.home": "Home",
    "nav.posts": "Posts",
    "nav.topics": "Topics",
    "nav.projects": "Projects",
    "toolbar.ariaLabel": "Interface settings",
    "toolbar.language": "Language switcher",
    "toolbar.languageLabel": "Language",
    "toolbar.langZh": "中文",
    "toolbar.langEn": "EN",
    "toolbar.theme": "Theme switcher",
    "toolbar.themeLabel": "Theme",
    "toolbar.themeLight": "Light",
    "toolbar.themeDark": "Dark",
    "toolbar.themeGreen": "Green",
    "footer.note": "Built with Hugo and GitHub Pages.",
    "home.heroEyebrow": "Technical Notes",
    "home.heroTagline": "A place for engineering practice, system design, and long-horizon thinking.",
    "home.heroIntro": "This site organizes engineering notes, implementation lessons, and long-term accumulation so that posts become an index of methods and projects stay as proof of practice.",
    "home.readPosts": "Read recent posts",
    "home.visitGithub": "Visit GitHub",
    "home.highlightsTitle": "Site highlights",
    "home.metaFocusLabel": "Focus",
    "home.metaFocusValue": "Engineering notes and long-term practice",
    "home.metaTopicsLabel": "Start here",
    "home.metaTopicsValue": "Browse by topic",
    "home.metaContactLabel": "Contact",
    "home.latestPostsTitle": "Recent posts",
    "home.latestPostsIntro": "Start with recent technical notes, implementation reviews, and systemized write-ups.",
    "home.allPosts": "View all posts",
    "home.emptyPosts": "Posts are still being organized. The first batch of technical notes will appear here soon.",
    "home.topicsTitle": "Topics",
    "home.topicsIntro": "Browse long-term technical themes and move across related posts with clearer context.",
    "home.enterTopics": "Open topics",
    "home.tagsTitle": "Tags",
    "home.emptyTags": "Tags will take shape as more posts are published.",
    "home.categoriesTitle": "Categories",
    "home.emptyCategories": "Category pages will become more complete as content grows.",
    "home.projectsTitle": "Featured projects",
    "home.projectsIntro": "A small set of projects acts as practical evidence behind the writing, with an emphasis on long-term maintenance over volume.",
    "home.allProjects": "View projects",
    "home.emptyProjects": "This section will fill out as more public repositories are curated.",
    "home.contactTitle": "Contact",
    "home.contactIntro": "Site updates and repository activity primarily happen on GitHub, with email kept as the direct contact channel.",
    "page.projectsTitle": "Projects",
    "page.postsTitle": "Posts",
    "page.projectsDescription": "A curated set of projects that complements the engineering practice behind the writing.",
    "page.postsDescription": "Engineering practice, development notes, and systemized retrospectives organized over time.",
    "page.projectsEyebrow": "Projects",
    "page.postsEyebrow": "Posts",
    "page.projectsDefaultDescription": "An index of maintained projects and the practice behind them.",
    "page.postsDefaultDescription": "Technical posts and retrospectives organized over time.",
    "page.emptyProjects": "Maintained projects and repositories will appear here.",
    "page.emptyPosts": "Content is still being organized. The first posts will appear here soon.",
    "single.projectEyebrow": "Project",
    "single.articleEyebrow": "Article",
    "single.categoryLabel": "Category: ",
    "single.techStackLabel": "Tech stack: ",
    "single.viewRepo": "View repository",
    "topics.eyebrow": "Topics",
    "topics.title": "Topics",
    "topics.description": "Enter through tags and categories to quickly review the accumulated posts for a theme.",
    "topics.defaultDescription": "Browse long-term technical themes and move across related posts with clearer context.",
    "topics.byTags": "Browse by tag",
    "topics.emptyTags": "Tag pages will take shape as more posts are published.",
    "topics.byCategories": "Browse by category",
    "topics.emptyCategories": "Category archives will become more complete as content grows.",
    "taxonomy.empty": "There are no posts under this topic yet.",
    "terms.summary": "Browse archived posts by topic.",
    "terms.empty": "Topic-based groupings will appear here.",
    "projectCard.featured": "Featured project",
    "projectCard.repo": "Repository",
    "projectCard.details": "Details",
    "pagination.ariaLabel": "Pagination",
    "pagination.prev": "Previous",
    "pagination.next": "Next"
  }
};

const templates = {
  zh: {
    "common.countArticles": "{count} 篇",
    "taxonomy.summary": "这个专题下当前共有 {count} 篇内容。",
    "pagination.current": "第 {pageNumber} / {totalPages} 页"
  },
  en: {
    "common.countArticles": "{count} items",
    "taxonomy.summary": "{count} items are currently listed under this topic.",
    "pagination.current": "Page {pageNumber} of {totalPages}"
  }
};

function getStoredValue(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    return;
  }
}

function getUiLang() {
  return getStoredValue(UI_LANG_KEY, document.documentElement.dataset.uiLang || "zh") === "en" ? "en" : "zh";
}

function getUiTheme() {
  const theme = getStoredValue(UI_THEME_KEY, document.documentElement.dataset.uiTheme || "green");
  return theme === "light" || theme === "dark" ? theme : "green";
}

function applyLanguage(lang) {
  const root = document.documentElement;
  const dict = translations[lang];
  const templateDict = templates[lang];

  root.dataset.uiLang = lang;
  root.setAttribute("lang", lang === "en" ? "en" : "zh-CN");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const mappings = node.dataset.i18nAttr.split(",");
    mappings.forEach((mapping) => {
      const parts = mapping.split(":");
      if (parts.length !== 2) {
        return;
      }

      const attrName = parts[0].trim();
      const key = parts[1].trim();
      if (dict[key]) {
        node.setAttribute(attrName, dict[key]);
      }
    });
  });

  document.querySelectorAll("[data-i18n-template]").forEach((node) => {
    const key = node.dataset.i18nTemplate;
    const template = templateDict[key];
    if (!template) {
      return;
    }

    node.textContent = template.replace(/\{(\w+)\}/g, (match, token) => {
      const dataKey = token.charAt(0).toLowerCase() + token.slice(1);
      return node.dataset[dataKey] || "";
    });
  });

  document.querySelectorAll("[data-ui-lang-toggle]").forEach((button) => {
    button.dataset.uiLangCurrent = lang;
  });
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.uiTheme = theme;

  document.querySelectorAll("[data-ui-theme-option]").forEach((button) => {
    const isActive = button.dataset.uiThemeOption === theme;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    button.classList.toggle("is-active", isActive);
  });
}

function setMenuOpenState(menuName, isOpen) {
  document.querySelectorAll("[data-ui-menu]").forEach((menu) => {
    const isTarget = menu.dataset.uiMenu === menuName;
    const nextOpen = isTarget && isOpen;
    const trigger = menu.querySelector("[data-ui-menu-trigger]");
    menu.dataset.uiMenuOpen = nextOpen ? "true" : "false";
    if (trigger) {
      trigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      trigger.classList.toggle("is-active", nextOpen);
    }
  });
}

function closeMenus() {
  document.querySelectorAll("[data-ui-menu]").forEach((menu) => {
    const trigger = menu.querySelector("[data-ui-menu-trigger]");
    menu.dataset.uiMenuOpen = "false";
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
      trigger.classList.remove("is-active");
    }
  });
}

function bindUiControls() {
  document.querySelectorAll("[data-ui-lang-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const lang = getUiLang() === "en" ? "zh" : "en";
      setStoredValue(UI_LANG_KEY, lang);
      applyLanguage(lang);
    });
  });

  document.querySelectorAll("[data-ui-menu-trigger]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const menuName = button.dataset.uiMenuTrigger;
      const menu = document.querySelector(`[data-ui-menu="${menuName}"]`);
      const isOpen = menu && menu.dataset.uiMenuOpen === "true";
      setMenuOpenState(menuName, !isOpen);
    });
  });

  document.querySelectorAll("[data-ui-theme-option]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const theme = button.dataset.uiThemeOption;
      const normalizedTheme = theme === "dark" || theme === "green" ? theme : "light";
      setStoredValue(UI_THEME_KEY, normalizedTheme);
      applyTheme(normalizedTheme);
      closeMenus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-ui-menu]")) {
      closeMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenus();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(getUiLang());
  applyTheme(getUiTheme());
  bindUiControls();
});
