import React from 'react'
import './Footer.css'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import NeumorphicBox from '../components/common/NeumorphicBox'
import CustomButton from '../components/common/NeumorphicBox'

const Footer = () => {
    const footerLinks = {
        RESOURCES: [
            { name: 'Why WFL?', href: '#' },
            { name: 'Accessibility', href: '#' },
            { name: 'Privacy Terms', href: '#' },
            { name: 'Pricing', href: '#' }
        ],
        'ABOUT US': [
            { name: 'About Us', href: '#' },
            { name: 'Customer Promises', href: '#' },
            { name: 'Road Map', href: '#' },
            { name: 'Legal & Security', href: '#' }
        ],
        SUPPORT: [
            { name: 'Customer Center', href: '#' },
            { name: 'Any Question?', href: '#' },
            { name: 'Help', href: '#' }
        ],
        FEATURES: [
            { name: 'Reffer a Friend', href: '#' },
            { name: 'Fraud Management', href: '#' },
            { name: 'Help', href: '#' }
        ]
    }

    const socialLinks = [
        { Icon: Facebook, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Instagram, href: '#' },
        // { Icon: Pinterest, href: '#' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="footer-column">
                            <h4>{title}</h4>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="footer-column">
                        <h4>FOLLOW US!</h4>
                        <div className="social-links">
                            {socialLinks.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <NeumorphicBox
                            as="input"
                            type="email"
                            placeholder="Enter Email"
                            className="email-input2"
                            isInset={true}
                            shadowIntensity={0.1}
                            bgColor="rgba(255, 255, 255, 0.1)"
                        />
                        <CustomButton
                            className="get-started-btn"


                        >
                            Get Started
                        </CustomButton>
                    </form>
                    <p className="copyright">
                        © Copyright © 2022 Wealth Free Life. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer