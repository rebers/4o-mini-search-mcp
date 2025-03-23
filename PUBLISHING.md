# Publishing Guide for @rebers/4o-mini-search-mcp

This guide provides step-by-step instructions for publishing this package to npm and setting up the GitHub repository.

## GitHub Repository Setup

1. Go to https://github.com/new
2. Enter repository name: `4o-mini-search-mcp`
3. Set repository to Public
4. Do not initialize with README, .gitignore, or license (we already have these files)
5. Click "Create repository"
6. Follow the instructions for "…or push an existing repository from the command line":

```bash
git remote add origin https://github.com/rebers/4o-mini-search-mcp.git
git push -u origin main
```

## Publishing to npm

1. Make sure you have an npm account and are logged in locally:

```bash
npm login
```

2. Ensure your build works correctly:

```bash
npm run build
```

3. Publish the package with the public access flag:

```bash
npm publish --access=public
```

Note: If this is your first package with the `@rebers` scope, you'll need to create the scope first:

```bash
npm init --scope=rebers
```

## Updating the Package

When you need to update the package, follow these steps:

1. Make your changes
2. Update the version in package.json:

```bash
npm version patch  # For bug fixes
npm version minor  # For new features
npm version major  # For breaking changes
```

3. Build and publish:

```bash
npm run build
npm publish
```

4. Push changes to GitHub:

```bash
git push
git push --tags
```

## Using with npx

Once published, users can run your package with:

```bash
npx @rebers/4o-mini-search-mcp
```

The environment variables should be set as described in the README. 