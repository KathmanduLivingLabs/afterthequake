import React , {Component} from 'react';
import StackWrapper from './components/StackWrapper'; 
import $ from 'jquery'; 
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      scrollTop: $("html, body").scrollTop(),
      hasReachedZero: $("html, body").scrollTop() === 0,
    }

    this.onScroll = this.onScroll.bind(this)
  }

  onScroll() {

      this.setState({
        scrollTop: 0,
        hasReachedZero: true,
      })

  }

  componentWillMount() {
    window.addEventListener("scroll", this.onScroll)
  }
  componentDidMount() {
    // window.scrollTo(0,0);
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }


  render() {
    // console.log("hasReachedZero", this.state.hasReachedZero);
    
    return (
      <div className="App">
        <header className="App-header">
          {this.state.hasReachedZero && <StackWrapper isReady={this.state.hasReachedZero}/>}
        </header>
      </div>
    );
  }
}

export default App;
