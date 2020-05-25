import React from 'react'
import styled from 'styled-components'
import { AiFillLock } from "react-icons/ai";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';


function Navbar() {

    const [lang, setLang] = React.useState('en');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setLang(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

      const theme = createMuiTheme({
        overrides: {
          // Style sheet name ⚛️
          MuiButton: {
            // Name of the rule
            text: {
              // Some CSS
              color: 'white',
            },
          },
        },
      });

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
    flex-flow:row nowrap;
    justify-content:flex-end;
    align-items:center;
    height:100%;
    `

    const NavLink = styled.li`
    list-style-type:none;
    padding: 0 20px;
    margin: 0 10px;
    font-family: 'Raleway', sans-serif;
    display:flex;
    align-items:center;
    text-transform: uppercase;
    transition: all 2s;
    position:relative;
    height:60%;
    transition: all .5s;
    color:#D1D6D7;

    &:before {
        transition: all .5s;
    }

    &:hover {
        cursor:pointer;
        color:white;
    }

    &:after{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #eeeeee;
        height: 1px;
        transition: all .5s;
    }

    &:hover:after{
        width:100%;
    }
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
                    <NavLink>Contact</NavLink>
                    <NavLink>
                        <FormControl>
                            <Select
                                style={{color:'white'}}
                                disableUnderline={true} 
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={lang}
                                onChange={handleChange}
                            >
                                <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'fr'}>French</MenuItem>
                                <MenuItem value={'kr'}>Korean</MenuItem>
                            </Select>
                        </FormControl>
                    </NavLink>
                    <NavLink>Sign in<AiFillLock style={{ marginLeft: '10px' }} /></NavLink>
                </NavLinks>
            </EndWrapper>
        </MainNav>
    )
}
export default Navbar