import styled from 'styled-components'
import React, {useEffect, useState} from 'react'


const Companies = ()=>{
    
    const [Name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  



    return(
        <>
        <Container>
            <h1>Qital Group of schools</h1>
            <FormGroup>
                   <center>
                   <form action="">
                        <label htmlFor="name">Name: 
                            <input type="text" id='name' onChange={(e)=> setName(e.target.value)} placeholder='enter your name' required/> <br />
                        </label>
                        <label htmlFor="email">Email:
                            <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)}  placeholder='enter your mail' required/> <br />
                        </label>
                        <label htmlFor="password">Password:
                            <input type="password" id='password' onChange={(e)=> setPassword(e.target.value)}  placeholder='enter your password' required/> <br />
                        </label>
                        <label htmlFor="">Message: <br />
                            <textarea name="" id="message" rows={3} onChange={(e)=> setMessage(e.target.value)}  placeholder='enter your message' required></textarea>
                        </label> <br />
                        <button type='submit' onSubmit={(e)=> e.preventDefault}>Submit</button>
                   </form>
                   </center>
            </FormGroup>
            <FormAction>
                <center>
                <h1>Form Actions</h1>
                <h3>{`Name: ${Name}`}</h3>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Message: {message}</p>
                </center>
            </FormAction>
           
        </Container>
       
        </>
    )
}
export default Companies
const Container = styled.div``
const FormGroup = styled.div`
label input{
    margin-bottom: 20px;
}
`

const FormAction = styled.div``