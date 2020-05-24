import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

function Navbar() {

    const MainNav = styled.nav`
display:flex;
height:10vh;
align-items:center;
flex-flow: row nowrap;
width:100%;
background-color:rgba(0, 0, 0, 0.2);
`

    const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width:30%;
  height:100%;
  padding-left:5em;
`

    const EndWrapper = styled.div`
  width:70%;
  height:100%;
  padding-right:5em;
`

    const LogoContainer = styled.div`
display:flex;
`

    const NavLinks = styled.ul`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    height:100%;

    `

    const NavLink = styled.li`
    list-style-type:none;
    padding: 0 30px;
    font-family: 'Raleway', sans-serif;
    `

    const Logo = styled.h1``

    return (
        <MainNav>
            <StartWrapper>
                <LogoContainer>
                    <Logo>LOGO</Logo>
                </LogoContainer>
            </StartWrapper>
            <EndWrapper>
                <NavLinks>
                    <NavLink>CONTACT</NavLink>
                    <NavLink>ABOUT</NavLink>
                    <NavLink>TEST</NavLink>
                </NavLinks>
            </EndWrapper>
        </MainNav>
    )
}
export default Navbar