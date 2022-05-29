import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      as="header"
      maxWidth={1480}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="24"
          onClick={onOpen}
          bg="gray.800"
          icon={<Icon as={RiMenuLine} />}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <Search />}
      <Flex align="center" ml="auto">
        <Notifications />
        <Profile isWideVersion={isWideVersion} />
      </Flex>
    </Flex>
  )
}
