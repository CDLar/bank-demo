import React from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import LeftSection from './components/LeftSect'
import RightSection from './components/RightSect'

function App() {
  const Main = styled.div`
      height:100vh;
      display:flex;
      flex-wrap:wrap;
      max-height: 100vh;
      background: #9CECFB;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: #fff;
      clip-path: polygon(0 0, 100% 1%, 100% 83%, 0% 100%);
`
  return (
    <Main>
      <Navbar />
      <LeftSection />
      <RightSection />
    </Main>
  );
}

export default App;
