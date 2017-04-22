import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){


    class Submit extends React.Component {
        constructor(props){
            super(props);
            this.state={
                ingredient: '',
                quantity: '',
                arrayIngred: {},
                arrayQuant: {},
            }
        }

        handleAnyInputChange = (event, nameInState) => {
            this.setState({
                [nameInState] : event.target.value,
            });
        };

        handleSubmit = (event) => {
            event.preventDefault();
            const ing = this.state.ingredient;
            const arrayIngred = this.state.arrayIngred.slice();
            arrayIngred.push(ing);
            const quant = this.state.quantity;
            const arrayQuant = this.state.arrayQuant.slice();
            arrayQuant.push(quant);

            this.setState({
                arrayIngred,
                arrayQuant,
            });
            console.log(arrayIngred);
            console.log(arrayQuant);
        }



        render(){
            return <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <h1>Dodaj Przepis</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nazwa</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               placeholder="Podaj nazwę przepisu"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Opis potrawy</label>
                        <textarea className="form-control"
                                  id="description"
                                  placeholder="podaj krótki opis potrawy"/>
                    </div>
                    <div className="form-inline form-group">
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
                                className="btn btn-info">Dodaj</button>
                    </div>
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