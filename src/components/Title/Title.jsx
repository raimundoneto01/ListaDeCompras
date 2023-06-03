import styled from "styled-components";

const Title =({titulo})=>{
    return(
        <>
        
            <Titleh1>{titulo}</Titleh1>
        </>
    )
};

const Titleh1 = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: white;
margin-bottom: 24px;
font-size: 24px;
text-align: center;

&:hover{
    letter-spacing: 2px;
    
}
`;


export default Title;