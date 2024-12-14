// The site should have dynamic elements provided by Javascript, your code should show elements of the following:

// It should show some level of organization: at a minimum it should have more than one function.
// It should include DOM interaction: select an element, modify it, and listen for and react to events
// It should show examples of conditional branching
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