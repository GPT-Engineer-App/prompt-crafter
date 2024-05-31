import { Box, Heading, Text, Select } from "@chakra-ui/react";
import { useState } from "react";

const MultiLLMPromptCreation = () => {
  const [selectedModel, setSelectedModel] = useState("");

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Multi-LLM Prompt Creation</Heading>
      <Text fontSize="lg" mb={4}>Create and manage prompts across multiple LLMs.</Text>
      <Select placeholder="Select LLM Model" value={selectedModel} onChange={handleModelChange} mb={4}>
        <option value="azure-openai">Azure OpenAI</option>
        <option value="gpt-3">GPT-3</option>
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-neo">GPT-Neo</option>
        <option value="gpt-j">GPT-J</option>
      </Select>
    </Box>
  );
};

export default MultiLLMPromptCreation;