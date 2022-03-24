import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
import { H1 } from '../../../styles/MyInfoStyle';
import styled, {css} from 'styled-components';

export const STYLEDCONTAINER = styled.div`
  margin: 0 auto;
  @media(min-width: 800px) {
    ${props =>
    !props.pwCheck &&
    css`
      padding: 0 2em;
    `}
  }
  width: 90%;
  ${props =>
  props.relative &&
  css`
    position: relative;
  `}
`
const IntroGymPage = () => {

  return (
    <STYLEDCONTAINER>
      
    <div style={{ textAlign: "center" }}>
      <br />
      <H1>피트니스 소개</H1>
      <hr></hr>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="BAROGYM"
            src="https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>송파구 최대규모의 피트니스 센터</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="BAROGYM"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>피트니스를 위한 최상의 환경을 제공합니다.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="BAROGYM"
            src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>첨단 헬스장비로 운동하는 피트니스 센터</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <h5>
        안녕하세요 송파구 최대규모의 피트니스
        <br />
        바로짐에 오신것을 진심으로 환영합니다.{" "}
      </h5>
      <br />
      <br />

      <p>
        <img
          className="introImg"
          src="https://i.ibb.co/qntfN81/gym-gedeb5f16f-1920.jpg"
          alt="1"
        />
      </p>
      안녕하세요 송파구 최대규모의 피트니스 센터    <br />
      바로짐에 오신것을 진심으로 환영합니다.    <br />
      바로짐은 최상의 환경을 제공하기 위해    <br />
      첨단 헬스장비를 구비해두었습니다.  <br />

          <p>

        <img
          className="introImg"
          src="https://i.ibb.co/3sNMVH5/trust-tru-katsande-A-fts-Th53l-M-unsplash.jpg"
          alt="2"
        />
      </p>
      안녕하세요 송파구 최대규모의 피트니스 센터    <br />
      바로짐에 오신것을 진심으로 환영합니다.    <br />
      바로짐은 최상의 환경을 제공하기 위해    <br />
      첨단 헬스장비를 구비해두었습니다.  <br />


      </div>
    </STYLEDCONTAINER>
  );
};

export default IntroGymPage;