var works=[
    {
        name: "降妖錄",
        workplace:"無為工作室",
        member:['白紀葳','彭奕綾','蔡易辰','江若仙','張舒涵','裴氏瓊如'],
        text:
        "故事發生於妖魔橫行的架空古代，玩家於故事中將扮演一位新手除妖師，"+
        "於旅途中來到一座村民失蹤事件頻傳的詭異村莊「古嶺村」。"+
        "為了釐清事件的真相，主角將遊走於各地進行調查，"+
        "努力解開各種謎題讓村莊重歸平靜。"+
        "我們的遊戲特色為結合聊齋誌異故事與中國古風元素的劇情體驗、"+
        "具有日式漫畫感的美術視覺、"+
        "富有巧思且難易適中的機關設計，讓玩家享受破關的成就感。"
    },
    {
        name: "血墨契約",
        workplace:"血墨契約工作室",
        member:['鄭 暘','洪順祥','張文安','許其彬'],
        text:
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文。"
        
    },
    {
        name: "Raise",
        workplace:"Raise工作室",
        member:['吳子郇','呂晉丞','陳品皓'],
        text:
        "Raise介紹內文Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文。"
    }
]

$(document).ready(function () {
    $(".btn_More").click(function () {
        console.log(1);
        $(".works_content").show();
        $(".works").hide();
    });
    $(".btn_back").click(function () {
        console.log(1);
        $(".works_content").hide();
        $(".works").show();
    });
});