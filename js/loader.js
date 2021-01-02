$(function(){ $.get("/template/head.html", function(data) {
    $(data).appendTo("head");
    includeHTML();
});});
