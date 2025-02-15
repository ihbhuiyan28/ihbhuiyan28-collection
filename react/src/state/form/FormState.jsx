import { useState } from 'react';

function FormState() {
    const [form, setForm] = useState({
        text: '',
        checked: false
    });

    return (
        <div className="border rounded-4 p-4">
            <form onSubmit={function (event) {
                event.preventDefault();
                console.log(form);
                setForm({
                    text: '',
                    checked: false
                });
            }}>
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
                        value={form.text}
                        placeholder="Enter text"
                        onChange={function (event) {
                            setForm({
                                ...form,
                                text: event.target.value
                            });
                        }}
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox"
                        checked={form.checked}
                        onChange={function (event) {
                            setForm({
                                ...form,
                                checked: event.target.checked
                            });
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

export default FormState;