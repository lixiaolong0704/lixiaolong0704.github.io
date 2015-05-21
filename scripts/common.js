
define(function () {

    var init = function () {
        window.blogs = [{
            title: "最近的我",
            subtitle: "",
            btype: "原创",
            date: "2015 / 5 /21 ",
            file: "about_me.html"

        },
        {
            title: "英语学习",
            subtitle: "",
            btype: "原创",
            date: "2015 / 5 /21 ",
            file: ""

        },
        {
            title: "美剧",
            subtitle: "",
            btype: "原创",
            date: "2015 / 5 /21 ",
            file: ""

        }];
        window.getParameterByName=function (name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        

        $("div[part]").each(function () {
            var $t = $(this);
            $.ajax({
                url: $t.attr("part"),
                dataType: "text",
                success: function (rst) {
                    $t.html(rst);
                }
            });
        });

        var template = $.templates("#blogsList");
        var htmlOutput2 = template.render(window.blogs);

        $("#div_blogList").html(htmlOutput2);
    };

    return {

        init: init
    };

});