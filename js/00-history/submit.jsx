import React from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './ingredients.jsx'


document.addEventListener('DOMContentLoaded', function(){

    class ListOfIngredients extends React.Component {
        displayList(){
            let arrayList = [];
            this.props.recipe.ingredients.map((item, i)=>{
                arrayList.push(<li key={i}>{item.quantity} - {item.ingredient}</li>)});
            return arrayList
        }
        render(){
            return <ul>
                {this.displayList()}
            </ul>
        }
    }

    // class Ingredients extends React.Component {
    //     constructor(props){
    //         super(props);
    //         this.state={
    //             ingredient: '',
    //             quantity: '',
    //         }
    //     }
    //
    //     handleAnyInputChangeIng = (event, nameInState) => {
    //         this.setState({
    //             [nameInState] : event.target.value,
    //         });
    //     };
    //
    //     handleSubmitIngredients = (event) => {
    //         event.preventDefault();
    //         console.log('Submit Recipe');
    //         console.log(this.state.ingredient, this.state.quantity);
    //         this.props.addHandleSubmitIngredients(this.state.quantity, this.state.ingredient);
    //         this.state.ingredient = '';
    //         this.state.quantity = '';
    //     };
    //
    //
    //     render(){
    //         return <div className="form-inline form-group">
    //             <label htmlFor="ingredient">Składnik</label>
    //             <input type='text'
    //                    value={this.state.ingredient}
    //                    onChange={event => this.handleAnyInputChangeIng(event, 'ingredient')}
    //                    className="form-control"
    //                    id="ingredient"
    //                    placeholder="podaj składnik"/>
    //             <label htmlFor="quantity">Ilość</label>
    //             <input type='text'
    //                    value={this.state.quantity}
    //                    onChange={event => this.handleAnyInputChangeIng(event, 'quantity')}
    //                    className="form-control"
    //                    id="quantity"
    //                    placeholder="podaj ilość"/>
    //             <button type="submit"
    //                     className="btn btn-info"
    //                     onClick={this.handleSubmitIngredients}>Dodaj</button>
    //         </div>
    //     }
    // }

    class Submit extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                recipes: [],
                name:'',
                description:'',
                newRecipe:{
                    name: 'costam',
                    description:'opis',
                    ingredients: [],
                }
            }
        };

        addHandleSubmitIngredients(quantity, ingredient){
            //console.log('add ingridients in submit', ingredient, quantity);
            let newRecipe = this.state.newRecipe;
            newRecipe.ingredients.push({quantity:quantity, ingredient:ingredient});
            this.setState({newRecipe})
            //console.log('to jest nowy recipe ', newRecipe)
        };

        handleAnyInputChange = (event, nameInState) => {
            this.setState({
                [nameInState] : event.target.value,
            });
        };

        handleSubmit = (event) => {
            event.preventDefault();
            console.log('Submit Recipe');
            console.log(this.state.name, this.state.description);
            console.log(this.state.newRecipe);
            //console.log(this.state.newRecipe.name);
            let newRecipe = this.state.newRecipe;
            let name = this.state.name;
            let description = this.state.description;
            newRecipe.name = name;
            newRecipe.description = description;
            this.setState({
                newRecipe,
            });

            let recipes = this.state.recipes;
            recipes.push(newRecipe);
            this.setState({
                recipes,
            });
            localStorage.setItem('recipes', JSON.stringify(recipes));
            console.log(recipes);
        };


        render(){
            return <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <h1>Dodaj Przepis</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nazwa</label>
                            <input type="text"
                                   value={this.state.name}
                                   onChange={event => this.handleAnyInputChange(event, 'name')}
                                   className="form-control"
                                   placeholder="Podaj nazwę przepisu"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Opis potrawy</label>
                            <textarea className="form-control"
                                      placeholder="podaj krótki opis potrawy"
                                      value={this.state.description}
                                      onChange={event => this.handleAnyInputChange(event, 'description')}/>
                        </div>
                            <ListOfIngredients recipe={this.state.newRecipe}/>
                            <Ingredients addHandleSubmitIngredients={(quantity, ingredient)=> {this.addHandleSubmitIngredients(quantity, ingredient)}}/>
                        <input type="submit"
                               className="btn btn-default" />
                    </form>
                </div>
            </div>
        }
    }
    class App extends React.Component {
        render(){
            return <Submit/>
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );


});