import { Box, Heading, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const Settings = () => {
  const [selectedAPI, setSelectedAPI] = useState("");

  const handleAPIChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAPI(event.target.value);
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
    </Box>
  );
};

export default Settings;