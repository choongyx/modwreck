import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

class GameOver extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disableButtton: false,
            nameInput: "",
        }
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]: val
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            disableButtton: true
        })
        console.log("UPLOAD ME PLZ")
        console.log(this.state.nameInput, this.props.score * 100 / this.props.timeTaken)
        // do some thing online
    }

    render() {
        return (
            <div className="white-background">
                <br />
                <h1>Game over</h1>
                <h2>Score: {this.props.score}</h2>
                <h2>Time: {this.props.timeTaken}</h2>
                <h2>Final Score: {this.props.score * 100 / this.props.timeTaken}</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.handleChange} name="nameInput" value={this.state.nameInput} placeholder="Name" autoComplete="off" disabled={this.state.disableButtton}/>
                    <input type="submit" disabled={this.state.disableButtton}/>
                </form>
                <p>Answers: </p>
                {this.props.questionSet ?
                    this.props.questionSet.map((i, index) => <ExpansionPanel>
                        <ExpansionPanelSummary>{index + 1}. {i.moduleCode} {i.title}</ExpansionPanelSummary>
                        <ExpansionPanelDetails><p className="text-left">{i.description}</p></ExpansionPanelDetails>
                    </ExpansionPanel>)
                    : <p>You did not answer anything!</p>
                }
                <div className="play-btn">
                    <Button component={Link} to="/game" variant="contained" color="secondary" size="large" fullWidth onClick={() => this.props.playAgain()}>
                        Play Again
                    </Button>
                </div>
                <div className="setting-btn">
                    <Button component={Link} to="/" variant="contained" color="primary" size="large">
                        Home
                    </Button>
                </div>
            </div>
        )
    }
}

export default GameOver