import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import JSON from "./seed.json";
import './App.css';


class App extends Component {
  state = {imgObjs:JSON,score:0};

  onClickCard = event =>{
      const {id,dataset} = event.target;
      if(dataset.isclicked==="1"){
          this.setState(state=>state.score = 0);
      }else{
          this.setState(state=> {
            state.score +=1;
            state.imgObjs
              .filter(item => item.id === id)
              .map(item=>item.isclicked = 1)
            return this.shuffle(state.imgObjs);
            });
      }
  }

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  render() {
    return (
        <div>
          <Navbar score={this.state.score}/>
          {this.state.imgObjs.map(item=>
                  (<Card key={item.id} item={item} onClickCard={this.onClickCard}/>)
          )}
        </div>
    );
  }
}

export default App;
