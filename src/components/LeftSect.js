import React from 'react'
import styled from 'styled-components'
import moneyPic from '../moneyPic.png'

function LeftSect() {
    const StyledSection = styled.section`
    display:flex;
    height:90vh;
    width:45%;
    justify-content:center;
    align-items:center;
    padding-bottom:5em;
    `
    const StyledImg = styled.img.attrs({ src: moneyPic })``
    return (
        <StyledSection>
            <StyledImg />
        </StyledSection>
    )
}
export default LeftSect