import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(199, 0, 57);
`

const FooterText = styled.h2`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: white;
`

function Footer() {
    return (
        <FooterContainer>
            <FooterText><span>&#169;</span> 2024 Sophie Dos Reis. All rights reserved</FooterText>
        </FooterContainer>
    )
}

export default Footer