const main = {

}

main.hover = () => {
  $(".project__title").hover(
    function () {
      $(this).css("color", "#e6cfcf")
      $(this).next().show();
    },
    function () {
      $(this).css("color", "#ffffff")
      $(this).next().hide();
    }
  )
}

main.init = function () {
  this.hover();
}

$(function () {
  main.init();
})