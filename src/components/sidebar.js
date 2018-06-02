import React, { Component } from 'react';
import { SidebarStyle } from './styles';

class Sidebar extends Component{
  render(){
    return(
    <SidebarStyle>
      {this.props.children}
      <ul id='giveaway'>
        <img src="/img/deal.jpeg" alt='' className='img' />
        <p>Find out how you can win this prize by clicking the link below</p>
        <a href='/'><button className='shopbtn'>Check it out!</button></a>
      </ul>
    </SidebarStyle>
    );
  }
}
export default Sidebar;
/*
<ul>
  <h1>Deal of the week!</h1>
  <img src={require('../images/deal.jpeg')} alt='' className='img' />
  <p>save 21% on the HP Pro book today by clicking the link below</p>
  <a href='/'><button className='shopbtn'>Buy now!</button></a>
</ul>
*/