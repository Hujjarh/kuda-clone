import React from 'react'
import styled from 'styled-components'

const More = (props) => {
  return (
    <>
    <Container>
        <Card>
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href="/">Learn more</a>
        </Card>
    </Container>
    </>
  )
}

export default More
const Container = styled.div`
/* background-color: red; */
margin: 0, auto;
`
const Card = styled.div`
min-height: 100px;
width: 350px;
padding: 10px 20px;
border-radius: 10px;
/* background-color: yellow; */
border: 2px solid #333;
box-shadow: 4px 2px 5px hsl(70 80% 0.2);
h1{
    font-weight: 800;
    color:#40196D;
}
`
