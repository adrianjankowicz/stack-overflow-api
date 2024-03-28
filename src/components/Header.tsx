import { Heading, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Header: React.FC = () => {
    return (
        <Flex as="header" width="full" alignItems="center" justifyContent="center" paddingX="4" pos='relative'>
            <Heading mb="0">Tags Browser</Heading>
            <Box pos='absolute' right='0'>
            <ColorModeSwitcher />
            </Box>
        </Flex>
    )
}

export default Header