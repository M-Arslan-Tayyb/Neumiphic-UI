import React from 'react'
import './AutoPool.css'
import NeumorphicBox from '../common/NeumorphicBox'

const AutoPool = () => {
    const poolItems = [
        { number: 1, text: "Rerum fugiat recusandae" },
        { number: 2, text: "Ullam eveniet quia" },
        { number: 3, text: "Consequuntur maxime iusto" },
        { number: 4, text: "Omnis aliquam nulla" }
    ]

    return (
        <section className="auto-pool">
            <div className="auto-pool-container">
                <div className="auto-pool-content">
                    <div className="auto-pool-left">
                        <h2>
                            <span className="highlight">AUTO-TRADER</span>
                            <br />
                            BOT POOL
                        </h2>
                        <p>
                            Reprehenderit vel excepturi. Ut ab soluta et velit delectus. Sequi
                            consequatur vitas ad cum deleniti placeat facere.

                        </p>
                        <p>
                            Dignissimos qui iure minus exercitationem temporibus fuga
                            voluptatem. Nam voluptas veniam consequatur laborum est
                            aliquam. Laborum dolorem eveniet. Et doloremque blanditiis similique
                            rem non enim inventore molestiae. Commodi magni sint. Explicabo
                            nihil hic.
                        </p>
                    </div>
                    <div className="auto-pool-right">
                        {poolItems.map((item, index) => (
                            <NeumorphicBox
                                key={index}
                                className="pool-item"
                                isInset={false}
                                shadowIntensity={0.5}
                                bgColor="none"
                                padding='0.5rem'
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    padding: '0.5rem',
                                }}
                            >
                                <span className="pool-number">{item.number}</span>
                                <span className="pool-text">{item.text}</span>
                            </NeumorphicBox>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AutoPool