// The site should have dynamic elements provided by Javascript, your code should show elements of the following:

// Each of the following should be used: Objects, ES Modules, Arrays and array method usage (forEach, map, reduce, filter, etc)

// DOM interaction: navigation scroll

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

// conditional branching: dark theme

const themeSelector = document.querySelector("#changeToggle");

function changeTheme() {

    var select = document.querySelector("select");
    var themeValue = select.value; 

if (themeValue == "dark") {
  document.body.setAttribute('data-theme', 'dark'); 

  document.querySelector('#whiteLogo').setAttribute('src', 'byui-logo_white.png');
  document.querySelector('#blueLogo').removeAttribute('src');
  document.querySelector('#blueLogo').removeAttribute('alt');
  
  } else {
    document.body.setAttribute('data-theme', 'light'); 
    document.querySelector('#blueLogo').setAttribute('src', 'byui-logo_blue.jpg');
    document.querySelector('#whiteLogo').removeAttribute('src');
    document.querySelector('#whiteLogo').removeAttribute('alt');
  }
}

themeSelector.addEventListener('change', changeTheme);

