import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import theme from 'src/styles/theme'

interface ChakraProps {
  cookies: string;
  children: React.ReactNode
}

// See: https://chakra-ui.com/docs/styled-system/features/color-mode#add-colormodemanager-optional-for-ssr
export function Chakra({ cookies, children }: ChakraProps): JSX.Element {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  )
}

interface ServerSideProps {
  props: {
    cookies: string;
  }
}

export function getServerSideProps({ req }: GetServerSidePropsContext): ServerSideProps {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
