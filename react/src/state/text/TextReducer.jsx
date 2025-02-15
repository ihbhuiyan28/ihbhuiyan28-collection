import { useReducer } from 'react';

function reducer(state, action) {
    if (action.type === 'CHANGE_TEXT') {
        return {
            ...state,
            text: action.payload
        }
    }
    return state;
}

const initialState = {
    text: ''
}

function TextReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="border rounded-4 p-4">
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
                placeholder="Enter text"
                onChange={function (event) {
                    dispatch({
                        type: 'CHANGE_TEXT',
                        payload: event.target.value
                    });
                }}
            />
            <div className="form-text">
                {state.text}
            </div>
        </div>
    );
}

export default TextReducer;