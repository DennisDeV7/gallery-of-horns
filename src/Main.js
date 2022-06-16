import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'

class Main extends React.Component {
  render () {
    let beasts = [];
    this.props.data.forEach((horn, idx) => {
      beasts.push(
        <HornedBeast
          title={horn.title}
          image_url={horn.image_url}
          alert={horn.alt}
          imageTitle={horn.title}
          description={horn.description}
          key={idx}
          handleOnShowModal={this.props.handleOnShowModal}
        />
      )
    })
    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;