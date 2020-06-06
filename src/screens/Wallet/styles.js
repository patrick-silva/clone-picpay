import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View`
  flex: 1;
  background: #000;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  flex-direction: row;
  height: 45px;
  justify-content: center;
  margin: 0 10px;
  width: 150px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  align-items: center;
  background: #1c1c1e;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  border-radius: 8px;
  margin-top: 10px;
  padding: 20px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 50px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 15px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 25px;
`;

export const AddButtonLabel = styled.Text`
  color: #0db060;
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 25px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const UseTicketButtonLabel = styled.Text`
  color: #0db060;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  text-decoration-line: underline;
`;
