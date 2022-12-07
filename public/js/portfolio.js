var works=[
    {
        title: "古嶺奇譚",
        teams:"無為工作室",
        member:['白紀葳','彭奕綾','蔡易辰','江若仙','張舒涵','裴氏瓊如'],
        text:
        "故事發生於妖魔橫行的架空古代，玩家於故事中將扮演一位新手除妖師，"+
        "於旅途中來到一座村民失蹤事件頻傳的詭異村莊「古嶺村」。"+
        "為了釐清事件的真相，主角將遊走於各地進行調查，"+
        "努力解開各種謎題讓村莊重歸平靜。"+
        "我們的遊戲特色為結合聊齋誌異故事與中國古風元素的劇情體驗、"+
        "具有日式漫畫感的美術視覺、"+
        "富有巧思且難易適中的機關設計，讓玩家享受破關的成就感。",
        pic: ["../media/game/game1_1.jpg","../media/game/game1_2.jpg","../media/game/game1_3.jpg"]
    },
    {
        title: "血墨契約",
        teams:"血墨契約工作室",
        member:['鄭 暘','洪順祥','張文安','許其彬'],
        text:
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文，"+
        "血墨契約介紹內文血墨契約介紹內文血墨契約介紹內文。",
        pic: ["../media/game/game2_1.jpg","../media/game/game2_2.jpg","../media/game/game2_3.jpg"]
    },
    {
        title: "Raise",
        teams:"Raise工作室",
        member:['吳子郇','呂晉丞','陳品皓'],
        text:
        "Raise介紹內文Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文Raise介紹內文，"+
        "Raise介紹內文Raise介紹內文Raise介紹內文。",
        pic: ["../media/game/game3_1.jpg","../media/game/game3_2.jpg","../media/game/game3_3.jpg"]
    }
]

$(document).ready(function () {
    
    $(".btn_More").click(function () {
        // console.log(1);
        //切換頁面
        $(".works_content").show();
        $(".works").hide();

        // 把container的外距效果移除
        $(".container_content").removeClass("margin_y")

        //儲存選擇的作品名稱
        var name = $(this).parent().find(".card-title").text();
        var id = 0;
        var m = ""
        // 判斷選擇的作品名稱
        if (name=="古嶺奇譚"){
            id = 0;
        }else if(name=="血墨契約"){
            id = 1;
        }else if(name=="Raise"){
            id = 2;
        }

        $(".content_title").text(name);
        $(".content_teams").text(works[id].teams);
        $(".content_title").text(works[id].title);
        $(".content_txt").text(works[id].text);
        for (var i = 0 ; i< works[id].member.length;i++){
            m += works[id].member[i];
            if (i<works[id].member.length-1){
                m += "、";
            }
        }
        $(".content_member").text(m);

        $(".c1 img").attr("src", works[id].pic[0]);
        $(".c2 img").attr("src", works[id].pic[1]);
        $(".c3 img").attr("src", works[id].pic[2]);
    });
    $(".btn_back").click(function () {
        // console.log(1);
        // 把container的外距效果加入
        $(".container").addClass("margin_y")
        //切換頁面
        $(".works_content").hide();
        $(".works").show();
    });
});