import React from 'react';

import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación
import Footer from '../footer/Footer';


class About extends React.Component {

    render() {

        return(

            <>

                <Menu />

                <main role="main" className="flex-shrink-0 mt-5">

                    <Jumbotron /> // Este Componente lo crearé a continuación

                </main>

                <Footer />

            </>

        )

    }

}

export default About;