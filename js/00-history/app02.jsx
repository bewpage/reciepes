import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){


    class Ingredients extends React.Component {
        constructor(props){
            super(props);
            this.state={};
            this.addIngredients = this.addIngredients.bind(this);
        }

        addIngredients() {
            console.log('Ingredient Added');
            console.log(this.quantity.value, this.ingredient.value);
            //this.props.addIngredient(this.quantity.value, this.ingredient.value);

            this.quantity.value = "";
            this.ingredient.value = "";
        }




        render(){
            return <div>
                    <h1>Dodaj Przepis</h1>
                        <div className="form-inline form-group">
                            <label htmlFor="ingredient">Składnik</label>
                            <input type='text'
                                   ref={(input) => {this.ingredient = input;}}
                                   className="form-control"
                                   id="ingredient"
                                   placeholder="podaj składnik"/>
                            <label htmlFor="quantity">Ilość</label>
                            <input type='text'
                                   ref={(input) => {this.quantity = input;}}
                                   className="form-control"
                                   id="quantity"
                                   placeholder="podaj ilość"/>
                            <button type="submit"
                                    className="btn btn-info"
                                    onClick={this.addIngredients}>Dodaj</button>
                        </div>
                </div>

        }
    }

    class App extends React.Component {
        render(){
            return <Ingredients/>
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});