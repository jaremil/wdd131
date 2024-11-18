// import recipes from "./recipes.mjs";

// function starRating(recipe) {

//     let counter = 0

//     const rating = document.querySelector(".rating")
//     let ratingsHTML = '';
   
//     for (let i = 0; i < 5; i++) {
//         if(counter++ < recipe.rating) {
//             ratingsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>'
            
//         } else {
//             ratingsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>'
//         }
//     }
//     return ratingsHTML;
// }

// function displayRecipe(recipe) {
//     let recipeHTML = `
//         <img class="recipeImg" src="${recipe.image}" alt="Recipe Image">
//         <section class="secondColumn">
//         <section class="sectionTag"><p class="recipeTag">${recipe.tags}</p></section>
//         <p class="recipeName">${recipe.name}</p>
//         <p class="recipeRating">${starRating(recipe)}</p>
//         <p class="recipeDescription">${recipe.description}</p>
//         </section>
//     `;
//     document.querySelector(".recipeDisplay").innerHTML += recipeHTML;
// }

// displayRecipe(recipes[0]);


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
        <img class="recipeImg" src="${recipe.image}" alt="Recipe Image">
        <section class="secondColumn">
        <section class="sectionTag"><p class="recipeTag">${recipe.tags}</p></section>
        <p class="recipeName">${recipe.name}</p>
        <p class="recipeRating">${starRating(recipe)}</p>
        <p class="recipeDescription">${recipe.description}</p>
        </section>
    `;
    document.querySelector(".recipeDisplay").innerHTML += recipeHTML;
}

displayRecipe(recipes[0]);




