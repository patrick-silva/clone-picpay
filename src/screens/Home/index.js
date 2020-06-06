import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10C86E"
          />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 100</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10C86E" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
