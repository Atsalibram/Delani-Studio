
$(".click1").click(function () {
    $(".hide1").slideToggle(1000);
    $(".show1").slideToggle(1200);
});

$(".click2").click(function () {
    $(".hide2").slideToggle(1000);
    $(".show2").slideToggle(1200);
});

$(".click3").click(function () {
    $(".hide3").slideToggle(1000);
    $(".show3").slideToggle(1200);
});

$(function () {
    $("form#form").on('submit', function (event) {
      event.preventDefault();
      let name = $("input#name").val();

        if ($("input#name").val()) {
        alert("Hey " + name + ", Thanks for reaching out to us,Will get back to you");
        }
        else {
        alert("Please provide your correct name and email!");
        }
  
    });


});