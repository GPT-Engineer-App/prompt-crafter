import { Box, Heading, Text, Select, VStack } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useState } from "react";

const MultiLLMPromptCreation = () => {
  const [selectedModel, setSelectedModel] = useState("");

  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setPrompt(value);
      validatePrompt(value);
    }
  };

  const validatePrompt = (value: string) => {
    // Basic validation logic for demonstration purposes
    if (value.trim() === "") {
      setError("Prompt cannot be empty.");
    } else {
      setError("");
    }
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
    <VStack align="stretch" spacing={4}>
        <Editor
          height="400px"
          defaultLanguage="markdown"
          value={prompt}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
    </Box>
  );
};

export default MultiLLMPromptCreation;