// 共用：頁首頁尾、主題目錄、搜尋、照片放大

// 主題目錄：url 為空表示籌備中；doc 為醫師專區的錨點
const CATEGORIES = [
  { name: "耳鼻喉", icon: "👂", color: "#fde8dc", topics: [
    { title: "中耳炎與中耳積液", desc: "耳朵痛、發燒、抓耳朵？成因、耳鏡照片與照顧重點", url: "otitis-media.html", doc: "otitis-media.html#doc", docTitle: "急性中耳炎：致病菌、抗生素選擇、劑量與療程", keys: "耳朵 耳痛 中耳炎 積水 積液 AOM OME 鼓膜" },
    { title: "鼻竇炎", desc: "感冒超過 10 天還沒好？抗生素何時需要", url: "sinusitis.html", doc: "sinusitis.html#doc", docTitle: "鼻竇炎：診斷標準、抗生素劑量、治療失敗與併發症", keys: "鼻涕 鼻塞 鼻竇 鼻竇炎 膿鼻涕 黃鼻涕 頭痛" },
    { title: "喉嚨痛與鏈球菌咽喉炎", desc: "病毒還是鏈球菌？猩紅熱紅疹照片、快篩與抗生素", url: "strep-throat.html", doc: "strep-throat.html#doc", docTitle: "鏈球菌咽喉炎：臨床評分、檢測、抗生素劑量與併發症", keys: "喉嚨 喉嚨痛 扁桃腺 咽喉 鏈球菌 猩紅熱 草莓舌 紅疹 快篩" },
    { title: "過敏性鼻炎", desc: "早上一直打噴嚏、揉鼻子；鼻噴劑與洗鼻教學", url: "allergic-rhinitis.html", doc: "allergic-rhinitis.html#doc", docTitle: "過敏性鼻炎：ARIA 分類、階梯治療、鼻噴劑與口服藥劑量", keys: "過敏 鼻炎 噴嚏 鼻塞 鼻水 塵蟎 洗鼻 鼻噴劑 類固醇 Avamys 舒喜滿" },
  ]},
  { name: "呼吸道", icon: "🫁", color: "#e3eef9", topics: [
    { title: "一般感冒", desc: "病程、居家照顧、感冒藥注意事項與何時回診", url: "common-cold.html", doc: "common-cold.html#doc", docTitle: "一般感冒：症狀病程實證與各種治療的證據", keys: "感冒 咳嗽 流鼻水 鼻塞 喉嚨痛 感冒藥 止咳 蜂蜜 流感" },
    { title: "細支氣管炎", desc: "嬰兒喘、呼吸快，和氣喘怎麼分", url: "bronchiolitis.html", doc: "bronchiolitis.html#doc", docTitle: "細支氣管炎：評估、處置、不建議治療、與氣喘鑑別、RSV 預防", keys: "RSV 喘 細支氣管 細支氣管炎 咻咻 喘鳴 氣喘 呼吸快 胸凹 單株抗體" },
    { title: "氣喘", desc: "保養藥怎麼用、吸必擴與吸藥輔助器示範影片、發作處理", url: "asthma.html", doc: "asthma.html#doc", docTitle: "氣喘：GINA 2026 治療階梯圖、保養藥適用年齡與劑量、急性發作處置", keys: "氣喘 哮喘 喘 喘鳴 咻咻 夜咳 運動 吸入器 吸入劑 吸必擴 Symbicort 都保 類固醇 保養 GINA 輔助器 吸藥輔助器 MART 欣流 montelukast" },
    { title: "哮吼", desc: "半夜狗吠聲咳嗽、吸氣有聲音", url: "croup.html", doc: "croup.html#doc", docTitle: "哮吼：嚴重度分級、致病原、類固醇與 epinephrine 劑量", keys: "哮吼 犬吠 狗吠 咳嗽 喘鳴 沙啞 croup" },
    { title: "肺炎", desc: "發燒咳嗽、呼吸喘；怎麼數呼吸、黴漿菌與抗生素", url: "pneumonia.html", doc: "pneumonia.html#doc", docTitle: "肺炎：住院條件、抗生素選擇與劑量、短療程、黴漿菌抗藥、肋膜積液（IDSA 2026）", keys: "肺炎 黴漿菌 走路肺炎 咳嗽 發燒 喘 呼吸快 胸凹 X光 抗生素 amoxicillin azithromycin doxycycline levofloxacin cefixime 肋膜積液 膿胸" },
  ]},
  { name: "發燒與感染", icon: "🌡️", color: "#fbeceb", topics: [
    { title: "發燒的照顧", desc: "量體溫、退燒藥劑量、熱性痙攣與就醫時機", url: "fever.html", doc: "fever.html#doc", docTitle: "發燒：NICE 紅綠燈評估、8–60 天嬰兒發燒、退燒藥與熱性痙攣", keys: "發燒 退燒 體溫 耳溫 肛溫 退燒藥 普拿疼 布洛芬 熱痙攣 抽筋" },
    { title: "熱性痙攣", desc: "發燒抽筋時家長該怎麼做、何時叫救護車、會不會再發", url: "febrile-seizure.html", doc: "febrile-seizure.html#doc", docTitle: "熱性痙攣：定義、腰椎穿刺與檢查時機、鑑別診斷、急救用藥劑量、預防性用藥", keys: "抽筋 痙攣 熱痙攣 熱性痙攣 發燒抽筋 癲癇 側躺 急救 midazolam diazepam 腰椎穿刺" },
    { title: "泌尿道感染", desc: "嬰幼兒不明原因發燒要想到；膀胱輸尿管逆流", url: "uti.html", doc: "uti.html#doc", docTitle: "泌尿道感染：診斷、抗生素與療程、影像、VUR 分級與預防性抗生素", keys: "尿 泌尿道 UTI 腎盂腎炎 膀胱炎 逆流 VUR VCUG 驗尿" },
    { title: "腸病毒", desc: "手足口病、疱疹性咽峽炎與重症前兆", url: "enterovirus.html", doc: "enterovirus.html#doc", docTitle: "腸病毒：型別與表現、重症分期與處置、EV-A71 疫苗", keys: "腸病毒 手足口 口腔潰瘍 疱疹性咽峽炎 嘴巴破 肌躍 抽搐 EV71 克沙奇" },
  ]},
  { name: "腸胃", icon: "🍼", color: "#e6f4ea", topics: [
    { title: "急性腸胃炎與脫水", desc: "上吐下瀉怎麼補充水分、脫水警訊", url: "gastroenteritis.html", doc: "gastroenteritis.html#doc", docTitle: "急性腸胃炎：脫水評估、口服補液、ondansetron 與益生菌", keys: "腸胃炎 嘔吐 腹瀉 拉肚子 脫水 諾羅 輪狀 電解質 ORS" },
    { title: "便秘", desc: "越憋越硬的惡性循環、幫助排便的食物、如廁習慣與軟便藥", url: "constipation.html", doc: "constipation.html#doc", docTitle: "便秘：Rome IV、何時排除器質性疾病、ESPGHAN/NASPGHAN 2026 治療與劑量", keys: "便秘 大便 便便 硬 憋便 肛裂 解便痛 軟便藥 PEG 乳果糖 氧化鎂 灌腸 甘油球 纖維 奇異果 黑棗 地瓜 溢便 Hirschsprung 巨結腸" },
    { title: "嬰兒溢奶與胃食道逆流", desc: "正常溢奶與需要檢查的警訊、餵奶與睡姿訣竅", url: "reflux.html", doc: "reflux.html#doc", docTitle: "胃食道逆流：GER 與 GERD、警訊與鑑別、增稠配方、牛奶蛋白試驗、抑酸藥劑量", keys: "溢奶 吐奶 逆流 胃食道逆流 GERD 噴射狀嘔吐 幽門狹窄 防吐奶粉 增稠 牛奶過敏 胃藥 PPI" },
  ]},
  { name: "皮膚", icon: "🧴", color: "#f3ecfa", topics: [
    { title: "異位性皮膚炎", desc: "保濕、洗澡、類固醇藥膏怎麼擦與擦多少", url: "atopic-dermatitis.html", doc: "atopic-dermatitis.html#doc", docTitle: "異位性皮膚炎：2023 指引重點、外用藥強度、全身治療與合併感染", keys: "濕疹 異位性 皮膚炎 皮膚癢 乾燥 保濕 類固醇 藥膏 指尖單位 漂白水" },
    { title: "尿布疹", desc: "刺激引起還是念珠菌感染？怎麼分、屁屁膏怎麼擦", url: "diaper-rash.html", doc: "diaper-rash.html#doc", docTitle: "尿布疹：刺激性與念珠菌鑑別、其他鑑別診斷、外用藥與抗黴菌藥劑量", keys: "尿布疹 紅屁股 屁屁膏 氧化鋅 念珠菌 黴菌 衛星 鵝口瘡 尿布 濕紙巾 痱子粉" },
    { title: "蕁麻疹", desc: "突然冒出來的膨疹、抗組織胺怎麼吃、何時要急診", url: "urticaria.html", doc: "urticaria.html#doc", docTitle: "蕁麻疹：2026 國際指引、分類、檢查、鑑別診斷、治療階梯與劑量", keys: "蕁麻疹 風疹塊 膨疹 癢 過敏 血管性水腫 眼皮腫 嘴唇腫 抗組織胺 過敏性休克 腎上腺素 食物過敏" },
  ]},
  { name: "新生兒與成長", icon: "👶", color: "#fff6d9", topics: [
    { title: "新生兒黃疸", desc: "皮膚黃要不要照光、蠶豆症、大便卡與膽道閉鎖", url: "jaundice.html", doc: "jaundice.html#doc", docTitle: "新生兒黃疸：AAP 2022 危險因子、測量時機、照光與升級照護、延遲性黃疸", keys: "黃疸 新生兒 照光 膽紅素 母乳 蠶豆症 G6PD 大便卡 膽道閉鎖 灰白便 曬太陽" },
    { title: "生長曲線怎麼看", desc: "百分位的意義、目標身高計算、何時要評估", url: "growth.html", doc: "growth.html#doc", docTitle: "生長評估：身材矮小、性早熟（Endocrine Society 2026）、肥胖（AAP 2023）", keys: "生長曲線 身高 體重 百分位 矮 長不高 目標身高 骨齡 生長激素 性早熟 轉骨 BMI 肥胖 過重" },
    { title: "疫苗接種時程", desc: "公費時程表、同種與不同疫苗的接種間隔", url: "vaccines.html", doc: "vaccines.html#doc", docTitle: "疫苗：最小接種年齡、最短間隔、不同疫苗間隔與補種", keys: "疫苗 預防針 接種 時程 間隔 五合一 六合一 MMR 水痘 日本腦炎 卡介苗 B肝 A肝 肺炎鏈球菌 輪狀 補種" },
  ]},
];

// 成人專區（首頁最下方）
const ADULT = [
  { title: "成人疫苗接種", desc: "依年齡與身分的成人疫苗時程、公費對象、懷孕與長者疫苗", url: "adult-vaccines.html", doc: "adult-vaccines.html#doc", docTitle: "成人疫苗：肺炎鏈球菌銜接、麻疹德國麻疹免疫力、B 肝追加、接種間隔", keys: "成人 大人 疫苗 Tdap 百日咳 破傷風 流感 新冠 帶狀疱疹 皮蛇 肺炎鏈球菌 PCV20 PPV23 RSV HPV B肝 A肝 MMR 孕婦 長者 公費" },
  { title: "孕婦用藥分級", desc: "懷孕時發燒、咳嗽、鼻塞、氣喘、上吐下瀉、抗生素、類固醇怎麼用藥", url: "pregnancy-meds.html", doc: "pregnancy-meds.html#doc", docTitle: "孕期用藥：舊 FDA 分級對照、各類藥物建議與孕期注意事項", keys: "孕婦 懷孕 用藥 分級 FDA ABCDX 普拿疼 acetaminophen 止痛 咳嗽 鼻塞 化痰 氣喘 孕吐 腹瀉 抗生素 類固醇" },
];

function header(active) {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.className = "site-header";
  el.innerHTML = `<div class="wrap">
    <a class="logo" href="index.html"><img src="favicon.svg?v=3" alt=""><span>兒科門診衛教室</span></a>
    <nav>
      <a href="index.html" class="${active === "home" ? "active" : ""}">衛教目錄</a>
      <a href="index.html#doc-index" class="${active === "doc" ? "active" : ""}">醫師專區</a>
    </nav></div>`;
}

function footer() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `<div class="wrap">
    <p>本站內容為門診衛教輔助資料，不能取代醫師的診察與判斷。孩子有任何不適，請就醫評估。</p>
    <p>照片、解剖圖、聲音與影片取自 Wikimedia Commons 及開放取用期刊的創用 CC 授權或公有領域作品，作者與授權條款標示於各素材下方。</p>
  </div>`;
}

function renderIndex() {
  const box = document.getElementById("categories");
  if (!box) return;
  box.innerHTML = CATEGORIES.map(c => `
    <section class="cat" data-cat>
      <div class="cat-head"><div class="dot" style="background:${c.color}">${c.icon}</div><h2>${c.name}</h2></div>
      <div class="topics">${c.topics.map(t => t.url
        ? `<a class="topic" href="${t.url}" data-keys="${t.title} ${t.desc} ${t.keys}"><strong>${t.title}</strong><span>${t.desc}</span><i class="tag parent">家長衛教</i>${t.doc ? '<i class="tag doc">醫師參考</i>' : ""}</a>`
        : `<div class="topic soon" data-keys="${t.title} ${t.desc} ${t.keys}"><strong>${t.title}</strong><span>${t.desc}</span></div>`
      ).join("")}</div>
    </section>`).join("");

  const adultBox = document.getElementById("adult-topics");
  if (adultBox) adultBox.innerHTML = ADULT.map(t => `<a class="topic" href="${t.url}" data-keys="${t.title} ${t.desc} ${t.keys}"><strong>${t.title}</strong><span>${t.desc}</span><i class="tag parent">民眾衛教</i><i class="tag doc">醫師參考</i></a>`).join("");

  const docs = CATEGORIES.flatMap(c => c.topics.filter(t => t.doc)).concat(ADULT);
  document.getElementById("doc-list").innerHTML = docs.map(t => `<li><a href="${t.doc}">${t.docTitle}</a></li>`).join("");

  const input = document.getElementById("q");
  const empty = document.getElementById("empty");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    document.querySelectorAll("[data-cat]").forEach(sec => {
      let n = 0;
      sec.querySelectorAll("[data-keys]").forEach(t => {
        const hit = !q || t.dataset.keys.toLowerCase().includes(q);
        t.style.display = hit ? "" : "none";
        if (hit) n++;
      });
      sec.style.display = n ? "" : "none";
      shown += n;
    });
    empty.style.display = shown ? "none" : "block";
  });
}

function lightbox() {
  const imgs = document.querySelectorAll(".photo img, .photo-full img");
  if (!imgs.length) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = "<img alt=''><p></p>";
  document.body.appendChild(box);
  imgs.forEach(img => img.addEventListener("click", () => {
    box.querySelector("img").src = img.src;
    box.querySelector("img").alt = img.alt;
    box.querySelector("p").textContent = img.alt;
    box.classList.add("open");
  }));
  box.addEventListener("click", () => box.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") box.classList.remove("open"); });
}

// 手機版表格堆疊時，在每格前面顯示欄位名稱
function labelTables() {
  document.querySelectorAll("table.stack").forEach(t => {
    const heads = [...t.querySelectorAll("thead th")].map(th => th.textContent);
    t.querySelectorAll("tbody tr:not(.group)").forEach(tr =>
      [...tr.children].forEach((td, i) => td.dataset.label = heads[i] || ""));
  });
}

// 側欄目錄：標示目前閱讀的段落，並讓側欄自動捲到該項目
function tocSpy() {
  const toc = document.querySelector(".toc");
  if (!toc) return;
  const links = [...toc.querySelectorAll("a[href^=\"#\"]")];
  const items = links.map(a => [a, document.getElementById(a.getAttribute("href").slice(1))]).filter(x => x[1]);
  if (!items.length) return;
  let current = null, ticking = false;
  const update = () => {
    ticking = false;
    const line = 120;
    let hit = items[0][0];
    for (const [a, sec] of items) { if (sec.getBoundingClientRect().top <= line) hit = a; else break; }
    if (hit === current) return;
    if (current) current.classList.remove("active");
    hit.classList.add("active");
    current = hit;
    if (toc.scrollHeight > toc.clientHeight) {
      const t = hit.offsetTop - toc.clientHeight / 2 + hit.offsetHeight / 2;
      toc.scrollTo({ top: Math.max(0, t), behavior: "smooth" });
    }
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; setTimeout(update, 80); } }, { passive: true });
  addEventListener("resize", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  labelTables();
  header(document.body.dataset.page);
  footer();
  renderIndex();
  lightbox();
  tocSpy();
});
