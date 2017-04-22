import React from 'react';


export default class Ingredients extends React.Component {
    constructor(props){
        super(props);
        this.state={
            ingredient: '',
            quantity: '',
        }
    }

    handleAnyInputChangeIng = (event, nameInState) => {
        this.setState({
            [nameInState] : event.target.value,
        });
    };

    handleSubmitIngredients = (event) => {
        event.preventDefault();
        console.log('Submit Recipe');
        console.log(this.state.ingredient, this.state.quantity);
        this.props.addHandleSubmitIngredients(this.state.quantity, this.state.ingredient);
        this.state.ingredient = '';
        this.state.quantity = '';
    };


    render(){
        return <div className="form-inline form-group">
            <label htmlFor="ingredient">Składnik</label>
            <input type='text'
                   value={this.state.ingredient}
                   onChange={event => this.handleAnyInputChangeIng(event, 'ingredient')}
                   className="form-control"
                   id="ingredient"
                   placeholder="podaj składnik"/>
            <label htmlFor="quantity">Ilość</label>
            <input type='text'
                   value={this.state.quantity}
                   onChange={event => this.handleAnyInputChangeIng(event, 'quantity')}
                   className="form-control"
                   id="quantity"
                   placeholder="podaj ilość"/>
            <button type="submit"
                    className="btn btn-info"
                    onClick={this.handleSubmitIngredients}>Dodaj</button>
        </div>
    }
};



