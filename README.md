* data and code are taken from https://github.com/automerge/automerge-perf
* updated to latest automerge

run by:

```
bun install
bun automerge-text.js
node automerge-text.js
```

Laptop is M1 Pro

node v18.15.0 takes 56076ms
bun 1.0.1 takes 154288ms, and it looks getting slower and slower at each print loop

node v21.7.1 takes 50999ms

bun 1.1.0 takes 29401ms


using automerge 2.x wasm, node 22 processed 259778 edits in 5160 ms, bun's performance is similar.