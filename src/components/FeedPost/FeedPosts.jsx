// import React from 'react'

import { Container, Skeleton } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
// import { useEffect, useState } from "react"

const FeedPosts = () => {
 
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
    <FeedPost img='/img1.png' userName='<Chike.dev/>'/>
    <FeedPost img='/img2.png' userName='<Chike.dev/>'/>
    <FeedPost img='/img3.png' userName='<Chike.dev/>'/>
    <FeedPost img='/img4.png' userName='Super Mario'/>
    <FeedPost img='/img5.png' userName='Dani Olmo'/>
    
   </Container>
  )
}

export default FeedPosts