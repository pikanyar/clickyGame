import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0
  };



  imageSelect = (selected) => {
    console.log('hitting the function')
    if (selected) {
      console.log('a')
      this.setState({
        currentScore: 0,
      })
    } else if (!selected && this.state.topScore === this.state.currentScore) {
      console.log('b')
      this.setState({
        currentScore: (this.state.currentScore + 1),
        topScore: (this.state.currentScore + 1)
      })
    } else {
      console.log('c')
      this.setState({
        currentScore: (this.state.currentScore + 1)
      })
    }
  }



  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Wrapper>

          {
            this.state.friends.map(friend => (
              <FriendCard
                image={friend.image}
                name={friend.name}
                key={friend.id}
                imageSelect={this.imageSelect}
                selected={false}
              />
            ))
          }
        </Wrapper >
      </div>

    );
  }
}
export default App;
