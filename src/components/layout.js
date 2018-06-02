import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import SearchMobile from './searchmobile';
import Trendbar from './trendbar';
import Menu from './menu';
import Footer from './footer';

class Layout extends Component{
  state = {
    openMenu: false,
    search: '',
    openSearch: false
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
  toggleSearch = () => {
    this.setState(state => ({
      openSearch: !state.openSearch
    }))
  }
  render(){
    return(
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>Techvax.com | Tech How to's, Tips & Tricks and more...</title>
      </Helmet>
      <div style={{ flex: '1 0 auto' }}>
        <Topbar searchChange={this.handleSearchChange} search={this.state.search} Menu={this.toggleMenu} SearchMobile={this.toggleSearch} />
        <SearchMobile searchChange={this.handleSearchChange} search={this.state.search} open={this.state.openSearch} />
        <Trendbar />
        <Menu open={this.state.openMenu}><span id='close' onClick={this.toggleMenu}>&times;</span></Menu>
        {this.props.children}
      </div>
      <Footer />
    </div>
    );
  }
}
export default Layout;