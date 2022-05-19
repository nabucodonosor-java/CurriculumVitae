import Img from 'assets/images/pagina-em-construcao.png';
import { Link } from 'react-router-dom';
import './styles.scss';

const PageInConstruction = () => {

    return (
        <div className="div-construction">
            <Link to="../" className="">
                <h1 className="text-goback">VOLTAR</h1>
            </Link>
            <img className="home-img-construction" src={Img} alt="Carregando ..." />
        </div>
        
    )
}

export default PageInConstruction;