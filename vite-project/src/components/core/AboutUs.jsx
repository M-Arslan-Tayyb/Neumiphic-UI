import React, { useRef, useState, useEffect } from 'react'
import './AboutUs.css'
import NeumorphicBox from '../common/NeumorphicBox'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import about1 from '../../assets/images/about-us/about1.png'
import about2 from '../../assets/images/about-us/about2.png'
import about3 from '../../assets/images/about-us/about3.png'
import about4 from '../../assets/images/about-us/about4.png'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(2)
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)

    const features = [
        {
            icon: <img src={about1} alt="Earn Seamlessly" />,
            title: "EARN SEAMLESSLY",
        },
        {
            icon: <img src={about2} alt="Refer a Friend" />,
            title: "REFER A FRIEND",
        },
        {
            icon: <img src={about3} alt="Trusted Worldwide" />,
            title: "TRUSTED WORLDWIDE",
        },
        {
            icon: <img src={about4} alt="Easy Withdrawal" />,
            title: "EASY WITHDRAWAL",
        }
    ]

    useGSAP(() => {
        gsap.from("#about-us h1", {
            opacity: 0,
            y: -50,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reset" // Replay on re-entering viewport
            }
        });

        gsap.from("#about-us > p", {
            opacity: 0,
            y: -30,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reset" // Replay on re-entering viewport
            }
        });


        gsap.from(".feature-card", {
            opacity: 0,
            y: 50,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 90%",
                toggleActions: "play none none reset",
            },
            clearProps: "all"
        });
    }, { scope: sectionRef });
    const handleCardClick = (index) => {
        setActiveIndex(index)

        gsap.to(".feature-card", {
            scale: 1,
            duration: 0.3
        })

        gsap.to(`.feature-card:nth-child(${index + 1})`, {
            scale: 1.05,
            duration: 0.3
        })
    }

    return (
        <div id="about-us" ref={sectionRef}>
            <h1 className="about-title">ABOUT US</h1>
            <p className="about-description">
                Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut. Architecto
                quasi ducimus consequatur nihil voluptas ea non molestias.
            </p>

            <div className="cards" ref={cardsRef}>
                {features.map((feature, index) => {
                    const isActive = index === activeIndex
                    return isActive ? (
                        <NeumorphicBox
                            key={index}
                            className={`feature-card active`}
                            isInset={false}
                            shadowIntensity={1.2}
                            bgColor={'linear-gradient(135deg, #006564, #3Ae2aC)'}
                            style={{
                                color: 'white',
                                transform: 'scale(1.05)'
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <NeumorphicBox
                                className="icon-container"
                                borderRadius="12px"
                                padding="0.75rem"
                                shadowIntensity={0.5}
                                bgColor={'rgba(255, 255, 255, 0.1)'}
                            >
                                {React.cloneElement(feature.icon, {
                                    className: `w-6 h-6 text-white`
                                })}
                            </NeumorphicBox>
                            <h5>{feature.title}</h5>
                            <p>
                                Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut.
                                Architecto quasi ducimus consequatur nihil voluptas ea non molestias.
                            </p>
                        </NeumorphicBox>
                    ) : (
                        <div
                            key={index}
                            className={`feature-card`}
                            onClick={() => handleCardClick(index)}
                        >
                            <NeumorphicBox
                                className="icon-container"
                                borderRadius="12px"
                                padding="0.75rem"
                                shadowIntensity={0.5}
                                bgColor={isActive ? 'rgba(255, 255, 255, 0.1)' : 'var(--bg-color)'}
                            >
                                {React.cloneElement(feature.icon, {
                                    className: `w-6 h-6 ${isActive ? 'text-white' : 'text-[#006564]'}`
                                })}
                            </NeumorphicBox>

                            <h5>{feature.title}</h5>
                            <p>
                                Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut.
                                Architecto quasi ducimus consequatur nihil voluptas ea non molestias.
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="learn-more-container">
                <NeumorphicBox
                    as="button"
                    className="learn-more-button"
                    isInset={false}
                    shadowIntensity={0.8}
                    padding="0.75rem 2rem"
                >
                    Learn More
                </NeumorphicBox>
            </div>
        </div>
    )
}

export default AboutUs
