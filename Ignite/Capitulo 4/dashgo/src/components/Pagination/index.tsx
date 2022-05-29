import { Box, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify={'space-between'}
      align="center"
      spacing={'6'}
    >
      <Box>
        <strong>1-10</strong> <strong>de</strong> <strong>100</strong>
      </Box>
      <ButtonGroup>
        <PaginationItem pageNumber={1} />
        <PaginationItem pageNumber={2} />
        <PaginationItem isCurrent pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
        <PaginationItem pageNumber={6} />
        <PaginationItem pageNumber={7} />
      </ButtonGroup>
    </Stack>
  )
}
