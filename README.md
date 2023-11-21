# logux-svelte

Demo app using logux and svelte.

## How to run
This example requires the logux server to be running in a separate process. Clone (https://github.com/logux/examples) and run:


```bash
pnpm start
```

to start the example server.

## logux-svelte
Clone this repo and run:

```bash
pnpm dev
```

This will start logux-svelte on port 5174 and proxy requests to logux server running from the step above.

## Notes

This example uses nanostores which support the Svelte 4 store contract - this will need updating to use Svelte 5 runes instead of nanostores (or a useStore method for Svelte5 within nanostores).