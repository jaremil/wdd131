import recipes from "./recipes.mjs";

function starRating(recipe) {

    let counter = 0

    const rating = document.querySelector(".rating")
    let ratingsHTML = '';
   
    for (let i = 0; i < 5; i++) {
        if(counter++ < recipe.rating) {
            ratingsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>'
            
        } else {
            ratingsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>'
        }
    }
    return ratingsHTML;
}

function displayRecipe(recipe) {
    let recipeHTML = `
        <img class="recipeImg" src="${recipe.image}">
        <p class="recipeTag">${recipe.tags}</p>
        <p class="recipeName">${recipe.name}</p>
        <p class="recipeRating">${starRating(recipe)}</p>
        <p class="recipeDescription">${recipe.description}</p>
    `;
    document.getElementById("contentRecipe").innerHTML += recipeHTML;
}

recipes.forEach((recipe) => {
    displayRecipe(recipe);
});