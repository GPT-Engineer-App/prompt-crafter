import { Box, Heading, Text, Select, Textarea, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { validatePrompt } from "../utils/validatePrompt";
import { useState } from "react";

const MultiLLMPromptCreation = () => {
  const [selectedModel, setSelectedModel] = useState("");

  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setPrompt(value);
    const validationError = validatePrompt(value);
    setError(validationError);
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
    <FormControl isInvalid={!!error}>
        <FormLabel htmlFor="prompt">Prompt Editor</FormLabel>
        <Textarea
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your prompt here..."
          size="lg"
          height="200px"
          spellCheck="false"
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default MultiLLMPromptCreation;