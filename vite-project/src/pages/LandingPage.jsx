import React, { useRef } from 'react'
import './LandingPage.css'
import CustomButton from '../components/common/Button'
import heroImage from '../assets/images/heroImage.png'
import stylishLines from '../assets/images/stylishLines.svg'
import ratingAndReview from '../assets/images/rattingReview.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import redisImage from '../assets/images/redisImage.png'
import amazon from '../assets/images/amazon.png'
import ibm from '../assets/images/ibm.png'
import google from '../assets/images/Google.png'
import microsoft from '../assets/images/microsoft.png'
import NeumorphicBox from '../components/common/NeumorphicBox'
import about1 from '../assets/images/about-us/about1.png'
import AboutUs from '../components/core/AboutUs'
import OurReferral from '../components/core/OurReferral'
import AutoPool from '../components/core/AutoPool'
import SimpleDashboard from '../components/core/SimpleDashboard'
import WhatClientSays from '../components/core/WhatClientSays'
import AnyQuestion from '../components/core/AnyQuestion'
import MemberShip from '../components/core/MemberShip'
import HowItWorks from '../components/core/HowItWorks'
import Benifits from '../components/core/Benifits'










gsap.registerPlugin(ScrollTrigger)

const LandingPage = ({ isMenuOpen }) => {
    const heroImageRef = useRef(null)
    const ratingReviewRef = useRef(null)
    const containerRef = useRef(null)
    const companyButtonRef = useRef(null)
    const companyLogosRef = useRef(null)

    useGSAP(() => {
        // Previous animations remain the same
        gsap.to(heroImageRef.current, {
            y: -20,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })

        gsap.from(ratingReviewRef.current, {
            x: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ratingReviewRef.current,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        })

        // New animations for company section
        gsap.from(companyButtonRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: companyButtonRef.current,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        })

        // Stagger animation
        gsap.from("#company-section > div:last-child img", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: companyLogosRef.current,
                start: "top bottom-=50",
                toggleActions: "play none none reverse"
            }
        })

        // Responsive animations remain the same
        const mm = gsap.matchMedia()

        mm.add("(max-width: 860px)", () => {
            gsap.to(heroImageRef.current, {
                scale: 1.05,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            })
        })

        return () => mm.revert()
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={`hero-container ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="hero">
                <div className="hero-content">
                    <h1 className='heading1'>Achieve your wealth free life with</h1>
                    <h1 className='heading2'>Wealth Free Life</h1>
                    <div className="divider"></div>
                    <p className="hero-description">Activate your life with wealth freedom and richness and create your success as a member.</p>
                    <div className="email-signup">
                        <NeumorphicBox
                            as="input"
                            className="email-input"
                            placeholder="Enter Email"
                        />
                        <CustomButton
                            color="#141313"
                            bgColor="#f1f3f6"
                            boxShadowColor="rgba(0, 100, 100, 0.2)"
                        >
                            Get Started
                        </CustomButton>
                    </div>
                    <p className="early-access">Early access invitations are rolling out soon - get on the waiting list- grab your membership spot now (be 1 of the first 1000 members)</p>
                </div>
                <div className="hero-image">
                    <img ref={heroImageRef} src={heroImage} alt="Wealth Free Life Hero" />
                    {/* rating and reviews */}
                    <div ref={ratingReviewRef} className='rateAndReview'>
                        <img src={ratingAndReview} alt="ratingAndReview" />
                        <p>Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut. Architecto quasi ducimus consequatur nihil voluptas ea non molestias. Perspiciatis et numquam aut et.</p>
                    </div>
                </div>
                {/* stylish lines */}
            </div>
            <div className='stylishLines'>
                <img src={stylishLines} alt='stylish lines'></img>
            </div>
            {/* company section */}
            <div id="company-section">
                <div ref={companyButtonRef}>
                    <CustomButton>
                        <span>Trusty WorldWide</span>
                        <span>Over: 100+</span>
                    </CustomButton>
                </div>
                <div ref={companyLogosRef}>
                    <img src={redisImage} alt="Redis" />
                    <img src={amazon} alt="Amazon" />
                    <img src={google} alt="Google" />
                    <img src={ibm} alt="IBM" />
                    <img src={microsoft} alt="Microsoft" />
                </div>
            </div>

            {/* about us section */}


            <AboutUs></AboutUs>
            <OurReferral></OurReferral>
            <AutoPool></AutoPool>
            <SimpleDashboard></SimpleDashboard>
            <WhatClientSays></WhatClientSays>
            <AnyQuestion></AnyQuestion>
            <MemberShip></MemberShip>
            <HowItWorks></HowItWorks>
            <Benifits></Benifits>




        </div>
    )
}

export default LandingPage