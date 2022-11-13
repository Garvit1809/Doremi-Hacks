import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { trendingData } from "../components/TrendingData";
import TrendingSong from "../assets/trendingSIng.jpg";
import Footer from "../components/Footer";

const Section = styled.div`
  width: 100vw;
  background-color: #f2f7f1;
  /* min-height: 100vw; */
`;

const Heading = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 114.5%;
  text-align: center;
  color: #000000;
  /* border: 1px solid red; */
`;

const PopularCards = styled.div`
  display: grid;
  width: 90vw;
  margin: 0 auto;
  grid-template-columns: auto auto auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
  /* height: 43px; */

  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000000;
  border-radius: 8px;

  img{
    border-radius: 4px;
    width: 328px;
height: 328px;
  }

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 114.5%;
    color: #000000;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    /* border: 1px solid red; */
  }

  div.popularity{

h4{
  font-style: normal;
font-weight: 400;
font-size: 16px;
color: #000000;
  margin: 0;
}
}

div.duration{
  h4{

    font-weight: 400;
    font-size: 16px;
    /* line-height: 22px; */
    color: #525252;
  }
}

`;

const Trending = () => {
  return (
    <>
    <Section>
      <Navbar />
        <Heading>Explore trendy musics & songs of the month</Heading>
        <PopularCards>
          {trendingData.map((trend, index) => {
            return (
              <Card>
                <img src={TrendingSong} alt="" />
                <h1>{trend.name}</h1>
                <div className="popularity" >
                  <h4>{trend.performerName}</h4>
                  <h4>{trend.popularity} Upvotes</h4>
                </div>
                <div className="duration" >
                  <h4>{trend.duration} Mins long</h4>
                  <h4>Published on {trend.publishedOn}</h4>
                </div>
              </Card>
            );
          })}
        </PopularCards>
        <Footer/>
      </Section>
    </>
  );
};

export default Trending;
