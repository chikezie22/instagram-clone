import {Avatar,Link, Flex, Text } from "@chakra-ui/react"

import {Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar size={'md'} src="/Profile-pic.png"/>
            <Text fontSize={13} fontWeight={'bold'}>&lt;Chike.dev/&gt;</Text>
        </Flex>

        <Link to='/auth' as={RouterLink} fontSize={13} fontWeight={'medium'} color={'blue.400'} cursor={'pointer'}style={{textDecoration:'none'}}>Log out</Link>
    </Flex>
  )
}

export default SuggestedHeader