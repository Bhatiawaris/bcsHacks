import React from "react";
import { Flex, Button, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex p={4} backgroundColor="teal" alignItems="center">
      <Link to="/">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Placeholder App Name
        </Text>
      </Link>
      <Spacer />
      <Link to="/plan">
        <Button colorScheme="whiteAlpha" mr={2}>
          View your plan
        </Button>
      </Link>
      <Link to="/prompt">
        <Button colorScheme="whiteAlpha" mr={2}>
          Enter your goal
        </Button>
      </Link>
    </Flex>
  );
}

export default Navbar;
