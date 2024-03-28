import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Filters from '../components/Filters';

export default {
    title: 'Components/Filters',
    component: Filters,
    decorators: [
        (Story) => (
            <ChakraProvider theme={extendTheme()}>
                <Story />
            </ChakraProvider>
        ),
    ],
} as Meta<typeof Filters>;

const Template: StoryObj<typeof Filters> = {
    render: (args) => <Filters {...args} />,
    args: {
        pageSize: 5,
        sortOrder: 'asc',
        handleSelectChange: action('handleSelectChange'),
    },
};

export const Default = {
    ...Template,
};

export const PageSize10 = {
    ...Template,
    args: {
        ...Template.args,
        pageSize: 10,
    },
};

export const PageSize15 = {
    ...Template,
    args: {
        ...Template.args,
        pageSize: 15,
    },
};

export const SortDescending = {
    ...Template,
    args: {
        ...Template.args,
        sortOrder: 'desc',
    },
};
