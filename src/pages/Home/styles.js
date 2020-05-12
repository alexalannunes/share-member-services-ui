import styled from "styled-components";
import { illustration } from "../../assets/index";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 460px) {
    width: 100%;
  }
  @media (min-width: 461px) {
    max-width: 390px;
  }
`;
export const Header = styled.div`
  background: #777ae8;
  flex: 1.5;
  background-image: url('${illustration}');
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat; 
`;
export const Body = styled.div`
  background: #f5f6fc;
  padding: 40px 40px 30px 40px;
  flex: 1;
  border-radius: 40px 40px 0 0;
  margin-top: -40px;
  min-height: 30%;
  align-items: center;
  justify-content: center;
`;
export const Footer = styled.div`
  height: 100%;
  background: #ffffff;
  flex: 1;
  padding: 25px;
  margin-top: -40px;
  flex-direction: column;
  border-radius: 40px 40px 0 0;
`;

export const UserAmount = styled.h3`
  margin: 0;
  color: #1e2d36;
  font-size: 34px;
  position: relative;
  padding-left: 13px;
  span.symbol {
    color: #777;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 4px;
  }
`;

export const UserImage = styled.img`
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

export const BalanceTitle = styled.span`
  font-size: 15px;
  color: #777;
`;

export const IconContent = styled.div`
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background: #daeefc;
  color: #68cdfa !important;
  margin-right: 20px;
`;

export const TitleCard = styled.h2`
  font-size: 30px;
  margin: 0;
  color: ${(props) => props.color || "#444"};
  font-weight: ${(props) => props.fw || "normal"};
  margin-right: 20px;
`;

export const ScrollMembers = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 20px;
  padding-bottom: 20px;

  a {
    text-decoration: none;
  }
`;

export const MemberImage = styled.img`
  border-radius: 10px;
  width: 100px;
  margin-bottom: 17px;
  height: 100px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
export const MemberName = styled.h3`
  color: #444;
  margin: 0;
`;
export const MemberRole = styled.span`
  color: #777;
  font-size: 15px;
`;
