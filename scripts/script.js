

function projectHover () {
  const project = document.getElementsByClassName('project__title');

  Array.from(project).forEach(function(title) {
    title.addEventListener("mouseover", function() {
      this.className = "project__title--shown";
      this.parentNode.childNodes[3].className = "project__image--shown";
    })

    title.addEventListener("mouseleave", function() {
      this.className = "project__title";
      this.parentNode.childNodes[3].className = "project__image";
    })
  
  })
}

const swup = new Swup({
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupScrollPlugin({
      doScrollingRightAway: false,
      animateScroll: true,
      scrollFriction: 0.3,
      scrollAcceleration: 0.04,
    })
  ]
});


function init () {
  projectHover();
}

init();
// event listener will reload hover fn everytime swup is triggered
document.addEventListener('swup:contentReplaced', init);