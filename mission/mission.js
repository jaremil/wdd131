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