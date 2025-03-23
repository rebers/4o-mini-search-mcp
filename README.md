# Minimal 4o-mini-search MCP Server

A minimal MCP server that interacts with OpenAI and OpenRouter to perform searches using the GPT-4o-mini-search-preview model.

## Features

- Simple MCP server with a single search tool
- Support for both OpenAI and OpenRouter.ai
- Save credits on searches and pay 1-3 cents instead!

## Installation

You can install the package globally:

```bash
npm install -g @rebers/4o-mini-search-mcp
```

Or run it directly with npx:

```bash
npx @rebers/4o-mini-search-mcp
```

## Running the Server

The server requires an API key for either OpenAI or OpenRouter.ai.

```bash
# Using npx directly
API_KEY=your-api-key npx @rebers/4o-mini-search-mcp

# If installed globally
API_KEY=your-api-key 4o-mini-search-mcp
```

This will start the MCP server using stdio transport, which can be connected to by MCP clients.

### Configuring for Claude.app

To use this MCP server with Claude, Cursor AI, and similar, add the following to your configuration file:

```json
{
  "mcpServers": {
    "4o-mini-search": {
      "command": "npx",
      "args": ["@rebers/4o-mini-search-mcp"],
      "env": {
        "API_KEY": "your-api-key",
        "PROVIDER": "openai"
      }
    }
  }
}
```

### Environment Variables

The server requires the following environment variables:

- `API_KEY` (required): Your OpenAI or OpenRouter.ai API key
- `PROVIDER` (optional): The service to use, either "openai" (default) or "openrouter"

### Using the Search Tool

The server provides a single tool called `search` with the following parameter:

- `query` (string, required): The search query to send to the model

## Example

When connected to an MCP client like Claude.app, you can use the search tool like this:

```
Use the search tool to find information about climate change.
```

The tool will make a request to either OpenAI or OpenRouter.ai (depending on the `PROVIDER` environment variable) and return the search results.

## Troubleshooting

### Cursor MCP Configuration

When configuring this MCP server for Cursor, you may encounter issues with the mcp.json file. If the server doesn't appear to be working correctly after editing the configuration:

1. Save the mcp.json file
2. Restart Cursor
3. Try again

This often resolves issues with the MCP configuration not being properly loaded.

## License

MIT
