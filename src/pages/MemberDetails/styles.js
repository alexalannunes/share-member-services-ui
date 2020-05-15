import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;
export const Header = styled.div`
  background: #f5f6fc;
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;
export const Body = styled.div`
  background: #ffffff;
  padding: 40px 40px 30px 40px;
  flex: 3;
  border-radius: 40px 40px 0 0;
  flex-direction: column;
  display: flex;
`;

export const TitleCard = styled.h2`
  font-size: 30px;
  margin: 0;
  color: ${(props) => props.color || "#444"};
  font-weight: ${(props) => props.fw || "normal"};
  margin-right: 20px;
`;

export const MemberImage = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin-right: 30px;
`;

export const MemberName = styled.h3`
  color: #444;
  margin: 0;
  font-size: 30px;
`;
export const MemberRole = styled.span`
  color: #777;
  font-size: 15px;
`;

export const ServiceImage = styled.img`
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin-right: 30px;
`;

export const ServiceName = styled.span`
  color: #666;
  font-size: 14px;
`;

export const ServicePrice = styled.span`
  color: #333;
  font-size: 23px;

  span {
    color: #ccc;
    font-size: 13px;
  }
`;

export const IconHover = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: #777ae830;
  .fa-arrow-left {
    font-size: 30px;
    color: #777ae8;
  }
`;

export const TranscationHistory = styled.div`
  flex: 1;
`;
export const DailyActivity = styled.div`
  flex: 1;
`;
