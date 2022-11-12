import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.div`
width: 100vw;
/* height: 107px; */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 1px solid red;
padding: 24px 116px;
box-sizing: border-box;
`

const Logo = styled.h1`
font-weight: 700;
font-size: 28px;
line-height: 35px;
color: #161616;
border: 1px solid red;
`

const Menu = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 48px;
`

const MenuItem = styled.li`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 29px;
color: #161616;
list-style: none;
`

const Navbar = () => {
  return (
    <Section>
    <Logo>
        Doremi
    </Logo>
    <Menu>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/trending">Trending</Link></MenuItem>
        <MenuItem><Link to="/singers">Singers</Link></MenuItem>
        <MenuItem><Link to="/musicians">Musicians</Link></MenuItem>
        <MenuItem><Link to="/musiclabels">Music Labels</Link></MenuItem>
    </Menu>
    </Section>
  )
}

export default Navbar