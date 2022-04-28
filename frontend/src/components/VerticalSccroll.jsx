import React from 'react'
import bgImg from '../img/undraw_website_builder_re_ii6e (2).svg'
import views from '../img/views.svg'
import boards from '../img/boards.svg'
import dashboards from '../img/dashboards.svg'
import docs from '../img/docs.svg'
import '../timeline.css'


const VerticalSccroll = () => {
      
    return (
        <div class="timeline">
            <div class="timeline__component">
                <div class="timeline__date timeline__date--right">
                    <div className="md:py-9 flex-1 flex items-center">
                        <img
                            className="ml-auto mt-12 w-full lg:w-auto"
                            src={boards}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component timeline__component--bg">
                <h2 class="timeline__title">Boards</h2>
                <p class="timeline__paragraph">
                    Tout commence par un tableau visuel - le cœur de monday.com
                    Work OS. Adaptez-le à votre façon et gérez tout, des projets
                    aux départements.
                </p>
            </div>
            <div class="timeline__component timeline__component--bg">
                <h2 class="timeline__title">Views</h2>
                <p class="timeline__paragraph">
                    Visualisez et planifiez votre travail plus efficacement
                    grâce à plusieurs vues : tableau Kanban, calendrier,
                    chronologie, diagramme de Gantt, etc.
                </p>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component">
                <div class="timeline__date">
                    {' '}
                    <div className="md:py-9 flex-1 flex items-center">
                        <img
                            className="ml-auto mt-12 w-full lg:w-auto"
                            src={views}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
            <div class="timeline__component">
                <div class="timeline__date timeline__date--right">
                    <div className="md:py-9 flex-1 flex items-center">
                        <img
                            className="ml-auto mt-12 w-full lg:w-auto"
                            src={dashboards}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
            </div>
            <div class="timeline__component timeline__component--bg">
                <h2 class="timeline__title">Dashboards</h2>
                <p class="timeline__paragraph">
                    Obtenez les informations dont vous avez besoin pour prendre
                    des décisions en toute confiance. Suivez les progrès, les
                    échéanciers et les budgets avec des tableaux de bord
                    personnalisés.
                </p>
            </div>
            <div class="timeline__component timeline__component--bottom timeline__component--bg">
                <h2 class="timeline__title">Docs</h2>
                <p class="timeline__paragraph">
                    Transformez du texte en éléments d'action, en quelques clics
                    seulement. Connectez-vous, collaborez et exécutez des idées
                    et des flux de travail en temps réel à partir de n'importe
                    quel document.
                </p>
            </div>
            <div class="timeline__middle">
                <div class="timeline__point"></div>
                <div class="timeline__point timeline__point--bottom"></div>
            </div>
            <div class="timeline__component timeline__component--bottom">
                <div class="timeline__date">
                    {' '}
                    <div className="md:py-9 flex-1 flex items-center">
                        <img
                            className="ml-auto mt-12 w-full lg:w-auto"
                            src={docs}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerticalSccroll
