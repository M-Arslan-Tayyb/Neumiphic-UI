import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './AppLayout.css'

function AppLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="root-container">
            <Header onMenuStateChange={setIsMenuOpen} />

            <main className="">
                {React.Children.map(children, child =>
                    React.cloneElement(child, { isMenuOpen })
                )}
            </main>

            <Footer />
        </div>
    )
}


export default AppLayout