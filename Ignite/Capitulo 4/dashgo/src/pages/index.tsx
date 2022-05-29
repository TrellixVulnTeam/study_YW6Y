import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={'4'}>
          <Input type={'email'} name="email" label="E-mail" />
          <Input type={'password'} name="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size={'lg'}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
