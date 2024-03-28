import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon, Skeleton, Box, Button, Flex } from '@chakra-ui/react';
import { TagsTableProps } from '../types/Types';

const TagsTable: React.FC<TagsTableProps> = ({ isLoading, error, displayedTags, pageSize, resetError}) => {

    const shouldShowLoader = isLoading || displayedTags.length !== pageSize

    return (
        <Table variant="simple">
            {shouldShowLoader && ! error ? (
                <><Thead>
                    <Tr>
                        <Th>Tag</Th>
                        <Th isNumeric>Count</Th>
                    </Tr>
                </Thead>
                    <Tbody>
                        {Array.from({ length: pageSize }).map((_, index) => (
                            <Tr key={index}>
                                <Td><Skeleton height="20px" w="100px" /></Td>
                                <Td><Box display="flex" justifyContent="flex-end" width="100%">
                                    <Skeleton height="20px" w="100px" />
                                </Box></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </>
            ) : error ? (
                <Tbody>
                    <Tr>
                        <Td colSpan={2} rowSpan={5}>
                            <Alert status="error" justifyContent='space-around'>
                                <Flex>
                                    <AlertIcon />
                                    {error}
                                </Flex>
                                <Button onClick={resetError}>Retry</Button>
                            </Alert>
                        </Td>
                    </Tr>
                </Tbody>
            ) : (
                <>
                    <Thead>
                        <Tr>
                            <Th>Tag</Th>
                            <Th isNumeric>Count</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {displayedTags.map((tag) => (
                            <Tr key={tag.name}>
                                <Td>{tag.name}</Td>
                                <Td isNumeric>{tag.count}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </>
            )}
        </Table>
    );
}
export default TagsTable;
