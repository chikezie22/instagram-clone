import { Flex,Avatar,Button,VStack,Box } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({name,followers,avatar}) => {
    const[isFollowed, setIsFollowed]=useState(false);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src={avatar} name={name} size={'md'}/>
            <VStack alignItems={'start'} spacing={2}>
                <Box fontSize={12} fontWeight={'bold'}>{name}</Box>

                <Box fontSize={12} fontWeight={'bold'}>{followers} followers</Box>

            </VStack>
        </Flex>

        <Button height={'max-content'}  padding={{base: '3px 8px', md:'7px 16px'}} colorScheme='blue' bg={!isFollowed? '#0095f6' : 'transparent'} color={'white'} onClick={()=>setIsFollowed((isFollowed)=>!isFollowed)}>{isFollowed? 'Following': 'Follow'} </Button>
    </Flex>
  )
}

export default SuggestedUser