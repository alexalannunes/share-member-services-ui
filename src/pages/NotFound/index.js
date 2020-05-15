import React from "react";
import { Container, BackButton } from "./styles";
import { useHistory } from "react-router-dom";
import { _404 } from "../../assets/index";

const NotFount = () => {
  const { replace } = useHistory();

  return (
    <Container>
      <img src={_404} style={{ width: "100%" }} alt="page not found" />
      <BackButton onClick={() => replace("/")}>Back</BackButton>
    </Container>
  );
};

export default NotFount;
