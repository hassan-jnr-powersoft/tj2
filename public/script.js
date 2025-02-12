let btn3 = document.getElementsByClassName("btn3")[0]; // First btn3 element
let btn2 = document.getElementsByClassName("btn2")[0]; // First btn2 element
let mainSlider = document.getElementsByClassName("main-slider")[0]; // First main-slider element
let counter = 0;

function slider() {
  mainSlider.style.transform = `translateX(${counter * 33}rem)`; // Move the slider
  if(counter>=4||counter<=-4){
    return;
  }
}

btn2.addEventListener('click', () => {
  // console.log("btn2 is clicked");
  counter--; // Example: Decrement the counter
  console.log(counter)
  slider(); // Update the slider position
});

btn3.addEventListener('click', () => {
  // console.log("btn3 is clicked");
  counter++; // Example: Increment the counter
  console.log(counter)
  slider(); // Update the slider position
});
