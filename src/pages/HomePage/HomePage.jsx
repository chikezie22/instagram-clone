import { Box,Container,Flex } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPost/FeedPosts"
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"
const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} paddingY={10} >
          <FeedPosts/>
        </Box>
        <Box flex={3}   display={{base:'none', md:'block'}} maxW={"300px"} ><SuggestedUsers/></Box>
      </Flex>
    </Container>
  )
}

export default HomePage