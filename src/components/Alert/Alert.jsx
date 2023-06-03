import styled from "styled-components";
import React from 'react'




 const Alert =({titulo, mensage})=>{

    return(
        <>
            <Container>
                <Title>{titulo}</Title>
                <Mensage>{mensage}</Mensage>
            </Container>
        </>
    )
};

const Container = styled.div`
    width:calc( 100% - 32px);
     background-color: white;
     position: absolute;
     padding: 16px;
     bottom: 16px;
     left: 16px;
     border-radius: 5px;
     box-shadow: 0 5px 15px #00000015
`;

const Title = styled.h5`
    font-size: 16px;
    margin-bottom: 10px;
`;

const Mensage = styled.p`
font-size: 14px;
color: #999999;
`;


export default Alert;