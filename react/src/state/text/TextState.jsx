import { useState } from 'react';

function TextState() {
    const [text, setText] = useState('');

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
                    setText(event.target.value);
                }}
            />
            <div className="form-text">
                {text}
            </div>
        </div>
    );
}

export default TextState;