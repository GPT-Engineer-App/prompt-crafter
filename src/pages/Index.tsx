import { Box, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Welcome to PromptMaster</Heading>
      <Text fontSize="lg">Your ultimate tool for creating, managing, and optimizing prompts for various large language models.</Text>
    </Box>
  );
};

export default Index;