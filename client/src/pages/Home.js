import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Section = styled.div`
  width: 100vw;
  min-height: 100vw;
  background: #eccce9;
`;

const Heading = styled.div`
  box-sizing: border-box;

  h1 {
    width: 60vw;
    /* border: 1px solid red; */
    margin: 0 auto;
    margin-top: 3rem;
    font-weight: 400;
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
    cursor: pointer;

    span {
      position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
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
width: 30vw;
margin: 0 auto;
border: 1px solid red;
margin-top: 2rem;
`

const Home = () => {
  return (
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
        Welcome to the platform where musicians and singers share their work and
        make NFTs of their covers.
      </SubHeading>
      <Buttons>
      
      </Buttons>
    </Section>
  );
};

export default Home;
