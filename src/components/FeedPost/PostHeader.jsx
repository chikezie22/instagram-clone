import { Avatar, Box, Flex,Grid, Text, SkeletonCircle, Skeleton } from "@chakra-ui/react"


const PostHeader = ({img, userName, isLoading}) => {
  return (
    <Grid templateColumns="30px 1fr" gap={4}  my={2} alignItems={'center'}>
        <Box   alignItems={'center'} >
            <SkeletonCircle isLoaded={isLoading}>
            <Avatar size={'sm'} alt='user profile pic' src={img} />
            </SkeletonCircle>
            
    {/* <Skeleton isLoaded={isLoading}><Flex fontSize={12} fontWeight={'bold'} gap={2}>
                <code> {userName} </code>

                <Box color={'gray.500'}>
                    . 1w
                </Box>
            </Flex></Skeleton> */}
            

        </Box>
        <Skeleton isLoaded={isLoading}>
            <Flex  justifyContent={'space-between'} w={'full'}>
                 <Flex  alignItems={'center'}   fontSize={12} fontWeight={'bold'} gap={2}>
                <Box><code> {userName} </code></Box>

                <Box color={'gray.500'}>
                . 1w
                </Box>
            </Flex>
            <Box cursor={'pointer'}><Text fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{
            color:'white' }} transition={"0.2s ease-in-out"}>
                Unfollow</Text>
                </Box>
        </Flex>
       
        </Skeleton>
        
    </Grid>
  )
}

export default PostHeader