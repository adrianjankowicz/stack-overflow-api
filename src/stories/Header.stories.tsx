import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Header from '../components/Header';


export default {
    title: 'Components/Header',
    component: Header,
    decorators: [
        (Story) => (
            <ChakraProvider theme={extendTheme()}>
                <Story />
            </ChakraProvider>
        ),
    ],
} as Meta <typeof Header>


type Story = StoryObj<typeof Header>;
export const Base: Story ={
    args:{

    }
}