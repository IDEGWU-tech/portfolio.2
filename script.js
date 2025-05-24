// Alert when page loads
window.onload = function () {
  alert("Welcome to Idegwu's Portfolio!");
};

// Function to show a message when profile picture is clicked
document.querySelector(".profile-pic").addEventListener("click", function () {
  alert("That's me, Idegwu!");
});

// Toggle visibility of projects
let visible = true;
const projectImages = document.querySelectorAll("#box1 img");

document.querySelector(".p2").addEventListener("click", function () {
  visible = !visible;
  projectImages.forEach(img => {
    img.style.display = visible ? "block" : "none";
  });
});

