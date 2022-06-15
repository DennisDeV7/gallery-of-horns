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

  render () {
    return (
      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>❤️ {this.state.votes}</p>
      //   <img src={this.props.image_url} onClick={this.handleVotes} alt={this.props.alt} title={this.props.title}></img>
      //   <p>{this.props.description}</p>
      //   <Button>Button</Button>
      // </article>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} onClick={this.handleVotes} alt={this.props.alt} title={this.props.title}/>
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