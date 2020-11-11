import React, { Component } from "react";
import './App.css';
import Scroll from './Scroll'
const images = Array.from({ length: 50 }, (_, i) => {
  let width = 300
  let height = Math.floor(Math.random() * 300) + 200;
  return {
    url: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 10)}`,
    width,
    height,
  }
})
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: images
    }
  }

  render() {
    return (
      <Scroll items={this.state.items}></Scroll>
    );
  }
}

export default App;
