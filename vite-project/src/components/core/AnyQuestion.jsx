import React from 'react'
import './AnyQuestion.css'
import smallDottedCircle from '../../assets/images/any-question/smallDottedCircle.png'
import mediumDottedCircle from '../../assets/images/any-question/mediumDottedCircle.png'
import largerDottedCircle from '../../assets/images/any-question/largeDottedCircle.png'
import characterImage from '../../assets/images/anyQuestionImage.png'
import NeumorphicBox from '../common/NeumorphicBox'

const AnyQuestion = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <section className="any-question">
            <div className="dotted-circles">
                {/* <img src={smallDottedCircle} alt="" className="small-circle" />
                <img src={mediumDottedCircle} alt="" className="medium-circle" />
                <img src={largerDottedCircle} alt="" className="large-circle" /> */}
            </div>

            <div className="question-container">
                <div className="question-left">
                    <div className="rotated-text-wrapper">
                        <h2>
                            ANY<br />
                            QUESTION?
                        </h2>
                    </div>
                    <div className="character-container">
                        <img src={characterImage} alt="Character asking question" className="character-image" />
                    </div>
                </div>

                <div className="question-right">
                    <form onSubmit={handleSubmit}>
                        <NeumorphicBox
                            as="input"
                            type="text"
                            placeholder="Enter Name"
                            className="form-input"
                            isInset={true}
                            shadowIntensity={0.5}
                            bgColor="rgba(255, 255, 255, 0.1)"
                        />
                        <NeumorphicBox
                            as="input"
                            type="email"
                            placeholder="Enter Email"
                            className="form-input"
                            isInset={true}
                            shadowIntensity={0.5}
                            bgColor="rgba(255, 255, 255, 0.1)"
                        />
                        <NeumorphicBox
                            as="textarea"
                            placeholder="Questions?"
                            className="form-textarea"
                            isInset={true}
                            shadowIntensity={0.5}
                            bgColor="rgba(255, 255, 255, 0.1)"
                        />
                        <NeumorphicBox
                            as="button"
                            type="submit"
                            className="submit-button"
                            isInset={false}
                            shadowIntensity={0.8}
                            bgColor="#017369"
                        >
                            Submit
                        </NeumorphicBox>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AnyQuestion