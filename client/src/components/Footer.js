import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
padding: 86px 290px;
/* height: 446px; */
background: #2A314D;
margin-top: 4rem;
box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const UpperContainer = styled.div`
border: 1px solid white;
`

const AboutSection = styled.div`

span{
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.16px;
color: #FFFFFF;
}

`

const LowerContainer = styled.div`
border: 1px solid white;
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
                <span>
                “Project name” is a project made to bring artists and musicians colser to producers and labels and ultimately increase the oppotunities available for them working as an individual or as a team.
                </span>
            </AboutSection>
        </UpperContainer>
        <LowerContainer>
            © 2022 Project Name | All rights reserved
        </LowerContainer>
    </Section>
  )
}

export default Footer