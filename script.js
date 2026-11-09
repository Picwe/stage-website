const translations = {
  zh: {
    skip: '跳至主要内容', navLabel: '主要导航', mobileNavLabel: '移动导航', navExperience: '产品体验', navHow: '如何使用', navFeatures: '功能亮点', navCta: '探索 Stage', language: 'EN', languageAria: 'Switch language to English', menuOpen: '打开菜单', menuClose: '关闭菜单',
    heroEyebrow: '为每一个值得到场的时刻', heroLine1: '好现场，', heroLine2: '值得亲临。', heroCopy: '从发现心动的演出，到拿到属于你的那张票。Stage 让每一次奔赴，都更简单。', heroCta: '认识 Stage', heroSecondary: '看看如何使用', heroCaption: '为热爱，到现场。',
    introKicker: '一切，从这里开始', introLabel: 'YOUR TICKET TO THE MOMENT', introTitle: '把期待留给现场，\n把繁琐交给 Stage。', introBody: '好演出值得被发现。浏览活动、选择场次与票种，再到电子票入场，Stage 把购票旅程收在一个简洁的地方。', introNote: '少一点等待与寻找，\n多一点对下一场的期待。', previewTag: '交互预览', phoneAria: 'Stage 应用交互演示', previewTabs: '应用演示视图', previewDisclaimer: '界面与活动仅供演示',
    journeyKicker: '三步，奔赴现场', journeyLabel: 'FROM SCROLL TO SHOWTIME', journeyTitle: '从心动，到入场。', journeyBody: '一场好体验，从购票的第一步就开始。', searchHint: '搜索活动、艺人或场馆', session: '场次', ticketType: '票种', readyToGo: '准备就绪', step1Title: '发现下一场心动', step1Body: '按活动、艺人或场馆搜索，时间、地点和票价一目了然。', step2Title: '选好你的那一席', step2Body: '查看活动详情，选择场次、票种和数量，完成支付。', step3Title: '带着票，奔赴现场', step3Body: '电子票和订单集中查看；入场时间开放后，出示核销码即可。',
    featuresKicker: '为每一步用心', featuresLabel: 'MADE FOR LIVE MOMENTS', featuresTitle: '好的体验，\n藏在细节里。', feature1Title: '活动信息，清清楚楚', feature1Body: '活动介绍、时间地点、票价与座位图，在决定之前先了解更多。', feature2Title: '选票与支付，一路顺畅', feature2Body: '按场次和票种选购，并在应用内完成支付。', feature3Title: '你的票，随时可查看', feature3Body: '在「我的票券」中查看票券状态、活动信息与入场核销码。', feature4Title: '喜欢哪种界面，由你决定', feature4Body: '深色与浅色主题自由切换，白天黑夜都保持舒适。',
    closingKicker: '下一场见', closingTitle: '那些难忘的瞬间，\n值得亲自在场。', closingBody: '准备好，为下一次心动留一个位置。', backTop: '回到顶部', footerLine: '好现场，值得亲临。', title: 'Stage — 好现场，值得亲临', description: 'Stage，让发现演出、选票和入场变得简单。'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', navExperience: 'Experience', navHow: 'How it works', navFeatures: 'Features', navCta: 'Explore Stage', language: '中文', languageAria: '切换到中文', menuOpen: 'Open menu', menuClose: 'Close menu',
    heroEyebrow: 'FOR THE MOMENTS WORTH SHOWING UP FOR', heroLine1: 'BE THERE', heroLine2: 'FOR THE MOMENT.', heroCopy: 'From finding the show that moves you to holding your ticket, Stage makes getting there feel effortless.', heroCta: 'Meet Stage', heroSecondary: 'See how it works', heroCaption: 'SHOW UP FOR WHAT YOU LOVE.',
    introKicker: 'IT ALL STARTS HERE', introLabel: 'YOUR TICKET TO THE MOMENT', introTitle: 'More anticipation.\nLess complication.', introBody: 'Great experiences deserve to be discovered. Browse events, choose your session and tickets, and get ready to go—all in one simple place.', introNote: 'Less time searching.\nMore to look forward to.', previewTag: 'INTERACTIVE PREVIEW', phoneAria: 'Interactive preview of the Stage app', previewTabs: 'App preview screens', previewDisclaimer: 'Interface and events shown are illustrative',
    journeyKicker: 'THREE STEPS TO THE SHOW', journeyLabel: 'FROM SCROLL TO SHOWTIME', journeyTitle: 'From discovery to doors open.', journeyBody: 'A great night begins long before the lights go down.', searchHint: 'Search events, artists, venues', session: 'SESSION', ticketType: 'TICKET', readyToGo: 'Ready to go', step1Title: 'Find your next moment', step1Body: 'Search by event, artist, or venue, with dates, locations, and prices at a glance.', step2Title: 'Make it yours', step2Body: 'Explore the details, choose a session, ticket type and quantity, then complete your payment.', step3Title: 'Bring your ticket', step3Body: 'Find your tickets and orders in one place. Show your redemption code when check-in opens.',
    featuresKicker: 'THOUGHTFUL AT EVERY STEP', featuresLabel: 'MADE FOR LIVE MOMENTS', featuresTitle: 'The details make\nthe difference.', feature1Title: 'Everything you need to know', feature1Body: 'Explore event details, dates, venues, prices and seat maps before you decide.', feature2Title: 'A smoother way to book', feature2Body: 'Choose the session and ticket that suit you, then pay in the app.', feature3Title: 'Your tickets, close at hand', feature3Body: 'Find ticket status, event details and your check-in code in My Tickets.', feature4Title: 'Make it yours, day or night', feature4Body: 'Switch between light and dark themes whenever you like.',
    closingKicker: 'SEE YOU AT THE SHOW', closingTitle: 'Some moments are\nbetter lived in person.', closingBody: 'Save a little room for whatever moves you next.', backTop: 'Back to top', footerLine: 'Be there for the moment.', title: 'Stage — Be there for the moment', description: 'Discover events, find your tickets and get ready for the moments that move you with Stage.'
  }
};

const languageButton = document.querySelector('.language-button');
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
let language = 'zh';

try {
  if (localStorage.getItem('stage-language') === 'en') language = 'en';
} catch (_) {
  // The page remains usable when storage is unavailable.
}

function renderLanguage() {
  const copy = translations[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? copy.menuClose : copy.menuOpen);
  document.title = copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content', copy.description);
}

languageButton.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('stage-language', language); } catch (_) { /* Optional preference only. */ }
  renderLanguage();
});

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? translations[language].menuClose : translations[language].menuOpen);
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); } });
window.addEventListener('resize', () => { if (window.innerWidth > 720 && !mobileNav.hidden) setMenu(false); });

document.querySelectorAll('[data-phone-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.phoneTab;
    document.querySelectorAll('[data-phone-tab]').forEach((tab) => {
      const active = tab.dataset.phoneTab === selected;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-phone-view]').forEach((view) => { view.hidden = view.dataset.phoneView !== selected; });
  });
});

renderLanguage();
