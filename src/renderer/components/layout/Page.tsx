import { ActionIcon, Box, Flex, Title } from '@mantine/core'
import { IconLayoutSidebarLeftExpand, IconMenu2 } from '@tabler/icons-react'
import clsx from 'clsx'
import type { FC } from 'react'
import useNeedRoomForWinControls from '@/hooks/useNeedRoomForWinControls'
import { useIsSmallScreen } from '@/hooks/useScreenChange'
import { useUIStore } from '@/stores/uiStore'
import WindowControls from './WindowControls'

export type PageProps = {
  children?: React.ReactNode
  title: string | React.ReactNode
  left?: React.ReactNode
  right?: React.ReactNode
}

export const Page: FC<PageProps> = ({ children, title, left, right }) => {
  const showSidebar = useUIStore((s) => s.showSidebar)
  const setShowSidebar = useUIStore((s) => s.setShowSidebar)
  const isSmallScreen = useIsSmallScreen()
  const { needRoomForMacWindowControls } = useNeedRoomForWinControls()
  return (
    <div className="flex flex-col h-full">
      <Flex
        h={48}
        align="center"
        px="md"
        className={clsx('title-bar apple-topbar', isSmallScreen ? 'mx-3 mt-2' : '')}
      >
        {left ||
          ((!showSidebar || isSmallScreen) && (
            <Flex align="center" className={needRoomForMacWindowControls ? 'pl-20' : ''}>
              <ActionIcon
                className="controls"
                variant="subtle"
                radius="xl"
                size={isSmallScreen ? 34 : 26}
                color="chatbox-secondary"
                bg="rgba(120,120,128,0.08)"
                mr="xs"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {isSmallScreen ? <IconMenu2 /> : <IconLayoutSidebarLeftExpand />}
              </ActionIcon>
            </Flex>
          ))}

        <Flex align="center" gap={'xxs'} flex={1} {...(isSmallScreen ? { justify: 'center', px: 'sm' } : {})}>
          {typeof title === 'string' ? (
            <Title order={4} fz={!isSmallScreen ? 18 : undefined} lineClamp={1}>
              {title}
            </Title>
          ) : (
            title
          )}
        </Flex>
        {right}
        <WindowControls className="-mr-3 ml-2" />
        {isSmallScreen && !right && <Box w={28} />}
      </Flex>

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}

export default Page
