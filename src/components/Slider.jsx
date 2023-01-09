import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import {sliderItems } from "../data"

const Container=styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    overflow:hidden;
`;

const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top: 0;
    bottom: 0;
    margin:auto;
    cursor:pointer;
    opacity:0.6;
    z-index:2;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;

const Wrapper=styled.div`
        height:100%;
        display:flex;
        transform:translate(0vw);
`;

const Slide=styled.div`
        width: 100vw;
        height: 100vh;
        display:flex;
        align-items:center;
        background-color:#${props=>props.bg};

`;
const ImgContainer=styled.div`
        height:100%;
        flex: 1;
`;

const Image =styled.img`
        height:80%;
`;
const InfoContainer=styled.div`
        flex: 1;
        padding: 50px;
`;

const Title=styled.h1`
        font-size:70px;
`;
const Desc=styled.p`
        margin:50px 0px;
        font-size :20PX;
        font-weight:500;
        letter-spacing:3px;
`;
const Button=styled.button`
        padding:10px;
        font-size:20px;
        backgrounf-color:transparent;
        cursor:pointer;
`;

const Slider = () => {
    // const [SlideIndex,setsSlideIndex] =useState(0);
    const handleClick=(direction)=>{

    };
  return (
    <Container>
        <Arrow direction="left" onclick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper>
            {sliderItems.map((item)=>(
            <Slide bg={item.bg}>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW ME</Button>

            </InfoContainer>
            </Slide>
        ))}
        
        </Wrapper>

        <Arrow direction="right" onclick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider