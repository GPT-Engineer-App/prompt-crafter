# prompt-crafter

## Web App Description: PromptMaster

### Overview
PromptMaster is a comprehensive web application designed to create, manage, and optimize prompts for various large language models (LLMs). This platform supports multiple LLMs, including Azure API-based models and other free models. It features a detailed documentation repository on prompt crafting and an advanced prompt generator for agent frameworks using best practices like Chain-of-Thought (CoT) prompting. The web app also includes a builder tool for creating complete web applications using the OpenAI Azure API.

### Features

#### 1. Multi-LLM Prompt Creation
- **Multiple LLM Support**: Integrates with various LLMs such as Azure OpenAI Service, GPT-3, GPT-4, and free models like GPT-Neo, GPT-J, etc.
- **Prompt Editor**: Rich text editor for crafting prompts with syntax highlighting for markdown and common prompt formats. Includes error checking for malformed prompts.
- **Examples and Templates**: Library of example prompts and templates specific to each LLM.
- **Documentation Access**: Easy access to documentation files that detail the optimal use of prompts for each LLM.

#### 2. Agent Prompt Generator  
- **Framework Integration**: Support for common agent frameworks like Rasa and Botpress, as well as custom agent architectures built on top of LLMs.
- **Prompt Generation Tools**: Tools to create complex prompts using CoT and other advanced prompting strategies.
- **Best Practice Guidelines**: Built-in guidelines and tips for effective prompt creation.
- **Verbose Prompts**: Options to create verbose prompts for detailed step-by-step responses.

#### 3. Web App Builder
- **Drag-and-Drop Interface**: User-friendly interface with drag-and-drop functionality for easy app design.
- **Component Library**: Extensive library of pre-built UI components (forms, buttons, menus, etc.) and page templates. 
- **Integration with OpenAI Azure API**: Seamless integration with OpenAI services for NLP capabilities, text generation, embeddings, etc.
- **Live Preview**: Real-time preview of the web app during the building process.
- **Deployment Options**: Tools for deploying the finished web app to hosting services like Azure, AWS, Vercel.

### Detailed Feature Description

#### Page 1: Multi-LLM Prompt Creation
**Objective**: Provide a versatile tool for creating and managing prompts across multiple LLMs.

- **Model Selection**: Dropdown menu to select from a range of supported LLMs, including Azure OpenAI models, GPT-3, GPT-4, GPT-Neo, GPT-J. 
- **Prompt Editor**: Rich text editor for crafting prompts. Includes syntax highlighting for common prompt formats like Markdown, YAML, JSON. Error checking for malformed prompts and invalid fields.
- **Examples and Templates**: Library of example prompts and templates for each supported LLM. Covers common use cases like summarization, question-answering, chat, text generation.
- **Documentation Access**: Built-in access to documentation files that detail prompt best practices, tips & tricks, and optimal prompt structures for each LLM.

#### Page 2: Agent Prompt Generator
**Objective**: Generate sophisticated prompts for agent-based frameworks.

- **Framework Integration**: Support for popular agent frameworks like Rasa and Botpress. Also supports custom agent architectures that use LLMs for NLU and dialogue management.
- **Prompt Generation Tools**: Tools to create complex multi-step prompts using CoT and other advanced prompting strategies. Includes a visual prompt flow builder.
- **Best Practice Guidelines**: Built-in guidelines, tips, and templates for effective prompt creation. Covers topics like persona design, prompt specificity, reducing hallucination.
- **Verbose Prompts**: Options to create verbose prompts that elicit detailed step-by-step responses from the LLM, for explainability and debugging.

#### Page 3: Web App Builder  
**Objective**: Enable users to build full-fledged web applications using OpenAI Azure API.

- **Drag-and-Drop Interface**: Intuitive drag-and-drop UI for designing web app pages and flows. Includes grid layout and alignment tools.
- **Component Library**: Extensive library of pre-built UI components including forms, input fields, buttons, menus, tables, charts. Also includes complete page templates for common app types like dashboards, CRUD apps.
- **Integration with OpenAI Azure API**: Seamless integration with Azure OpenAI Service for NLP capabilities. Enables adding text generation (e.g. product descriptions), semantic search, embeddings, summarization, etc. to apps.
- **Live Preview**: Real-time preview of the web app during the building process. Includes both desktop and mobile views.
- **Deployment Options**: One-click deployment of finished web apps to popular hosting services like Azure App Service, AWS Amplify, Vercel.

### Technical Requirements

1. **Backend**: 
   - Node.js with Express.js for server-side logic.
   - Integration with Azure OpenAI Service and other LLM APIs.
   - MongoDB for storing user-created prompts, app configurations, and other metadata. PostgreSQL for relational data.

2. **Frontend**:
   - React.js for building a responsive and dynamic user interface. 
   - Chakra UI for a customizable component library and design system.
   - Monaco Editor for the prompt editor, with syntax highlighting and error checking.

3. **Additional Tools**:  
   - Docker for containerization and deployment.
   - GitHub Actions for CI/CD pipeline.
   - Nginx for serving the application.

### Security and Privacy
- **User Authentication**: OAuth 2.0 and JWT for secure login and API access. 
- **Data Encryption**: TLS for data in transit, AES-256 for data at rest.
- **Access Controls**: Role-based access control (RBAC) with admin, developer, and user roles.

### Documentation and Support
- **User Guides**: Comprehensive user guides and video tutorials covering all key features.
- **API Documentation**: OpenAPI specification and Swagger UI for API docs. 
- **Support**: Dedicated email support channel and live chat with 1 business day response SLA.

### Continuous Improvement  
- **Feedback Channels**: In-app feedback form and UserVoice integration for feature requests.
- **Regular Updates**: Bi-weekly updates and quarterly major releases, with detailed changelog.

### Conclusion
PromptMaster aims to be the ultimate tool for anyone working with LLMs, providing robust tools for prompt creation, agent framework integration, and web application development. By focusing on an intuitive UX, extensive documentation, and an actively developed set of features, PromptMaster will enable users to maximize the potential of LLMs in their projects.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/prompt-crafter.git
cd prompt-crafter
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
