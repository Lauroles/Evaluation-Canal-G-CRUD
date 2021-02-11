/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import { BaseComponent } from '../_base-compenent';
import './ArticleComponent.css';
import { Link, Route } from 'react-router-dom';
import { Routes } from '../../constantes/routes';

export class ArticleComponent extends BaseComponent {
    constructor() {
        super();
    }

    handleClick() {
        setTimeout(() => {
            window.location.reload();
        }, 100)
    }

    render() {
        let article = this.props.article;
        if (!article) {
            article = {
                "id": 5,
                "title": "Article test",
                "subTitle": "le test",
                "author": "Aymeric",
                "image": 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/07/83f97b09-6a8a-4615-b2a1-24de8ff4cf2c/838_figaro_journal_non_politique_bpt6k287911r_1.jpg',
                "date": "2021-05-22T20:00:00+02:00",
                "text": "blablablabla",
                "categorie": "Figaro",
            };
        }
        return (
            <div className="card-container">
                <div className="card card--article shadow">
                    <div className="row g-0">
                        <div className="col-md-12 card-header-img">
                            <img src={article.image} alt="" />
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <div className="card-body">
                                <h5 className="card-title">{article.title} {article.author}</h5>
                                <h2 className="card-title">{article.subTitle}</h2>
                                <p className="card-text">{article.date}></p>
                                <p className="card-text">{article.text}</p>
                                <p className="card-text"><small className="text-muted">{article.categorie}</small></p>
                            </div>
                            <Link className="btn btn-primary" to={{ pathname: Routes.PutArticle + "/" + article.id }}>Modifier l'article</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}