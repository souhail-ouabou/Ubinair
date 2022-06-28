import React, { useState } from 'react'
import Goback from './Goback'
import BeginPage from './BeginPage'
import SiteTypePage from './SiteTypePage'
import TogglesPage from './TogglesPage'
import IntegrTypePage from './IntegrTypePage'
import AdvanceStatePage from './AdvanceStatePage'
import DownloadPage from './DownloadPage'
import ubinairLogo from '../../img/ubinairLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { CreateProjet } from '../../redux/actions/projectActions'

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
const Calculator = () => {
    const initialState = {
        name: '',
        index: 0,
        devis: 0,
        type: null,
        subtype: null,
        plan: null,
        stateOfAdvance: null,
        priceDebut: 0,
        priceRequired: 0,
        features: [],
    }
    const [calculator, setCaluclator] = useState(initialState)

    const dispatch = useDispatch()

    const download = () => {
        dispatch(CreateProjet(calculator))
        let doc = new jsPDF('p', 'pt', 'letter')
        let taille = calculator.features.filter(
            (Arrayoftoggle) => Arrayoftoggle.case !== false
        ).length
        let today = new Date()
        let day =
            today.getDate() +
            '/' +
            (today.getMonth() + 1) +
            '/' +
            today.getFullYear()
        let date = today.getHours() + ':' + today.getMinutes()
        doc.setFont('helvetica')
        doc.addImage(ubinairLogo, 'PNG', 470, 20, 120, 30)
        doc.setFontSize(25)
        doc.text(220, 80, 'Votre estimation')
        doc.setFontSize(15)
        doc.text(38, 120, 'Votre projet')

        doc.autoTable({
            html: '#firstTable',
            margin: { top: 130, right: 24, bottom: 60, left: 38 },
            styles: { fontSize: 12 },

            columnStyles: {
                0: { cellWidth: 270 },
                1: { cellWidth: 270 },
            },
        })

        doc.text(38, 200, 'Design')
        doc.autoTable({
            html: '#secondTable',
            startY: 210,
            styles: { fontSize: 12 },

            columnStyles: {
                0: { cellWidth: 270 },
                1: { cellWidth: 270 },
            },
        })

        doc.text(38, 278, 'Fonctionnalités')

        doc.autoTable({
            html: '#thirdTable',
            startY: 288,
            styles: { fontSize: 12 },

            columnStyles: {
                0: { cellWidth: 270 },
                1: { cellWidth: 270 },
            },
        })

        doc.setFontSize(15)

        doc.text(190, 360 + taille * 26, 'Notre estimation de votre PROJET')
        doc.text(275, 380 + taille * 26, calculator.devis.toFixed(2) + ' €')

        doc.setFontSize(10)
        doc.text(
            47,
            700,
            'Estimation générée automatiquement depuis devlib.ubinair.com le ' +
                day +
                ' à ' +
                today.getHours() +
                ':' +
                String(today.getMinutes()).padStart(2, '0') +
                ' (Maroc/Marrackech) selon les'
        )
        doc.text(
            100,
            720,
            'informations fournies. Cette estimation doit être confirmé par un rendez-vous téléphonique.'
        )
        doc.text(200, 740, 'Communiquez avec nous hamza@ubinair.com')
        doc.text(250, 760, 'Copyright ©2022 - Ubinair')
        doc.save('facture.pdf')
    }
    const previousTab = () => {
        let i = calculator.index - 1
        let priceAfterTog = calculator.devis

        if (i == 3) {
            if (calculator.required === 'Intégration') {
                priceAfterTog = calculator.devis - 500
            } else if (calculator.required === 'Conception et intégration') {
                priceAfterTog = calculator.devis - 800
            }
        }
        setCaluclator({
            ...calculator,
            index: i,
            devis: priceAfterTog,
        })
    }
    const toggleTab = (index, type = null) => {
        if (index == 1) {
            switch (type) {
                case 'Site Web':
                    console.log(' type', type)
                    setCaluclator({
                        ...calculator,
                        type: type,
                    })

                    break
                case 'Application mobile':
                    console.log(' type', type)
                    setCaluclator({
                        ...calculator,
                        type: type,
                    })
                    break
                case 'Application mobile + Site web':
                    console.log(' type', type)
                    setCaluclator({
                        ...calculator,
                        type: type,
                    })
                    break
                default:
                    return
            }
        } else if (index == 2) {
            switch (type) {
                case 'e-commerce':
                    setCaluclator({
                        ...calculator,
                        features: [
                            {
                                id: 1,
                                title: 'Login avec Mail + Nom Utilisateur',
                                price: 100,
                                case: false,
                            },
                            {
                                id: 2,
                                title: 'Login avec Réseaux Sociaux',
                                price: 300,
                                case: false,
                            },
                            {
                                id: 3,
                                title: 'Géo-localisation',
                                price: 900,
                                case: false,
                            },
                            {
                                id: 4,
                                title: 'Système de messagerie entre utilisateurs',
                                price: 130,
                                case: false,
                            },
                            {
                                id: 5,
                                title: 'Commentaire sur les articles/activités',
                                price: 180,
                                case: false,
                            },
                            {
                                id: 6,
                                title: 'Gestion des réservations',
                                price: 500,
                                case: false,
                            },
                            {
                                id: 7,
                                title: 'Multilingues',
                                price: 400,
                                case: false,
                            },
                            {
                                id: 8,
                                title: 'Solution de Paiement',
                                price: 180,
                                case: false,
                            },
                        ],
                        devis: 900,
                        subtype: 'Site e-commerce',
                        priceDebut: 900,
                    })
                    break

                case 'vitrine':
                    setCaluclator({
                        ...calculator,
                        features: [
                            {
                                id: 1,
                                title: "Interface d'administration",
                                price: 130,
                                case: false,
                            },
                            {
                                id: 2,
                                title: 'Médias et animations',
                                price: 170,
                                case: false,
                            },
                            {
                                id: 3,
                                title: 'Plus de cinq pages',
                                price: 380,
                                case: false,
                            },
                            {
                                id: 4,
                                title: '2 à 5 pages',
                                price: 300,
                                case: false,
                            },
                            { id: 5, title: '1 page', price: 270, case: false },
                            {
                                id: 6,
                                title: 'Gestion de contenu',
                                price: 800,
                                case: false,
                            },
                        ],
                        devis: 200,
                        subtype: 'Site vitrine',
                        priceDebut: 200,
                    })
                    break
                default:
                    return
            }
        } else if (index == 4) {
            let price
            switch (type) {
                case 'Conception et intégration':
                    price = 800
                    break
                case 'Intégration':
                    price = 500
                    break
                default:
                    return
            }

            setCaluclator({
                ...calculator,
                plan: type,
                priceRequired: price,
                devis: calculator.devis + price,
            })
        } else if (index == 5) {
            let t = type
            calculator.stateOfAdvance = t
        }
        setCaluclator((prev) => {
            return { ...prev, index }
        })
        console.log('RESUUUUUME', calculator)
    }
    //TogglesPage handleCheckbox
    const handleCheckbox = (event) => {
        let index = event.target.value - 1 //default value of id in the array features - 1
        console.log('indeeeeeex', index)
        calculator.features[index].case = event.target.checked
        event.target.checked
            ? (calculator.devis += calculator.features[index].price)
            : (calculator.devis -= calculator.features[index].price)

        setCaluclator((prev) => {
            return { ...prev }
        })

        console.log(calculator.devis + '   ' + calculator.type)
    }
    return (
        <div className="w-[1000px] z-10">
            <BeginPage
                index={calculator.index} //0
                onNext={(i, type) => toggleTab(i, type)}
                previousTab={previousTab} //1
            />
            <SiteTypePage
                index={calculator.index} //1
                onNext={(i, type) => toggleTab(i, type)}
                previousTab={previousTab} //2
            />
            <TogglesPage
                allState={calculator} //2
                onHandleCheck={handleCheckbox}
                onNext={(i) => toggleTab(i)}
                previousTab={previousTab} //3
            />
            <IntegrTypePage
                index={calculator.index} //3
                devis={calculator.devis}
                onNext={(i, type) => toggleTab(i, type)}
                previousTab={previousTab} //4
            />
            <AdvanceStatePage
                index={calculator.index}
                devis={calculator.devis}
                onNext={(i, type) => toggleTab(i, type)}
                previousTab={previousTab} //5
            />
            <DownloadPage
                index={calculator.index} //5
                devis={calculator.devis}
                name={calculator.name}
                onChangeName={(nameProject) =>
                    setCaluclator({
                        ...calculator,
                        name: nameProject,
                    })
                }
                onDownload={() => download()}
                previousTab={previousTab}
            />

            <table id="firstTable" hidden>
                <caption>first table</caption>
                <tr>
                    <th>Type</th>
                    <th>Prix</th>
                </tr>
                <tr>
                    <td>{calculator.type}</td>
                    <td>{calculator.priceDebut} €</td>
                </tr>
            </table>

            <table id="secondTable" hidden>
                <caption>first table</caption>
                <tr>
                    <th>Description</th>
                    <th>Prix</th>
                </tr>
                <tr>
                    <td>{calculator.required}</td>
                    <td>{calculator.priceRequired} €</td>
                </tr>
            </table>

            <table id="thirdTable" hidden>
                <caption>second table</caption>
                <tr>
                    <th>Fonctionalités</th>
                    <th>Prix</th>
                </tr>

                {calculator.features
                    .filter((Arrayoftoggle) => Arrayoftoggle.case !== false)
                    .map((togglerow) => (
                        <tr>
                            <td>{togglerow.title}</td>
                            <td>{togglerow.price} €</td>
                        </tr>
                    ))}
                <tr>
                    <th>Sous Total</th>
                    <th>
                        {calculator.devis -
                            (calculator.priceDebut +
                                calculator.priceRequired)}{' '}
                        €
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default Calculator
