import styled from 'styled-components';
import profile from '../../assets/profile.webp'

const BannerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
    height: 12rem;
    background-size: 100%;

    margin-top: 1rem;

    background-color: rgb(255,235,235);
    box-shadow: 3px 3px 0px 0px rgb(200, 200, 200, 0.25);
    box-shadow: inset 5em 1em rgb(270, 220, 220, 0.75);
`

const BannerTitle = styled.h1`
    display: block;
    color: white;
    font-family: Montserrat;
    font-size: 48px;
    line-height: 110px;
    letter-spacing: 0em;
    text-align: center;
`

const ProfilePicture = styled.img`
    padding: 1rem;
    height: 10rem;
    aspect-ratio: 6/7;
    border-radius: 40px;
`


function Banner() {
    return (
        <BannerContainer>
            <ProfilePicture src={profile} alt=' ' />
            <BannerTitle>A Title</BannerTitle>
        </BannerContainer>       
    )
}

export default Banner