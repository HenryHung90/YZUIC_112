var data = [
    {
        header : "標題 1",
        text : "詳細內文1 詳細內文1 詳細內文1 詳細內文1 詳細內文1 詳細內文1 詳細內文1 詳細內文1",
        date : "2023.04.01"
    },
    {
        header : "標題 2",
        text : "詳細內文2 詳細內文2 詳細內文2 詳細內文2 詳細內文2 詳細內文2 詳細內文2 詳細內文2",
        date : "2023.03.11"
    },
    {
        header : "標題 3",
        text : "詳細內文3 詳細內文3 詳細內文3 詳細內文3 詳細內文3 詳細內文3 詳細內文3 詳細內文3",
        date : "2023.02.25"
    },
    {
        header : "標題 4",
        text : "詳細內文4 詳細內文4 詳細內文4 詳細內文4 詳細內文4 詳細內文4 詳細內文4 詳細內文4",
        date : "2023.01.30"
    }
]

$(document).ready(function () {

    $(".card-body button").click(function () {
        var h = $(this).parent().parent().find(".card-header").text();
        console.log(h);
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].header);
            if (data[i].header == h){
                
                $(".modal-title").text(data[i].header);
                $(".modal-body p").text(data[i].text);
                $(".modal-footer").text(data[i].date);
                break;
            }
        }
    });

});
