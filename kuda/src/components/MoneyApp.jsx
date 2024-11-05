import React from 'react'
import moneyApp from '../assets/moneyApp.png'
import styled from 'styled-components'

const MoneyApp = () => {
  return (
    <>
    <Container>
        <img src={moneyApp} alt="" />
    </Container>
    </>
  )
}

export default MoneyApp

const Container = styled.div`
text-align: center;
height: inherit;
img{
    min-width: 300px;
    @media screen and (max-width:800px) {
        max-width: 400px;
    }
}
`