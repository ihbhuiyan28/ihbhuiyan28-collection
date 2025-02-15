import PropTypes from 'prop-types';
import {
    createContext,
    useContext,
    useState,
    useMemo
} from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

function Button({
    children,
    className,
    onClick,
    type
}) {

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function Dashboard() {
    const {
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    return (
        <>
            <p className="fs-2">Welcome {currentUser}!</p>
            <Button
                type="button"
                className="btn btn-danger"
                onClick={function () {
                    setCurrentUser(null);
                }}
            >
                Sign out
            </Button>
        </>
    );
}

function Form() {
    const [username, setUsername] = useState('');
    const { setCurrentUser } = useContext(CurrentUserContext);

    return (
        <form
            className="d-flex align-items-center gap-2 py-2"
            onSubmit={function (event) {
                event.preventDefault();
                setCurrentUser(username);
                setUsername('');
            }}
        >
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={function (event) {
                        setUsername(event.target.value);
                    }}
                    required
                />
            </div>
            <Button
                type="submit"
                className="btn btn-primary"
            >
                Sign in
            </Button>
        </form>
    );
}

function Panel() {
    const { currentUser } = useContext(CurrentUserContext);

    return currentUser === null ? <Form /> : <Dashboard />;
}

function ContextApp() {
    const [theme, setTheme] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider
                value={useMemo(() => ({
                    currentUser,
                    setCurrentUser
                }), [currentUser])}
            >
                <div className={
                    `${theme ? "bg-dark text-white" : "text-dark"} border rounded-4 p-4`
                }>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="theme"
                            checked={theme}
                            onChange={function (event) {
                                setTheme(event.target.checked);
                            }}
                        />
                        <label
                            htmlFor="theme"
                            className="form-check-label"
                        >
                            Dark mode
                        </label>
                    </div>
                    <Panel />
                </div>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};

export default ContextApp;