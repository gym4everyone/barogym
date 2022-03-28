import React from 'react';
import {PAGEHEADER,STYLEDBUTTON,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';
import { H1 } from '../../../styles/MyInfoStyle';
import { themeColor } from '../../../styles/GlobalStyle';

export const STYLEDBUTTON2 = styled.button`
  background-color: ${(props) => (props.gray ? "gray" : themeColor)};
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  @media (min-width: 800px) {
  }
`;

const PassBuyPage = () => {
  return (
    <div>
      <STYLEDCONTAINER>

    <PAGEHEADER>
          <H1>이용권 구매</H1>
        </PAGEHEADER>

        <form name="orderform" id="orderform" method="post"
          className="orderform" action="/Order" >

          <div className="basket" id="basket">
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> GX 패키지 5회 </strong>70,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> GX 패키지 10회 </strong>140,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
              <strong> GX 패키지 20회 </strong>260,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> GX 패키지 30회 </strong>380,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> 헬스장 이용권 1개월 </strong>50,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> 헬스장 이용권 3개월 </strong>140,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
              <strong> 헬스장 이용권 6개월 </strong>250,000원
            </div>
            <div className="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> 헬스장 이용권 12개월 </strong>480,000원
            </div>
            </div>
            <br/>
            <h5><strong>총 합계 : 70,000원</strong></h5>
            <br/>
            <Link to="/pass/buyComplete">
<STYLEDBUTTON2> 결제하기 </STYLEDBUTTON2>
</Link>
        </form>
      </STYLEDCONTAINER>
    </div>
  );
};

export default PassBuyPage;