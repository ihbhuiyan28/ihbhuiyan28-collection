import {
    useEffect,
    useState
} from 'react';

function FetchData() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${1}&_limit=${5}`);
                const data = await res.json();
                setTodos(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="border rounded-4 p-4">
            {todos.map(({ id, title }) => (
                <p key={id}>{title}</p>
            ))}
        </div>
    );
}

export default FetchData;