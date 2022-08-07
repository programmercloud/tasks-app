$(".fa-trash-alt").click(function () {
  $(this).parents(".box").remove();
});

$(".nav i").click(function () {
  $(".nav i").css("color", "var(--grey2)");
  $(this).css("color", "#7F00FF");
});

$("span").click(function () {
  $(this).toggleClass("right");
  $(".phone").toggleClass("night");
});
