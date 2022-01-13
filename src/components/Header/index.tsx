import { Icon } from '@chakra-ui/core'
import { Flex, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="4"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navegation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="untyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />
      { isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}
