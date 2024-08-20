import { Box,Flex,Text,InputGroup,Input, InputRightElement, Button, } from "@chakra-ui/react"
import { useState } from "react"
import {CommentLogo, NotificationsLogo, UnlikeLogo} from '../../assets/logo'
const PostFooter = ({userName}) => {
    const [liked, setLiked] =useState(false)
    const [likes, setLikes] = useState(1000);
    const handleLike = ()=>{
        if(liked){
            setLiked(false)
            setLikes((likes)=>likes - 1);
        }else{
            setLiked(true)
            setLikes((likes)=> likes + 1)
        }
    }
  return (
    
    <Box mb={10}>
    <Box >
       
           <Flex alignItems={'center'} gap={5} w={'full'} my={3}>
            
       <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
        {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
        </Box> 

        <Box cursor={'pointer'} fontSize={18}>
            <CommentLogo/>
        </Box>
            </Flex> 
        
    </Box>
   

    <Text fontWeight={600} fontSize={'sm'}>
        {likes} likes
    </Text>
    

  

    <Text fontSize={'sm'} fontWeight={700}>
    <code> {userName} </code>
    <Text as={'span'} fontWeight={400}>Feeling good</Text>
    </Text>
   

    

    <Text fontSize={'sm'} color={'grey'}>
        View all 1,000 comments
    </Text>
   
    {/* <Flex alignItems={'center'} gap={2} justifyContent={'space-between'}></Flex> */}

   
    <InputGroup>
    <Input variant={'flushed'} placeholder="Add a comment..." fontSize={16}/>

    <InputRightElement>
    <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color:'white'}} background={'transparent'}>Post</Button></InputRightElement>
    </InputGroup>
   
    </Box>
  )
}

export default PostFooter