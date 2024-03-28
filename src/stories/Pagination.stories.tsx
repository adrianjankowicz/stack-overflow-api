import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Pagination from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <ChakraProvider theme={extendTheme()}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta<typeof Pagination>;

const Template: StoryObj<typeof Pagination> = {
  render: (args) => <Pagination {...args} />,
  args: {
    setPage: action('setPage'),
    lastPage: 10, 
    error: '', 
  },
};

export const Base = {
  ...Template,
  args: {
    ...Template.args,
    page: 1,
    isLoading: false,
    allTagsLoaded: false,
  },
};

export const Loading = {
  ...Template,
  args: {
    ...Template.args,
    page: 2,
    isLoading: true,
    allTagsLoaded: false,
  },
};

export const LastPageLoaded = {
  ...Template,
  args: {
    ...Template.args,
    page: 10,
    isLoading: false,
    allTagsLoaded: true,
  },
};

export const IntermediatePage = {
  ...Template,
  args: {
    ...Template.args,
    page: 5,
    isLoading: false,
    allTagsLoaded: false,
  },
};

export const ErrorState = {
  ...Template,
  args: {
    ...Template.args,
    page: 3,
    isLoading: false,
    allTagsLoaded: false,
    error: 'Failed to load data',
  },
};
