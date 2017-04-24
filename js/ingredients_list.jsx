import React from 'react';

    export default class ListOfIngredients extends React.Component {
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
    };
