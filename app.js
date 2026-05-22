const FALLBACK_WORDS = [
  { word: "abandon", phonetic: "/əˈbændən/", meaning: "v. 放弃；抛弃", example: "Do not abandon your plan after one difficult week." },
  { word: "abstract", phonetic: "/ˈæbstrækt/", meaning: "adj. 抽象的；n. 摘要", example: "The article begins with an abstract of the research." },
  { word: "abundant", phonetic: "/əˈbʌndənt/", meaning: "adj. 充足的；丰富的", example: "The region has abundant natural resources." },
  { word: "accelerate", phonetic: "/əkˈseləreɪt/", meaning: "v. 加速；促进", example: "Regular review can accelerate vocabulary growth." },
  { word: "accessible", phonetic: "/əkˈsesəbl/", meaning: "adj. 可接近的；易懂的", example: "The lecture made a complex topic accessible." },
  { word: "accommodate", phonetic: "/əˈkɑːmədeɪt/", meaning: "v. 容纳；使适应", example: "The hall can accommodate five hundred students." },
  { word: "accumulate", phonetic: "/əˈkjuːmjəleɪt/", meaning: "v. 积累；聚集", example: "Small habits accumulate into visible progress." },
  { word: "acknowledge", phonetic: "/əkˈnɑːlɪdʒ/", meaning: "v. 承认；致谢", example: "She acknowledged the help of her classmates." },
  { word: "adequate", phonetic: "/ˈædɪkwət/", meaning: "adj. 足够的；合格的", example: "The plan requires adequate preparation." },
  { word: "advocate", phonetic: "/ˈædvəkeɪt/", meaning: "v. 提倡；n. 支持者", example: "Many experts advocate active reading." },
  { word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", meaning: "adj. 模棱两可的", example: "The sentence is ambiguous without context." },
  { word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", meaning: "v. 预期；期待", example: "We anticipate a rise in demand." },
  { word: "apparent", phonetic: "/əˈpærənt/", meaning: "adj. 明显的；表面上的", example: "The reason soon became apparent." },
  { word: "approximately", phonetic: "/əˈprɑːksɪmətli/", meaning: "adv. 大约；近似地", example: "The project took approximately two months." },
  { word: "arbitrary", phonetic: "/ˈɑːrbətreri/", meaning: "adj. 任意的；武断的", example: "The choice was not arbitrary." },
  { word: "assemble", phonetic: "/əˈsembl/", meaning: "v. 集合；组装", example: "The team assembled before the exam." },
  { word: "assess", phonetic: "/əˈses/", meaning: "v. 评估；估价", example: "Teachers assess progress through small quizzes." },
  { word: "assign", phonetic: "/əˈsaɪn/", meaning: "v. 分配；布置", example: "The teacher assigned a reading task." },
  { word: "assumption", phonetic: "/əˈsʌmpʃn/", meaning: "n. 假设；设想", example: "The argument is based on a false assumption." },
  { word: "attain", phonetic: "/əˈteɪn/", meaning: "v. 达到；获得", example: "She attained a high score through steady practice." },
  { word: "attribute", phonetic: "/əˈtrɪbjuːt/", meaning: "v. 把……归因于；n. 属性", example: "He attributes his success to discipline." },
  { word: "authorize", phonetic: "/ˈɔːθəraɪz/", meaning: "v. 授权；批准", example: "Only the manager can authorize the payment." },
  { word: "beneficial", phonetic: "/ˌbenɪˈfɪʃl/", meaning: "adj. 有益的", example: "Sleep is beneficial to memory." },
  { word: "capacity", phonetic: "/kəˈpæsəti/", meaning: "n. 容量；能力", example: "The stadium has a large capacity." },
  { word: "circumstance", phonetic: "/ˈsɜːrkəmstæns/", meaning: "n. 情况；环境", example: "People react differently under pressure." },
  { word: "coherent", phonetic: "/koʊˈhɪrənt/", meaning: "adj. 连贯的；一致的", example: "Write a coherent paragraph with clear logic." },
  { word: "collapse", phonetic: "/kəˈlæps/", meaning: "v. 崩溃；倒塌", example: "The old bridge collapsed during the storm." },
  { word: "commence", phonetic: "/kəˈmens/", meaning: "v. 开始", example: "The ceremony will commence at nine." },
  { word: "compatible", phonetic: "/kəmˈpætəbl/", meaning: "adj. 兼容的；合得来的", example: "The software is compatible with most devices." },
  { word: "compensate", phonetic: "/ˈkɑːmpenseɪt/", meaning: "v. 补偿；弥补", example: "Extra practice can compensate for a weak start." },
  { word: "compile", phonetic: "/kəmˈpaɪl/", meaning: "v. 编纂；汇编", example: "She compiled a list of useful expressions." },
  { word: "comprehensive", phonetic: "/ˌkɑːmprɪˈhensɪv/", meaning: "adj. 全面的；综合的", example: "The report gives a comprehensive overview." },
  { word: "conceive", phonetic: "/kənˈsiːv/", meaning: "v. 构想；认为", example: "It is hard to conceive of a better solution." },
  { word: "consecutive", phonetic: "/kənˈsekjətɪv/", meaning: "adj. 连续的", example: "She studied for ten consecutive days." },
  { word: "consensus", phonetic: "/kənˈsensəs/", meaning: "n. 共识", example: "The group reached a consensus after discussion." },
  { word: "constrain", phonetic: "/kənˈstreɪn/", meaning: "v. 限制；约束", example: "Time constraints shaped the final design." },
  { word: "controversial", phonetic: "/ˌkɑːntrəˈvɜːrʃl/", meaning: "adj. 有争议的", example: "The policy remains controversial." },
  { word: "conventional", phonetic: "/kənˈvenʃənl/", meaning: "adj. 传统的；常规的", example: "The method is simple but conventional." },
  { word: "crucial", phonetic: "/ˈkruːʃl/", meaning: "adj. 至关重要的", example: "Review is crucial for long-term memory." },
  { word: "deficiency", phonetic: "/dɪˈfɪʃnsi/", meaning: "n. 缺乏；不足", example: "The test revealed a deficiency in grammar." },
  { word: "deliberate", phonetic: "/dɪˈlɪbərət/", meaning: "adj. 故意的；深思熟虑的", example: "Her progress came from deliberate practice." },
  { word: "demonstrate", phonetic: "/ˈdemənstreɪt/", meaning: "v. 证明；展示", example: "The experiment demonstrates the principle." },
  { word: "derive", phonetic: "/dɪˈraɪv/", meaning: "v. 获得；源自", example: "The word derives from Latin." },
  { word: "dimension", phonetic: "/daɪˈmenʃn/", meaning: "n. 维度；方面", example: "The issue has an economic dimension." },
  { word: "diminish", phonetic: "/dɪˈmɪnɪʃ/", meaning: "v. 减少；降低", example: "Anxiety may diminish with preparation." },
  { word: "distribute", phonetic: "/dɪˈstrɪbjuːt/", meaning: "v. 分发；分布", example: "The teacher distributed the handouts." },
  { word: "diverse", phonetic: "/daɪˈvɜːrs/", meaning: "adj. 多样的", example: "The class includes students from diverse backgrounds." },
  { word: "eliminate", phonetic: "/ɪˈlɪmɪneɪt/", meaning: "v. 消除；淘汰", example: "Careful editing can eliminate errors." },
  { word: "empirical", phonetic: "/ɪmˈpɪrɪkl/", meaning: "adj. 经验的；实证的", example: "The claim needs empirical evidence." },
  { word: "enhance", phonetic: "/ɪnˈhæns/", meaning: "v. 提高；增强", example: "Examples can enhance understanding." },
  { word: "equivalent", phonetic: "/ɪˈkwɪvələnt/", meaning: "adj. 等同的；n. 对等物", example: "This course is equivalent to two modules." },
  { word: "explicit", phonetic: "/ɪkˈsplɪsɪt/", meaning: "adj. 明确的；直白的", example: "The instructions should be explicit." },
  { word: "facilitate", phonetic: "/fəˈsɪlɪteɪt/", meaning: "v. 促进；使便利", example: "Good notes facilitate review." },
  { word: "fluctuate", phonetic: "/ˈflʌktʃueɪt/", meaning: "v. 波动；起伏", example: "Prices fluctuate during the year." },
  { word: "fundamental", phonetic: "/ˌfʌndəˈmentl/", meaning: "adj. 根本的；基础的", example: "Vocabulary is fundamental to reading." },
  { word: "implement", phonetic: "/ˈɪmplɪment/", meaning: "v. 实施；执行", example: "The school implemented a new policy." },
  { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "adj. 不可避免的", example: "Mistakes are inevitable at the beginning." },
  { word: "initial", phonetic: "/ɪˈnɪʃl/", meaning: "adj. 最初的；初始的", example: "The initial results were encouraging." },
  { word: "integrate", phonetic: "/ˈɪntɪɡreɪt/", meaning: "v. 整合；融入", example: "Integrate new words into daily writing." },
  { word: "interpret", phonetic: "/ɪnˈtɜːrprət/", meaning: "v. 解释；口译", example: "Students may interpret the data differently." },
  { word: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", meaning: "v. 证明……合理", example: "You need evidence to justify your opinion." },
  { word: "maintain", phonetic: "/meɪnˈteɪn/", meaning: "v. 维持；保养；主张", example: "Maintain a steady pace before the exam." },
  { word: "mutual", phonetic: "/ˈmjuːtʃuəl/", meaning: "adj. 相互的；共同的", example: "The agreement brought mutual benefits." },
  { word: "objective", phonetic: "/əbˈdʒektɪv/", meaning: "adj. 客观的；n. 目标", example: "Try to give an objective evaluation." },
  { word: "obtain", phonetic: "/əbˈteɪn/", meaning: "v. 获得", example: "Students can obtain materials online." },
  { word: "persist", phonetic: "/pərˈsɪst/", meaning: "v. 坚持；持续存在", example: "If symptoms persist, seek advice." },
  { word: "potential", phonetic: "/pəˈtenʃl/", meaning: "adj. 潜在的；n. 潜力", example: "The idea has great potential." },
  { word: "precise", phonetic: "/prɪˈsaɪs/", meaning: "adj. 精确的", example: "Use precise words in academic writing." },
  { word: "priority", phonetic: "/praɪˈɔːrəti/", meaning: "n. 优先事项", example: "Health should be a priority." },
  { word: "prohibit", phonetic: "/prəˈhɪbɪt/", meaning: "v. 禁止", example: "The rules prohibit cheating." },
  { word: "prospect", phonetic: "/ˈprɑːspekt/", meaning: "n. 前景；可能性", example: "The prospect of success motivated her." },
  { word: "radical", phonetic: "/ˈrædɪkl/", meaning: "adj. 根本的；激进的", example: "The proposal requires radical change." },
  { word: "reinforce", phonetic: "/ˌriːɪnˈfɔːrs/", meaning: "v. 加强；巩固", example: "Review questions reinforce memory." },
  { word: "relevant", phonetic: "/ˈreləvənt/", meaning: "adj. 相关的", example: "Choose examples relevant to the topic." },
  { word: "reliable", phonetic: "/rɪˈlaɪəbl/", meaning: "adj. 可靠的", example: "Use reliable sources for your essay." },
  { word: "restore", phonetic: "/rɪˈstɔːr/", meaning: "v. 恢复；修复", example: "A short break can restore attention." },
  { word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", meaning: "adj. 重要的；显著的", example: "The change had a significant impact." },
  { word: "subsequent", phonetic: "/ˈsʌbsɪkwənt/", meaning: "adj. 随后的", example: "Subsequent studies confirmed the result." },
  { word: "sufficient", phonetic: "/səˈfɪʃnt/", meaning: "adj. 足够的", example: "There is sufficient evidence for the claim." },
  { word: "sustain", phonetic: "/səˈsteɪn/", meaning: "v. 维持；承受", example: "It is hard to sustain attention for hours." },
  { word: "transfer", phonetic: "/trænsˈfɜːr/", meaning: "v. 转移；调动", example: "Knowledge can transfer from one context to another." },
  { word: "ultimate", phonetic: "/ˈʌltɪmət/", meaning: "adj. 最终的；根本的", example: "The ultimate goal is fluent reading." },
  { word: "valid", phonetic: "/ˈvælɪd/", meaning: "adj. 有效的；合理的", example: "The ticket is valid for one month." }
];

const ONLINE_WORDS_URLS = [
  "https://cdn.jsdelivr.net/gh/KyleBing/english-vocabulary@master/json/4-CET6-%E9%A1%BA%E5%BA%8F.json",
  "https://raw.githubusercontent.com/KyleBing/english-vocabulary/master/json/4-CET6-%E9%A1%BA%E5%BA%8F.json"
];
const ONLINE_SOURCE_URL = "https://github.com/KyleBing/english-vocabulary";
let WORDS = FALLBACK_WORDS;

const STORAGE_KEY = "cet6-review-state-v1";
const DAILY_TARGET = 20;
const DAY = 24 * 60 * 60 * 1000;
const intervals = { again: 0, hard: 1, good: 3 };

const $ = (id) => document.getElementById(id);
const today = () => new Date().toISOString().slice(0, 10);
const addDays = (count) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return date.toISOString().slice(0, 10);
};

let state;
let mode = "review";
let queue = [];
let current = null;
let revealed = false;

function loadState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const cards = {};

  WORDS.forEach((item, index) => {
    cards[item.word] = saved.cards?.[item.word] || {
      index,
      level: 0,
      due: today(),
      seen: false,
      correct: 0,
      wrong: 0
    };
  });

  return {
    cards,
    daily: saved.daily || { date: today(), reviewed: 0 },
    streak: saved.streak || { count: 0, lastDate: "" }
  };
}

function normalizeOnlineWords(items) {
  return items
    .filter((item) => item?.word && Array.isArray(item.translations))
    .map((item) => {
      const translations = item.translations
        .map((entry) => `${entry.type ? `${entry.type}. ` : ""}${entry.translation}`)
        .join("；");
      const firstPhrase = item.phrases?.[0];
      return {
        word: item.word,
        phonetic: "",
        meaning: translations || "暂无释义",
        example: firstPhrase ? `${firstPhrase.phrase}：${firstPhrase.translation}` : "在线词库提供释义和常用短语。"
      };
    });
}

async function loadOnlineWords() {
  const status = $("sourceText");
  let lastError = null;

  try {
    status.textContent = "正在联网加载六级词库...";
    for (const url of ONLINE_WORDS_URLS) {
      try {
        const response = await fetch(url, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const words = normalizeOnlineWords(data);
        if (words.length < 1000) throw new Error("词库数量异常");
        WORDS = words;
        status.innerHTML = `在线词库已加载：${WORDS.length} 词 · <a href="${ONLINE_SOURCE_URL}" target="_blank" rel="noreferrer">来源</a>`;
        return;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("无法加载在线词库");
  } catch (error) {
    WORDS = FALLBACK_WORDS;
    status.textContent = `在线词库加载失败，已使用备用词库：${WORDS.length} 词。请检查网络后刷新。`;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureDailyState() {
  const now = today();
  if (state.daily.date !== now) {
    state.daily = { date: now, reviewed: 0 };
  }
}

function getCard(word) {
  return state.cards[word.word];
}

function sortForStudy(words) {
  return [...words].sort((a, b) => {
    const cardA = getCard(a);
    const cardB = getCard(b);
    return cardA.level - cardB.level || cardA.index - cardB.index;
  });
}

function buildQueue() {
  ensureDailyState();

  if (mode === "learn") {
    queue = sortForStudy(WORDS.filter((word) => !getCard(word).seen)).slice(0, DAILY_TARGET);
  } else {
    queue = sortForStudy(WORDS.filter((word) => getCard(word).due <= today())).slice(0, DAILY_TARGET);
  }
}

function pickNext() {
  buildQueue();
  current = queue[0] || null;
  revealed = false;
  render();
}

function render() {
  ensureDailyState();
  renderStats();
  renderMode();
  renderList();

  $("wordList").hidden = mode !== "list";
  $("cardArea").hidden = mode === "list" || !current;
  $("emptyPanel").hidden = mode === "list" || Boolean(current);
  $("answerPanel").hidden = mode === "list" || !current || !revealed;

  if (!current) return;

  const card = getCard(current);
  $("tagText").textContent = mode === "learn" ? "New Word" : "CET-6 Review";
  $("levelText").textContent = `Level ${card.level}`;
  $("wordText").textContent = current.word;
  $("phoneticText").textContent = current.phonetic;
  $("meaningText").textContent = current.meaning;
  $("exampleText").textContent = current.example;
  $("meaningText").classList.toggle("hidden", !revealed);
  $("exampleText").classList.toggle("hidden", !revealed);
  $("showBtn").textContent = revealed ? "继续判断" : "查看释义";
}

function renderStats() {
  const due = WORDS.filter((word) => getCard(word).due <= today()).length;
  const mastered = WORDS.filter((word) => getCard(word).level >= 5).length;
  const progress = Math.min(state.daily.reviewed, DAILY_TARGET);
  $("todayText").textContent = new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", weekday: "short" }).format(new Date());
  $("dueCount").textContent = due;
  $("masteredCount").textContent = mastered;
  $("streakCount").textContent = `${state.streak.count}天`;
  $("totalCount").textContent = WORDS.length;
  $("dailyProgress").textContent = `${progress} / ${DAILY_TARGET}`;
  $("progressBar").style.width = `${(progress / DAILY_TARGET) * 100}%`;
}

function renderMode() {
  document.querySelectorAll(".mode-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
}

function renderList() {
  if (mode !== "list") return;
  const keyword = $("searchInput").value.trim().toLowerCase();
  const rows = WORDS.filter((item) => {
    const text = `${item.word} ${item.meaning} ${item.example}`.toLowerCase();
    return text.includes(keyword);
  });

  $("wordRows").innerHTML = rows.map((item) => {
    const card = getCard(item);
    return `
      <article class="word-row">
        <strong>${item.word}</strong>
        <p>${item.meaning}<br>${item.example}</p>
        <span class="badge">L${card.level}</span>
      </article>
    `;
  }).join("");
}

function updateStreak() {
  const now = today();
  const yesterday = new Date(Date.now() - DAY).toISOString().slice(0, 10);
  if (state.streak.lastDate === now) return;
  state.streak.count = state.streak.lastDate === yesterday ? state.streak.count + 1 : 1;
  state.streak.lastDate = now;
}

function answer(result) {
  if (!current) return;
  const card = getCard(current);
  card.seen = true;
  card.level = result === "again" ? Math.max(0, card.level - 1) : Math.min(6, card.level + (result === "good" ? 1 : 0));
  card.due = addDays(intervals[result] + Math.max(0, card.level - 1));
  card.correct += result === "good" ? 1 : 0;
  card.wrong += result === "again" ? 1 : 0;
  state.daily.reviewed += 1;
  updateStreak();
  saveState();
  pickNext();
}

function speak() {
  if (!current || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(current.word);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

document.querySelectorAll(".mode-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    if (mode === "list") {
      current = null;
      render();
    } else {
      pickNext();
    }
  });
});

$("showBtn").addEventListener("click", () => {
  revealed = true;
  render();
});

$("speakBtn").addEventListener("click", speak);
$("searchInput").addEventListener("input", renderList);
$("answerPanel").addEventListener("click", (event) => {
  const result = event.target.dataset.result;
  if (result) answer(result);
});

$("resetBtn").addEventListener("click", () => {
  if (!confirm("确定要清空所有背词进度吗？")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  mode = "review";
  pickNext();
});

async function init() {
  await loadOnlineWords();
  state = loadState();
  pickNext();
}

init();
