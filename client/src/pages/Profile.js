import React, { useState } from "react";
import styled from "styled-components";
import ProfileWallpaper from "../assets/ProfileWallpaper.jpg";
import Footer from "../components/Footer";
import { myWork } from "../components/myWork";
import Navbar from "../components/Navbar";
import adarsh from "../assets/aadarsh.jpg";
import { Link } from "react-router-dom";
import { Facebook, Mail, Twitter } from "../components/SVG";
import song from "../assets/trendingSIng.jpg";

const Section = styled.div`
  width: 100vw;
  background-color: #f2f7f1;
`;

const Filters = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 40vw;
  margin-left: 35vw;
  margin-top: 2rem;
`;

const Filter = styled.div`
  width: 97px;
  height: 50px;
  background: #ffffff;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  padding: 6px 12px;
  border: 1.5px solid #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #000000;
    box-shadow: 2px 2px 0px #000000;
  }
`;

const ProfieContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
  position: relative;
  /* border: 1px solid red; */
`;

const ProfileCard = styled.div`
  position: absolute;
  top: -21rem;
  text-align: left;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* justify-content: center; */
  padding: 36px;
  gap: 24px;
  width: 22vw;
  height: 492px;

  background: #ffffff;
  border-radius: 8px;

  img {
    width: 144px;
    height: 144px;
    border: 4px solid #ffffff;
    margin: 0;
  }

  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    /* line-height: 131.5%; */
    color: #161616;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #525252;
  }
`;

const NullCard = styled.div`
  padding: 24px;
  gap: 12px;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
  height: 353px;
`;

const WorkContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  text-align: left;
  padding: 24px;
  gap: 12px;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
  /* height: 383px; */
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000000;
  border-radius: 8px;

  h1{
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 114.5%;
margin-top: 0.5rem;
margin-bottom: 0.6rem;
color: #000000
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4{
      font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #525252;
    }
  }
`;

const Upload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 12px;
  width: 167px;
  height: 50px;
  box-sizing: border-box;
  background: #fba351;
  border: 1.5px solid #fba351;
  border-radius: 32px;
  margin-bottom: 1.4rem;
  transition: all 0.2s ease;

  &:hover {
    border: 1.5px solid #000000;
    box-shadow: 1.5px 1.5px 0px #000000;
  }

  span {
    font-weight: 800;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0.16px;
    color: #161616;
  }
`;

const Socials = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-top: 0.4rem;
  svg {
    margin-right: 1rem;
  }
`;

const Profile = () => {
  const [showWork, setShowWork] = useState(true);
  return (
    <Section>
      <Navbar />
      <img src={ProfileWallpaper} alt="" />
      <Filters>
        <Filter onClick={() => setShowWork(true)}>Work</Filter>
        <Filter onClick={() => setShowWork(false)}>NFTs Owned</Filter>
      </Filters>
      <ProfieContainer>
        <ProfileCard>
          <img src={adarsh} alt="" />
          <h1>Adarsh Dubey</h1>
          <h4>@inclinedadarsh</h4>
          <p>
            Classical Singer. Sometimes musician. Pop Culture Promoter. Open to
            new opportunities.
          </p>
          <Link to="/publish">
            <Upload>
              <span>Upload</span>
            </Upload>
          </Link>
          <h3>Connect:</h3>
          <Socials>
            <Facebook />
            <Twitter />
            <Mail />
          </Socials>
        </ProfileCard>
        <NullCard></NullCard>
        {showWork
          ? myWork.map((work, index) => {
              return (
                <WorkContainer>
                  <img src={song} alt="" />
                  <h1>{work.songName}</h1>
                  <div>
                    <h4>{work.duration} Mins long</h4>
                    <h4>Published on {work.publishedOn}</h4>
                  </div>
                </WorkContainer>
              );
            })
          : null}
      </ProfieContainer>
      <Footer />
    </Section>
  );
};

export default Profile;
