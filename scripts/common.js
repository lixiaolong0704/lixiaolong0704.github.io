define(["jquery","../utility"],function ($,u) {

    $("div[part]").each(function () {
            var $t = $(this);
            $.ajax({
                url: $t.attr("part"),
                dataType: "text",
                async: false,
                success: function (rst) {
                    $t.html(rst);
                }
            });
        });
 
 


    return {

        init: init
    };

});