import { Box, Heading, Select, FormControl, FormLabel, Input, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const Settings = () => {
  const [selectedAPI, setSelectedAPI] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");

  const handleAPIChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAPI(event.target.value);
  };

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleApiEndpointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiEndpoint(event.target.value);
  };

  const handleSaveSettings = () => {
    // Logic to save settings
    console.log("API Key:", apiKey);
    console.log("API Endpoint:", apiEndpoint);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Settings</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel htmlFor="api-selection">Select API</FormLabel>
          <Select id="api-selection" placeholder="Select API" value={selectedAPI} onChange={handleAPIChange}>
            <option value="azure-openai">Azure OpenAI</option>
            <option value="gpt-3">GPT-3</option>
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-neo">GPT-Neo</option>
            <option value="gpt-j">GPT-J</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="api-key">API Key</FormLabel>
          <Input
            id="api-key"
            type="text"
            value={apiKey}
            onChange={handleApiKeyChange}
            placeholder="Enter your API key"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="api-endpoint">API Endpoint</FormLabel>
          <Input
            id="api-endpoint"
            type="text"
            value={apiEndpoint}
            onChange={handleApiEndpointChange}
            placeholder="Enter your API endpoint"
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSaveSettings}>Save Settings</Button>
      </VStack>
    </Box>
  );
};

export default Settings;