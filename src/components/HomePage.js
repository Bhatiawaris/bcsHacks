import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box bg="#1A202C" color="white" minHeight="100vh">
      <Box p={5}>
        <Heading as="h1" size="xl">
          Welcome to Habit Builder - an AI powered habit creater and tracker to
          help you achieve your goals.
        </Heading>
        <Text mt={4}>
          1. Enter a goal you want to achieve: "I want to lose weight." 2. Habit
          Builder creates habits that achieve this goal: "Exercise for 30
          minutes daily, drink 2L water every day, etc." 3. Choose your
          preferred habits or create your own 4. Habit Builder creates a
          "mission statement" and creates a plan for each habit based off of
          Atomic Habits templates 5. Track your progress in the Habit Builder
          dashboard
        </Text>
      </Box>
    </Box>
  );
}

export default HomePage;
