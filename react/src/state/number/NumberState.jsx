import { useState } from 'react';

function NumberState() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="border rounded-4 p-4">
            <label className="fs-4">
                Counter: {counter}
            </label>
            <div className="d-flex gap-2 py-2">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={function () {
                        setCounter(counter => counter + 1);
                    }}
                >
                    Increment
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={function () {
                        setCounter(counter => counter - 1);
                    }}
                >
                    Decrement
                </button>
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={function () {
                        setCounter(0);
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default NumberState;