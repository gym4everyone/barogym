import React, {useState} from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TRANSBUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA, RIGHTDIV} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'
import TransModal from '../../../component/board/trans/TransModal'
import { LinkContainer } from 'react-router-bootstrap';

const TransDetailPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <CONTAINER>
      <PAGEHEADER center>
        <div>
          <h2>12회권 양도합니다.</h2>
          <p>2022-03-18</p>
        </div>
        <GRIDCONTAINER>
          <p>작성자: 김사랑</p>
        </GRIDCONTAINER>
      </PAGEHEADER>
      <TRANSBUTTON onClick={() => setModalShow(true)} thick>양도하기</TRANSBUTTON>
      <TransModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <FORM>
          <TEXTAREA 
            placeholder='글 내용'
            rows={5}
            disabled
          />
          <TWOBUTTONS>
            <BUTTON gray forty>삭제</BUTTON>
            <LinkContainer to={`/board/trans/update`}>
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

export default TransDetailPage;