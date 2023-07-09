import React from 'react';
import './App.css';

const Home = () => (
  <div>
    <h1>Welcome to my website</h1>
    <p>This is the home page.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Me</h1>
    <p>I am an academic...</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <p>You can reach me at...</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }

  navigate(page) {
    this.setState({ page });
  }

  render() {
    let Page;
    switch (this.state.page) {
      case 'home':
        Page = Home;
        break;
      case 'about':
        Page = About;
        break;
      case 'contact':
        Page = Contact;
        break;
      default:
        Page = Home;
    }

    /*return (
      <div>
        <nav>
          <button onClick={() => this.navigate('home')}>Home</button>
          <button onClick={() => this.navigate('about')}>About</button>
          <button onClick={() => this.navigate('contact')}>Contact</button>
        </nav>
        <Page />
      </div>
    );*/

    // new version with some css classes for styling and a comment explain
    // what styling is brought by each class
    return (
      <div>
        <nav className='navBar'>
          <button className="navButton" onClick={() => this.navigate('home')}>Home</button>
          <button className="navButton" onClick={() => this.navigate('about')}>About</button>
          <button className="navButton" onClick={() => this.navigate('contact')}>Contact</button>
        </nav>
        <div className="sitePage">
          <Page />
        </div>
      </div>
    );
  }
}

export default App;

