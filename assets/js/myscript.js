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
    $("#page1").css("display" , "none ");
    $("#page2").css("display" , "block");
    $("#page3").css("display" , "none");
});


$("#btnUpdate").click(function () {

    var customerID = $("#basic-url-2").val();
    var customerName = $("#basic-url-3").val();
    var customerAddress = $("#basic-url-4").val();
    var customerTP = $("#basic-url-5").val();
    
    // $("#idTable>tbody").append("<tr> <th>"+customerID+"</th> <td>"+customerName+"</td> <td>"+customerAddress+"</td> <td>"+customerTP+"</td> </tr>");

    var row = `<tr> <th>${customerID}</th> <td>${customerName}</td> <td>${customerAddress}</td> <td>${customerTP}</td> </tr>`;
    $("#idTable>tbody").append(row);
});