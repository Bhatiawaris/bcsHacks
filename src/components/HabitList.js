import { Text, Box, Button } from "@chakra-ui/react";
import { useState } from "react";

const HabitList = ({ habits, customHabits }) => {
  const [buttonStyles, setButtonStyles] = useState({});
  const [selectedHabits, setSelectedHabits] = useState([]);

  const handleClick = (index) => {
    const isSelected = selectedHabits.includes(index);
    if (isSelected) {
      setSelectedHabits(
        selectedHabits.filter((selectedHabit) => selectedHabit !== index)
      );
    } else {
      setSelectedHabits([...selectedHabits, index]);
    }
  };

  return (
    <Box display="flex" flexWrap="wrap">
      {habits.map((habit, index) => (
        <Button
          key={index}
          width="100%"
          minHeight="50px"
          borderRadius="10px"
          colorScheme="teal"
          color="white"
          variant={selectedHabits.includes(index) ? "solid" : "outline"}
          justifyContent="center"
          padding="20px"
          margin="1rem"
          _hover={{ bg: "#2D797B" }}
          onClick={() => handleClick(index)}
        >
          <Text fontSize="xl" fontWeight="bold">
            {index + 1}. {habit}
          </Text>
        </Button>
      ))}

      {customHabits.map((customHabit, index) => (
        <Button
          key={index}
          width="100%"
          minHeight="50px"
          borderRadius="10px"
          colorScheme="teal"
          color="white"
          variant={selectedHabits.includes(index) ? "solid" : "outline"}
          padding="20px"
          margin="1rem"
          _hover={{ bg: "#2D797B" }}
          onClick={() => handleClick(index)}
        >
          <Text fontSize="xl" fontWeight="bold" textAlign="left">
            {habits.length + index + 1}. {customHabit}
          </Text>
        </Button>
      ))}
      {selectedHabits}
    </Box>
  );
};

export default HabitList;
