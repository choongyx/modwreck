import React, { Component } from 'react';
import quizService from '../../services/Quiz';
import QuestionBox from './QuestionBox';
import Result from './Result';
import Timer from './Timer'
import './game.css'

class App extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0, //no. of questions answered
        text: "helo"
    };
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    };
    playAgain = () => {
        this.getQuestions();
        //condition fails during render
        this.setState({
            score: 0,
            responses: 0
        });
    };
    componentDidMount() {
        this.getQuestions();
    }

    handleClickTemp = () => {
        this.setState({
            text: "byebye"
        })
    }
    render() {
        return (
            <div className="quizContainer">
                <div className="tableTitle">
                    <table className="table">
                        <tr>
                            <th className="textLeft">
                                <h1>QuizBee</h1>
                            </th>
                            <th className="textRight">
                                {<Timer />}
                            </th>
                        </tr>
                    </table>
                </div>
                {this.state.questionBank.length > 0
                && this.state.responses < 5
                && this.state.questionBank.map(
                    ({ question, answers, correct, questionId }) => (
                        <QuestionBox
                            question={question}
                            options={answers}
                            key={questionId}
                            selected={answer => this.computeAnswer(answer, correct)}
                        />
                    )
                )}

                {this.state.responses === 5 ? (
                    <Result score={this.state.score} playAgain={this.playAgain} />
                ) : null}

            </div>
        );
    }
}

export default App;
