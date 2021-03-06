import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom.scss';
import './app.scss';


const App = () => {

    return (
        <>
            <Routes />
            <ToastContainer />
        </>
    );
}

export default App;