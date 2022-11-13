import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import userImg from "../assets/userImgg.jpg";
// import { userImg } from "./SVG";

const Section = styled.div`
  width: 100vw;
  /* height: 107px; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 116px;
  box-sizing: border-box;
  /* border: 1px solid red; */
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #161616;
  /* border: 1px solid red; */
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 48px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    box-sizing: border-box;
    /* width: 217.6px; */
    height: 59px;
    background: #6161fe;
    border: 1.5px solid #161616;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 56px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Cabinet Grotesk', sans-serif;

    img {
      /* mix-blend-mode: multiply; */
      background-color: #6161fe;
      border-radius: 50%;
    }
  }
`;

const MenuItem = styled.li`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  /* line-height: 29px; */
  color: #161616;
  list-style: none;
`;

const Navbar = () => {
  return (
    <Section>
      <Logo>Sangeet Artist</Logo>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/trending">Trending</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/trending">NFT Gallery</Link>
        </MenuItem>
        <Link to='/profile' >
          <div>
            <img src={userImg} alt="" />
            <span>Adarsh Dubey</span>
          </div>
        </Link>
      </Menu>
    </Section>
  );
};

export default Navbar;
