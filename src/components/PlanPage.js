import React from "react";
import { Box, Text } from "@chakra-ui/react";

function PlanPage({ detailedPlan }) {
  return (
    <Box backgroundColor="#1A202C" minHeight="100vh" maxWidth="100%">
      <Box backgroundColor="#253140" borderRadius="10px" padding="20px">
        {detailedPlan.map((item, index) =>
          item.description ? (
            <Box
              key={index}
              width="50%"
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
      </Box>
    </Box>
  );
}

export default PlanPage;
