import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                counter: state.counter + 1
            }
        }
        case 'DECREMENT': {
            return {
                counter: state.counter - 1
            }
        }
        case 'RESET': {
            return {
                counter: 0
            }
        }
        default:
            return state;
    }
}

const initialState = {
    counter: 0
}

function NumberReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="border rounded-4 p-4">
            <label className="fs-4">
                Counter: {state.counter}
            </label>
            <div className="d-flex gap-2 py-2">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={function () {
                        dispatch({
                            type: 'INCREMENT'
                        });
                    }}
                >
                    Increment
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={function () {
                        dispatch({
                            type: 'DECREMENT'
                        });
                    }}
                >
                    Decrement
                </button>
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={function () {
                        dispatch({
                            type: 'RESET'
                        });
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default NumberReducer;