import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Logo from '../assets/Logo.jpg'
// import { SangeetArtLogo } from './SaneetArtistLogo'
import Logo from '../assets/Sangeet_Artist_Logo.png'

const Section = styled.div`
padding: 86px 0px;
padding-bottom: 40px;
/* height: 446px; */
background: #2A314D;
margin-top: 4rem;
box-sizing: border-box;

/* display: flex; */
/* flex-direction: column; */
/* align-items: center; */
/* justify-content: center; */
`

const UpperContainer = styled.div`
/* border: 1px solid white; */
width: 80vw;
margin: 0 auto;
margin-bottom: 2.5rem;
display: flex;
`

const AboutSection = styled.div`
width: 70%;
/* border: 1px solid white; */
border-right: 2px solid white;
display: flex;
align-items: center;
justify-content: space-between;

img{
  width: 200px;
  /* mix-blend-mode: multiply; */
}

span{
  /* border: 1px solid white; */
padding: 0px 30px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.16px;
color: #FFFFFF;
}

`

const List = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
/* padding: 0; */
/* border: 1px solid white; */
`

const Item = styled.ul`
list-style: none;
font-weight: 400;
font-size: 19px;
line-height: 29px;
color: #FFFFFF;
`

const LowerContainer = styled.div`
/* border: 1px solid white; */
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
`

const Footer = () => {
  return (
    <Section>
        <UpperContainer>
            <AboutSection>
                <img src={Logo} alt="" />
                <span>
                “Sangeet Artist is a project made to bring artists and musicians colser to producers and labels and ultimately increase the oppotunities available for them working as an individual or as a team.
                </span>
            </AboutSection>
            <List>
              <Item><Link to="/">NFT Gallery</Link></Item>
              <Item><Link to="/singers">See all Singers</Link></Item>
              <Item><Link to="/musicians">See all Musicians</Link></Item>
              <Item><Link to="/musiclabels">See all Music Producers</Link></Item>
            </List>
        </UpperContainer>
        <LowerContainer>
            © 2022 Project Name | All rights reserved
        </LowerContainer>
    </Section>
  )
}

export default Footer