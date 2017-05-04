import React from 'react';
import ListOfIngredients from './ingredients_list.jsx'


    export default class Main extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                recipes: JSON.parse(localStorage.getItem('recipes')) || [],
            }
        }

        displayRecipes = () => {
            let arrayRecipes = [];
            this.state.recipes.map((recipe, i)=>{
                arrayRecipes.push(<div key={i} className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={recipe.image} alt={recipe.name}/>
                            <div className="caption">
                                <h3>{recipe.name}</h3>
                                <div><ListOfIngredients recipe={recipe}/></div>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                    </div>)});
            return arrayRecipes;
        };

        render(){
            return <div className="container">
                <div className="row">
                    <h1 className="page-header">Moje przepisy</h1>
                    <div>
                        {this.displayRecipes()}
                    </div>
                </div>
            </div>
        }
    }
