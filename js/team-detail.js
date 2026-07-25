const fallbackPhoto = 'images/avatar.png';

const teamMembers = {
    'nadia-sarwar': {
        groupLabel: '在校硕博',
        name: 'Nadia Sarwar',
        subtitle: '博士研究生',
        photo: 'images/team/nadia-sarwar.png',
        chips: ['第二年博士研究生', '安徽大学资源与环境工程学院', '毒性污染物修复'],
        paragraphs: [
            `Nadia Sarwar，1999年生于巴基斯坦 Dera Ghazi Khan，现为安徽大学资源与环境工程学院博士研究生。`,
            `她的硕士论文聚焦银纳米颗粒的生物合成、表征与应用；博士阶段主要关注重金属、塑料和抗性基因等毒性污染物的识别、降解与生物修复，并探索昆虫肠道微生物在环境修复中的潜力。`,
            `已共同发表 1 篇同行评审论文，另有 2 篇稿件在审、2 章书稿已接收。`
        ]
    },
    'ding-mufei': {
        groupLabel: '在校硕博',
        name: '丁木飞',
        subtitle: '博士研究生',
        photo: 'images/team/ding-mufei.png',
        chips: ['微生物生态学', '垃圾填埋场生态系统', '抗生素抗性基因'],
        paragraphs: [
            `丁木飞，男，巴基斯坦国籍，安徽大学资源与环境工程学院博士研究生，研究方向为微生物生态学和环境保护。`,
            `他主要从垃圾填埋场生态系统出发，研究其对抗生素抗性基因演化的影响，并在抗菌活性和药用植物方面发表过多篇文章。`,
            `曾先后担任生物学科的实验助理和讲师。`
        ]
    },
    'shan-hussain': {
        groupLabel: '在校硕博',
        name: 'Shan Hussain',
        subtitle: '博士研究生',
        photo: 'images/team/shan-hussain.png',
        chips: ['安徽大学生态学系', '植物-昆虫-微生物互作', 'ARGs 与病原微生物'],
        paragraphs: [
            `Shan Hussain，1998年生于巴基斯坦旁遮普省德拉加齐汗，现为安徽大学生态学系博士研究生。`,
            `他的研究聚焦填埋场生态系统中植物、昆虫与微生物的相互作用，重点关注污染物、抗生素抗性基因和病原微生物在复杂生态系统中的关系及联合效应。`,
            `已发表 1 篇论文，另有 2 篇综述和 2 章书稿在审或待出版。`
        ]
    },
    'ju-yajie': {
        groupLabel: '在校硕博',
        name: '琚亚杰',
        subtitle: '2025级硕士研究生',
        photo: 'images/team/ju-yajie.png',
        chips: ['环境科学专业', '原生生物介导碳氮循环', '环境抗性组'],
        paragraphs: [
            `琚亚杰，男，汉族，共青团员，2003年生于安徽安庆，安徽大学资源与环境工程学院环境科学专业 2025 级硕士研究生。`,
            `目前主要聚焦原生生物介导下填埋场微生物碳氮循环与环境抗性组相关科学研究，并持续开展在校学业与科研工作。`
        ]
    },
    'li-siyuan': {
        groupLabel: '在校硕博',
        name: '李嗣远',
        subtitle: '2025级硕士研究生',
        photo: fallbackPhoto,
        chips: ['环境工程专业', '原生生物调控', '垃圾填埋场生态过程'],
        paragraphs: [
            `李嗣远，男，汉族，共青团员，2001年生于安徽安庆，安徽大学资源与环境工程学院环境工程专业 2025 级硕士研究生。`,
            `主要研究原生生物调控的垃圾填埋场生态过程。`
        ]
    },
    'xia-yang': {
        groupLabel: '在校硕博',
        name: '夏阳',
        subtitle: '2025级硕士研究生',
        photo: 'images/team/xia-yang.png',
        chips: ['资源与环境专业', '原生生物介导', '碳氮循环与抗性组'],
        paragraphs: [
            `夏阳，男，汉族，共青团员，2003年出生于安徽滁州，安徽大学资源与环境工程学院资源与环境专业 2025 级硕士研究生。`,
            `主要从事原生生物介导下填埋场微生物碳氮循环和环境抗性组相关科学研究，并持续开展学业深造与科研攻关工作。`
        ]
    },
    'hong-wenqing': {
        groupLabel: '毕业生',
        name: '洪文清',
        subtitle: '2026届硕士研究生',
        photo: 'images/team/hong-wenqing.png',
        chips: ['硕士论文《垃圾填埋场抗性组特征分析》', '现就职于滁州学院', '一作发表 SCI 论文 3 篇'],
        paragraphs: [
            `洪文清，男，汉族，中共党员，2000年生于安徽安庆，安徽大学资源与环境工程学院环境工程专业 2023 届硕士研究生，硕士论文为《垃圾填埋场抗性组特征分析》。`,
            `他聚焦环境微生物组对人体健康及环境可持续发展的影响机制，已一作发表 SCI 论文 3 篇，现就职于滁州学院，从事学习和科研工作。`
        ]
    },
    'sun-anyi': {
        groupLabel: '毕业生',
        name: '孙安逸',
        subtitle: '2026硕士研究生',
        photo: 'images/team/sun-anyi.png',
        chips: ['硕士学位论文《病毒介导的垃圾填埋场中微生物磷、硫与甲烷循环的机制研究》', 'SCI 论文 1 篇', '填埋场病毒研究'],
        paragraphs: [
            `孙安逸，男，汉族，中共党员，2001年生于湖北孝感，安徽大学资源与环境工程学院资源与环境专业 2023 级硕士研究生，硕士学位论文题目为《病毒介导的垃圾填埋场中微生物磷、硫与甲烷循环的机制研究》。`,
            `他围绕填埋场病毒介导的元素循环开展研究，已一作发表 SCI 论文 1 篇。`
        ]
    },
    'xing-baishun': {
        groupLabel: '在校硕博',
        name: '邢百顺',
        subtitle: '2024级硕士研究生',
        photo: 'images/team/xing-baishun.png',
        chips: ['硕士学位论文《特异性噬菌体介导的垃圾填埋场氢营养型产甲烷古菌产甲烷的机制研究》', '病毒-产甲烷古菌宿主关系', '氢营养型甲烷产生'],
        paragraphs: [
            `邢百顺，男，汉族，共青团员，2001年生于安徽合肥，安徽大学资源与环境工程学院环境工程专业 2024 级硕士研究生，硕士学位论文题目为《特异性噬菌体介导的垃圾填埋场氢营养型产甲烷古菌产甲烷的机制研究》。`,
            `相关工作聚焦填埋场病毒-产甲烷古菌宿主关系，并探究噬菌体介导氢营养型甲烷产生的作用机制。`
        ]
    },
    'zheng-zihao': {
        groupLabel: '毕业生',
        name: '郑子豪',
        subtitle: '2026届硕士研究生',
        photo: 'images/team/zheng-zihao.png',
        chips: ['硕士学位论文《噬菌体介导的垃圾填埋场微生物氮循环与抗生素抗性基因传播的机制研究》', 'SCI 论文 2 篇', '预计 2026 年 9 月攻读博士学位'],
        paragraphs: [
            `郑子豪，男，汉族，共青团员，2001年生于湖北武汉，安徽大学资源与环境工程学院资源与环境专业 2023 级硕士研究生，硕士学位论文题目为《噬菌体介导的垃圾填埋场微生物氮循环与抗生素抗性基因传播的机制研究》。`,
            `他聚焦复杂环境介质中环境压力对抗性组及微生物组的影响机制，已一作发表 SCI 论文 2 篇，预计 2026 年 9 月进入华中科技大学攻读博士学位。`
        ]
    },
    'fang-shuqi': {
        groupLabel: '在校硕博',
        name: '方书琪',
        subtitle: '2024级硕士研究生',
        photo: 'images/team/fang-shuqi.png',
        chips: ['硕士学位论文《特异性噬菌体介导的垃圾填埋场乙酸营养型产甲烷古菌产甲烷的机制研究》', '乙酸营养型产甲烷古菌'],
        paragraphs: [
            `方书琪，女，2002年生于安徽淮南，安徽大学资源与环境工程学院 2024 级硕士研究生，硕士学位论文为《特异性噬菌体介导的垃圾填埋场乙酸营养型产甲烷古菌产甲烷的机制研究》。`,
            `她的研究围绕乙酸营养型产甲烷古菌展开，为理解填埋场甲烷产生过程提供支撑。`
        ]
    },
    'yang-jialiang': {
        groupLabel: '在校硕博',
        name: '杨嘉梁',
        subtitle: '2024级硕士研究生',
        photo: 'images/team/yang-jialiang.png',
        chips: ['硕士学位论文《Zobellella taiwanensis DN-7 去除垃圾渗滤液中高氨氮的工程化应用研究》', '高氨氮渗滤液处理'],
        paragraphs: [
            `杨嘉梁，男，2000年生于湖北武汉，安徽大学资源与环境工程学院 2024 级硕士研究生，硕士学位论文为《Zobellella taiwanensis DN-7 去除垃圾渗滤液中高氨氮的工程化应用研究》。`,
            `研究聚焦高氨氮渗滤液处理的工程应用。`
        ]
    },
    'gong-zhourui': {
        groupLabel: '毕业生',
        name: '龚周睿',
        subtitle: '2023届硕士研究生',
        photo: 'images/team/gong-zhourui.png',
        chips: ['硕士论文《垃圾渗滤液在环境表面结垢过程的微生物菌群特征和阻垢研究》', '长江水利委员会水文局'],
        paragraphs: [
            `龚周睿，女，1998年生于湖北黄石，安徽大学 2023 届硕士研究生，硕士论文题目为《垃圾渗滤液在环境表面结垢过程的微生物菌群特征和阻垢研究》。`,
            `现就职于长江水利委员会水文局汉江水文水资源勘测局，从事水环境监测相关工作。`
        ]
    },
    'wu-yongyi': {
        groupLabel: '毕业生',
        name: '吴永怡',
        subtitle: '2020届硕士研究生',
        photo: 'images/team/wu-yongyi.png',
        chips: ['硕士论文《基于 Meta 分析的垃圾填埋场致病菌分布特征》', '安庆海事局'],
        paragraphs: [
            `吴永怡，女，1999年生于安徽六安，安徽大学 2020 届硕士研究生，硕士论文题目为《基于 Meta 分析的垃圾填埋场致病菌分布特征》。`,
            `现工作于安庆海事局，从事政务服务和执法监督工作。`
        ]
    },
    'lin-xiaoxing': {
        groupLabel: '毕业生',
        name: '林晓星',
        subtitle: '2024届硕士研究生',
        photo: 'images/team/lin-xiaoxing.png',
        chips: ['硕士论文《生活垃圾卫生填埋场中病毒-宿主互作关系及其对纤维素降解的影响》', '浙大-西湖大学联合培养博士'],
        paragraphs: [
            `林晓星，女，1999年生于广东汕尾，安徽大学 2024 届硕士研究生，硕士论文为《生活垃圾卫生填埋场中病毒-宿主互作关系及其对纤维素降解的影响》。`,
            `现为浙江大学-西湖大学联合培养博士研究生，研究方向聚焦常温厌氧消化系统中的微生物生态学。`
        ]
    },
    'ni-renjie': {
        groupLabel: '毕业生',
        name: '倪仁杰',
        subtitle: '2024届硕士研究生',
        photo: 'images/team/ni-renjie.png',
        chips: ['硕士论文《微塑料对城市生活垃圾有机组分温室气体排放的影响机制研究》', '同济大学博士研究生'],
        paragraphs: [
            `倪仁杰，男，1999年生于安徽六安，安徽大学 2024 届硕士研究生，硕士论文题目为《微塑料对城市生活垃圾有机组分温室气体排放的影响机制研究》。`,
            `现就读于同济大学环境科学与工程学院，攻读博士学位。`
        ]
    },
    'wang-shuijing': {
        groupLabel: '毕业生',
        name: '王水晶',
        subtitle: '2024届硕士研究生',
        photo: 'images/team/wang-shuijing.png',
        chips: ['硕士论文《人工合成微生物组降解 9-甲基鸟嘌呤》', '环评审批工作'],
        paragraphs: [
            `王水晶，女，1999年生于山东潍坊，安徽大学 2024 届硕士研究生，硕士论文题目为《人工合成微生物组降解 9-甲基鸟嘌呤》。`,
            `现就职于潍坊市生态环境局诸城分局，从事环评审批工作。`
        ]
    },
    'cheng-hong': {
        groupLabel: '毕业生',
        name: '程鸿',
        subtitle: '2016届硕士研究生',
        photo: 'images/team/cheng-hong.png',
        chips: ['中国科学院大学', '重庆大学环境与生态学院', '科研与教育工作'],
        paragraphs: [
            `程鸿，男，1989年生于重庆，中国科学院大学 2016 届硕士研究生，硕士论文题目为《1,2,3-三氮唑和钯纳米颗粒修饰的聚砜膜抗生物污垢研究》。`,
            `现就职于重庆大学环境与生态学院，从事科研与教育工作。`
        ]
    },
    'zhang-rui': {
        groupLabel: '毕业生',
        name: '张睿',
        subtitle: '2019届硕士研究生',
        photo: 'images/team/zhang-rui.png',
        chips: ['中国科学院大学', '生物信息工程师', '多抗性抗性基因'],
        paragraphs: [
            `张睿，男，1997年生于四川遂宁，中国科学院大学 2019 届硕士研究生，硕士论文题目为《垃圾填埋场中多抗性抗性基因的赋存特征及其影响因素分析》。`,
            `现就职于赛雷纳（中国）医疗科技有限公司，从事生物信息工程师工作。`
        ]
    },
    'wang-tao': {
        groupLabel: '毕业生',
        name: '王滔',
        subtitle: '2018届硕士研究生',
        photo: 'images/team/wang-tao.png',
        chips: ['安徽建筑大学', '中科院重庆绿色智能技术研究院', '工程招标和投资咨询'],
        paragraphs: [
            `王滔，男，1996年生于山西运城，安徽建筑大学 2018 届硕士研究生，中国科学院重庆绿色智能技术研究院客座研究生，硕士论文题目为《生活垃圾厌氧消化中的菌群结构及产甲烷代谢》。`,
            `现就职于安徽省招标集团股份有限公司，从事工程招标和投资咨询。`
        ]
    },
    'liu-hongjie': {
        groupLabel: '毕业生',
        name: '刘洪杰',
        subtitle: '2014届硕士研究生',
        photo: 'images/team/liu-hongjie.png',
        chips: ['中国科学院大学', '国家电投集团远达环保工程有限公司', '工艺设计'],
        paragraphs: [
            `刘洪杰，男，1991年生于河南焦作，中国科学院大学 2014 届硕士研究生，硕士论文题目为《模拟垃圾填埋场稳定化进程中细菌和古细菌群落结构的演替》。`,
            `现就职于国家电投集团远达环保工程有限公司，从事工艺设计工作。`
        ]
    },
    'xu-jing': {
        groupLabel: '毕业生',
        name: '徐晶',
        subtitle: '2014届硕士研究生',
        photo: 'images/team/xu-jing.png',
        chips: ['中国科学院大学重庆绿色智能技术研究院', '城乡管理', '抗生素和抗性基因'],
        paragraphs: [
            `徐晶，女，1990年生于重庆大足，中国科学院大学重庆绿色智能技术研究院 2014 届硕士研究生，硕士论文题目为《抗生素和抗性基因在垃圾降解过程中的分布特征与迁移行为》。`,
            `现就职于广东省惠州市惠东县城乡管理和综合执法局，从事城乡管理工作。`
        ]
    },
    'anyuwei': {
        groupLabel: '毕业生',
        name: '安俞炜',
        subtitle: '2022届硕士研究生',
        photo: 'images/team/anyuwei.png',
        chips: ['中国科学院重庆绿色智能技术研究院', '科研组学测序服务', '固相中甲基汞'],
        paragraphs: [
            `安俞炜，男，1997年生于重庆渝中，中国科学院重庆绿色智能技术研究院 2022 届硕士研究生，硕士论文题目为《垃圾填埋场固相中甲基汞及汞甲基化微生物菌群特征》。`,
            `现就职于上海美吉生物医药科技有限公司，从事科研组学测序服务工作。`
        ]
    },
    'liu-xi': {
        groupLabel: '毕业生',
        name: '刘希',
        subtitle: '2018届硕士研究生',
        photo: 'images/team/liu-xi.png',
        chips: ['中国科学院大学', '海绵城市建设', '市政给排水咨询'],
        paragraphs: [
            `刘希，女，1993年生于重庆合川，中国科学院大学 2018 届硕士研究生，硕士论文题目为《城市生活垃圾填埋场垃圾渗滤液中抗生素与抗性基因的污染特征研究》。`,
            `现就职于重庆设计集团有限公司，从事海绵城市建设和市政给排水咨询工作。`
        ]
    },
    'li-lei': {
        groupLabel: '毕业生',
        name: '李蕾',
        subtitle: '2012届硕士研究生',
        photo: fallbackPhoto,
        chips: ['中国科学院大学', '固体废物处置规划与咨询', '深圳市城市规划设计研究院'],
        paragraphs: [
            `李蕾，女，1990年生于湖南常德，中国科学院大学 2012 届硕士研究生，硕士论文题目为《西安某垃圾卫生填埋场抗生素和抗性基因的分布特征》。`,
            `现就职于深圳市城市规划设计研究院有限责任公司，从事固体废物处置规划与咨询工作。`
        ]
    },
    'xu-chenming': {
        groupLabel: '毕业生',
        name: '徐晨茗',
        subtitle: '2021届硕士研究生',
        photo: 'images/team/xu-chenming.png',
        chips: ['中国科学院大学', '合肥工业大学设计院（集团）有限公司', '工程设计'],
        paragraphs: [
            `徐晨茗，男，1995年生于安徽淮北，中国科学院大学 2021 届硕士研究生，硕士论文题目为《餐厨垃圾厌氧发酵产甲烷过程微生物菌群变化特征》。`,
            `现就职于合肥工业大学设计院（集团）有限公司，从事工程设计。`
        ]
    },
    'zhang-shanshan': {
        groupLabel: '毕业生',
        name: '张姗姗',
        subtitle: '2021届硕士研究生',
        photo: 'images/team/zhang-shanshan.png',
        chips: ['中国科学院大学', '东华工程科技股份有限公司', '工程设计'],
        paragraphs: [
            `张姗姗，女，1995年生于安徽六安，中国科学院大学 2021 届硕士研究生，硕士论文题目为《生活垃圾卫生填埋场中微塑料赋存特征及塑料生境微生物群落结构》。`,
            `现就职于东华工程科技股份有限公司，从事工程设计。`
        ]
    }
};

function renderParagraphs(container, paragraphs) {
    container.textContent = '';
    paragraphs.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.className = 'detail-paragraph';
        paragraph.textContent = text;
        container.appendChild(paragraph);
    });
}

function renderTeamDetailPage() {
    const root = document.querySelector('[data-team-detail-root]');
    if (!root) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('person');
    if (!memberId || memberId === 'song-liyan') {
        window.location.replace(memberId === 'song-liyan' ? 'team.html#mentor' : 'team.html');
        return;
    }
    const member = teamMembers[memberId];
    const breadcrumb = document.querySelector('[data-detail-breadcrumb]');

    if (!member) {
        root.innerHTML = '';
        const emptyState = document.createElement('div');
        emptyState.className = 'team-detail-empty';
        emptyState.innerHTML = '<h2>未找到成员信息</h2><p>请返回 <a href="team.html">科研团队</a> 页面选择其他成员。</p>';
        root.appendChild(emptyState);
        document.title = '成员未找到 - 宋立岩教授课题组';
        if (breadcrumb) {
            breadcrumb.textContent = '成员未找到';
        }
        return;
    }

    document.title = `${member.name} - 宋立岩教授课题组`;

    const nameElement = root.querySelector('[data-detail-name]');
    const subtitleElement = root.querySelector('[data-detail-subtitle]');
    const photoElement = root.querySelector('[data-detail-photo]');
    const paragraphsElement = root.querySelector('[data-detail-paragraphs]');

    nameElement.textContent = member.name;
    subtitleElement.textContent = member.subtitle;
    photoElement.src = member.photo;
    photoElement.alt = member.name;
    renderParagraphs(paragraphsElement, member.paragraphs);

    if (breadcrumb) {
        breadcrumb.textContent = member.name;
    }
}

document.addEventListener('DOMContentLoaded', renderTeamDetailPage);
