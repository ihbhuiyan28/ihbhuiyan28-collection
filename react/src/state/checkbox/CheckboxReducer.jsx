import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHECKED': {
            return {
                checked: true
            }
        }
        case 'NOT_CHECKED': {
            return {
                checked: false
            }
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    checked: false
}

function CheckboxReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="border rounded-4 p-4">
            <div className="form-check">
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
                <div className="form-text">
                    {state.checked ? 'Checked' : 'Not checked'}
                </div>
            </div>
        </div>
    );
}

export default CheckboxReducer;