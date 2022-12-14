import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { SearchIcon } from "../components/SVG";
import { SingerData } from "../components/SingerData";
import SingerImg from '../assets/singerImg.jpg'
import Footer from "../components/Footer";

const Section = styled.div`
  width: 100vw;
  min-height: 100vw;
  background-color: #f2f7f1;
`;

const Heading = styled.div`
width: 60vw;
height: 146px;
font-size: 54px;
text-align: center;
color: #000000;
margin: 0 auto;
margin-top: 2rem;
font-family: 'Cabinet Grotesk', sans-serif;
font-weight: 600;
/* border: 1px solid red; */
`

const Search = styled.div`
width: 60vw;
/* height: 44px; */
margin: 0 auto;
margin-top: 2.5rem;
background: #FFFFFF;
border: 1.5px solid #000000;
border-radius: 8px;

display: flex;
align-items: center;
justify-content: space-between;
padding: .8rem 1rem;
box-sizing: border-box;

input{
  font-weight: 400;
font-size: 20px;
border: none;
color: #000;
width: 45vw;
font-family: 'IBM Plex Sans', sans-serif;

&::placeholder {
  font-size: 20px;
  font-family: 'IBM Plex Sans', sans-serif;
}

&:focus{
  border: none;
  outline: none;
}
}
`

const SingerCards = styled.div`
/* border: 1px solid red; */
width: 86vw;
margin: 0 auto;
margin-top: 5rem;
display: grid;
grid-template-columns: auto auto;
`

const SingerCard = styled.div`
height: 270px;
width: 90%;
margin-bottom: 3rem;
background: #FFFFFF;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
border-radius: 8px;

display: flex;
`

const LeftContainer = styled.div`
width: 40%;
/* border: 1px solid red; */

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ImageContainer = styled.div``

const PopuarityBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 0.4rem;
padding: 12px 0px;
box-sizing: border-box;
width: 168px;
background: #FBA351;
border: 1.5px solid #000000;
box-shadow: 2px 2px 0px #000000;
border-radius: 32px;
`

const RightContainer = styled.div`
width: 60%;
/* border: 1px solid red; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
box-sizing: border-box;
padding-left: 1rem;

h2{
font-style: normal;
font-weight: 602;
font-size: 30px;
color: #161616;
}

h4{
  font-style: normal;
font-weight: 400;
font-size: 16px;
color: #525252;
}

h3{
  font-weight: 400;
font-size: 18px;
color: #161616;
text-align: left;
margin-top: 0.8rem;
font-family: 'IBM Plex Sans', sans-serif;

/* border: 1px solid red; */
}

a{
  font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #0F62FE;
margin-top: 1rem;
display: block;
text-decoration: underline;
}
`

const Singers = () => {
  return (
    <Section>
      <Navbar />
      <Heading>
      Meet singers who spread magic just by pure voice
      </Heading>
      <Search>
        <input type="text" name="" placeholder="Search for Singers"  />
        <SearchIcon/>
      </Search>
      <SingerCards>
      {
        SingerData.map((singer, index) => {
          return (
            <SingerCard>
              <LeftContainer>
                <ImageContainer>
                <img src={SingerImg} alt="singerImg" />
                </ImageContainer>
                <PopuarityBtn>
                  {singer.popularity}
                </PopuarityBtn>
              </LeftContainer>
              <RightContainer>
                <h2>{singer.name}</h2>
                <h4>{singer.type}</h4>
                <h3>{singer.tagline}</h3>
                <a href="#">Most Recent Project</a>
              </RightContainer>
            </SingerCard>
            )
          })
        }
      </SingerCards>
      <Footer/>
    </Section>
  );
};

export default Singers;
