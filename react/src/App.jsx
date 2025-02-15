import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import HelloReact from './HelloReact';

function App() {

  return (
    <Layout>
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <HelloReact />
      </div>
    </Layout>
  )
}

export default App;