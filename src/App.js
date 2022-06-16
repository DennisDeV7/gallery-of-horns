import React from 'react';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
    };
  }

handleOnShowModal = (beast) => {
  this.setState({
    showModal: true,
    selectedBeast: beast,
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
          openModal={this.handleOnShowModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          hideModal={this.handleonHide}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer/>
      </>
    );
  }
}

export default App;