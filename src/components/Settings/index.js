import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button/Button";
import { connect } from 'react-redux';
import { setNumberOfQuestions, setDifficulty, setCategory } from '../../redux/actions';

const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  });
  
class Settings extends Component {      
    render() {
        const { classes, settings } = this.props;
        const { numberOfQuestions, difficulty, category } = settings;

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="questions">Number of Questions</InputLabel>
                    <Select
                        labelId="questions"
                        id="questions"
                        value={numberOfQuestions}
                        onChange={e => this.props.setNumberOfQuestions(e.target.value)}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="difficulty">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty"
                        id="difficulty"
                        value={difficulty}
                        onChange={e => this.props.setDifficulty(e.target.value)}
                    >
                        <MenuItem value="Easy">Easy</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Hard">Hard</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        value={category}
                        onChange={e => this.props.setCategory(e.target.value)}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Arts and Social Science">Arts and Social Science</MenuItem>
                        <MenuItem value="Computing">Computing</MenuItem>
                        <MenuItem value="Cont and Lifelong Education">Cont and Lifelong Education</MenuItem>
                        <MenuItem value="Dentistry">Dentistry</MenuItem>
                        <MenuItem value="Design and Environment">Design and Environment</MenuItem>
                        <MenuItem value="Duke-NUS Medical School">Duke-NUS Medical School</MenuItem>
                        <MenuItem value="Engineering">Engineering</MenuItem>
                        <MenuItem value="Institute of Systems Science">Institute of Systems Science</MenuItem>
                        <MenuItem value="Law">Law</MenuItem>
                        <MenuItem value="LKY School of Public Policy">LKY School of Public Policy</MenuItem>
                        <MenuItem value="Logistics Inst-Asia Pac">Logistics Inst-Asia Pac</MenuItem>
                        <MenuItem value="Multi Disciplinary Programme">Multi Disciplinary Programme</MenuItem>
                        <MenuItem value="NUS">NUS</MenuItem>
                        <MenuItem value="NUS Business School">NUS Business School</MenuItem>
                        <MenuItem value="NUS Graduate School for Int Science and Engineering">NUS Graduate School for Int Science and Engineering</MenuItem>
                        <MenuItem value="Residential College">Residential College</MenuItem>
                        <MenuItem value="Risk Management Institute">Risk Management Institute</MenuItem>
                        <MenuItem value="Science">Science</MenuItem>
                        <MenuItem value="SSH School of Public Health">SSH School of Public Health</MenuItem>
                        <MenuItem value="Temasek Defence Sys. Institute">Temasek Defence Sys. Institute</MenuItem>
                        <MenuItem value="University Scholars Programme">University Scholars Programme</MenuItem>
                        <MenuItem value="Yale-NUS College">Yale-NUS College</MenuItem>
                        <MenuItem value="Yong Loo Lin School (Medicine)">Yong Loo Lin School (Medicine)</MenuItem>
                        <MenuItem value="YST Conservatory of Music">YST Conservatory of Music</MenuItem>
                    </Select>
                </FormControl>
                <Button component={Link} to="/" variant="contained" color="primary">
                    Save
                </Button>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    settings: state.settings
});

export default withStyles(styles)(connect(mapStateToProps, { setNumberOfQuestions, setDifficulty, setCategory })(Settings));
