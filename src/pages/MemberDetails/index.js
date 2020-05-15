import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Chart from "react-apexcharts";
import {
  Container,
  Header,
  Body,
  MemberImage,
  TitleCard,
  MemberName,
  MemberRole,
  ServiceImage,
  ServiceName,
  ServicePrice,
  IconHover,
  TranscationHistory,
  DailyActivity,
} from "./styles";
import services from "../../mock/services";
import members from "../../mock/members";
import { useParams, useHistory, Redirect } from "react-router-dom";

const state = {
  series: [
    {
      name: "Netflix",
      data: [44, 55, 41, 67, 22, 43, 21],
    },
    {
      name: "Spotify",
      data: [13, 23, 20, 8, 13, 27, 33],
    },
    {
      name: "Dropbox",
      data: [11, 17, 15, 15, 21, 14, 15],
    },
  ],
  options: {
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
      margin: 0,
      padding: 0,
      toolbar: { show: false },
    },
    plotOptions: { bar: { columnWidth: 30 } },
    grid: { show: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S"],
      labels: { rotate: -34, style: { colors: "#999" } },
    },
    yaxis: { show: false },
    fill: { opacity: 1 },
  },
};

const MemberDetails = () => {
  const { goBack } = useHistory();
  const { idx } = useParams();

  const member = members[idx];

  if (!member) {
    return (
      <Redirect
        to={{ pathname: "/404", state: { title: "Member not found" } }}
      />
    );
  }

  return (
    <Container>
      <Header>
        <IconHover>
          <FaArrowLeft
            className="pointer fa-arrow-left"
            onClick={() => goBack()}
          />
        </IconHover>
        <div className="flex ai-center">
          <div className="flex column">
            <MemberImage src={member.image} />
          </div>
          <div className="flex column">
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </div>
        </div>
      </Header>
      <Body>
        <TranscationHistory>
          <div className="flex ai-center">
            <TitleCard fw="bolder" color="#333">
              Transaction
            </TitleCard>
            <TitleCard fw="normal" color="#888">
              History
            </TitleCard>
          </div>

          <div className="m-t-20">
            {services.map((service, idx) => (
              <div
                className="flex ai-center m-t-15 row-member-services-list"
                key={idx}
              >
                <ServiceImage src={service.image} alt={service.name} />
                <div className="flex column">
                  <ServiceName>{service.name}</ServiceName>
                  <ServicePrice>
                    $ {service.price}
                    <span> /{service.payment_type}</span>
                  </ServicePrice>
                </div>
              </div>
            ))}
          </div>
        </TranscationHistory>
        <DailyActivity>
          <div className="flex ai-center m-t-25">
            <TitleCard fw="bolder" color="#333">
              Daily
            </TitleCard>
            <TitleCard fw="normal" color="#888">
              Activity
            </TitleCard>
          </div>
          <Chart
            style={{ marginLeft: -15 }}
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
            height="80%"
          />
        </DailyActivity>
      </Body>
    </Container>
  );
};

export default MemberDetails;
