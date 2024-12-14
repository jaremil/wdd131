// Each of the following should be used: Objects
// Each of the following should be used: ES Modules
// Each of the following should be used: Arrays 
// Each of the following should be used: array method usage
// Each of the following should be used: forEach
// Each of the following should be used: map
// Each of the following should be used: reduce
// Each of the following should be used: filter

// smooth scroll

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]'); 

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1); 
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', 
          block: 'start', 
        });
      }
    });
  });
});

// dark theme

window.addEventListener('DOMContentLoaded', () => {
  const themeSelector = document.querySelector("#changeToggle");
  
  function changeTheme() {
    var select = document.querySelector("select");
    var themeValue = select.value;

    console.log("Theme Selected: " + themeValue); 

    localStorage.setItem('theme', themeValue);

    if (themeValue === "dark") {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  themeSelector.addEventListener('change', changeTheme);

  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    console.log("Applying saved theme: " + savedTheme); 
    document.body.setAttribute('data-theme', savedTheme);
    themeSelector.value = savedTheme;
  } else {
    console.log("No saved theme, applying default (light)");
    document.body.setAttribute('data-theme', 'light');
    themeSelector.value = 'light'; 
  }
});

