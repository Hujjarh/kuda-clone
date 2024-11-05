
import styled from 'styled-components'
import React, {useEffect, useState} from 'react'

const Help = () => {
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        const blogPost = ()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => {
                console.log(data); 
                setBlog(data)
            })
        }
        blogPost()
        
    }, [])
  return (
    <>    
    <h1>Blog Post</h1>    
    {
                        blog.map((post, index)=>{
                            return(
                               <Card>
                                     <div key={index}>
                                        <p>{post.title  }</p>
                                    </div>
                               </Card>
                            )
                            

                        })
                    }
    </>
  )
}

export default Help
const Card = styled.div`
`