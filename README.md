# 🔎 Supercharge Your AI with Web Search Powers

Want to give your AI coder the power to search the web without going broke?

Save on expensive AI credits, and pay cash instead **(it's worth it)!**

This is exactly why I built this super simple MCP Server.

## ✨ What This Does For You

You can search the web through OpenAI's **4o-mini Search** model.

It basically crawls the web, and gives you (or your AI coder) a super helpful answer.

- **Get Docs**: Read the latest docs without searching/copy/pasting.
- **Save Money**: Pay just 1-3 cents per search instead of wasting monthly credits.
- **Beginner-Friendly**: Works right out of the box thanks to a simple `npx` command.
- **Super Compatible**: Works seamlessly with Claude, Cursor AI, and other popular MCP clients
- **Flexible APIs**: Use with either OpenAI directly, or OpenRouter.ai!

## 🚀 Get Started Fast

Literally all you have to do is add it to your MCP JSON config file.

If you don't know what it is, a quick search like [this one](https://www.google.com/search?q=mcp+setup+cursor+ai) should help you out.

1. Copy this configuration into the JSON file of your AI coder.

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

2. Replace `your-api-key` with your actual API key.
3. Set `PROVIDER` to either `openai` (default) or `openrouter` (for OpenRouter.ai).
4. Add to your configuration file.
5. Restart your MCP client (Claude App, Cursor AI, Windsurf, etc).

## 💡 Using Your New Search Power

Once set up, simply ask your AI to search something.

> "search mcp for latest 3.7 model and how to use it with node sdk"
> 
> "search mcp for how nextjs app router works exactly and how to use it"
> 
> "search mcp for for the latest sveltekit templates"

It will then use OpenAI's **4o-mini-search** and deliver fresh information directly to your AI's context!

![Example Output](images/example.png)

## 🛠️ Troubleshooting

**Issue**: Server not connecting in Cursor AI (wrong API key or similar)

**Fix**: There is a weird bug in Cursor with the MCP file. Just restart the entire editor completely and try again.
