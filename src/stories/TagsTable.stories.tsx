import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { action } from '@storybook/addon-actions';
import TagsTable from '../components/TagsTable';

export default {
  title: 'Components/TagsTable',
  component: TagsTable,
  decorators: [
    (Story) => (
      <ChakraProvider theme={extendTheme()}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta<typeof TagsTable>;

const Template: StoryObj<typeof TagsTable> = {
  render: (args) => <TagsTable {...args} />,
  args: {
    pageSize: 5,
    resetError: action('resetError'),
  },
};

export const Default = {
  ...Template,
  args: {
    ...Template.args,
    isLoading: false,
    error: '',
    displayedTags: [
      { name: 'React', count: 200 },
      { name: 'Vue', count: 150 },
      { name: 'Angular', count: 100 },
      { name: 'Svelte', count: 50 },
      { name: 'Ember', count: 25 },
    ],
  },
};

export const Loading = {
  ...Template,
  args: {
    ...Template.args,
    isLoading: true,
    error: '',
    displayedTags: [],
  },
};

export const ErrorState = {
  ...Template,
  args: {
    ...Template.args,
    isLoading: false,
    error: 'Failed to load tags. Please try again.',
    displayedTags: [],
  },
};