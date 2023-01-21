$("#page1").css("display" , "flex");
$("#page2").css("display" , "none");
$("#page3").css("display" , "none");



$("#homebtn").click(function () {
    $("#page1").css("display" , "flex");
    $("#page2").css("display" , "none");
    $("#page3").css("display" , "none");
});

$("#custombtn").click(function () {
    $("#page1").css("display" , "none");
    $("#page2").css("display" , "none");
    $("#page3").css("display" , "block");
});

$("#itembtn").click(function () {
    $("#page1").css("display" , "none");
    $("#page2").css("display" , "block");
    $("#page3").css("display" , "none");
});