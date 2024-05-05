import styled from 'styled-components';

const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 195, 0, 1);
    border: rgb(255, 195, 0) solid 5px;
    box-shadow: 8px 8px rgb(200, 200, 200, 0.3);
    height: 10rem;

`

const SectionTitle = styled.h2`
    font-family: "Gill Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 30px;
    color: white;
    margin-left: 1rem;
`

function Section({title}) {
    return (
        <SectionContainer>
                <SectionTitle>{title}</SectionTitle>
        </SectionContainer>
    )
}

export default Section
