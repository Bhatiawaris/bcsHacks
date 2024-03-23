import * as React from "react";
import { ChakraProvider, Box, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading as="h1" size="xl">
          Welcome to Our Homepage!
        </Heading>
        <Text mt={4}>This is a simple homepage built with Chakra UI.</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
