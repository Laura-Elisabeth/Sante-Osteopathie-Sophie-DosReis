import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'



const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(255, 195, 0);
`

const HeaderDiv = styled.div`
    display: flex;
`

const HeaderText = styled.h2`
    font-family: "Gill Sans", sans-serif;
    font-size: 50px;
    font-weight: 300;
    text-align: left;
    color: white;
    padding: 0 0 0 3rem;
`

const Nav = styled.div`
    display: flex;
    padding: 0;
    margin: 0;
`

const mystyle = {
    color: "white",
    width: "200px",
    fontFamily: "Gill Sans",
    fontSize: "2.5rem"
};

function Header() {
    return (
        <HeaderContainer>
            <HeaderDiv>
                <HeaderText>Sophie Dos Reis, Ostéopathe D.O.</HeaderText>
            </HeaderDiv>
            <Nav>
                <FontAwesomeIcon icon={faBars} style={mystyle}/>
            </Nav>
        </HeaderContainer>
    )
}

export default Header