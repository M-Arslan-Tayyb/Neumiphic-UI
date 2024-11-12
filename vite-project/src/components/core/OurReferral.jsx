import React, { useRef } from 'react'
import CustomButton from '../common/Button'
import './OurReferral.css'
import referral1 from '../../assets/images/referral/referral1.png'
import referral2 from '../../assets/images/referral/referral2.png'
import referralDotted from '../../assets/images/referral/referralDotted.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OurReferral = () => {
    const sectionRef = useRef(null)
    const leftImageRef = useRef(null)
    const rightImageRef = useRef(null)
    const contentRef = useRef(null)

    useGSAP(() => {
        // Floating animation for images
        gsap.to(leftImageRef.current, {
            y: 20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })

        gsap.to(rightImageRef.current, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.5
        })

        // Content animation on scroll
        gsap.from(contentRef.current.children, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.3,
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",
                end: "top 30%",
                toggleActions: "play none none reverse"
            }
        })
    }, { scope: sectionRef })

    return (
        <section className="referral-section" ref={sectionRef}>
            <div className="referral-content-wrapper">
                <div className="referral-image left" ref={leftImageRef}>
                    <img src={referral1} alt="Person with phone and floating elements" />
                </div>

                <div className="referral-content" ref={contentRef}>
                    <h1>OUR<br />REFERRAL PROGRAM</h1>
                    <div className="referral-line"></div>
                    <h5>Refer to a friend, earn money seamlessly.</h5>
                    <p>
                        You earn up to $90 a month each person you refer joining WFL while
                        they keep ongoing their monthly membership plan.
                    </p>
                    <div className="referral-buttons">
                        <CustomButton>
                            refer a friend
                        </CustomButton>
                        <a href="/" className="learn-more">Learn more</a>
                    </div>
                </div>

                <div className="referral-image right" ref={rightImageRef}>
                    <img src={referral2} alt="Person with phone" />
                </div>
            </div>

            <div className="referral-background">
                <img src={referralDotted} alt="" className="dotted-pattern" />
            </div>
        </section>
    )
}

export default OurReferral