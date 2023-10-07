// Get references to the tabs
const homeTab = document.getElementById("homeTab");
const openIngredientsTab = document.getElementById("openIngredientsTab");
const recipeTab = document.getElementById("recipeTab");

// Add click event listeners to the tabs
homeTab.addEventListener("click", function () {
    // Navigate to the home page
    window.location.href = "/Users/isabellahall/Downloads/UIProject1-1/tabs/home.html";
});

openIngredientsTab.addEventListener("click", function () {
    // Navigate to the Ingredients Pantry page
    window.location.href = "/Users/isabellahall/Downloads/UIProject1-1/tabs/recipesearch.html";
    window.location.href = "/Users/isabellahall/Downloads/UIProject1-1/tabs/ingredientspantry.html";
});

recipeTab.addEventListener("click", function () {
    // Navigate to the Recipe Search page
    window.location.href = "/Users/isabellahall/Downloads/UIProject1-1/tabs/recipesearch.html";
});
