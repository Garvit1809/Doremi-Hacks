import React from "react";
import styled from "styled-components";
import ProfileWallpaper from "../assets/ProfileWallpaper.jpg";
import Navbar from "../components/Navbar";

const Section = styled.div`
  width: 100vw;
  background-color: #f2f7f1;
`;

const ProfieContainer = styled.div`
width: 85vw;
display: grid;
grid-template-columns: auto auto auto;
`

const Profile = () => {
  return (
    <Section>
      <Navbar />
      <img src={ProfileWallpaper} alt="" />
      <ProfieContainer>
      
      </ProfieContainer>
    </Section>
  );
};

export default Profile;
