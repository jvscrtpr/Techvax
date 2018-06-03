import styled from 'styled-components';

export const TopbarStyle = styled.div`
background: #333;
height: auto;
padding: 10px 5px;
& #open {
    display: none;
}
& #logo a {
    background: -webkit-linear-gradient(40deg, #12c2e9, #c471ed, #f64f59);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    margin: 0;
    font-size: 40px;
    font-family: 'Suez One';
    -webkit-font-family: 'Suez One';
    -moz-font-family: 'Suez One';
    -ms-font-family: 'Suez One';
    -o-font-family: 'Suez One';
}
& #logo a:after {
    border-bottom: none;
}
& #txt {
    font-family: 'Black Ops One';
    -webkit-font-family: 'Black Ops One';
    -moz-font-family: 'Black Ops One';
    -ms-font-family: 'Black Ops One';
    -o-font-family: 'Black Ops One';
}
& a {
    display: inline-block;
    color: #fff;
    margin: 0 1vw;
    font-size: 18px;
    text-decoration: none;
}
& a:after {
    content: '';
    display: block;
    border-bottom: 2px solid #ff4081;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
& a:hover:after { 
    transform: scaleX(1);
    transform-origin: 0% 50%;
}
& ul {
    float: right;
    padding: 5px;
    position: relative;
    top: 4px;
}
& ul a {
    color: #fff;
    margin: 0 1vw;
    font-size: 23px;
    text-decoration: none;
}
& ul a:after {
    border-bottom: none;
}
& ul a:hover {
    color: #ff4081;
    transition: 0.5s;
}
& #search-mobile {
    display: none;
}
& .search {
    display: inline-block;
    outline: none;
    border: none;
    border-left: 2px solid #ddd;
    background: transparent;
    color: #fff;
    height: 40px;
    width: 50%;
    font-size: 16px;
    text-indent: 5px;
    transition: all 0.5s ease;
    position: relative;
    top: -3px;
}
& .search::-webkit-input-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search::-moz-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search:-ms-input-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search:-o-input-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search:focus {
    border-left: 2px solid #ff4081;
    transition: all 0.5s ease;
}    
& .search:focus::-webkit-input-placeholder {
    border-left: 2px solid #ff4081;
    color: transparent;
    transition: all 0.5s ease;
}
& .search:focus::-moz-placeholder {
    border-left: 2px solid #ff4081;
    color: transparent;
    transition: all 0.5s ease;
}
& .search:-moz-placeholder {
    color: transparent;
    transition: all 0.5s ease;
}
@media (max-width: 736px){
    padding-top: 0;
    z-index: 998;
    text-align: center;
    position: sticky;
    top: 0;
    & #open {
        padding-right: 0;
        position: relative;
        top: 14px !important;
    }
    &  #logo a {
        font-size: 35px;
        position: relative;
        top: 4px;
    }
    & .search {
        display: none;
    }
    & ul {
        padding-right: 10px;
        position: relitive;
        top: 13px !important;
    }
    & ul a {
        display: none !important;
    }
    & #search-mobile {
        display: block;
        cursor: pointer;
        color: #fff;
        font-size: 23px;
        position: relative;
        top: -2px;
    }
    & #search-mobile:hover {
        color: #ff4081;
        transition: 0.5s;
    }
}
@media (max-width: 991px){
    & #open {
        float: left;
        display: inline-block;
        cursor: pointer;
        color: #fff;
        padding-right: 10px;
        font-size: 23px !important;
        position: relative;
        top: 10px;
        left: 5px;
    }
    & #open:hover {
        color: #ff4081;
        transition: 0.5s;
    }
    & #logo a {
        display: inline-block;
    }
    & a {
        display: none;
    }
    & ul {
        position: relative;
        top: 1px;
    }
    & ul a {
        display: inline-block;
        position: relative;
        top: 4px;
    }
    & .search {
        position: relative;
        top: 0;
    }
}
`;
export const SubscribeStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgba(0,0,0,0.8);
height: 100%;
width: 100%;
text-align: center;
z-index: 999;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
& #close {
    cursor: pointer;
    color: #fff;
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 20px;
}
& #close:hover {
    color: #ff4081;
    transition: 0.5s;
}
& ul {
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    width: 35%;
    padding: 10px;
}
& P {
    color: #000;
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 20px;
}
& .subbar {
    outline: none;
    border: none;
    border-bottom: 2px solid #ddd;
    background: #fff;
    color: #000;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
    text-indent: 5px;
    transition: all 0.5s ease;
}
& .subbar::-webkit-input-placeholder {
    color: #000;
    transition: all 0.5s ease;
}
& .subbar::-moz-placeholder {
    color: #000;
    transition: all 0.5s ease;
}
& .subbar:-ms-input-placeholder {
    color: #000;
    transition: all 0.5s ease;
}
& .subbar:-o-input-placeholder {
    color: #000;
    transition: all 0.5s ease;
}
& .subbar:focus {
    border-bottom: 2px solid #ff4081;
    transition: all 0.5s ease;
}    
& .subbar:focus::-webkit-input-placeholder {
    border-bottom: 2px solid #ff4081;
    color: transparent;
    transition: all 0.5s ease;
}
& .subbar:focus::-moz-placeholder {
    border-bottom: 2px solid #ff4081;
    color: transparent;
    transition: all 0.5s ease;
}
& .subbar:-moz-placeholder {
    color: transparent;
    transition: all 0.5s ease;
}
& .btn {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background: #ff4081;
    color: #fff;
    width: 50%;
    padding: 10px;
    font-size: 18px;
}
& .btn:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
@media (max-width: 736px){
    & #close {
        position: absolute;
        top: 0;
        right: 5px;
    }
    & ul {
        width: 90% !important;
    }
    & P {
        margin-top: 0;
        margin-bottom: 10px;
    }
    & .btn {
        width: 90%;
    }
}
@media (max-width: 991px){
    & ul {
        width: 50%;
    }
}
`;
export const SearchStyle = styled.div`
background: #333;
height: auto;
width: 82%;
padding: 11px 5px;
text-align: left;
z-index: 999;
position: fixed;
top: 0;
left: 0;
& .search {
    outline: none;
    border: none;
    border-left: 2px solid #fff;
    background: transparent;
    color: #fff;
    height: 35px;
    width: 100%;
    margin-left: .5%;
    font-size: 16px;
    text-indent: 5px;
}
& .search::-webkit-input-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search::-moz-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search:-ms-input-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}
& .search:-o-input-placeholder {
    color: #fff;
    transition: all 0.5s ease;
}    
& .search:focus::-webkit-input-placeholder {
    color: transparent;
    transition: all 0.5s ease;
}
& .search:focus::-moz-placeholder {
    color: transparent;
    transition: all 0.5s ease;
}
& .search:-moz-placeholder {
    color: transparent;
    transition: all 0.5s ease;
}
& .search:focus {
    border-left: 2px solid #ff4081;
    transition: all 0.5s ease;
}    
& .search:focus::-webkit-input-placeholder {
    border-left: 2px solid #ff4081;
    color: transparent;
    transition: all 0.5s ease;
}
& .search:focus::-moz-placeholder {
    border-left: 2px solid #ff4081;
    color: transparent;
    transition: all 0.5s ease;
}
& .search:-moz-placeholder {
    color: transparent;
    transition: all 0.5s ease;
}
`;
export const TrendbarStyle = styled.div`
background: #fff;
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
height: auto;
padding: 15px 0;
overflow: auto;
white-space: nowrap;
z-index: 999;
position: sticky;
top: -.5px;
left: 0;
right: 0;
& p {
    display: inline-block;
    border-right: 1px solid #ddd;
    background: #fff;
    color: #000;
    width: 50px;
    padding-left: 10px;
    padding-right: 5px;
    font-size: 18px;
    position: sticky;
    left: 0;
}
& a {
    display: inline-block;
    color: #555;
    margin: 0 1vw;
    font-size: 18px;
    text-decoration: none;
}
& a:after {
    content: '';
    display: block;
    border-bottom: 2px solid #ff4081;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
& a:hover:after { 
    transform: scaleX(1);
    transform-origin: 0% 50%;
}
@media (max-width: 736px){
    position: sticky;
    top: 57px;
}
`;
export const MenuStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #333;
height: 100%;
width: 100%;
text-align: center;
overflow: auto;
z-index: 999;
position: fixed;
top: 0;
left: 0;
& #close {
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 20px;
}
& #close:hover {
    color: #ff4081;
    transition: 0.5s;
}
& a {
    display: block;
    color: #fff;
    margin: 5px;
    padding: 20px 3px;
    font-size: 18px;
    text-decoration: none;
}
& a:after {
    content: '';
    display: block;
    border-bottom: 2px solid #ff4081;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
& a:hover:after { 
    transform: scaleX(1);
}
`;
export const BannerStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center center;
background-size: cover;
background-image: url('https://source.unsplash.com/EG49vTtKdvI');
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
height: auto;
padding-top: 110px;
padding-bottom: 110px;
& ul {
    background: #e6e6ef;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    width: 721px;
    padding: 50px 30px 50px 25px;
    text-align: center;
}
& h1 {
    color: #000;
    margin-bottom: 10px;
    font-size: 35px;
    font-weight: bold;
    text-align: left;
}
& p {
    color: #000;
    margin-bottom: 10px;
    font-size: 18px;
    text-align: left;
}
@media (max-width: 736px){
    padding: 10px;
    & ul {
        width: 90% !important;
        padding: 10px;
    }
    & h1 {
        font-size: 30px;
    }
}
@media (max-width: 991px){
    & ul {
        width: 80%;
    }
}
`;
export const ContentStyle = styled.div`
height: auto;
width: 75%;
text-align: center;
position: relative;
top: 30px;
left: 10px;
& h1 {
    border-bottom: 2px solid #ddd;
    color: #000;
    margin-left: 1%;
    margin-bottom: 10px;
    font-size: 32px;
    text-align: left;
}
& ul {
    background: #e6e6ef;
    height: auto; 
    margin: 10px;
    text-align: left;
    overflow: hidden;
    clear: left;
}
& .img {
    float: left;
    height: auto;
    width: 28%;
}
& ul a {
    color: #000;
    font-size: 30px;
    text-decoration: none;
    position: relative;
    top: 20px;
    left: 20px;
}
& ul a:hover {
    color: #ff4081;
    transition: 0.5s;
}
& #arrow {
    display: none;
    font-size: 20px;
}
& ul a:hover #arrow {
    display: inline-block;
}
& p {
    color: #555;
    width: 90%;
    margin-bottom: 10px;
    font-size: 18px;
    position: relative;
    top: 45px;
    left: 20px;
}
@media (max-width: 736px){
    padding: 0;
    & ul {
        width: auto !important;
        padding-bottom: 10px;
        text-align: center !important;
    }
    & .img {
        float: none;
        width: 100%;
        margin-bottom: 10px;
    }
    & ul a {
        margin-bottom: 10px;
        text-align: center;
        position: relative;
        top: 0;
        left: 0;
    }
    & ul a:hover #arrow {
        display: none;
    }
    & ul p {
        text-align: center;
        position: relative;
        top: 0;
        left: 14px;
    }
}
@media (max-width: 991px){
    width: auto;
    position: relative;
    top: 20px;
    left: 0;
}
`;
export const SidebarStyle = styled.div`
float: right;
clear: both;
height: auto;
width: 20%;
margin-top: 50px;
padding: 0 10px;
text-align: center;
position: sticky;
top: 70px;
right: .5%;
& ul {
    height: auto;
    width: auto;
    margin-bottom: 20px;
    padding: 10px;
    padding-top: 0;
    text-align: center;
}
& h1 {
    border-bottom: 2px solid #ddd;
    color: #000;
    font-size: 27px;
    text-align: left;
}
& .img {
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}
& p {
    color: #000;
    margin-bottom: 10px;
    font-size: 18px;
    text-align: left;
}
& .shopbtn {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background: #ff4081;
    color: #fff;
    width: 90%;
    padding: 10px;
    font-size: 18px;
}
& .shopbtn:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
& #giveaway {
    background: linear-gradient(50deg, #12c2e9, #c471ed, #f64f59);
    padding: 10px;
}
& #giveaway h1 {
    border-bottom: none;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
}
& #giveaway p {
    color: #fff;
}
& #follow {
    border-left: none;
}
& #follow h1 {
    border-bottom: none;
    margin-bottom: 10px;
}
& #follow a {
    display: inline-block;
    border-bottom: none;
    margin: 0 1vw;
    margin-left: 0;
    padding: 0;
}
& .btn {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background: #899FA9;
    color: #fff;
    height: 48px;
    width: 48px;
    font-size: 20px;
}
& .btn:hover {
    background: #ff4081;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
@media (max-width: 991px){
    display: none;
}
`;
export const ArticalStyle = styled.div`
height: auto;
width: 75%;
margin-bottom: 60px;
padding: 10px;
text-align: center;
position: relative;
top: 30px;
left: 10px;
& h1 {
    color: #000;
    margin-bottom: 10px;
    font-size: 52px;
    text-align: left;
}
& div #usr {
    background: #ff4081;
    color: #fff;
    padding: 10px;
    font-size: 20px;
    text-decoration: none;
    position: relative;
    top: -10px;
}
& div img{
    width: 100%;
}
& div iframe {
    border: none;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: 315px;
    width: 560px;
}
& div #break {
    color: #999;
    font-size: 50px;
}
& div p {
    color: #000;
    font-size: 18px;
}
& div h2 {
    color: #000;
    margin-bottom: 10px;
    font-size: 35px;
    text-align: left;
}
& div .follow {
    display: none;
    margin-top: 10px;
    padding: 10px;
}
& div h3 {
    color: #000;
    margin-bottom: 10px;
    font-size: 30px;
}
& div .follow a {
    margin: 0 1vw;
}
& div .btn {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background: #899FA9;
    color: #fff;
    height: 48px;
    width: 48px;
    font-size: 20px;
}
& div .btn:hover {
    background: #ff4081;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
& div .follow a {
    display: inline-block;
    border-bottom: none;
    margin: 0 1vw;
    padding: 0;
}
@media (max-height: 414px){
    & div iframe {
        height: 315px !important;
        width: 100%;
    }
}
@media (max-width: 736px){
    position: relative;
    top: 0;
    & div iframe {
        height: 200px;
        width: 100%;
    }
    & div h1 {
        font-size: 23px;
    }
    & div #usr {
        padding: 5px;
        position: relative;
        top: 0;
    }
}
@media (max-width: 991px){
    width: auto;
    margin-bottom: 20px;
    position: relative;
    left: 0;
    & div .follow {
        display: block;
    }
}
`;
export const FooterStyle = styled.div`
background: #222;
color: #fff;
height: auto;
margin-top: 80px;
padding-top: 20px;
text-align: center;
& #pagelinks a {
    display: inline-block;
    color: #fff;
    margin: 0 1vw;
    font-size: 18px;
    text-decoration: none;
}
& #pagelinks a:after {
    content: '';
    display: block;
    border-bottom: 2px solid #ff4081;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
& #pagelinks a:hover:after { 
    transform: scaleX(1);
    transform-origin: 0% 50%;
}
& h1 {
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 100;
}
& .btn {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background: #899FA9;
    color: #fff;
    height: 48px;
    width: 48px;
    margin-bottom: 30px;
    font-size: 20px;
}
& .btn:hover {
    background: #ff4081;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
& a {
    margin: 0 1vw;
    text-decoration: none;
}
& ul {
    background: rgba(119,141,159,0.1);
    padding: 10px;
}
& ul p {
    color: #fff;
    margin-bottom: 10px;
    font-size: 15px;
}
& .searchlogo {
    border-radius: 6px;
    background: #899FA9;
    height: 25px;
    padding: 10px;
}
@media (max-width: 736px){
    & #pagelinks a, a {
        margin: 0 2vw;
    }
}
@media (max-width: 991px){
    margin-top: 50px;
}
`;
export const FooterPagesStyle = styled.div`
height: auto;
text-align: center;
& .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    width: 95%;
    margin-bottom: 30px;
    padding-top: 110px;
    padding-bottom: 110px;
    position: relative;
    left: 2.5%;
}
& .banner h1 {
    background: rgba(255,255,255,0.8);
    color: #000;
    width: 721px;
    padding: 50px 10px;
    font-size: 70px;
    font-weight: 100;
    position: relative;
    top: 0;
}
& ul {
    display: inline-block;
    background: #e6e6ef;
    height: auto;
    width: 25%;
    margin: 5px;
    padding: 20px;
    text-align: center;
    font-weight: bold;
}
& #icon {
    color: #000;
    margin-bottom: 10px;
    font-size: 60px;
}
& ul h1 {
    color: #000;
    margin-bottom: 10px;
    font-size: 42px;
    position: relative;
    top: 0;
}
& ul p {
    color: #000;
    font-size: 18px;
}
& h1 {
    color: #000;
    margin-bottom: 10px;
    font-size: 40px;
    position: relative;
    top: 30px;
}
& #leftstuff {
    height: auto;
    margin-top: 30px;
    padding-top: 30px;
    padding-left: 7%;
    padding-bottom: 30px;
    text-align: left;
}
& #leftstuff h1 {
    width: 50%;
    position: relative;
    top: 0;
}
& #leftstuff p {
    width: 60%;
    font-size: 18px;
}
& .container {
    display: inline-block;
    border-radius: 50%;
    width: auto;
    margin: 0 1vw;
    position: relative;
    top: 40px;
}
& .container:hover {
    cursor: pointer;
}
& .container:hover .img {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
} 
& .container:hover .overlay {
    opacity: 1;
} 
& .img {
    border: 1px solid #ddd;
    border-radius: 50%;
    height: 227px;
    width: 227px;
} 
& .overlay {
    display: inline-block;
    opacity: 0;
    border-radius: 50%;
    background: rgba(0,0,0,0.8);
    height: 227px;
    width: 227px;
    transition: .5s ease;
    position: absolute;
    top: 1px;
    left: 1px;
    right: 0;
    bottom: 0;
}
& .overlay p {
    color: #fff;
    font-size: 20px;
    text-align: center;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
}
& #name {
    font-size: 25px;
    font-weight: bold;
}
@media (max-width: 736px){
    & .banner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: auto;
        margin-bottom: 20px;
        padding: 10px !important;
        position: relative;
        left: 0;
    }
    & .banner h1 {
        font-size: 40px;
    }
    & ul {
        width: 90%;
        padding: 10px;
    }
    & #icon {
        font-size: 60px;
    }
    & ul h1 {
        font-size: 42px;
    }
    & h1 {
        font-size: 35px;
    }
    & #leftstuff {
        padding: 10px;
        text-align: center;
    }
    & #leftstuff h1 {
        width: auto;
    }
    & #leftstuff p {
        width: auto !important;
    }
}
@media (max-width: 991px){
    & .banner {
        height: auto;
        padding-top: 80px;
        padding-bottom: 80px;
    }
    & .banner h1 {
        width: 90%;
    }
    & #leftstuff p {
        width: 90%;
    }
}
`;
export const ErrorStyle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 100vh;
& a {
    color: #000;
    font-size: 20px;
    text-decoration: none;
    position: absolute;
    top: 15px;
    left: 15px;
}
& a:after {
    content: '';
    display: block;
    border-bottom: 2px solid #ff4081;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
& a:hover:after { 
    transform: scaleX(1);
    transform-origin: 0% 50%;
}
& h1 {
    border-right: 4px solid #000;
    color: #000;
    padding-right: 10px;
    font-size: 50px;
    font-weight: 100;
}
& p {
    padding-left: 10px;
    font-size: 20px;
}
@media (max-width: 736px){
    flex-direction: column;
    & h1 {
        border-right: none;
        padding-right: 0;
    }
    & p {
        padding-left: 0;
    }    
}
`;
