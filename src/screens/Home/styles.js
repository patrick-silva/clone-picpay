import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`; 

export const Container = styled.ScrollView``;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  padding: 0 16px;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255,255,255, 0.8);
  font-size: 14px;
  text-align: center
`;
export const Balance = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;