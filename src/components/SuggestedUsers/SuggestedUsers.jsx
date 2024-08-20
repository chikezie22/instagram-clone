import { VStack,Flex,Text,Box,Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
            <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={'bold'} color={'gray.500'} _hover={{color:'gray.400'}}cursor={'pointer'}>See All</Text>

        </Flex>
        <SuggestedUser name="Uma Abu" followers={20400} avatar='/uma.jpg'/>
        <SuggestedUser name="Levi Udoka" followers={7225} avatar='/levi.jpg'/>
        <SuggestedUser name="Dillion Megida" followers={964} avatar='/dillion.jpg'/>

        <Box alignSelf={'start'} fontSize={12} color={'gray.500'} mt={5}>
        &#169; 2024 Built By {''}

    <Link href="https://www.linkedin.com/in/chikezie-simon-549916152/" target="_blank" color={'blue.500'} fontSize={14} >
    &lt;Chike.dev/&gt;
    </Link>
        </Box>

    </VStack>
  )
}

export default SuggestedUsers