import React from 'react';

import './styles/Quiz.css';

const Quiz = () => {
    return (
        <section className="quiz">
            <div className="main">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpx64U7fLMJwG3GLBdgh2p-1iWJPnEdlnVzhpUkCswTJW8mw/viewform?embedded=true" width="740" height="682" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div className="image">
                <img src="./assets/images/quiz.svg" alt="" />
            </div>
        </section>
    )
}

export default Quiz;
