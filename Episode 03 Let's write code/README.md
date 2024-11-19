# Episode 3: Let's Write Code in Node.js

## How to Install Node.js

To get started with Node.js, follow these steps:

1. Visit the official [Node.js website](https://nodejs.org/).
2. Download the **LTS version** (recommended for most users).
3. Run the installer and follow the setup instructions.
4. Verify the installation:
   ```bash
   node -v   # To check the Node.js version
   npm -v    # To check the npm (Node Package Manager) version

What is REPL?
REPL stands for:

R: Read - Reads the input provided by the user.
E: Evaluate - Evaluates the input to determine its meaning.
P: Print - Prints the result of the evaluation to the console.
L: Loop - Continues this process until the user exits.
Node.js includes a built-in REPL environment that allows you to test and execute JavaScript code interactively.

console.log(globalThis === globalThis.globalThis); // true (everywhere)
console.log(window === window.window); // true (in a browser)
console.log(self === self.self); // true (in a browser or a Web Worker)
console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)
