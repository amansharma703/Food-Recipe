import React, { useState, useEffect } from "react";
import MealList from "./Components/MealList";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [mealData, setMealData] = useState(null);
    const [receipe, setReceipe] = useState("Chicken");
    function getMealData() {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${receipe}&apiKey=${API_KEY}&addRecipeInformation=true`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setMealData(data);
            })
            .catch(() => {
                console.log("error");
            });
    }

    useEffect(() => {
        getMealData();
        // eslint-disable-next-line
    }, []);

    function handleChange(e) {
        setReceipe(e.target.value);
    }

    return (
        <div className='App'>
            <div className='controls jumbotron'>
                <h1 className='display-1'>
                    <i className='material-icons brand-icon'>fastfood</i> Food Recipe
                </h1>
                <div className='input-group w-50 mx-auto'>
                    <input type='text' className='form-control' placeholder='Search Your Recipe...' onChange={handleChange} />
                    <div className='input-group-append'>
                        <button className='btn btn-dark' onClick={getMealData}>
                            Search Recipe
                        </button>
                    </div>
                </div>
            </div>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );
}

export default App;
