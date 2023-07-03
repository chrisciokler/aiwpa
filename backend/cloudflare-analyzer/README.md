# AI Wep Page Analyzer API

This is a minimal project with [Hono](https://github.com/honojs/hono/) for Cloudflare Workers.

## Features

- Minimal
- TypeScript
- Wrangler to develop and deploy.
- [Jest](https://jestjs.io/ja/) for testing.

## Usage

Install

```
npm install
```

Develop

```
npm run dev
```

Test

```
npm run test
```

Deploy

```
npm run deploy
```

Secrets

```
npm run uploadsecrets
```

## Author

Christian Prado Ciokler <https://github.com/chrisciokler>

## License

MIT

## Quick Actions

- deploy => npm run deploy
- debug => npm run debug
- add .env variable => wrangler secret put:bulk ./secrets.json

Commands:
wrangler docs [command] 📚 Open wrangler's docs in your browser
wrangler init [name] 📥 Initialize a basic Worker project, including a wrangler.toml file
wrangler generate [name] [template] ✨ Generate a new Worker project from an existing Worker temp
late. See https://github.com/cloudflare/templates
wrangler dev [script] 👂 Start a local server for developing your worker
wrangler publish [script] 🆙 Publish your Worker to Cloudflare.
wrangler delete [script] 🗑 Delete your Worker from Cloudflare.
wrangler tail [worker] 🦚 Starts a log tailing session for a published Worker.  
 wrangler secret 🤫 Generate a secret that can be referenced in a Worker  
 wrangler secret:bulk <json> 🗄️ Bulk upload secrets for a Worker
wrangler kv:namespace 🗂️ Interact with your Workers KV Namespaces
wrangler kv:key 🔑 Individually manage Workers KV key-value pairs
wrangler kv:bulk 💪 Interact with multiple Workers KV key-value pairs at once wrangler pages ⚡️ Configure Cloudflare Pages
wrangler queues 🇶 Configure Workers Queues
wrangler r2 📦 Interact with an R2 store
wrangler dispatch-namespace 📦 Interact with a dispatch namespace
wrangler d1 🗄 Interact with a D1 database
wrangler pubsub 📮 Interact and manage Pub/Sub Brokers
wrangler mtls-certificate 🪪 Manage certificates used for mTLS connections
wrangler login 🔓 Login to Cloudflare
wrangler logout 🚪 Logout from Cloudflare
wrangler whoami 🕵️ Retrieve your user info and test your auth config  
 wrangler types 📝 Generate types from bindings & module rules in config  
 wrangler deployments 🚢 Displays the 10 most recent deployments for a worker

Flags:
-j, --experimental-json-config Experimental: Support wrangler.json [boolean]
-c, --config Path to .toml configuration file [string]
-e, --env Environment to use for operations and .env files [string]  
 -h, --help Show help [boolean]
-v, --version Show version number [boolean]
