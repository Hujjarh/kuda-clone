import styled from "styled-components"

const Info = ()=>{
    const cardArray = [
        {
            title:'a',
            des: "A is a letter"
        },
        {
            title:'b',
            des: "B is a letter"
        },
        {
            title:'c',
            des: "C is a letter"
        },
        {
            title:'d',
            des: "D is a letter"
        },
        {
            title:'e',
            des: "E is a letter"
        }

    ]

    return(
        <Container>
            {cardArray.map((infoo)=>(
                <Card>
                    <h1>{infoo.title}</h1>
                    <p>{infoo.des}</p>
                </Card>
            ))}
        </Container>
    )
}
export default Info
const Container = styled.div`
    display: flex;
    gap: 20px;

`

const Card = styled.div`
    height: 500px;
    width: 300px;
    text-align: center;
    background-color: darkcyan;
    color: #fff;
`