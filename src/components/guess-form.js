import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions/actions';

import './guess-form.css';

export class GuessForm extends React.Component {


    onGuess(event) {
        event.preventDefault();

        const userGuess = this.input.value;
        this.props.dispatch(makeGuess(userGuess));
    }



    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={this.props.placeHolder} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }


};

const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    correctAnswer: state.correctAnswer,
    placeHolder: state.placeHolder});

export default connect(mapStateToProps)(GuessForm);
