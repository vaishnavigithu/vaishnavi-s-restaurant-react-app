import {Card , Button} from 'react-bootstrap';
function Mycart(){
      return(
        <div> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div>
    )
}
export default Mycart;