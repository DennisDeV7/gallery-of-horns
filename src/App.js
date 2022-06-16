import React from 'react';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      SelectedBeast: '',
    };
  }

handleOnShowModal = (image_url) => {
  this.setState({
    showModal: true,
    SelectedBeast: image_url
  });
};

handleonHide = () => {
  this.setState({
    showModal: false
  });
};

  render(){
    return (
      <>
        <Header/>
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer/>
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleonHide}
          SelectedBeast={this.SelectedBeast}
        />
      </>
    );
  }
}

export default App;