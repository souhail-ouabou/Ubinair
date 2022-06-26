import React, { useEffect, useState } from 'react'
import bgImg from '../../img/undraw_website_builder_re_ii6e (2).svg'
import views from '../../img/views.svg'
import boards from '../../img/boards.svg'
import dashboards from '../../img/dashboards.svg'
import docs from '../../img/docs.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './timeline.css'

const SliderTime = () => {
    AOS.init({
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
    })

    return (
        <div className="timeline m-0">
            <div className="timeline__component">
                <div className="timeline__date timeline__date--right">
                    <div className="md:py-9 flex-1 flex items-center">
                        <img
                            className="ml-auto mt-12 w-full lg:w-auto"
                            src={boards}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
            <div className="timeline__middle">
                <div className="timeline__point"></div>
            </div>
            <div
                className="timeline__component timeline__component--bg"
                data-aos-mirror="true"
                data-aos-duration="3000"
                data-aos="fade-left"
            >
                <h2 className="timeline__title">Boards</h2>
                <p className="timeline__paragraph">
                    Tout commence par un tableau visuel - le cœur de monday.com
                    Work OS. Adaptez-le à votre façon et gérez tout, des projets
                    aux départements.
                </p>
            </div>
            <div
                className="timeline__component timeline__component--bg"
                data-aos-duration="3000"
                data-aos="fade-right"
            >
                <h2 className="timeline__title">Views</h2>
                <p className="timeline__paragraph">
                    Visualisez et planifiez votre travail plus efficacement
                    grâce à plusieurs vues : tableau Kanban, calendrier,
                    chronologie, diagramme de Gantt, etc.
                </p>
            </div>
            <div className="timeline__middle">
                <div className="timeline__point"></div>
            </div>
            <div className="timeline__component">
                <div className="timeline__date">
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
            <div className="timeline__component">
                <div className="timeline__date timeline__date--right">
                    <div className="md:py-9 flex-1 flex items-center">
                        <img
                            className="ml-auto mt-12 w-full lg:w-auto"
                            src={dashboards}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
            <div className="timeline__middle">
                <div className="timeline__point"></div>
            </div>
            <div
                className="timeline__component timeline__component--bg"
                data-aos-duration="3000"
                data-aos="fade-left"
            >
                <h2 className="timeline__title">Dashboards</h2>
                <p className="timeline__paragraph">
                    Obtenez les informations dont vous avez besoin pour prendre
                    des décisions en toute confiance. Suivez les progrès, les
                    échéanciers et les budgets avec des tableaux de bord
                    personnalisés.
                </p>
            </div>
            <div
                className="timeline__component timeline__component--bottom timeline__component--bg"
                data-aos-duration="3000"
                data-aos="fade-right"
            >
                <h2 className="timeline__title">Docs</h2>
                <p className="timeline__paragraph">
                    Transformez du texte en éléments d'action, en quelques clics
                    seulement. Connectez-vous, collaborez et exécutez des idées
                    et des flux de travail en temps réel à partir de n'importe
                    quel document.
                </p>
            </div>
            <div className="timeline__middle">
                <div className="timeline__point"></div>
                <div className="timeline__point timeline__point--bottom"></div>
            </div>
            <div className="timeline__component timeline__component--bottom">
                <div className="timeline__date">
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

export default SliderTime
