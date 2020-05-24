import React from 'react'
import styled from 'styled-components'

function RightSect() {
    const StyledSection = styled.section`
    display:flex;
    flex-direction:column;
    width:55%;
    height:90vh;
    justify-content:center;
    align-items:center;
    padding-bottom:5em;
    
    & * {
        margin: 20px 0;
    }
    
    `
    const Header = styled.h1`
    font-size:4rem;
    font-family: 'Raleway', sans-serif;
    `
    const SubHeader = styled.p`
    font-size:1rem;
    font-family:sans-serif;
    `

    const LoginBtn = styled.button`
      background: #9CECFB;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: #fff;
      height:60px;
      width:200px;
      font-family:'Raleway';
      font-size:1rem;
    `
    

    return (
        <StyledSection>
            <Header>SUPER MODERN BANK</Header>
            <SubHeader>We Are Without a Doubt, the Best Modern Bank of All Time</SubHeader>
            <LoginBtn>Learn more</LoginBtn>
        </StyledSection>
    )
}
export default RightSect