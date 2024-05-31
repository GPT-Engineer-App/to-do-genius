import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box as="nav" bg="blue.500" color="white" p={4} mb={6} borderRadius="md">
        <Heading size="lg">Todo App</Heading>
      </Box>
      <VStack spacing={4}>
        <HStack>
          <Input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="blue">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={2} w="100%">
          {tasks.map((task, index) => (
            <HStack key={index} justifyContent="space-between" w="100%" p={2} borderWidth={1} borderRadius="md">
              <Text>{task}</Text>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTask(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;