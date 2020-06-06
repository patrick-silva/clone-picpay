import React from "react";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel
} from "./styles";

import avatar from "../../../assets/images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@jhowDoe22</Bold>
          </Description>
        </CardHeader>
        
        <CardBody>
          <UserName>Patrick Silva</UserName>
        </CardBody>
        
        <CardFooter>
          <Details>
            <Value>R$ 10,00</Value>
            <Divider />
            <Feather name="lock" size={14} color="#FFF" />
            <Date>há 3 dias</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <MaterialCommunityIcons name="heart-outline" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
