import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Payload from './Components/Payload/Payload';
import Post from './Components/Post/Post';
import Profile from './Components/Profile/Profile';
import List from './Components/List/List';
import { Route } from 'react-router-dom';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.content}>
          <Navbar />
          <Route path='/payload' component={Payload} />
          <Route path='/post' render={ () => <Post state={this.props.state} addPost={this.props.addPost} /> } />
          <Route path='/profile' component={Profile} />
          <Route
            path='/list'
            render={ () => <List pullOfUsers={ this.props.state.pullOfUsers } />}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
