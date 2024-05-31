import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">PromptMaster</Box>
        <Flex alignItems="center">
          <RouterLink to="/">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/multi-llm-prompt-creation">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Multi-LLM Prompt Creation
            </Button>
          </RouterLink>
          <RouterLink to="/agent-prompt-generator">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Agent Prompt Generator
            </Button>
          </RouterLink>
          <RouterLink to="/web-app-builder">
            <Button as={Link} colorScheme="teal" variant="ghost">
              Web App Builder
            </Button>
          </RouterLink>
          <RouterLink to="/settings">
            <Button as={Link} colorScheme="teal" variant="ghost">
              Settings
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;