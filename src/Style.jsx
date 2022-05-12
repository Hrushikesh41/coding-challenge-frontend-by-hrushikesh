import styled from "styled-components";

export const Body = styled.body`
    background-color: #1f2833;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-item : center;
    text-align : center;
`;

export const Headone = styled.h2`
    color: #66fcf1;
`;

export const Container = styled.div`
    height :  100%;
    width : 100%;
`;

export const FormContent = styled.label`
    color : white;
    font-size : 1.2rem;
`;

export const FormArea = styled.div`
    padding : 1rem;
`;

export const Error = styled.div`
    color : red;
    font-size : 2rem;
    font-weight : bold;
    text-decoration : underline;
`;

export const StyleFormContent = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-item : center;
`;

export const Btn = styled.button`
    padding : 10px;
    border-radius : 10px;
    background-color: #66fcf1;
    font-weight : bold;
    cursor : pointer;
    width : 10%;
    margin : 0 auto;
`;