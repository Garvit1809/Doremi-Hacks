import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ArrowRight, ArrowUpRight, Artist, Bubble, KnowMoreBack, NFTs, Songs, Wave } from "../components/SVG";
import HomeImg1 from '../assets/homeImg1.jpg'
import HomeImg2 from '../assets/homeImg2.jpg'
import HomeImg3 from '../assets/homeImg3.jpg'


const Section = styled.div`
  width: 100vw;
  /* min-height: 100vw; */
  background: #eccce9;
`;

const Heading = styled.div`
  box-sizing: border-box;

  h1 {
    width: 60vw;
    /* border: 1px solid red; */
    margin: 0 auto;
    margin-top: 3rem;
    font-weight: 600;
    font-size: 64px;
    line-height: 130.5%;
    /* text-align: center; */
    color: #000000;
    box-sizing: border-box;
  }

  div {
    padding: 3.7px;
    display: inline-block;
    width: 132px;
    height: 58px;
    background: #ff621f;
    border: 2.4px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 36px;
    transform: rotate(-10deg);
    position: relative;
    top: 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: rotate(10deg);
    }

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      /* box-sizing: border-box; */
      display: flex;
      align-items: center;
      justify-content: center;
      /* padding: 10px 20px; */
      gap: 10px;

      width: 132px;
      height: 58px;
      background: #ff621f;
      border: 2.4px solid #000000;
      border-radius: 49px;

      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      color: #000000;
    }
  }
`;

const SubHeading = styled.div`
  width: 50vw;
  margin: 3rem auto 0 auto;

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;

const Buttons = styled.div`
  width: 32vw;
  margin: 0 auto;
  /* border: 1px solid red; */
  margin-top: 3rem;
  font-family: 'Cabinet Grotesk', sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Publish = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  /* width: 200px; */
  /* height: 59px; */
  background: #6161fe;
  border: 1.5px solid #161616;
  box-shadow: 3px 3px 0px #000000;
  border-radius: 56px;
  cursor: pointer;
  position: relative;
  top: -3px;
  left: -3px;
  transition: all .15s ease-in;

  &:hover {
    box-shadow: 0 0 0;
    top: 0;
    left: 0;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;

    color: #ffffff;
  }

  svg {
    width: 20px;
    height: 20px;
    background-blend-mode: multiply;
  }
`;

const Trending = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  cursor: pointer;
  padding: 16px 24px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #161616;
  }

  svg {
    width: 20px;
    height: 20px;
    background-blend-mode: multiply;
  }
`;

const WaveContainer = styled.div`
  /* border: 1px solid red; */
  /* height: 60px; */
  margin-top: 3.5rem;
  position: relative;
  overflow-x: hidden;
  /* background-color: white; */
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 110vw;

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }
`;

const KnowMore = styled.div`
  width: 100vw;
  height: 75vh;
  background-color: white;
  /* background-image: url(${KnowMoreBack}); */

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SVGBack = styled.div`
position: absolute;
`

const Box = styled.div`
  width: 584px;
  height: 272px;
  background: #e5f2e4;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 8px;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 50px;
      color: #000000;
    }
  }

  div {
    p {
      /* border: 1px solid red; */
      margin: 0 auto;
      margin-top: 2rem;
      width: 80%;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
    }
  }
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
  gap: 10px;

  position: absolute;
  width: 97px;
  height: 97px;
  z-index: 2;
  top: -45px;
  left: -45px;

  background: #ff621f;
  border: 1px solid #000000;
  border-radius: 500px;
  transform: rotate(-15deg);

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 85px;
    height: 85px;

    background: #ff621f;
    border: 1px solid #000000;
    border-radius: 200px;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 0.32px;
      color: #000000;
    }
  }
`;

const WhatCanUDoHere = styled.div`
  background: #6161fe;
  height: 70vh;
  /* position: relative; */

  h1 {
    padding-top: 3rem;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    color: #ffffff;
  }
`;

const Options = styled.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  width: 90%;
  margin-bottom: 1rem;
  grid-template-columns: auto auto auto;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  box-sizing: border-box;
  width: 80%;
  height: 216.58px;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 8px;

  h3{
    font-weight: 600;
font-size: 20px;
line-height: 28px;
color: #161616;
margin-bottom: 0.5rem;
  }

  p{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #161616;
text-align: left;
margin: 0;
  }
`;

const Meet = styled.div`
  background-color: white;
  /* height: 90vh; */
  position: relative;
  padding-top: 13rem;
  box-sizing: border-box;
  svg {
    position: absolute;
    top: -25px;
    left: 0;
  }
  display: flex;
  flex-wrap: wrap;

  div{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 24px;
box-sizing: border-box;
width: 43vw;
/* height: 500px; */
background: #FFFFFF;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
border-radius: 8px;
margin: 0 auto;
margin-bottom: 4rem;

h1{
  font-style: normal;
font-weight: 602;
font-size: 42px;
line-height: 60px;
color: #000000;
margin: 0;
text-align:left;
}

p{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #000000;
margin: 0;
text-align: left;
}
button{
  display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 10px;
/* width: 218px; */
/* height: 59px; */
background: #6161FE;
border: 1.5px solid #161616;
box-shadow: 3px 3px 0px #000000;
border-radius: 56px;
color: #FFFFFF;
/* font-weight: 500; */
font-family: inherit;
font-size: 18px;
translate: -3px -3px;
transition: all .15s ease-in;

&:hover {
  box-shadow: 0 0 0;
  translate: 0 0;
}
}

img {
  max-width: 100%;
}
  }
`;

const Home = () => {
  return (
    <>
      <Section>
        <Navbar />
        <Heading>
          <h1>
            A place where{" "}
            <div>
              <span>artists</span>
            </div>{" "}
            share their work
          </h1>
        </Heading>
        <SubHeading>
          Welcome to the platform where musicians and singers share their work
          and make NFTs of their covers.
        </SubHeading>
        <Buttons>
        <Link to="/publish" >
        <Publish>
        <span>Publish Song</span>
        <ArrowRight />
        </Publish>
        </Link>
        <Link to='/trending' >
        <Trending>
        <span>See Trending</span>
        <ArrowUpRight />
        </Trending>
        </Link>
        </Buttons>
        <WaveContainer>
          <Wave />
          <Banner>
            <h4>Explore singers and musicians</h4>
            <h4>Join Today!</h4>
            <h4>Explore singers and musicians</h4>
            <h4>Join Today!</h4>
            <h4>Explore singers and musicians</h4>
            <h4>Join Today!</h4>
            <h4>Explore singers and musicians</h4>
          </Banner>
        </WaveContainer>
        <KnowMore>
          <Box>
            <div>
              <h1>Wanna Know more?</h1>
            </div>
            <div>
              <p>
                This website intends to increase the interaction between
                producers, labels and singers & musicians. The works of singers
                and musicians may be published, and they can mint their Covers
                as NFT. In order to add singers and musicians to their team,
                labels and producers can post job openings and even contact
                them.
              </p>
            </div>
            <Welcome>
              <div>
                <span>Everybody is welcome!</span>
              </div>
            </Welcome>
          </Box>
          <SVGBack>
            <KnowMoreBack/>
          </SVGBack>
        </KnowMore>
        <WhatCanUDoHere>
          <h1>What can you do here</h1>
          <Options>
            <Option>
              <Songs/>
              <h3>Upload Songs</h3>
              <p>Upload your songs and music and build a storng profile.</p>
            </Option>
            <Option>
              <Artist/>
              <h3>Meet Talented Artists</h3>
              <p>Meet talented singers and musicians whom you can recruit in your team.</p>
            </Option>
            <Option>
              <NFTs/>
              <h3>Mintg NFTs</h3>
              <p>Sell your music and song covers as NFTs to get a side income.</p>
            </Option>
          </Options>
        </WhatCanUDoHere>
        <Meet>
          <Bubble />
          <div>
            <img src={HomeImg1} alt="" />
            <h1>Meet Talented Singers</h1>
            <p>Look at profiles and past work of talented singers. Upvote their profile and contact them to get themto work in your team or your label.</p>
            <button><Link to='/singers'>See all Singers</Link></button>
          </div>
          <div>
            <img src={HomeImg2} alt="" />
            <h1>Meet Talented Musicians</h1>
            <p>Look at profiles and past work of talented musicians. Upvote their profile and contact them to get themto work in your team or your label.</p>
            <button><Link to='/musicians'>See all Musicians</Link></button>
          </div>
          <div>
            <img src={HomeImg3} alt="" />
            <h1>Labels and Producers</h1>
            <p>Look at postings and accounts of labels & producers who are constantly looking for new artists to play in their team or label.</p>
            <button><Link to='/musiclabels'>See all Labels</Link></button>
          </div>
        </Meet>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
