import React, { useRef } from 'react'
import './Benifits.css'
import leftImage from '../../assets/images/Benifits.png'
import { Check } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NeumorphicBox from '../common/NeumorphicBox'

gsap.registerPlugin(ScrollTrigger)

const Benefits = () => {
    const sectionRef = useRef(null)

    const benefits = [
        "For building up your Pension & Wealth.",
        "Security from Government & Bank.",
        "Saving + Passive Income + Compounding.",
        "Investments in Defi Contracts, Stacking.",
        "Zero fees for everything on the platform WFL.",
        "Free NFT Marketplace."
    ]

    useGSAP(() => {
        const section = sectionRef.current

        // Title animation
        gsap.from(section.querySelector('.benefits-title'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'restart none none reverse'
            }
        })

        // Image animation
        gsap.from(section.querySelector('.benefits-image img'), {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'restart none none reverse'
            }
        })

        // Benefits list animation
        gsap.from(section.querySelectorAll('.benefit-item'), {
            opacity: 0,
            x: 50,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: section.querySelector('.benefits-list'),
                start: 'top 80%',
                toggleActions: 'restart none none reverse'
            }
        })
    }, [])

    return (
        <section className="benefits" ref={sectionRef}>
            <div className="benefits-container">
                <div className="benefits-content">
                    <div className="benefits-layout">
                        <div className="benefits-image">
                            <div className="benefits-title">
                                <h2>BENEFITS</h2>
                                <h3>WHY JOIN WFL?</h3>
                            </div>
                            <img src={leftImage} alt="Benefits illustration" />
                        </div>
                        <div className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <NeumorphicBox
                                    key={index}
                                    className={`benefit-item ${index === 2 ? 'highlight' : ''}`}
                                    isInset={true}
                                    shadowIntensity={0.1}
                                    bgColor="transparent"
                                >
                                    <Check
                                        className={index === 2 ? 'text-white' : 'text-[#017369]'}
                                        size={20}
                                    />
                                    <span>{benefit}</span>
                                </NeumorphicBox>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits