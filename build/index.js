#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import OpenAI from 'openai';
import { z } from 'zod';
// Get API key from environment variable
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    console.error('API_KEY environment variable is required');
    process.exit(1);
}
// Get service type from environment variable (default to "openai")
const SERVICE_TYPE = process.env.SERVICE_TYPE || 'openai';
if (SERVICE_TYPE !== 'openai' && SERVICE_TYPE !== 'openrouter') {
    console.error('SERVICE_TYPE must be either "openai" or "openrouter"');
    process.exit(1);
}
/**
 * Perform a search using either OpenAI or OpenRouter.ai
 */
async function performSearch(query) {
    // Configure OpenAI client based on the service type
    const openai = new OpenAI({
        apiKey: API_KEY,
        ...(SERVICE_TYPE === 'openrouter' && {
            baseURL: 'https://openrouter.ai/api/v1',
            defaultHeaders: {
                'HTTP-Referer': 'https://4o-mini-search-mcp',
                'X-Title': '4o-mini-search-mcp',
            },
        }),
    });
    // Determine the model name based on the service
    const model = SERVICE_TYPE === 'openrouter' ? 'openai/gpt-4o-mini-search-preview' : 'gpt-4o-mini-search-preview';
    // Make the API call
    const response = await openai.chat.completions.create({
        model,
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: query,
                    },
                ],
            },
        ],
        response_format: {
            type: 'text',
        },
        store: false,
    });
    return response;
}
// Create an MCP server
const server = new McpServer({
    name: '4o-mini-search-mcp',
    version: '0.1.0',
});
// Add a search tool
server.tool('search', {
    query: z.string().describe('The search query'),
}, async ({ query }) => {
    try {
        const result = await performSearch(query);
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(result, null, 2),
                },
            ],
        };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
            content: [
                {
                    type: 'text',
                    text: `Search API error: ${errorMessage}`,
                },
            ],
            isError: true,
        };
    }
});
// Start the server
const transport = new StdioServerTransport();
server.connect(transport).catch((error) => {
    console.error('[MCP Error]', error);
    process.exit(1);
});
console.error('4o-mini-search MCP server running on stdio');
