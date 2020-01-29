import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f3f3f3;
  justify-content: center;
  align-items: center;
  background-color: #252535;
`;

export const ViewLogo = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;

export const TitlePrincipal = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 28px;
`;
export const TitleSecondary = styled.Text`
  color: #fff;
  font-weight: 200;
  margin-left: 5px;
  font-size: 28px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: "#747474",
  fontWeight: "bold"
})`
  background-color: #2e3045;
  width: 280px;
  height: 50px;
  border-radius: 15px;
  padding-left: 15px;
  color: #fff;
`;
