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
    { title: "一般感冒", desc: "病程、居家照顧與何時回診", keys: "感冒 咳嗽 流鼻水" },
    { title: "細支氣管炎", desc: "嬰兒喘、呼吸快，和氣喘怎麼分", url: "bronchiolitis.html", doc: "bronchiolitis.html#doc", docTitle: "細支氣管炎：評估、處置、不建議治療、與氣喘鑑別、RSV 預防", keys: "RSV 喘 細支氣管 細支氣管炎 咻咻 喘鳴 氣喘 呼吸快 胸凹 單株抗體" },
    { title: "哮吼", desc: "半夜狗吠聲咳嗽、吸氣有聲音", url: "croup.html", doc: "croup.html#doc", docTitle: "哮吼：嚴重度分級、致病原、類固醇與 epinephrine 劑量", keys: "哮吼 犬吠 狗吠 咳嗽 喘鳴 沙啞 croup" },
    { title: "肺炎", desc: "發燒合併咳嗽、呼吸喘", keys: "肺炎 黴漿菌" },
  ]},
  { name: "發燒與感染", icon: "🌡️", color: "#fbeceb", topics: [
    { title: "發燒的照顧", desc: "幾度要退燒、退燒藥怎麼用", keys: "發燒 退燒 體溫" },
    { title: "熱性痙攣", desc: "發燒抽筋時家長該怎麼做", keys: "抽筋 痙攣 熱痙攣" },
    { title: "泌尿道感染", desc: "嬰幼兒不明原因發燒要想到；膀胱輸尿管逆流", url: "uti.html", doc: "uti.html#doc", docTitle: "泌尿道感染：診斷、抗生素與療程、影像、VUR 分級與預防性抗生素", keys: "尿 泌尿道 UTI 腎盂腎炎 膀胱炎 逆流 VUR VCUG 驗尿" },
    { title: "腸病毒", desc: "手足口病、疱疹性咽峽炎與重症前兆", url: "enterovirus.html", doc: "enterovirus.html#doc", docTitle: "腸病毒：型別與表現、重症分期與處置、EV-A71 疫苗", keys: "腸病毒 手足口 口腔潰瘍 疱疹性咽峽炎 嘴巴破 肌躍 抽搐 EV71 克沙奇" },
  ]},
  { name: "腸胃", icon: "🍼", color: "#e6f4ea", topics: [
    { title: "急性腸胃炎與脫水", desc: "上吐下瀉怎麼補充水分、脫水警訊", url: "gastroenteritis.html", doc: "gastroenteritis.html#doc", docTitle: "急性腸胃炎：脫水評估、口服補液、ondansetron 與益生菌", keys: "腸胃炎 嘔吐 腹瀉 拉肚子 脫水 諾羅 輪狀 電解質 ORS" },
    { title: "便秘", desc: "排便困難、肛裂與飲食調整", keys: "便秘 大便" },
    { title: "嬰兒溢奶與胃食道逆流", desc: "正常溢奶與需要檢查的警訊", keys: "溢奶 吐奶 逆流" },
  ]},
  { name: "皮膚", icon: "🧴", color: "#f3ecfa", topics: [
    { title: "異位性皮膚炎", desc: "保濕、類固醇藥膏怎麼擦", keys: "濕疹 異位性 皮膚癢" },
    { title: "尿布疹", desc: "紅屁股的預防與照顧", keys: "尿布疹 紅屁股" },
    { title: "蕁麻疹", desc: "突然冒出來的膨疹", keys: "蕁麻疹 過敏 癢" },
  ]},
  { name: "新生兒與成長", icon: "👶", color: "#fff6d9", topics: [
    { title: "新生兒黃疸", desc: "皮膚黃要不要照光", keys: "黃疸 新生兒" },
    { title: "生長曲線怎麼看", desc: "身高體重百分位的意義", keys: "生長曲線 身高 體重" },
    { title: "疫苗接種時程", desc: "公費與自費疫苗一覽", keys: "疫苗 預防針" },
  ]},
];

function header(active) {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.className = "site-header";
  el.innerHTML = `<div class="wrap">
    <a class="logo" href="index.html"><img src="favicon.svg" alt=""><span>兒科門診衛教室</span></a>
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

  const docs = CATEGORIES.flatMap(c => c.topics.filter(t => t.doc));
  document.getElementById("doc-list").innerHTML = docs.map(t => `<li><a href="${t.doc}">${t.docTitle}</a></li>`).join("");

  const input = document.getElementById("q");
  const empty = document.getElementById("empty");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    box.querySelectorAll("[data-cat]").forEach(sec => {
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

document.addEventListener("DOMContentLoaded", () => {
  labelTables();
  header(document.body.dataset.page);
  footer();
  renderIndex();
  lightbox();
});
