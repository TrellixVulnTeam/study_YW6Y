import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B',
        font: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        a: {
          cursor: 'pointer'
        }
      }
    }
  }
})
