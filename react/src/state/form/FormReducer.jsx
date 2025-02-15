import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_TEXT': {
            return {
                text: action.payload,
                checked: state.checked
            }
        }
        case 'CHECKED': {
            return {
                text: state.text,
                checked: true
            }
        }
        case 'NOT_CHECKED': {
            return {
                text: state.text,
                checked: false
            }
        }
        case 'RESET': {
            return {
                text: '',
                checked: false
            }
        }
        default:
            return state;
    }
}

const initialState = {
    text: '',
    checked: false
}

function FormReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="border rounded-4 p-4">
            <form
                onSubmit={function (event) {
                    event.preventDefault();
                    console.log(state);
                    dispatch({
                        type: 'RESET'
                    });
                }}
            >
                <div className="mb-3">
                    <label
                        htmlFor="text"
                        className="form-label"
                    >
                        Text
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                        value={state.text}
                        onChange={function (event) {
                            dispatch({
                                type: 'CHANGE_TEXT',
                                payload: event.target.value
                            });
                        }}
                        placeholder="Enter text"
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox"
                        checked={state.checked}
                        onChange={function () {
                            state.checked ? dispatch({ type: 'NOT_CHECKED' })
                                : dispatch({ type: 'CHECKED' });
                        }}
                    />
                    <label
                        htmlFor="checkbox"
                        className="form-check-label"
                    >
                        Checkbox
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormReducer;