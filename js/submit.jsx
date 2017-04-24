import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Ingredients from './ingredients.jsx'
import ListOfIngredients from './ingredients_list.jsx'
import {hashHistory} from 'react-router';

const CLOUDINARY_UPLOAD_PRESET = 'gkuok6il';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/bewpage/upload';

    export default class Submit extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                recipes: JSON.parse(localStorage.getItem('recipes')) || [],
                name:'',
                description:'',
                newRecipe:{
                    name: 'nazwa',
                    description:'opis',
                    image:'',
                    ingredients: [],
                },
                uploadedFile:'',
                uploadedFileCloudinaryUrl: '',
            }
        };

        onImageDrop = (files) => {
            this.setState({
                uploadedFile: files[0],
            });
                console.log(files[0]);
            this.handleImageUpload(files[0]);
        }

        handleImageUpload = (file) => {
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                .field('file', file);

            upload.end((err, response) => {
                if (err) {
                    console.error(err);
                }

                if (response.body.secure_url !== '') {
                    this.setState({
                        uploadedFileCloudinaryUrl: response.body.secure_url
                    });
                }
            });
        }


        addHandleSubmitIngredients = (quantity, ingredient) => {
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
            console.log(this.state.newRecipe, this.state.uploadedFileCloudinaryUrl);
            //console.log(this.state.newRecipe.name);
            let newRecipe = this.state.newRecipe;
            let name = this.state.name;
            let description = this.state.description;
            let image = this.state.uploadedFileCloudinaryUrl;

            newRecipe.name = name;
            newRecipe.description = description;
            newRecipe.image = image;

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
            hashHistory.push('/');
        };


        render(){
            return <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <h1>Dodaj Przepis</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                            <div>
                                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                    <div>
                                        <p>{this.state.uploadedFile.name}</p>
                                        <img src={this.state.uploadedFileCloudinaryUrl} />
                                    </div>}
                            </div>
                        <div className="form-group">
                            <label htmlFor="name">Nazwa</label>
                            <input type="text"
                                   value={this.state.name}
                                   onChange={event => this.handleAnyInputChange(event, 'name')}
                                   className="form-control"
                                   placeholder="Podaj nazwę przepisu"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Sposób przygotowania:</label>
                            <textarea className="form-control"
                                      placeholder="podaj opis co trzeba zrobić..."
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
                </div>
        }
    }
    class App extends React.Component {
        render(){
            return <Submit/>
        }
    }
