// HomePage.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box>
      <Box p={5}>
        <Heading as="h1" size="xl">
          Welcome to Our Homepage!
        </Heading>
        <Text mt={4}>This is a simple homepage built with Chakra UI.</Text>
      </Box>
    </Box>
  );
}

export default HomePage;
