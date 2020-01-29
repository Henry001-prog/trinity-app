import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #252535;
  padding-top: 120px;
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-bottom: 25px;
`;
export const Name = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Location = styled.Text`
  color: #fff;
  margin-bottom: 5px;
`;
export const Repositories = styled.Text`
  color: #fff;
  margin-bottom: 5px;
`;
export const Followers = styled.Text`
  color: #fff;
  margin-bottom: 5px;
`;

export const Content = styled.View`
  width: 80px;
  align-items: stretch
  justify-content: space-between;
`;
