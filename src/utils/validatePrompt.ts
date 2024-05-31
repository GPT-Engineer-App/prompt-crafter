export const validatePrompt = (prompt: string): string => {
  // Basic validation logic for malformed prompts and invalid fields
  if (!prompt) {
    return "Prompt cannot be empty.";
  }
  if (prompt.length < 10) {
    return "Prompt is too short.";
  }
  // Add more validation rules as needed
  return "";
};