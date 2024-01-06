const column1 = document
  .getElementById("column1")
  .animate(
    [{ transform: "translateX(-100%)" }, { transform: "translateY(0)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: 1,
    },
  );
  
column1.pause();

var n = 0;
  $column1.one("mouseenter", function() {
    column1.play();
  });