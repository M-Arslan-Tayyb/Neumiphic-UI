import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const FloatingCard = ({
    children,
    className = '',
    bgColor = 'white',
    delay = 0,
    duration = 2,
    distance = 20,
    style,
    ...props
}) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const card = cardRef.current

        gsap.to(card, {
            y: distance,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: delay
        })
    }, [delay, duration, distance])

    return (
        <div
            ref={cardRef}
            className={`floating-card ${className}`}
            style={{
                background: bgColor,
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    )
}

export default FloatingCard