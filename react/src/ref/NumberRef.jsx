import { useRef } from 'react';

function NumberRef() {
    let ref = useRef(0);

    return (
        <div className="border rounded-4 d-flex flex-column p-4">
            <button
                type="button"
                className="btn btn-primary"
                id="button"
                onClick={function () {
                    ref.current = ref.current + 1;
                    console.log(ref.current);
                }}
            >
                Increment
            </button>
            <label
                htmlFor="button"
                className="form-text"
            >
                *open console
            </label>
        </div>
    );
}

export default NumberRef;