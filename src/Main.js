import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css'

class Main extends React.Component {
  render () {
    let beasts = [];
    data.forEach((horn, idx) => {
      beasts.push(
        <HornedBeast
          title={horn.title}
          image_url={horn.image_url}
          alert={horn.alt}
          imageTitle={horn.title}
          description={horn.description}
          key={idx}
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