import { Box,Button,Flex,Image, Input,Text, VStack } from "@chakra-ui/react" 
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const AuthForm = () => {
    const[isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();
    const[inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
const handleAuth = ()=>{
    console.log(inputs)
    if(!inputs.email || !inputs.password ) {
        alert(`Please fill all the fields`);
        return;
    }

    navigate('/')
        
}

  return (
   <>
   <Box border={"1px solid grey"} borderRadius={7} padding={7} w={'300'}>
   <VStack spacing={4}  >
    <Image src='/instagram-logo.png' height={20} cursor={"pointer"} alt="Instagram"/>
    <Input placeholder="Email" type="email" fontSize={14} value={inputs.email} onChange={(e)=>setInputs({...inputs, email:e.target.value})}/>
    <Input placeholder="Password" type="password" fontSize={14} value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
    {/* --------------confirm password------------- */}
    {!isLogin && <Input value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, password:e.target.value})} placeholder="Confirm Password" type="password" fontSize={14}/>}
    <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14} onClick={handleAuth}>{isLogin? 'Login' : 'Sign Up'}</Button>
{/* ------------------OR text ----------------------*/}
    <Flex alignItems={'center'} justifyContent={'center'} w={'full'} my={4} gap={1}>
        <Box flex={2} h={'1px'} bg={'gray.400'}/>
        <Text mx={1} color={'white'}>OR</Text>
        <Box flex={2} h={'1px'} bg={'gray.400'}/>
    </Flex>

    {/* ------ Google texr ----- */}
    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
        <Image src="/google.png" w={5} alt="google logo"/>
        <Text ml={2} color={'blue.400'}> Log in with Google</Text>
    </Flex>
   </VStack>
   </Box>

   <Box border={'1px solid gray'} borderRadius={7} padding={5}>
    <Flex alignItems={'center'} justifyContent={'center'}>
        <Box mx={2} fontSize={14}>{isLogin? `Don't have an account?` : `Already have an account`}</Box>
        <Box onClick={()=> setIsLogin(!isLogin)} color={'blue.400'} cursor={'pointer'}>{isLogin? 'Sign up': 'Log in'}</Box>
    </Flex>
   </Box>
   </>
  )
}

export default AuthForm