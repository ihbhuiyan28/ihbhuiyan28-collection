import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

app.get('/', function (_req, res) {
    res.send('Hello Express!');
});

app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});

const connectDatabase = async function () {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('connected to database...');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

connectDatabase();

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('todos-collection', TodoSchema);

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users-collection', UserSchema);

async function verifyJWTToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ message: 'authentication required' });
        return;
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'invalid token' });
            return;
        }

        req.user = decoded;
        next();
    });

}

app.use(express.json());

app.post('/api/auth/signup', async function (req, res) {
    const { email, password } = req.body;

    try {
        const duplicateUser = await User.findOne({ email });

        if (duplicateUser) {
            res.status(409).json({ message: 'email already registered' });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ email, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30s' });

        res.status(200).json({ code: 200, email: user.email, jwt: token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/auth/login', async function (req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(404).json({ message: 'user not found' });
            return;
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            res.status(401).json({ message: 'invalid password' });
            return;
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30s' });

        res.status(200).json({ code: 200, email: user.email, jwt: token });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/auth/profile', verifyJWTToken, function (req, res) {
    res.status(200).json({ code: 200, user: req.user });
});

app.get('/api/todos', async function (_req, res) {
    try {
        const todos = await Todo.find({});
        res.status(200).json({ code: 200, todos });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/todos/:_id', async function (req, res) {
    const { _id } = req.params;

    if (!_id) {
        res.status(400).json({ message: '_id is required' });
        return;
    }

    try {
        const todo = await Todo.findById(_id);

        if (!todo) {
            res.status(404).json({ message: 'todo not found' });
            return;
        }

        res.status(200).json({ code: 200, todo });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/todos', async function (req, res) {
    const { title, completed } = req.body;

    try {
        const todo = await Todo.create({ title, completed });

        if (!todo) {
            res.status(404).json({ message: 'todo not found' });
            return;
        }

        res.status(200).json({ code: 200, todo });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.patch('/api/todos/:_id', async function (req, res) {
    const { _id } = req.params;

    if (!_id) {
        res.status(400).json({ message: '_id is required' });
        return;
    }

    try {
        const todo = await Todo.findByIdAndUpdate(_id, req.body, { new: true });

        if (!todo) {
            res.status(404).json({ message: 'todo not found' });
            return;
        }

        res.status(200).json({ code: 200, todo });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/api/todos/:_id', async function (req, res) {
    const { _id } = req.params;

    if (!_id) {
        res.status(400).json({ message: '_id is required' });
        return;
    }

    try {
        const todo = await Todo.findByIdAndDelete(_id);

        if (!todo) {
            res.status(404).json({ message: 'todo not found' });
            return;
        }

        res.status(200).json({ code: 200, todo });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/user/:_id', verifyJWTToken, async function (req, res) {
    const { _id } = req.params;

    if (!_id) {
        res.status(400).json({ message: '_id is required' });
        return;
    }

    try {
        const user = await User.findById(_id);

        if (!user) {
            res.status(404).json({ message: 'user not found' });
            return;
        }

        res.status(200).json({ code: 200, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.patch('/api/user/:_id', verifyJWTToken, async function (req, res) {
    const { _id } = req.params;

    if (!_id) {
        res.status(400).json({ message: '_id is required' });
        return;
    }

    try {
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.findByIdAndUpdate(_id, { email, password: hashedPassword }, { new: true });

        if (!user) {
            res.status(404).json({ message: 'user not found' });
            return;
        }

        res.status(200).json({ code: 200, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/api/user/:_id', verifyJWTToken, async function (req, res) {
    const { _id } = req.params;

    if (!_id) {
        res.status(400).json({ message: '_id is required' });
        return;
    }

    try {
        const user = await User.findByIdAndDelete(_id);

        if (!user) {
            res.status(404).json({ message: 'user not found' });
            return;
        }

        res.status(200).json({ code: 200, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});