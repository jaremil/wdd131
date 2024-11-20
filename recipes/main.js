import recipes from "./recipes.mjs";

function starRating(recipe) {
    let counter = 0;
    let ratingsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (counter++ < recipe.rating) {
            ratingsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            ratingsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    return ratingsHTML;
}

function displayRecipe(recipe) {
    let recipeHTML = `
        <img class="recipeImg" src="${recipe.image}" alt="${recipe.name}">
        <section class="secondColumn">
            <section class="sectionTag">
                <p class="recipeTag">${recipe.tags.join(", ")}</p>
            </section>
            <p class="recipeName">${recipe.name}</p>
            <p class="recipeRating">${starRating(recipe)}</p>
            <p class="recipeDescription">${recipe.description}</p>
        </section>
    `;
    document.querySelector(".recipeDisplay").innerHTML += recipeHTML;
}

function displayRecipes(recipes) {
    const recipeDisplay = document.querySelector(".recipeDisplay");
    recipeDisplay.innerHTML = ''; 
    recipes.forEach(displayRecipe); 
}

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

function filterRecipes(query) {
    query = query.toLowerCase();
    return recipes
        .filter(recipe => {
            return (
                recipe.name.toLowerCase().includes(query) || 
                recipe.description.toLowerCase().includes(query) || 
                recipe.tags.find(tag => tag.toLowerCase().includes(query)) || 
                recipe.recipeIngredient.find(ingredient =>
                    ingredient.toLowerCase().includes(query) 
                )
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault(); 
    const query = document.getElementById("searchInput").value; 
    const filteredRecipes = filterRecipes(query); 
    displayRecipes(filteredRecipes); 
}

document.getElementById("searchButton").addEventListener("click", searchHandler);

const randomRecipe = getRandomRecipe();
displayRecipes([randomRecipe]);