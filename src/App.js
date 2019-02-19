import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import JSON from "./seed.json";
import './App.css';


class App extends Component {
  state = {imgObjs:JSON,score:0,message:""};

  onClickCard = event =>{
      const {id,dataset} = event.target;
      if(dataset.isclicked==="1"){
        let {imgObjs} = this.state;
        imgObjs = imgObjs.map(item=>({id:item.id,imgSrc:item.imgSrc,isclicked : 0}));
        this.setState({imgObjs,score:0,message: "Your guess is incorrect."});
      }else{
        let score = this.state.score +1;      
        this.setState(state=> {
          state.imgObjs
            .filter(item => item.id === id)
            .map(item=>item.isclicked = 1)
            return {imgObjs: this.shuffle(state.imgObjs),
                    score,
                    message: "Your guess is correct."};
        });
      }
  };

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
          <Navbar message={this.state.message} score={this.state.score}/>
          <div className="container">
            <div className="row">
              <Card key="0" item={this.state.imgObjs[0]} onClickCard={this.onClickCard}/>
              <Card key="1" item={this.state.imgObjs[1]} onClickCard={this.onClickCard}/>
              <Card key="2" item={this.state.imgObjs[2]} onClickCard={this.onClickCard}/>  
            </div>
            <div className="row">
              <Card key="3" item={this.state.imgObjs[3]} onClickCard={this.onClickCard}/>
              <Card key="4" item={this.state.imgObjs[4]} onClickCard={this.onClickCard}/>
              <Card key="5" item={this.state.imgObjs[5]} onClickCard={this.onClickCard}/>
            </div>
            <div className="row">
              <Card key="6" item={this.state.imgObjs[6]} onClickCard={this.onClickCard}/>
              <Card key="7" item={this.state.imgObjs[7]} onClickCard={this.onClickCard}/>
              <Card key="8" item={this.state.imgObjs[8]} onClickCard={this.onClickCard}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
