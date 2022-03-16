import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {CONTAINER, FORM, FORMHEADER, FORMITEM, LABEL, INPUT, BUTTON, TWOBUTTONS, H1, ERRORMSG} from '../../../styles/MembershipStyle';
const FindEmailPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  const navigate = useNavigate();

  return (
    <CONTAINER>
        <FORMHEADER>
          <H1>이메일 찾기</H1>
        </FORMHEADER>
        <FORM onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
            <LABEL thirty htmlFor="name">이름</LABEL>
            <INPUT
              {...register("name", { required: '필수 입력사항입니다.' })}
              id="name"
              seventy
            />
            <ERRORMSG rightAlign>{errors.name?.message}</ERRORMSG>
          </div>
          <div>
            <LABEL thirty htmlFor="phone">휴대폰</LABEL>
            <INPUT
              {...register("phone", { required: '필수 입력사항입니다.' })}
              id="phone"
              seventy
            />
            <ERRORMSG rightAlign>{errors.phone?.message}</ERRORMSG>
          </div>
          <TWOBUTTONS>
            <BUTTON
              onClick={()=>{ navigate('/login');}}
              forty gray
            >
              취소
            </BUTTON>
            <BUTTON forty>확인</BUTTON>
          </TWOBUTTONS>
        </FORM>
    </CONTAINER>
  );
};

export default FindEmailPage;