import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){


    class Ingredients extends React.Component {
        constructor(props){
            super(props);
            this.state={
                recipes: JSON.parse(localStorage.getItem('recipes')) || [],
                ingredient: '',
                quantity: '',
                newRecipe:{
                    Ingredients: [],
                    Quantitis: [],
                },
            }
        }

        handleAnyInputChange = (event, nameInState) => {
            this.setState({
                [nameInState] : event.target.value,
            });
        };

        handleSubmit = (event) => {
            event.preventDefault();
            console.log('Submit Recipe');
            console.log(this.state.ingredient, this.state.quantity);
            let newRecipe = this.state.newRecipe;
            let ingredient = this.state.ingredient;
            let quantity = this.state.ingredient;


            newRecipe.Ingredients.push(ingredient);
            newRecipe.Quantitis.push(quantity);
            console.log(newRecipe);

            let recipes = this.state.recipes;
            recipes.push(newRecipe);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            console.log(recipes);

            this.setState({
                newRecipe,
                recipes,
            });
        };


        render(){
            return <div className="form-inline form-group">
                            <label htmlFor="ingredient">Składnik</label>
                            <input type='text'
                                   value={this.state.ingredient}
                                   onChange={event => this.handleAnyInputChange(event, 'ingredient')}
                                   className="form-control"
                                   id="ingredient"
                                   placeholder="podaj składnik"/>
                            <label htmlFor="quantity">Ilość</label>
                            <input type='text'
                                   value={this.state.quantity}
                                   onChange={event => this.handleAnyInputChange(event, 'quantity')}
                                   className="form-control"
                                   id="quantity"
                                   placeholder="podaj ilość"/>
                            <button type="submit"
                                    className="btn btn-info"
                                    onClick={this.handleSubmit}>Dodaj</button>
                    </div>
        }
    }


    // class App extends React.Component {
    //     render(){
    //         return <Ingredients/>
    //     }
    // }
    //
    //
    // ReactDOM.render(
    //     <App />,
    //     document.getElementById('app')
    // );

});
