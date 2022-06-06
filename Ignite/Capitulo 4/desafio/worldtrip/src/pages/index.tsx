import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Flex py={'7'} maxW={1440} justifyContent="center">
        <Box>
          <Img src="Logo.svg" />
        </Box>
      </Flex>
      <Box>
        <Img src="banner.svg" />
      </Box>
      <HStack
        fontSize={24}
        fontWeight="semibold"
        justifyContent={'space-around'}
      >
        <Link href={'/'}>
          <VStack>
            <Img src="cocktail.svg" />
            <Text>vida noturna</Text>
          </VStack>
        </Link>
        <Link href={'/'}>
          <VStack>
            <Img src="surf.svg" />
            <Text>praia</Text>
          </VStack>
        </Link>
        <Link href={'/'}>
          <VStack>
            <Img src="building.svg" />
            <Text>moderno</Text>
          </VStack>
        </Link>
        <Link href={'/'}>
          <VStack>
            <Img src="museum.svg" />
            <Text>classico</Text>
          </VStack>
        </Link>
        <Link href={'/'}>
          <VStack align="center">
            <Img src="earth.svg" />
            <Text>e mais...</Text>
          </VStack>
        </Link>
      </HStack>
    </>
  )
}

export default Home
