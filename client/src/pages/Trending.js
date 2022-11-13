import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { trendingData } from "../components/TrendingData";
import TrendingSong from "../assets/trendingSIng.jpg";

const Section = styled.div`
  width: 100vw;
  /* min-height: 100vw; */
`;

const Heading = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
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
  width: 100vw;
  grid-template-columns: auto auto auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;

  /* width: 376px; */
  /* height: 493px; */

  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000000;
  border-radius: 8px;
`;

const Trending = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Heading>Explore trendy musics & songs of the month</Heading>
        <PopularCards>
          {trendingData.map((trend, index) => {
            return (
              <Card>
                <img src={TrendingSong} alt="" />
                <h1>{trend.name}</h1>
                <div>
                  <h4>{trend.performerName}</h4>
                  <h4>{trend.popularity} Upvotes</h4>
                </div>
                <div>
                  <h4>{trend.duration} Mins long</h4>
                  <h4>Published on {trend.publishedOn}</h4>
                </div>
              </Card>
            );
          })}
        </PopularCards>
      </Section>
    </>
  );
};

export default Trending;
