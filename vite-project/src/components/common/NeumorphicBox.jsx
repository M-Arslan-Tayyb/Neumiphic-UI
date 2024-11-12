import React from 'react'

const NeumorphicBox = ({
    children,
    as = 'div',
    className = '',
    bgColor = 'var(--bg-color)',
    borderRadius = '20px',
    shadowIntensity = 1,
    isInset = true,
    padding = '',
    style = {},
    onClick,
    ...props
}) => {
    const Tag = as

    const neumorphicStyle = {
        background: bgColor.includes('gradient') ? bgColor : 'none',
        backgroundColor: !bgColor.includes('gradient') ? bgColor : 'none',
        borderRadius,
        padding,
        boxShadow: isInset
            ? `inset ${-4 * shadowIntensity}px ${-4 * shadowIntensity}px ${8 * shadowIntensity}px rgba(255, 255, 255, 0.8),
               inset ${4 * shadowIntensity}px ${4 * shadowIntensity}px ${8 * shadowIntensity}px rgba(0, 0, 0, 0.15)`
            : `${4 * shadowIntensity}px ${4 * shadowIntensity}px ${8 * shadowIntensity}px rgba(0, 0, 0, 0.15),
               ${-4 * shadowIntensity}px ${-4 * shadowIntensity}px ${8 * shadowIntensity}px rgba(255, 255, 255, 0.8)`,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        ...style
    }

    return (
        <Tag
            className={`neumorphic-box ${className}`}
            style={neumorphicStyle}
            onClick={onClick}
            {...props}
        >
            {children}
        </Tag>
    )
}

export default NeumorphicBox