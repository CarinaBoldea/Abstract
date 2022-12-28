let $menuTriggerButton = document.getElementById("menuTrigger");
let $mainMenu = document.getElementById("mainMenu");

$menuTriggerButton.addEventListener(
  "click",
  () => {
    $mainMenu.classList.toggle("active");
    $menuTriggerButton.classList.toggle("active");
  },
  true
);
