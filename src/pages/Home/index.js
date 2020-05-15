import React from "react";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Body,
  Footer,
  UserAmount,
  UserImage,
  BalanceTitle,
  IconContent,
  TitleCard,
  ScrollMembers,
  MemberImage,
  Card,
  MemberName,
  MemberRole,
} from "./styles";
import "animate.css/animate.min.css";
import members from "../../mock/members";
import { user1 } from "../../assets";

const Home = () => {
  return (
    <Container className="animate__animated animate__fadeIn">
      <Header />
      <Body>
        <div className="flex column">
          <div className="flex ai-center jc-between">
            <div className="flex column">
              <UserAmount>
                <span className="symbol">$</span>
                798.19
              </UserAmount>
              <BalanceTitle>Your balance</BalanceTitle>
            </div>
            <UserImage src={user1} />
          </div>

          <div className="flex ai-center m-t-25">
            <IconContent className="flex ai-center jc-center">
              <FaFolder color="#68cdfa" />
            </IconContent>
            <span className="text-gray card-number">
              * * * * &nbsp; * * * * 3651
            </span>
          </div>
        </div>
      </Body>
      <Footer>
        <div className="flex ai-center">
          <TitleCard fw="bolder" color="#333">
            Shared
          </TitleCard>
          <TitleCard fw="normal" color="#888">
            Members
          </TitleCard>
        </div>
        <ScrollMembers>
          {members.map((member, idx) => (
            <Link to={`/detail/${idx}`} key={idx}>
              <Card>
                <MemberImage src={member.image} />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
              </Card>
            </Link>
          ))}
        </ScrollMembers>
      </Footer>
    </Container>
  );
};

export default Home;
