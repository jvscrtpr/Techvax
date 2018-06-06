import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import Layout from '../components/layout'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Black+Ops+One|Roboto|Roboto+Slab|Suez+One');
    *{
      margin: 0;
      padding: 0;
    }
    body,html {
      background: #fff;
      font-family: 'Roboto Slab', serif;
    }
    ::-webkit-scrollbar {
      height: 0;
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #333;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #ff4081;
    }
    @-webkit-keyframes rainbow {
      0% {border-color: hsl(0, 100%, 50%);}
      100% {border-color: hsl(255, 100%, 50%);}
    }
    @media (max-width: 736px){
      body,html {
        font-family: 'Roboto', sans-serif;
      }
    }
`;

import '@fortawesome/fontawesome/styles.css'

const TemplateWrapper = ({ children }) => (
 <Layout>
   {children()}
 </Layout>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
