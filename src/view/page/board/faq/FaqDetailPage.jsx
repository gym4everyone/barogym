import React from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'
import { LinkContainer } from 'react-router-bootstrap';

const FaqDetailPage = () => {
  return (
    <CONTAINER>
      <PAGEHEADER center>
        <div>
          <h2>중도 환불 금액</h2>
          <p>2022-03-18</p>
        </div>
        <GRIDCONTAINER>
          <p>작성자: 관리자</p>
        </GRIDCONTAINER>
        
      </PAGEHEADER>
      <section>
        <FORM>
          <TEXTAREA 
            placeholder='글 내용'
            rows={5}
            disabled
          />
          <TWOBUTTONS>
            <BUTTON gray forty>삭제</BUTTON>
            <LinkContainer to={`/board/faq/update`}>
              <BUTTON forty>수정</BUTTON>
            </LinkContainer>
            
          </TWOBUTTONS>
        </FORM>
      </section>
      <CommentForm />
      <CommentList />
      <DetailPagination />
    </CONTAINER>
  );
};

export default FaqDetailPage;