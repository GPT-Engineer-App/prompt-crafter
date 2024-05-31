import { Box, Heading, Select, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
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

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Settings</Heading>
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
    <FormControl mt={4}>
        <FormLabel htmlFor="api-key">API Key</FormLabel>
        <Input
          id="api-key"
          type="text"
          value={apiKey}
          onChange={handleApiKeyChange}
          placeholder="Enter your API key"
        />
        <FormHelperText>We'll never share your API key.</FormHelperText>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel htmlFor="api-endpoint">API Endpoint</FormLabel>
        <Input
          id="api-endpoint"
          type="text"
          value={apiEndpoint}
          onChange={handleApiEndpointChange}
          placeholder="Enter your API endpoint"
        />
        <FormHelperText>Enter the endpoint for your API.</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Settings;