import { Box, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify={'space-between'}
      align="center"
      spacing={'6'}
    >
      <Box whiteSpace="nowrap">
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
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
