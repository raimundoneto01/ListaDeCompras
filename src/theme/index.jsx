import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 600px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 5px 25px #00000035;
    
    position: relative;
    background-color: #dedede
`;
export const ContainerScrol = styled.div`
    width: 100%;
    height: calc( 100% - 132PX);
    overflow: auto;
    position: absolute;
    bottom: 16px;
    left: 0;
    padding: 16px;
    
`;

export const Header = styled.header`
    margin-top:20px;
    padding: 2px;
    background-color: #62659a;
    border-radius: 0 0 25px 25px;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 6px;
    margin-bottom: 26px;
    &.list-item{
        background-color: white;
        margin-bottom: 6px;
        box-shadow: 0 2px 10px #00000015;
        border-radius: 5px
    }
`;



export const TextInput = styled.input`
    height: 46px;
    border: 2px solid #C4C4C4;
    border-radius: 0 0 0 15px ;
    padding-left: 16px;
    outline: none;
    &.w100{
        /* width: 100%;  */
        /* width 100% é o mesmo que flex 1 */
        flex: 1;
    }
    &.w50{
        width: 50%;
    }
    &:focus{
        border-color: blueviolet;
        background-color: #d4d4f0;
    }


    
`;
export const Button = styled.button`
width: 46px;
height: 46px;
text-align: center;
background-color: blueviolet ;
color: #fff;
font-size: 24px;
border: 2px solid white;
border-radius: 0 20px 0 0;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&.outlined{
    border: 2px solid blueviolet;
    color: blueviolet;
    background-color: transparent;
}
&.rouned{
    border-radius:0 15px 0;
}


`;

export const Texth4 = styled.h4`
    line-height: 46pz;
    flex: 1;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
`;