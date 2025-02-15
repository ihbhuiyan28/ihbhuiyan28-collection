import { useState } from 'react';

function CheckboxState() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="border rounded-4 p-4">
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox"
                    checked={checked}
                    onChange={function (event) {
                        setChecked(event.target.checked);
                    }}
                />
                <label
                    htmlFor="checkbox"
                    className="form-check-label"
                >
                    Checkbox
                </label>
                <div className="form-text">
                    {checked ? 'Checked' : 'Not checked'}
                </div>
            </div>
        </div>
    );
}

export default CheckboxState;