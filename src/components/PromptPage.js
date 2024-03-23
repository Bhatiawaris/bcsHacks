import React, { useState } from "react";
import { Box, Button, Flex, Input, Text, Grid } from "@chakra-ui/react";

function PromptPage() {
  const [goal, setGoal] = useState("");
  const [submittedGoal, setSubmittedGoal] = useState("");
  const [habit, setHabit] = useState("");

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleGoalSubmit = async () => {
    setSubmittedGoal(goal);
    alert(`Goal: ${goal}`);
    setGoal("");

    // const response = await fetch(`http://localhost:3000/processInput`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ field }),
    // });

    // if (response.ok) {
    //   console.log("Response Successful");
    // } else {
    //   console.log("Response Failed");
    // }
  };

  const handleHabitChange = (event) => {
    setHabit(event.target.value);
  };

  const handleHabitSubmit = async () => {
    alert(`Habit: ${habit}`);
    setHabit("");
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={6}
      backgroundColor="#1A202C"
      color="white"
      p={5}
      minHeight="100vh"
    >
      <Box padding="20px">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Get started with Habit Builder!
        </Text>

        <Text mb={2}>1. Set the goal you want to achieve:</Text>
        <Flex justifyContent="left">
          <Input
            value={goal}
            placeholder="e.g: I want to be healthier"
            mb={4}
            width="300px"
            onChange={handleGoalChange}
          />
          <Box width="20px" />
          <Button onClick={handleGoalSubmit} colorScheme="teal">
            Add Goal
          </Button>
        </Flex>

        <Text mb={2}>
          2. Habit Builder generates habits that achieve this goal:
        </Text>

        <Text mb={4}>
          3. Choose up to 3 preferred habits or create your own
        </Text>
        <Flex justifyContent="left">
          <Input
            placeholder="e.g: Exercise for 30 minutes daily"
            mb={4}
            width="300px"
            onChange={handleHabitChange}
          />
          <Box width="20px" />
          <Button onClick={handleHabitSubmit} colorScheme="teal">
            Add Habit
          </Button>
        </Flex>
      </Box>

      <Box backgroundColor="#253140" borderRadius="10px" padding="20px">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Your goal:
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          {submittedGoal}
        </Text>
      </Box>
    </Grid>
  );
}
export default PromptPage;
