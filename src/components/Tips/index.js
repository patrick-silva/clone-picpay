import React from "react";

import { Container, Option, Title, Img } from "./styled";

import img8 from "../../../assets/images/08.png";
import img9 from "../../../assets/images/09.png";
import img10 from "../../../assets/images/10.png";
import img11 from "../../../assets/images/11.png";
import img12 from "../../../assets/images/12.png";

const items = [
  {
    key: String(Math.random()),
    bgColor: "#172C4A",
    title: "Pague suas contas sem sair de casa",
    img: img8,
  },
  {
    key: String(Math.random()),
    bgColor: "#6A0159",
    title: "Universitário! Cadastre-se e ganhe mais cashback",
    img: img9,
  },
  {
    key: String(Math.random()),
    bgColor: "#4139c8",
    title: "Pague parcelado",
    img: img10,
  },
  {
    key: String(Math.random()),
    bgColor: "#00ab4b",
    title: "Pague suas contas sem sair de casa",
    img: img11,
  },
  {
    key: String(Math.random()),
    bgColor: "#BA2F76",
    title: "Pague suas contas sem sair de casa",
    img: img12,
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor} >
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
