import Card from 'react-bootstrap/Card'
import Link from '@mui/material/Link';
import './style.css';

function Cards({car}) {
    return (      
        <div className="cards">
            <Card style={{ width: '23rem' }}>
                <Link href={""} color="#515151" underline="hover"> 
                <Card.Body> <br></br>

                <Card.Text>Marca: {car.marca} </Card.Text>
                <Card.Text>Modelo: {car.modelo}</Card.Text>
                <Card.Text>Ano: {car.anoFabricacao} </Card.Text>
                <Card.Text>Cor: {car.cor} </Card.Text>
                <Card.Text>Quilometragem (km): {car.quilometragem} </Card.Text>
                <Card.Text>Valor (R$): {car.preco} </Card.Text>
                </Card.Body>
                </Link>
            </Card>
        </div>        
    )
};

export default Cards;