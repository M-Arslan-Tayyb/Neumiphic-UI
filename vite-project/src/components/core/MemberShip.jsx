import React from 'react'
import './MemberShip.css'
import { Check } from 'lucide-react'
import NeumorphicBox from '../common/NeumorphicBox'
import CustomButton from '../common/Button'

const MemberShip = () => {
    const plans = [
        {
            name: 'FREE',
            price: '0$',
            period: '/per month',
            commission: {
                text: 'Reoccurring referral commissions every month',
                percentage: 'up to 30%!'
            },
            features: [
                'Buy & stake WFL coin'
            ],
            isPopular: false,
            gradient: 'from-[#e8f0f5] to-[#f5f9fc]'
        },
        {
            name: 'ULTIMATE',
            price: '100$',
            period: '/per month',
            commission: {
                text: 'Reoccurring referral commissions every month',
                percentage: 'up to 50%!'
            },
            features: [
                'DApps (Smart contracts)',
                'NFT marketplace',
                'Auto trading bot pool',
                'Buy & stake WFL coin',
                'DApps (Smart contracts)'
            ],
            isPopular: true,
            gradient: 'from-[#017369] to-[#82C691]'
        },
        {
            name: 'STANDARD',
            price: '50$',
            period: '/per month',
            commission: {
                text: 'Reoccurring referral commissions every month',
                percentage: 'up to 60%!'
            },
            features: [
                'NFT marketplace',
                'Auto trading bot pool',
                'Buy & stake WFL coin'
            ],
            isPopular: false,
            gradient: 'from-[#e8f0f5] to-[#f5f9fc]'
        }
    ]

    return (
        <section className="membership">
            <div className="membership-container">
                <div className="membership-header">
                    <h2>MEMBERSHIP</h2>
                    <h3>PLANS</h3>
                    <p>Choose a plan which fits best for you.</p>
                </div>

                <div className="plans-container">
                    {plans.map((plan, index) => (
                        <NeumorphicBox
                            key={plan.name}
                            className={`plan-card bg-gradient-to-b ${plan.gradient} ${index === 1 ? 'featured' : ''}`}
                            isInset={false}
                            shadowIntensity={0.15}
                            bgColor={index !== 1 ? '#f0f4f8' : undefined}
                        >
                            <div className="plan-content">
                                {plan.isPopular && (
                                    <span className="popular-badge">Popular</span>
                                )}

                                <div className="plan-header">
                                    <h4 className={index === 1 ? 'highlight' : 'text-[#017369]'}>
                                        {plan.name}
                                    </h4>
                                    <div className={index === 1 ? 'featureDivider' : 'divider'}></div>
                                    <div className="price-container">
                                        <span className={`price ${index === 1 ? 'text-white' : 'text-[#017369]'}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`period ${index === 1 ? 'text-white/80' : 'text-gray-600/80'}`}>
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>

                                <NeumorphicBox
                                    className={`commission-box ${index === 1 ? 'commission-box-featured' : ''}`}
                                    isInset={false}
                                    shadowIntensity={0.1}
                                    bgColor={index === 1 ? 'rgba(107, 182, 141, 1)' : 'rgba(255, 255, 255, 0.2)'}
                                >
                                    <p>{plan.commission.text}</p>
                                    <p>{plan.commission.percentage}</p>
                                </NeumorphicBox>

                                <ul className="features-list">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className={index === 1 ? 'text-white' : 'text-gray-700'}
                                        >
                                            <Check
                                                className={`check-icon ${index === 1 ? 'text-white' : 'text-[#017369]'}`}
                                                size={16}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <CustomButton
                                    className={`choose-plan-btn ${index === 1 ? 'btn-featured' : ''}`}
                                    bgColor={'linear-gradient(to bottom, #017369, #82C691)'}
                                    color={'black'}
                                    onClick={() => { }}
                                >
                                    Choose Plan
                                </CustomButton>
                            </div>
                        </NeumorphicBox>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MemberShip