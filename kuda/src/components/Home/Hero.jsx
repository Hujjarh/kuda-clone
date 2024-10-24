import styled from 'styled-components'
import HeroImage from '../../assets/hero.png'
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5'



const Hero = ()=>{
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>The Money App for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                <Buttons>
                    <button>{IoLogoApple} <span>App Store</span></button>
                    <button>{IoLogoGooglePlaystore} <span>Play Store</span></button>
                </Buttons>
                </TextBox>

                <ImageBox>
                    <img src={HeroImage} alt="" />
                </ImageBox>
            </Wrapper>
        </Container>
    )
}
export default Hero

const Container = styled.div`
    /* background-color: yellow; */
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 20px;
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 85%;
    /* background-color: pink; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width:800px) {
        width: 90%;
    }
`
const TextBox = styled.div`
    max-width: 500px;
    /* background-color: aqua; */
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 800px) {
        max-width: 100%;
        align-items: center;
        text-align: center;
    }
    h1{
        color: #40196D;
        font-size: 36px;
        font-weight: 800;
        line-height: normal;
    }
`
const ImageBox = styled.div`
img{
    @media screen and (max-width:800px) {
        width: 100%;
    }
}
`
const Buttons = styled.div``