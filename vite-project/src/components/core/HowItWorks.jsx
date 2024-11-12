import React, { useRef } from 'react'
import './HowItWorks.css'
import rightImage from '../../assets/images/HowItWorks.png'
import CustomButton from '../common/Button'
import NeumorphicBox from '../common/NeumorphicBox'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
    const sectionRef = useRef(null)

    useGSAP(() => {
        const section = sectionRef.current

        // Animate the content
        gsap.from(section.querySelector('.how-it-works-content h2'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(section.querySelector('.how-it-works-content p'), {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from(section.querySelector('.input-group'), {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        })

        // Animate the image
        gsap.from(section.querySelector('.how-it-works-image'), {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <section className="how-it-works" ref={sectionRef}>
            <div className="how-it-works-container">
                <div className="how-it-works-content">
                    <h2>HOW IT<br />WORKS?</h2>
                    <p>
                        Sign up for the FREE, STANDARD or ULTIMATE plan.<br />
                        Invite a friend, receive referral commission (monthly reoccurring when the friend choose the standard or ultimate plan, receive the commission only your own private secure wallet or your deathbed).<br />
                        The commission will be paid in WFL coins, stake the coin to receive profits, invest in the guarded pool to receive min. 5% monthly profit and invest in all the different dApps (smart contracts) we offer.<br />
                        Use the coins on our NFT marketplace.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <NeumorphicBox
                                as="input"
                                type="email"
                                placeholder="Enter Email"
                                className="email-input1"
                                isInset={true}
                                shadowIntensity={0.1}
                                bgColor="rgba(255, 255, 255, 0.1)"
                            />
                            <CustomButton
                                className="get-started-btn"
                                bgColor="linear-gradient(to bottom, #017369, #82C691)"
                                color="black"
                            >
                                Get Started
                            </CustomButton>
                        </div>
                    </form>
                </div>
                <div className="how-it-works-image">
                    <img src={rightImage} alt="How it works illustration" />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks