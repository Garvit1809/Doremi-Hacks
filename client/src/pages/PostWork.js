import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import song from "../assets/Samjhawa.mp3";
import FileBase64 from "react-file-base64";

const Section = styled.div`
  width: 100vw;
  background-color: #f2f7f1;

  form {
    /* border: 1px solid red; */
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      letter-spacing: 0.16px;
      color: #000000;
      margin-bottom: 0.5rem;
      font-family: "IBM Plex Sans", sans-serif;
    }

    h5 {
      font-style: normal;
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.16px;
      color: #525252;
      margin-bottom: 0.5rem;
    }

    button {
      font-family: "IBM Plex Sans", sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 18px 30px;
      gap: 10px;
      width: 584px;
      height: 67px;
      background: #6161fe;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0px #000000;
      border-radius: 4px;
      /* margin: 0 auto; */
      color: white;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      letter-spacing: 0.16px;
      box-sizing: border-box;
      cursor: pointer;
      translate: -3px -3px;
      transition: all .15s ease-in;

      &:hover {
        translate: 0 0;
        box-shadow: 0 0 0;
      }
    }

    input {
      margin-bottom: 2rem;
    }

    input#song-name {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 16px 24px;
      gap: 10px;

      width: 100%;
      /* height: 58px; */
      box-sizing: border-box;
      background: #ffffff;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0px #000000;
      border-radius: 4px;
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 20px;
      /* margin-bottom: 4rem; */

      &:focus-visible {
        outline: none;
      }
    }

    .input-container {
      font-family: "IBM Plex Sans", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      background: #6161fe;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0px #000000;
      border-radius: 4px;
      color: white;
      font-weight: 400;
      font-size: 16px;
      /* line-height: 31px; */
      /* letter-spacing: 0.16px; */
      box-sizing: border-box;
      cursor: pointer;
      translate: -3px -3px;
      transition: all .15s ease-in;
      position: relative;
      overflow: hidden;
      margin-bottom: 2rem;
      
      &:hover {
        translate: 0;
        box-shadow: 0 0 0;
      }
      
      input {
        top: 0;
        left: 0;
        position: absolute;
        z-index: 1000;
        opacity: 0;
        cursor: pointer;
        font-size: 24px;
        height: 100%;
      }
    }
  }
`;

const Heading = styled.div`
  width: 50%;
  margin: 0 auto;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  letter-spacing: 0.16px;
  color: #000000;
  margin-bottom: 3rem;
  font-family: "Cabinet Grotesk", sans-serif;
`;

const PostWork = () => {
  const [songName, setsongName] = useState();
  const [songAudio, setsongAudio] = useState();
  const [songCover, setsongCover] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(songName);
    console.log(songAudio);
    console.log(songCover);
  };

  return (
    <Section>
      <Navbar />
      <Heading>Let's get your song published!</Heading>
      <form onSubmit={handleSubmit}>
        <h1>Name of the song</h1>
        <input
          type="text"
          id="song-name"
          placeholder="Enter a cool and catchy name..."
          value={songName}
          onChange={(e) => setsongName(e.target.value)}
        />
        <h1>Upload your song</h1>
        <h5>Max file size is 10 Mb. Supported file types are .mp3 and .wav</h5>
        <div className="input-container">
          Choose a file
          <input
            type="file"
            name=""
            id="song"
            accept="audio/*"
            value={songAudio}
            onChange={(e) => setsongAudio(e.target.value)}
          />
        </div>
        <h1>Upload your song cover</h1>
        <h5>Max file size is 5 Mb. Supported file types are .png and .jpg</h5>
        <div className="input-container">
          Choose a file
          <input
            type="file"
            name=""
            id=""
            value={songCover}
            onChange={(e) => setsongCover(e.target.value)}
          />
        </div>
        <button type="submit">Publish my Song!!!</button>
      </form>
      <Footer />
    </Section>
  );
};

export default PostWork;
