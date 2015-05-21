function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(function () {
    //

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
});
