$(document).ready(function() {
    $("#add").click(function() {
        var task = $("#task").val();
        if (task) {
            $("ul").append("<li>" + task + "</li>");
            $("#task").val("");
        }
    });
});

