import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import SearchMobile from './searchmobile';
import Subscribe from './subscribe';
import Trendbar from './trendbar';
import Menu from './menu';
import Footer from './footer';

class Layout extends Component{
  state = {
    openMenu: false,
    openSubscribe: false,
    search: '',
    openSearch: false
  }
  toggleMenu = () => {
    this.setState(state => ({
      openMenu: !state.openMenu
    }))
  }
  toggleSubscribe = () => {
    this.setState(state => ({
      openSubscribe: !state.openSubscribe
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
        <Topbar searchChange={this.handleSearchChange} search={this.state.search} Menu={this.toggleMenu} Subscribe={this.toggleSubscribe} SearchMobile={this.toggleSearch} />
        <SearchMobile searchChange={this.handleSearchChange} search={this.state.search} open={this.state.openSearch} />
        <Trendbar />
        <Menu open={this.state.openMenu}><span id='close' onClick={this.toggleMenu}>&times;</span></Menu>
        <Subscribe open={this.state.openSubscribe}><span id='close' onClick={this.toggleSubscribe}>&times;</span></Subscribe>
        {this.props.children}
      </div>
      <Footer Subscribe={this.toggleSubscribe} />
    </div>
    );
  }
}
export default Layout;
