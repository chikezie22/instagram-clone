import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box, Image,Stack,Skeleton, SkeletonCircle } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const FeedPost = ({img, userName}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function(){
    const timer = setTimeout(() => {
      setIsLoading(true); // Set loading to false after 2 seconds
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [])
  return (
    <Stack padding={2} spacing={4}>
      <PostHeader isLoading={isLoading} img = {img} userName = {userName} />
    
    <Skeleton isLoaded={isLoading}>  <Box borderRadius={8} overflow={'hidden'}>
        <Image  src={img}/>
    </Box>
  
    <PostFooter  userName = {userName}/></Skeleton>
    </Stack>
  )
}

export default FeedPost