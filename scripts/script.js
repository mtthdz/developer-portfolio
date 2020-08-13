const main = {

}

main.hover = () => {
  $(".project__title").hover(
    function () {
      $(this).css("color", "#b3b3d3")
      $(this).css("letter-spacing", "-2px")
      $(this).next().css("opacity", "1.0")
      $(this).next().css("right", "80px")
    },
    function () {
      $(this).css("color", "#ffffff")
      $(this).css("letter-spacing", "normal")
      $(this).next().css("opacity", "0")
      $(this).next().css("right", "0px")
    }
  )
}

main.init = function () {
  this.hover();
}

$(function () {
  main.init();
})