import PropTypes from 'prop-types';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

function Layout({ children }) {

    return (
        <div>
            <Navbar />
            <main className="min-vh-100">
                {children}
            </main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;