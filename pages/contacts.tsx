import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Mail } from "react-feather";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

const ColumnLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 40px;
`;
const ColumnRight = styled.div`
  width: 50%;
  height: 100%;
`;

const GetInTouch = styled.h1`
  font-weight: extra-bold;
  font-size: 36px;
  color: #111827;
`;

const Text = styled.p`
  font-size: 18px;
  color: #6b7280;
`;

const EmailArea = styled.p`
  font-size: 18px;
  color: #6b7280;
  display: flex;
  align-items: center;

  & .mailLogo {
    width: 24px;
    margin-right: 10px;
  }
`;

const FormField = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  margin-bottom: 25px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  padding: 13px 17px;
  box-shadow: 0px 1px 1px 0.5px rgba(199, 201, 204, 0.1);
`;

const TextAreaField = styled.textarea`
  margin-bottom: 25px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  padding: 13px 17px;
  padding-bottom: 60px; /* apply the padding-bottom style here */
  box-shadow: 0px 1px 1px 0.5px rgba(199, 201, 204, 0.1);
`;

const ButtonSubmit = styled.button`
  background-color: #4f46e5;
  border-radius: 6px;
  border: none;
  height: 50px;
  width: 100px;
  padding: 13px 25px;
  color: white;
`;

export default function Contacts() {
  return (
    <MainDiv>
      <ColumnLeft>
        <GetInTouch>Get In Touch</GetInTouch>
        <Text>
          Whether you have a question, just want to say hi or have an
          interesting job opportunity to share, don’t hesitate to drop a message
          and I’ll try my best to get back to you!
        </Text>
        <EmailArea>
          <Mail className="mailLogo" />
          matteosansalvadore@gmail.com
        </EmailArea>
      </ColumnLeft>
      <ColumnRight>
        <FormField action="/send-data-here" method="post">
          <InputField
            type="text"
            name="first"
            placeholder="Full Name"
          ></InputField>
          <InputField type="email" name="last" placeholder="Email"></InputField>
          <TextAreaField
            id="message"
            name="last"
            placeholder="Message"
          ></TextAreaField>
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </FormField>
      </ColumnRight>
    </MainDiv>
  );
}
