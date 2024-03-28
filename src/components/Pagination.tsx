import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { PaginationProps } from "../types/Types";

const Pagination: React.FC<PaginationProps> = ({ page, setPage, isLoading, allTagsLoaded, lastPage, error }) => {

  const visiblePageCount = 5;
  const calculateVisiblePages = (currentPage: number, totalPages: number) => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 1 < 2) {
      endPage = Math.min(totalPages, startPage + (visiblePageCount - 1));
    } else if (totalPages - currentPage < 2) {
      startPage = Math.max(1, totalPages - (visiblePageCount - 1));
    }

    return Array.from({ length: (endPage + 1) - startPage }, (_, i) => startPage + i);
  };

  const visiblePages = calculateVisiblePages(page, lastPage);
  return (
    <Flex justifyContent="center" mt="4">
      <Button w='5' isDisabled={page === 1 || isLoading || error.length > 0} onClick={() => setPage(1)}>{['<<']}</Button>
      <Button w='5' ml='2' mr={['0', '1']} isDisabled={page === 1 || isLoading || error.length > 0} onClick={() => setPage(Math.max(1, page - 1))}>{'<'}</Button>
      <Text textAlign='center' w='24' display={['inline-flex', 'none',]} mx="5" justifyContent='center' alignItems='center'>Page {page}</Text>
      {visiblePages.map(p => (
        <Button
          key={p}
          mx="1"
          w='5'
          display={['none', 'inline-flex']}
          isActive={p === page}
          isDisabled={isLoading || error.length > 0 || allTagsLoaded && p === lastPage}
          onClick={() => setPage(p)}
        >
          {p}
        </Button>
      ))}
      <Button w='5' ml={['0', '1']} mr='2'  isDisabled={isLoading || allTagsLoaded || error.length > 0 || page === lastPage} size='md' onClick={() => setPage(page + 1)}>{'>'}</Button>
      <Button w='5' ml={['0', '1']} isDisabled={isLoading || allTagsLoaded || error.length > 0 || page === lastPage} size='md' onClick={() => setPage(lastPage)}>{'>>'}</Button>
    </Flex>
  );
}
export default Pagination;