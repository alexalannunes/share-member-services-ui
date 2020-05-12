import React from "react";

import { Container, BackButton } from "./styles";
import { useLocation, useHistory } from "react-router-dom";

const NotFount = (props) => {
  const { state } = useLocation();
  const { replace } = useHistory();

  return (
    <Container>
      <div className="text-center">{state?.title || props.title}</div>
      <BackButton onClick={() => replace("/")}>Back</BackButton>
    </Container>
  );
};

export default NotFount;
