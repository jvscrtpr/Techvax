import styled from 'styled-components';

export const TopbarStyle = styled.div`
background: #333;
height: auto;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
padding-right: 0;
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
    top: 5px;
    right: 0;
}
& ul a {
    cursor: pointer;
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
& #searchbtn {
    cursor: pointer;
    border-left: 1px solid #ddd;
    padding-left: 15px;
}
@media (max-width: 736px){
    padding-top: 0;
    z-index: 998;
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
    & ul {
        padding-right: 10px;
        position: relitive;
        top: 6px !important;
    }
    & ul a {
        display: none !important;
    }
    & #searchbtn {
        display: inline-block !important;
        cursor: pointer;
        border-left: none;
        padding-left: 0;
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
}
`;
export const MenuStyle = styled.div`
background: #333;
height: 100%;
width: 230px;
text-align: left;
overflow: auto;
z-index: 999;
position: fixed;
top: 0;
left: 0;
& #banner {
    display: block;
    border-bottom: 1px solid #444;
    background: #333;
    width: 91.5%;
    padding-top: 12px;
    padding-right: 15px;
    padding-left: 5px;
    padding-bottom: 12px;
    position: sticky;
    top: 0;
}
& #banner p {
    display: inline-block;
    background: -webkit-linear-gradient(40deg, #12c2e9, #c471ed, #f64f59);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    margin: 0;
    font-size: 35px;
    text-align: left;
    font-family: 'Suez One';
    -webkit-font-family: 'Suez One';
    -moz-font-family: 'Suez One';
    -ms-font-family: 'Suez One';
    -o-font-family: 'Suez One';
}
& #txt {
    font-family: 'Black Ops One';
    -webkit-font-family: 'Black Ops One';
    -moz-font-family: 'Black Ops One';
    -ms-font-family: 'Black Ops One';
    -o-font-family: 'Black Ops One';
}
& #close {
    float: right;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-size: 35px;
    font-weight: bold;
    text-align: right;
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
    transform-origin: 0% 50%;
}
@media (max-width: 736px){
    & #banner {
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
`;
export const SearchStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(50deg, rgba(18,194,233,.95), rgba(196,113,237,.95), rgba(246,79,89,.95));
height: 100%;
width: 100%;
text-align: center;
overflow: auto;
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
    top: 0;
    right: 10px;
}
& .search {
    outline: none;
    border: none;
    border-bottom: 2px solid #fff;
    background: transparent;
    color: #fff;
    height: 40px;
    width: 70%;
    font-size: 16px;
    text-indent: 5px;
    z-index: 999;
    position: absolute;
    top: 60px;
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
& .cards {
    background: transparent;
    height: auto;
    width: 75%;
    text-align: center;
    position: absolute;
    top: 130px;
}
& .cards ul {
    background: #e6e6ef;
    height: auto; 
    margin: 10px;
    padding-right: 10px;
    text-align: left;
    overflow: hidden;
    clear: left;
}
& .img {
    float: left;
    height: auto;
    width: 28%;
}
& .cards ul a {
    color: #000;
    font-size: 30px;
    text-decoration: none;
    position: relative;
    left: 15px;
}
& .cards ul a:hover {
    color: #ff4081;
    transition: 0.5s;
}
& #arrow {
    display: none;
    font-size: 20px;
}
& .cards ul a:hover #arrow {
    display: inline-block;
}
& .cards ul p {
    color: #555;
    width: 90%;
    margin-bottom: 10px;
    font-size: 18px;
    position: relative;
    left: 15px;
}
@media (max-width: 736px){
    & .search {
        position: absolute;
        top: 30px;
    }
    & .cards {
        position: absolute;
        top: 80px;
    }
    & .cards ul {
        padding: 0;
        padding-bottom: 10px;
        text-align: center !important;
    }
    & .img {
        float: none;
        width: 100%;
        margin-bottom: 10px;
    }
    & .cards ul a {
        margin-bottom: 10px;
        text-align: center;
        position: relative;
        left: 0;
    }
    & .cards ul a:hover #arrow {
        display: none;
    }
    & .cards ul p {
        text-align: center;
        position: relative;
        left: 14px;
    }
}
@media (max-width: 991px){
    & .search {
        width: 90%;
    }
    & .cards {
        width: auto;
    }
}
`;
export const TrendbarStyle = styled.div`
border-top: 4px solid hsl(0, 100%, 50%);
-webkit-animation: rainbow 1s infinite alternate;
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
z-index: 998;
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
padding-top: 120px;
padding-bottom: 120px;
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
    background: #e6e6ef;
    color: #000;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 32px;
    text-align: left;
}
& ul {
    border-bottom: 1px solid #e6e6ef;
    background: transparent;
    height: auto; 
    margin: 10px;
    padding: 10px;
    text-align: left;
    overflow: hidden;
    clear: left;
}
& .img {
    float: left;
    border-radius: 6px;
    height: auto;
    width: 28%;
}
& ul a {
    color: #000;
    font-size: 30px;
    text-decoration: none;
    position: relative;
    left: 15px;
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
& ul p {
    color: #555;
    width: 90%;
    margin-bottom: 10px;
    font-size: 18px;
    position: relative;
    left: 15px;
}
@media (max-width: 736px){
    padding: 0;
    & ul {
        width: auto !important;
        padding: 0;
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
margin-top: 30px;
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
    margin-bottom: 20px !important;
    font-size: 52px;
    text-align: left;
}
& #usr {
    background: #ff4081;
    color: #fff;
    padding: 10px;
    font-size: 20px;
    text-decoration: none;
    position: relative;
    top: -10px;
}
& img {
    width: 100%;
}
& #vid {
    border: none;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: 315px;
    width: 560px;
}
& #break {
    color: #999;
    font-size: 50px;
}
& p {
    color: #000;
    font-size: 18px;
}
& p:last-child {
    margin-bottom: 30px;
}
& h2 {
    color: #000;
    margin-bottom: 10px !important;
    font-size: 35px;
    text-align: left;
}
& h3 {
    color: #000;
    margin-bottom: 10px;
    font-size: 30px;
}
@media (max-height: 414px){
    & #vid {
        height: 315px !important;
        width: 100%;
    }
}
@media (max-width: 736px){
    position: relative;
    top: 0;
    & #vid {
        height: 200px;
        width: 100%;
    }
    & h1 {
        font-size: 35px;
    }
    & #usr {
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
}
`;
export const FooterStyle = styled.div`
background: #222;
color: #fff;
height: auto;
margin-top: 60px;
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
    margin-top: 0 !important;
    & #pagelinks a, a {
        margin: 0 2vw;
    }
}
@media (max-width: 991px){
    margin-top: 30px;
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
