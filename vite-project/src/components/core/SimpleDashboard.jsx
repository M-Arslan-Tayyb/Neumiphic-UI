import React, { useRef } from 'react'
import './SimpleDashboard.css'
import NeumorphicBox from '../common/NeumorphicBox'
import CustomButton from '../common/Button'
import FloatingCard from '../common/FloatingCard'
import screenImage from '../../assets/images/screenImage.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SimpleDashboard = () => {
    const leftContentRef = useRef(null)

    const cards = [
        {
            title: "Check All activity",
            text: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut.",
            bgColor: "",
            delay: 0,
            className: "top-card"
        },
        {
            title: "Check All activity",
            text: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut.",
            bgColor: "",
            delay: 0.5,
            className: "right-top-card"
        },
        {
            title: "Check Social Leads",
            text: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut.",
            bgColor: "",
            delay: 0.5,
            className: "right-middle-card"
        },
        {
            title: "Don't Ignore Activities",
            text: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut.",
            bgColor: "linear-gradient(99.32deg, rgba(238, 172, 82, 0.79) 8.02%, rgba(251, 237, 136, 0.79) 20.02%, rgba(225, 170, 72, 0.79) 34.24%, rgba(142, 87, 11, 0.79) 51.58%, rgba(169, 97, 33, 0.79) 72.02%, rgba(199, 140, 51, 0.79) 84.46%, rgba(149, 83, 21, 0.79) 93.35%)",
            delay: 1.5,
            className: "right-bottom-card"
        }
    ]

    useGSAP(() => {
        const leftContent = leftContentRef.current
        const elements = leftContent.children

        gsap.set(elements, { opacity: 0, y: 50, repeat: true })

        ScrollTrigger.create({
            trigger: leftContent,
            start: "top 10%",
            end: "top 30%",
            toggleActions: "play none none reverse",

            onEnter: () => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                })
            },
            once: true
        })
    }, { scope: leftContentRef })

    return (
        <section className="simple-dashboard">
            <div className="dashboard-container">
                <div className="dashboard-left" ref={leftContentRef}>
                    <h1>JUST SIMPLE<br />DASHBOARD</h1>
                    <p>
                        Reprehenderit vel excepturi. Ut ab soluta et velit delectus. Sequi
                        consequatur vitae ad cum deleniti placeat facere.
                    </p>
                    <p>
                        Dignissimos qui iure minus exercitationem temporibus fuga voluptatem.
                        Nam voluptas veniam consequatur laborum est aliquam. Laborum dolorem
                        eveniet. Et doloremque blanditiis similique rem non enim inventore
                        molestiae. Commodi magni sint. Explicabo nihil hic
                    </p>
                    <div className="input-group">
                        <NeumorphicBox
                            as="input"
                            className="email-input"
                            placeholder="Enter Email"
                        />
                        <CustomButton color="black">Get Started</CustomButton>
                    </div>
                </div>

                <div className="dashboard-right">
                    <div className="screen-container">
                        <img src={screenImage} alt="Dashboard screen" className="screen-image" />
                    </div>
                    {cards.map((card, index) => (
                        <FloatingCard
                            key={index}
                            className={`info-card ${card.className}`}
                            bgColor={card.bgColor}
                            delay={card.delay}
                        >
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SimpleDashboard