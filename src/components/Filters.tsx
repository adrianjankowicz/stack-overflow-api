import React from 'react';
import { Flex, Select } from '@chakra-ui/react';
import { FiltersProps } from '../types/Types';

const Filters: React.FC<FiltersProps> = ({ pageSize, sortOrder,  handleSelectChange }) => (
    <Flex direction={['column', 'row']} justifyContent="space-between" mb="4">
    <Select w="200px" mb={['2', null]} value={pageSize.toString()} onChange={(e) => handleSelectChange(parseInt(e.target.value), true)}>
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
        </Select>
        <Select w="200px" value={sortOrder} onChange={(e) => handleSelectChange(e.target.value, false)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
  </Flex>
);

export default Filters;
