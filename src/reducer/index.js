// import {makeGuess, newGame, toggleInfoModal} from "../actions/actions";
import {NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL} from "../actions/actions";

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    infoModalDisplay: false,
    placeHolder: "Enter a Number"
}

export const hotAndColdReducer = (state=initialState, action) => {
    state = state || initialState;
    if (action.type === MAKE_GUESS) {
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;

        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }

    else if (action.type === NEW_GAME) {
        console.log(state.placeHolder);
        state = Object.assign({}, initialState, {
            correctAnswer: action.correctAnswer,
            placeHolder: "Try Again"
        });
        console.log(state.placeHolder);


        return state;

    }

    else if (action.type === TOGGLE_INFO_MODAL) {
        state = Object.assign({}, state, {
            infoModalDisplay: !state.infoModalDisplay
        });

        return state;
    }

    return state;
}






