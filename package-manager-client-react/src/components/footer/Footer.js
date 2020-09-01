import React from 'react';


class Footer extends React.Component {

    render() {

        return (

            <footer className="container">
                <p className="float-right"><a href="#">Subir</a></p>
                <p>&copy; {(new Date().getFullYear())} Mi Test, Inc. &middot; <a href="#">Privacy Policy</a> &middot; <a href="#">Terms</a></p>
            </footer>

        )

    }

}

export default Footer;