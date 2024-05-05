import styled from 'styled-components';
import Banner from '../../components/Banner';
import Section from '../../components/Section';

const HomeWrapper = styled.div`
  display: flex; 
  justify-content: center;  
  flex-direction: column;
  gap: 1rem;
`

function Home() {
  const title1='Formation';
  const title2='Expériences';
  const title3='Avis'

  return (
    <HomeWrapper>

      <Banner 
      />
      <Section title={title1}/>
      <Section title={title2}/>
      <Section title={title3}/>

    </HomeWrapper>
  )
}

export default Home;
