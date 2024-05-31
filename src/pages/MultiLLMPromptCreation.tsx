import { Box, Heading, Text, Select, Textarea, FormControl, FormLabel, FormErrorMessage, VStack, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { validatePrompt } from "../utils/validatePrompt";
import { useState } from "react";

const examplePrompts = {
  "azure-openai": [
    { title: "Summarization", content: "Summarize the following text: ..." },
    { title: "Question Answering", content: "Answer the following question based on the text: ..." },
  ],
  "gpt-3": [
    { title: "Chatbot", content: "You are a helpful assistant. Respond to the following: ..." },
    { title: "Text Generation", content: "Generate a story based on the following prompt: ..." },
  ],
  "gpt-4": [
    { title: "Code Completion", content: "Complete the following code snippet: ..." },
    { title: "Translation", content: "Translate the following text to French: ..." },
  ],
  "gpt-neo": [
    { title: "Creative Writing", content: "Write a poem about: ..." },
    { title: "Summarization", content: "Summarize the following article: ..." },
  ],
  "gpt-j": [
    { title: "Dialogue", content: "Continue the following dialogue: ..." },
    { title: "Question Answering", content: "Provide an answer to the following question: ..." },
  ],
};

const MultiLLMPromptCreation = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedExample, setSelectedExample] = useState("");

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setPrompt(value);
    const validationError = validatePrompt(value);
    setError(validationError);
  };

  const handleExampleClick = (exampleContent: string) => {
    setPrompt(exampleContent);
    onClose();
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
      <Button onClick={onOpen} mb={4}>View Examples and Templates</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Examples and Templates</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start">
              {selectedModel && examplePrompts[selectedModel]?.map((example, index) => (
                <Button key={index} onClick={() => handleExampleClick(example.content)} variant="link">
                  {example.title}
                </Button>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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