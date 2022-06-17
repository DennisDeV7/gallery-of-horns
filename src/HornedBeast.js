import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  };

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    })
  }

  

  render () {
    return (
      <Col classname="mt-4">
        <Card className="h-100 p-3" style={{ width: '18rem' }}>
        <Card.Img 
          variant="top" 
          src={this.props.image_url} 
          onClick={() => {this.props.openModal(this.props.beast)}} 
          alt={this.props.alt} 
          title={this.props.title}
        />
        <Card.Text>❤️ {this.state.votes}</Card.Text>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button className='mt-3' onClick={this.handleVotes} variant="primary">Button</Button>
        </Card.Body>
      </Card>
    </Col>
    )
  }
}

export default HornedBeast;