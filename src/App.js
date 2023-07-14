import React from 'react';
import './App.css';
import Home from './Home';

// Future sections:
// Home: my picture and a little about me
// Publications: (in the future if i have these)
// Research: (maybe projects for now?)
// Academics: Degrees and all Academic awards, tech skills?
// CV: PDF CV
// Contact: just email? not phone or address probably. maybe linkedin

// TODO make each page have a separate path


const Projects = () => (
  <div>
    <h1>Selected Projects</h1>
    <p>G2P, Terra, Hooks lab work, Fall detector, compiler, superscalar pipeline, pacrunner</p>
  </div>
);

const Academics = () => (
  <div>
    <h1>Academics</h1>
    <p>list degrees, awards section, tech skills, vertically</p>
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
      case 'projects':
        Page = Projects;
        break;
      default:
        Page = Home;
    }

    // new version with some css classes for styling and a comment explain
    // what styling is brought by each class
    return (
      <div>
        <nav className='navBar'>
          <button className="navButton" onClick={() => this.navigate('home')}>Home</button>
          <button className="navButton" onClick={() => this.navigate('projects')}>Projects</button>
        </nav>
        <div className="sitePage">
          <Page />
        </div>
      </div>
    );
  }
}

export default App;

