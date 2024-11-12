import React, { useRef, useState } from 'react'
import './WhatClientSays.css'
import clientImage1 from '../../assets/images/clientSays/clientSays1.png'
import clientImage2 from '../../assets/images/clientSays/clientSays2.png'
import clientImage3 from '../../assets/images/clientSays/clientSays3.png'
import ratingAndReview from '../../assets/images/rattingReview.svg'
import NeumorphicBox from '../common/NeumorphicBox'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const WhatClientSays = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const sliderRef = useRef(null)

    const testimonials = [
        {
            id: 1,
            name: "RACHAEL WALSH",
            image: clientImage1,
            rating: 5.0,
            review: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut. Architecto quasi ducimus consequatur nihil voluptas ea non molestias."
        },
        {
            id: 2,
            name: "DR. ERIK BREITENBERG",
            image: clientImage2,
            rating: 5.0,
            review: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut. Architecto quasi ducimus consequatur nihil voluptas ea non molestias."
        },
        {
            id: 3,
            name: "DR. JUSTIN WITTING",
            image: clientImage3,
            rating: 5.0,
            review: "Qui perferendis consequatur voluptatem molestiae laudantium eos voluptas ut. Architecto quasi ducimus consequatur nihil voluptas ea non molestias."
        }
    ]

    // useGSAP(() => {
    //     gsap.set('.testimonial-card', {
    //         opacity: 0.5,
    //         scale: 0.8,
    //         x: (i) => (i - activeIndex) * 120 + '%'
    //     })

    //     gsap.set(`.testimonial-card:nth-child(${activeIndex + 1})`, {
    //         opacity: 1,
    //         scale: 1,
    //         zIndex: 2
    //     })
    // }, { scope: sliderRef, dependencies: [activeIndex] })

    const handleSlide = (direction) => {
        const newIndex = direction === 'next'
            ? (activeIndex + 1) % testimonials.length
            : (activeIndex - 1 + testimonials.length) % testimonials.length

        gsap.to('.testimonial-card', {
            opacity: 0.5,
            scale: 0.8,
            x: (i) => ((i - newIndex) * 120) + '%',
            duration: 0.5,
            ease: 'power2.out'
        })

        gsap.to(`.testimonial-card:nth-child(${newIndex + 1})`, {
            opacity: 1,
            scale: 1,
            zIndex: 2,
            duration: 0.5,
            ease: 'power2.out'
        })

        setActiveIndex(newIndex)
    }

    return (
        <section className="what-client-says">
            <div className="client-container">
                <h1>WHAT<br />CLIENT SAYS</h1>

                <div className="testimonials-slider" ref={sliderRef}>
                    {testimonials.map((testimonial, index) => (
                        <NeumorphicBox
                            key={testimonial.id}
                            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                            isInset={true}
                            shadowIntensity={index === activeIndex ? 1 : 0.5}

                            bgColor={index === activeIndex ? 'linear-gradient(180deg, #017369 -1.59%, #82C691 105.97%)' : 'var(--bg-color)'}
                            style={{
                                borderRadius: '30px',
                                boxShadow: index === activeIndex ?
                                    `12px 12px 24px rgba(0, 0, 0, 0.25),
                                     -12px -12px 24px rgba(255, 255, 255, 0.9)` :
                                    undefined
                            }}
                        >
                            <div className="testimonial-content">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="client-image"
                                />
                                <h3>{testimonial.name}</h3>
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="star"
                                            fill="#FFD700"
                                            color="#FFD700"
                                        />
                                    ))}
                                    <span>{testimonial.rating}</span>
                                </div>
                                <p>{testimonial.review}</p>
                            </div>
                        </NeumorphicBox>
                    ))}

                    <div className="slider-controls">
                        <button
                            className="slider-button prev"
                            onClick={() => handleSlide('prev')}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            className="slider-button next"
                            onClick={() => handleSlide('next')}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatClientSays