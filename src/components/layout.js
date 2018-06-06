import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Searchbar from './search';
import Trendbar from './trendbar';
import Menu from './menu';
import Footer from './footer';

class Layout extends Component{
  state = {
    openMenu: false,
    search: '',
    openSearchbar: false
  }
  toggleMenu = () => {
    this.setState(state => ({
      openMenu: !state.openMenu
    }))
  }
  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  toggleSearchbar = () => {
    this.setState(state => ({
      openSearchbar: !state.openSearchbar
    }))
  }
  render(){
    return(
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>Techvax.com | Tech News, How to's, Tips & Tricks and more...</title>
      </Helmet>
      <div style={{ flex: '1 0 auto' }}>
        <Topbar searchChange={this.handleSearchChange} search={this.state.search} Menu={this.toggleMenu} Searchbar={this.toggleSearchbar} />
        <Searchbar open={this.state.openSearchbar}><span id='close' onClick={this.toggleSearchbar}>&times;</span></Searchbar>
        <Trendbar />
        <Menu open={this.state.openMenu}>
        <div id='banner'>
          <p>Tech<span id='txt'>vax</span></p>
          <span id='close' onClick={this.toggleMenu}>&times;</span>
        </div>
        </Menu>
        {this.props.children}
        {this.props.render && this.props.render(this.state.search)}
      </div>
      <Footer />
    </div>
    );
  }
}
export default Layout;
