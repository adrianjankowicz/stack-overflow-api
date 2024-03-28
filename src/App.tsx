import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import TagsBrowser from "./components/TagBrowser"
import Header from "./components/Header"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="70vh" p={3}>
        <Header />
        <TagsBrowser />
      </Grid>
    </Box>
  </ChakraProvider>
)
