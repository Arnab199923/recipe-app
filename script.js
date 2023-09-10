const searchBox = document.querySelector(".searchBox");
const searchButton = document.querySelector(".searchButton");
const recipeContainer = document.querySelector(".recipeContainer");



const fetchrecipe = async (query)=>{
    recipeContainer.innerHTML="getting your recipe hang on 😍";
    const data =await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    

    recipeContainer.innerHTML="";
    response.meals.forEach(meal => {
        console.log(meal);

        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `<img src ="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strCategory}</p>
        
        `
        recipeContainer.appendChild(recipeDiv);
        
    });
    
}


searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchrecipe(searchInput);
    // console.log("helo"); 
});

