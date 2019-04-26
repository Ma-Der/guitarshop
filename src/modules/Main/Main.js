import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className="main">
        {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
