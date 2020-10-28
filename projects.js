var checkBox = document.getElementById("customSwitch1");
var mainContainer = document.getElementById("projectContainer");

checkBox.addEventListener("change", function (){
    console.log(checkBox.checked);

    if (checkBox.checked){
        mainContainer.style.flexDirection = "column";
      } else {
        mainContainer.style.flexDirection = "column-reverse";
      }
});
