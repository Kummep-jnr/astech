// Wait for the page to load
window.addEventListener('load', function () {
    // Get rid of the preloader when the page is fully loaded
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    preloader.style.display = 'none'; // Hide the preloader
    content.style.display = 'block'; // Show the content
});


// Function to animate the count-up effect
function countUp(element) {
  let target = +element.getAttribute('data-count');
  let current = 0;
  let increment = target / 300; // You can adjust the speed of the animation by changing this value

  let timer = setInterval(() => {
    current += increment;
    element.innerText = Math.ceil(current) +  "+" ; // Adding the "+" symbol here

    if (current >= target) {
      element.innerText =  target +  "+"; // Ensure the final value also has the "+" symbol
      clearInterval(timer);
    }
  }, 10); // You can adjust the refresh rate of the animation by changing this value
}

// Get all elements with the class 'counter' and initiate the count-up effect for each
document.querySelectorAll('.counter').forEach(counter => {
  countUp(counter);
});

