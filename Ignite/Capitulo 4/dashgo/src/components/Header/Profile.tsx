import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
interface ProfileProps {
  isWideVersion: boolean
}

export function Profile({ isWideVersion }: ProfileProps) {
  return (
    <Flex align="center">
      {isWideVersion && (
        <Box mr="4" textAlign="right">
          <Text>Carlos Henrique</Text>
          <Text color="gray.300" fontSize="small">
            caiquemoa@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Carlos Henrique"
        src="https://github.com/caiquemoa.png"
      />
    </Flex>
  )
}
