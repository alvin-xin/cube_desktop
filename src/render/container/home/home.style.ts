/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-02
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-02
 */
import styled from "styled-components";
import SnippetsCode from "./static/SnippetsCode.png";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #32333D;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
   width: 800px;
   height: 600px;
   border-radius: 5px;
   
   background-color: #262830;
   
   display: flex;
   justify-content: center;
   
   box-shadow: 0 0 2px #000;
`;

export const Title = styled.div`
  width: 303px;
  height: 58px;
  background-image: url(${() => SnippetsCode});
  background-repeat: no-repeat;
  margin: 100px auto 10px;
`;

export const SubTitle = styled.div`
  line-height: 20px;
  height: 20px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  color: #B4BDD9;
  letter-spacing: 3px;
  text-align: center;
`;

export const ItemContent = styled.div`
  margin-top: 70px;
  width: 640px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.div`
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  
  &:hover {
    box-shadow: 0 0 16px #efefef;
  }
`;

export const ItemImg = styled.div<{
    imgSrc: string
}>`
  margin: 0 auto;
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-image: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ItemTag = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  color: #B4BDD9;
`;