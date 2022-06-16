import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
      votes: this.state.votes + 1
    })
  }

  handlePicClick = () => {
    this.props.handleOnShowModal(this.props.image_url);
  }

  render () {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={this.props.image_url} 
        onClick={this.handlePicClick} 
        alt={this.props.alt} 
        title={this.props.title}
      />
      <Card.Text>❤️ {this.state.votes}</Card.Text>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button variant="primary">Button</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default HornedBeast;