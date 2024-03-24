import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

function PlanPage({ detailedPlan }) {
  return (
    <Flex wrap="wrap">
      {detailedPlan.map((item, index) =>
        item.description ? (
          <Box
            key={index}
            width="100%"
            height="auto"
            borderRadius="10px"
            backgroundColor="teal"
            color="white"
            padding="10px"
            margin="1rem"
            whiteSpace="normal"
          >
            <Text fontSize="l">{item.description}</Text>
          </Box>
        ) : null
      )}
    </Flex>
  );
}

export default PlanPage;
