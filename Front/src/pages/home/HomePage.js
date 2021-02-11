import './HomePage.css';
import {BasePage} from "../_base-page";
import { Component } from 'react';
import { Link } from "react-router-dom";
import { Routes } from '../../constantes/routes';


import { AllArticlesService } from '../../services/getAllArticles.service';
import {ArticleComponent} from "../../components/article/ArticleComponent";

class HomePage  extends BasePage{
    state;
    constructor() {
        super();
        this.state = {
            article: [],
        };
    }
    async componentDidMount() {
        const articleResponse = await AllArticlesService.getAllArticles();
        if (articleResponse?.data) {
            articleResponse.data.splice(6, articleResponse.data.length);
            this.setState({article: articleResponse.data});
        }

        this.setState({loaded: true});
    }


    render() {
        return (
            <div className="position-relative">
                <div className="HomePage">
                    <div>

                        <div><Link className="btn btn-primary" to={{ pathname: Routes.NewArticle }}>Créer un nouvel article</Link></div>
                        <div><Link className="btn btn-primary" to={{ pathname: Routes.LoginPage }}>Se connecter</Link></div>
                        <div><Link className="btn btn-primary" to={{ pathname: Routes.RegisterPage }}>S'inscrire</Link></div>
                        <p className="home-sous-titre">Les articles de notre sites</p>
                        <div className="row">
                            {this.state.article?.length ? this.state.article.map(x => (
                                <ArticleComponent article={x}></ArticleComponent>
                            )) : ''}

                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <ArticleComponent></ArticleComponent>
                            <ArticleComponent></ArticleComponent>
                            <ArticleComponent></ArticleComponent>
                            <ArticleComponent></ArticleComponent>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}

export default HomePage;