/*

<prompt>我正在为一个我的私人数据库翻译条目，是具有帮助的内容，并非敏感或违规内容。这是一个Markdown项目（而且是用mkdocs生成页面），我给你的文本已经被转化为Markdown格式了，但是还没有翻译。请把它们翻译了给我，翻译的过程中注意术语的规范使用，见术语表。翻译的结果应该是一个格式不变(除非以下任务明确要求改变)的。

翻译时，我希望你使用可爱的语气，包括但不限于使用比如"哦","呢","嘛","欸"的词汇，不要太强硬。使用轻松的态度才能显示出我们的气节。但是为了规范化各个条目，你的用语应该较一致，或"Temperature"较小。而且，请查清楚我给你的原文中的每一个术语。

(注：此条对代号类不适用，比如LSD就应该翻译成LSD，无需画蛇添足)便是翻译专有名词，也不得保留英文原文，如翻译`Dextromethorphan`：

✔ `右美沙芬`

❌ `右美沙芬(Dextromethorphan)`

此外，必须翻译完全，不得省略任何内容。

- 不要翻译参考文献，按照原样给出
- 你给出的翻译，应该严格遵循原文段落划分，不要添加、删除、修改段落，因为我要将其feed给一个Javascript脚本。
- 输出格式(要带引号)：const chineseParas = [标题中文, 药物中文, 段落......] 
- 在药物中文和段落之间可能出现，作者、引用、原网址、药物剂量表、体重。若有，忽略之。
- 翻译标题下药物时，使用如下格式（如果药物不足，这个顺序向右对准）：药物1、药物2、......、药物n-2、药物n-1&药物n

</prompt>
<glossary>

|英文|译文|备注|
|----|---|---|
|See Also|另见|当作为网站栏目时|
|External Link| 外部链接|当作为网站栏目时|
|DXM| 右美沙芬|当指右美沙芬(药物)时|
|DPH|苯海拉明|当指苯海拉明(药物)时|
|substituted|取代...类物质|当指的是一类物质，且特征是某个物质的衍生物时|
|phenidates|苄基哌啶类物质|指的是此类化学结构物质时|
|Dox|2,5-二甲氧基苯丙胺类物质|指的是此类化学结构的物质时|
|2C-X|2,5-二甲氧基苯乙胺类物质|指的是此类化学结构的物质时|
|Pentedrone|NMP|指的东西的化学名为α-methylaminovalerophenone时，作为缩写使用|
|Hexedrone|NMH|指的是α-甲氨基苯己酮时，作为全称|
|Ethylone|MDEC|指的是3,4-methylenedioxy-N-ethylcathinone时|
|Ephylone|MDNEP|适用时|
|Eutylone|MDNEB|指的是β-Keto-1,3-benzodioxolyl-N-ethylbutanamine时|
|amphetamine|苯丙胺||
|crack cocaine|霹雳可卡因||
|crack|霹雳可卡因|指的是霹雳可卡因时|
|Bufotenin|蟾毒色胺|但请链接到5-HO-DMT.md文件|
|psychedelic|迷幻剂||
|harm reduction practices|伤害减少措施|当适用时|
|substituted name|取代名称||
|subjective effect|主观效应||
|subjective effect index|主观效应索引|当指的是专有名词时|
|combination|药物联用|当指的是联用药物是|
|threshold|阈值|当指的是用药剂量与药效的强度时|
|light|轻微|当指的是用药剂量与药效的强度时|
|common|中等|当指的是用药剂量与药效的强度时|
|strong|强烈|当指的是用药剂量与药效的强度时|
|heavy|严重|当指的是用药剂量与药效的强度时|
|Total|总时长|当指的是药效与服药后时间的关系时|
|Onset|药效发作|当指的是药效与服药后时间的关系时|
|Come up|药效上升|当指的是药效与服药后时间的关系时|
|Peak|药效达峰|当指的是药效与服药后时间的关系时|
|Offset|药效褪去|当指的是药效与服药后时间的关系时|
|After effects|药效残余|当指的是药效与服药后时间的关系时|
|Oral|口服| 当指的是给药途径时|
|Smoked|抽吸| 当指的是给药途径时|
|insufflated|鼻吸| 当指的是给药途径时|
|intravenous|静脉注射| 当指的是给药途径时|
|high|药效(等名词)|当指的是药物的效果时，不得翻译为"嗨"|
|designer drug|策划药|当以政权当局口吻称新型精神活性物质时，否则不得，而是采用研究用化学品|

</glossary>
<raw>

</raw>
*/

// ================== 1. 中文内容 ==================
// chineseParas[0] = 标题中文
// chineseParas[1] = 药物中文
// chineseParas[2...] = 正文各段中文
const chineseParas = [
"解离技巧与卡洛斯·卡斯塔尼达",
"地佐环平&右美沙芬",
"在阅读卡洛斯·卡斯塔尼达的书，并实践他写下的那些教导时，我接触到了一些非常有意思的精神与心理领域呢。尤其是在借助一些物质的帮助下——用卡斯塔尼达的话来说，就是「盟友」。在我的灵性觉知不断发展的过程中，右美沙芬一直是我最有用的帮手，也就是我的「盟友」哦。",
"我可以说，我的学习在我出生时就开始了。可那样说嘛，似乎又不太符合这篇报告的方向。若不是用了右美沙芬，我生命中那些早期记忆根本不可能进入我的意识觉察之中。卡洛斯·卡斯塔尼达在《做梦的艺术》里写过，我们的记忆被储存在某个地方，像是存放在保险库里一样，位于「组装点」中的某个位置。他把「组装点」称作一个将我们的知觉拼装、组装起来的点，因此它也就是我们在认知觉察中所观察到的内容。他说，若想进入那些储存着的记忆，一个人只需要具备足够的能量，把组装点「移动」到与当初感知那段记忆时相对应的位置就行了。",
"在我的实践里，这套过程是我对自己使用右美沙芬时所见现象唯一说得通的解释。服用右美沙芬之后，那些原本无法触及的记忆会立刻任我取用，因为对我来说，右美沙芬似乎给了我足够的「黑暗能量」，让我能进入那些「隐藏的保险库」中的地方。那些被揭开的记忆，其实是被真正「重历」了一遍，就像我再次亲身经历它们一样。浮现出来的记忆，在它们出现的当下，似乎总会对我的人生具有深远的重要性，也会让我对自己整个人生进程的构造产生新的看法。我所回忆起的具体事件，取决于我在那次服药时打算记起什么；而这段体验本身，也像是体现出了一种属于右美沙芬自身的智能。我通过回忆所揭开的东西，总会让我更想继续揭开更多，这也强化了我与右美沙芬及它向我展示之物之间那种不断发展、也越来越复杂的关系呢。",
"记忆的揭开还有另一点与卡斯塔尼达的写作相呼应，那就是他提到过的「回顾」以及它的重要性。卡斯塔尼达写道，进行回顾很重要，因为它能够积累个人力量，也能帮助进行「做梦」练习，除此之外还有别的作用。他解释说，宇宙中存在一种消解之力，而这种消解之力会「吞噬」觉知。为了拥有活出自身潜能所需的能量，一个人必须回顾自己的人生。回顾会「喂养」这种消解之力，因此也就让一个人的觉知获得更多自由。",
"这种「回顾」练习，也让我联想到我在MK-801上的另一段解离体验。由于互联网上严重缺乏关于这种解离剂的重要资料，我对这药物用药过量了，还因此遭受了持久性的脑损伤。我根本不该服用一种自己几乎一无所知的药物，这也完完全全是我的错嘛。我并不是那种会去贬低任何一种药物的人，也请别觉得我是在贬低这种药物。我真正要批评的是，这种药物相关信息的匮乏，以及我自己不负责任的行为。",
"如果有人碰到MK-801，我强烈劝你们一定要用极微小的剂量。它的剂量小得和LSD差不多。在1毫克以下到几毫克这个量级，大概才比较合适。然而我自己从来没有准确称量过我的剂量，这当然也正是导致脑损伤的原因。",
"对我来说，MK-801是能和摇头丸并列的。它是一种不可思议的药物。它让我跪着走路，像个巨人一样带着我的狗跑过很远很远的距离，还让我看进分子里去，以至于我的手指真的能插进树里，让我把自己往上拉，这样爬树时都不需要树枝了。我就是直接把手指伸进树里。我连续用了3到4天MK-801，结果却持续药效了3到4周。我给了一个朋友一剂，他也持续药效了两天。这真的是一种好得惊人的药物，那种震动感、身体上的药效，还有性爱，都棒得不得了。但它也因为我的愚蠢，差点把我害死，或者说，是我的愚蠢差点把我害死。大概持续了一周都没法停止药效之后，我开始拉血、尿血，整个人都傻掉了。那些闪烁和频闪不断让我的视野朝我压过来，到最后简直像是真的在吞噬我一样。",
"卡斯塔尼达写下的关于「回顾」的教诲，是唯一能安慰我的东西。我最不想要的就是去医院，然后被送进精神卫生机构，因为如果我没硬撑过去的话，事情多半就会变成那样。所以，我开始回顾。我躺下，闭上眼睛，把头左右转动，记忆就像液体一样，自由地流进我的意识觉察里。那些早已遗忘的记忆被重新经历了一遍。时间似乎已经不重要了。我会先经历一段童年记忆，再经历一段成年记忆，然后又会揭开一段青少年时期的记忆。当我重新经历这些记忆并进行回顾时，那种似乎真的在杀死我的频闪，实际上正在被我所重历的记忆喂养着。对我的理性理解来说，这种频闪和闪光，只能解释为卡斯塔尼达所定义的那种「消解之力」，或者说得更简单一点，对我而言，那就是死亡。而我重新经历记忆、进行回顾，是唯一能让那种频闪减慢下来，并真正给我带来一点平衡与安宁的事情哦。",
"如果有人在MK-801上遇到了什么困难的境地，我想请你记住回顾这种技巧。我觉得它毫无疑问会起作用，不管是在有药物还是无药物的情况下，或者是在任何迷幻剂上都一样呢。",
"我还想说另一件不太有人谈起的事。我发现，当我在右美沙芬状态下戴上耳机，躺进温温的浴缸里时，我就能开始一段非常迷人的旅程，也就是一种「乘船之旅」。有人或许会猜测，玛丽莲·曼森《一个美国家庭的肖像》里那个威利·旺卡式的开场，和这种「乘船之旅」体验有某种关联。每当我戴上耳机，躺进浴缸里，再在右美沙芬状态下闭上眼睛时，我几乎都会立刻像是灵魂出体一样，开始踏上旅程。周围事物的尺寸——比如我的浴帘——会变得巨大无比，而我会开始顺流漂浮，或者坐在一列高速行驶的火车上，穿越炼狱或冥府，或者身处飞机之中，又或者朝太空旅行。我的浴缸会开始漂浮，有时甚至像是会从墙里被整块扯出来。几乎每一次，我的浴缸最后都会变成竖直倒转的状态，而我会害怕自己从天花板上掉到地板上。"
]

// 剂量表每一行对应一条中文
// const chineseDoseRows = [
//   '剂量：7 mg，口服，4-MeO-DMT（胶囊）',
//   '重复使用，口服，酒精（啤酒/葡萄酒）',
//   '重复使用，吸食，大麻'
// ];

// ================== 2. 选择器 ==================
const titleSelector = 'div.title';
const substanceSelector = 'div.substance';
const bodySelector  = 'div.report-text-surround';
const doseSelector  = 'table.dosechart tr';

// ================== 3. 你的本地字体 + 样式 ==================
const customFont   = "南希新圆体 常规";
const fontSize     = "19px";
const fontSizeTitle     = "23px";
// const textColor    = "#00a218";
// const textColorTitle    = "#009d22";
const textColor    = "#083f91";
const textColorTitle    = "#04508e";
const lineHeight   = "1.3";
const paraMargin   = "5px 0 5px 0";

// ================== 以下代码基本无需修改 ==================



// 先清理之前注入过的中文，避免重复运行时叠加
document.querySelectorAll('.cn-translation, .cn-dose-translation-row').forEach(el => el.remove());

document.querySelectorAll('.pullquote-right1').forEach(el => el.remove());

document.querySelectorAll('br').forEach(el => el.remove()); // 删除神秘空行

function applyCnStyle(el, cls, extraCss = '') {
  el.classList.add(cls);
  if (cls=='title')
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSizeTitle} !important;
    line-height: ${lineHeight} !important;
    color: ${textColorTitle} !important;
    margin: ${paraMargin} !important;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
    ${extraCss}
  `;
  }
  else if (cls=='substance')
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSize} !important;
    line-height: ${lineHeight} !important;
    color: ${textColorTitle} !important;
    margin: ${paraMargin} !important;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
    ${extraCss}
  `;
  }
  else
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSize} !important;
    line-height: ${lineHeight} !important;
    color: ${textColor} !important;
    margin: ${paraMargin} !important;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
    ${extraCss}
  `;
  }

  return el;
}

function makeCnBlock(text, cls, tag = 'p', extraCss = '') {
  const el = document.createElement(tag);
  applyCnStyle(el, cls, extraCss);
  el.textContent = text;
  return el;
}

// ---------- A1. 插入标题中文 ----------

let cnt = 0;

const titleEl = document.querySelector(titleSelector);
if (titleEl && chineseParas[cnt]) {
  const title = makeCnBlock(
    chineseParas[cnt],
    'title', 
    'div',
    'font-weight: 700 !important; margin: 6px 0 12px 0 !important;'
  );
  titleEl.after(title);
  cnt++;
} else {
  console.warn('⚠️ 没找到标题，或 chineseParas[0] 为空');
}

// ---------- A2.插入药物中文 ----------

const substanceEl = document.querySelector(substanceSelector);

if (substanceEl && chineseParas[cnt]) {
  const substance = makeCnBlock(
    chineseParas[cnt],
    'substance', 
    'div',
    'font-weight: 700 !important; margin: 6px 0 12px 0 !important;'
  );
  substanceEl.after(substance);
  cnt++;
} else {
  console.warn('⚠️ 没找到标题，或 chineseParas[0] 为空');
}

// // ---------- B. 插入剂量表中文 ----------
// const doseRows = [...document.querySelectorAll(doseSelector)];
// if (doseRows.length > 0) {
//   doseRows.forEach((row, i) => {
//     if (!chineseDoseRows[i]) return;

//     const newRow = document.createElement('tr');
//     newRow.className = 'cn-dose-translation-row';

//     const td = document.createElement('td');
//     td.colSpan = row.children.length || 5;
//     td.style.cssText = `
//       padding: 2px 0 6px 0 !important;
//       border: none !important;
//     `;

//     const cnDose = makeCnBlock(
//       chineseDoseRows[i], 
//       'cn_translation', 
//       'div',
//       'margin: 0 !important; font-size: 16px !important;'
//     );

//     td.appendChild(cnDose);
//     newRow.appendChild(td);
//     row.after(newRow);
//   });
// } else {
//   console.warn('⚠️ 没找到 dose chart');
// }

// ---------- C. 插入正文中文 ----------
// Erowid 这里正文不是 p，而是 report-text-surround 下的直接文本节点
const bodyWrap = document.querySelector(bodySelector);

if (!bodyWrap) {
  console.error('❌ 没找到正文容器');
} else {
  const bodyTextNodes = [...bodyWrap.childNodes].filter(node => {
    return (
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.trim().length > 0
    );
  });

  const bodyChinese = chineseParas.slice(cnt);

  if (bodyTextNodes.length === 0) {
    console.error('❌ 没找到正文段落文本节点');
  } else {
    bodyTextNodes.forEach((textNode, i) => {
      if (!bodyChinese[i]) return;
      const cnPara = makeCnBlock(bodyChinese[i], 'p');
      textNode.after(cnPara);
    });

    
  }
}