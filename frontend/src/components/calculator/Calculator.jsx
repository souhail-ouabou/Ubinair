import React, { Component } from 'react'
import BeginPage from './BeginPage'
import TypeSitePage from './TypeSitePage'
import TogglesPage from './TogglesPage'
import TypeIntegrPage from './TypeIntegrPage'
import StadePage from './StadePage'
import DownloadPage from './DownloadPage'
import ubinairLogo from '../../img/ubinairLogo.png'
import jsPDF from 'jspdf'
import Goback from './Goback'

class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            devis: 0,
            type: null,
            required: null,
            stateOfAdvance: null,
            priceDebut: 0,
            priceRequired: 0,
            ArrayOftoggles: [],
        }
    }

    handleCheckbox = (event) => {
        let state = this.state
        let index = event.target.value - 1
        state.ArrayOftoggles[index].case = event.target.checked
        event.target.checked
            ? (state.devis += state.ArrayOftoggles[index].price)
            : (state.devis -= state.ArrayOftoggles[index].price)
        this.setState(state)
        console.log(this.state.devis + this.state.type)
    }

    download = () => {
        let doc = new jsPDF('p', 'pt', 'letter')
        let taille = this.state.ArrayOftoggles.filter(
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
        doc.text(275, 380 + taille * 26, this.state.devis.toFixed(2) + ' £')

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
    previousTab = () => {
        let x = this.state.index
        this.setState({ index: x - 1 })
    }

    toggleTab = (index, type = null) => {
        if (index == 2) {
            switch (type) {
                case 'e-commerce':
                    this.setState({
                        ArrayOftoggles: [
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
                        type: 'Site e-commerce',
                        priceDebut: 900,
                    })
                    break

                case 'vitrine':
                    this.setState({
                        ArrayOftoggles: [
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
                        type: 'Site vitrine',
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
            this.setState({
                required: type,
                priceRequired: price,
                devis: this.state.devis + price,
            })
        } else if (index == 5) {
            let t = type
            this.setState({ stateOfAdvance: t })
        }
        this.setState({ index: index })
    }

    render() {
        return (
            <div className='w-[1000px]'>
                <div>
                    <Goback previousTab={this.previousTab} />
                </div>
                <section>
                    <BeginPage
                        index={this.state.index}
                        onNext={(i) => this.toggleTab(i)}
                    />
                    {/*0        1 */}
                    <TypeSitePage
                        index={this.state.index}
                        onNext={(i, type) => this.toggleTab(i, type)}
                    />
                    <TogglesPage
                        allState={this.state}
                        onHandleCheck={this.handleCheckbox}
                        onNext={(i) => this.toggleTab(i)}
                    />
                    <TypeIntegrPage
                        index={this.state.index}
                        devis={this.state.devis}
                        onNext={(i, type) => this.toggleTab(i, type)}
                    />
                    <StadePage
                        index={this.state.index}
                        devis={this.state.devis}
                        onNext={(i, type) => this.toggleTab(i, type)}
                    />
                    <DownloadPage
                        index={this.state.index}
                        devis={this.state.devis}
                        onDownload={() => this.download()}
                    />

                    <table id="firstTable" hidden>
                        <caption>first table</caption>
                        <tr>
                            <th>Type</th>
                            <th>Prix</th>
                        </tr>
                        <tr>
                            <td>{this.state.type}</td>
                            <td>{this.state.priceDebut} £</td>
                        </tr>
                    </table>

                    <table id="secondTable" hidden>
                        <caption>first table</caption>
                        <tr>
                            <th>Description</th>
                            <th>Prix</th>
                        </tr>
                        <tr>
                            <td>{this.state.required}</td>
                            <td>{this.state.priceRequired} £</td>
                        </tr>
                    </table>

                    <table id="thirdTable" hidden>
                        <caption>second table</caption>
                        <tr>
                            <th>Fonctionalités</th>
                            <th>Prix</th>
                        </tr>

                        {this.state.ArrayOftoggles.filter(
                            (Arrayoftoggle) => Arrayoftoggle.case !== false
                        ).map((togglerow) => (
                            <tr>
                                <td>{togglerow.title}</td>
                                <td>{togglerow.price} £</td>
                            </tr>
                        ))}
                        <tr>
                            <th>Sous Total</th>
                            <th>
                                {this.state.devis -
                                    (this.state.priceDebut +
                                        this.state.priceRequired)}{' '}
                                £
                            </th>
                        </tr>
                    </table>
                </section>
            </div>
        )
    }
}
export default Calculator
