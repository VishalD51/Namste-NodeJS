# Episode 2: JavaScript on Server

## Understanding Node.js and JavaScript Engines

Node.js is a **C++ application** that empowers JavaScript to run outside the browser. At its core, Node.js includes:

- **V8 JavaScript Engine**: A high-performance JavaScript engine developed by Google, written in C++. Its primary role is to execute JavaScript code and convert it into **machine code**.

Node.js acts as a **JavaScript runtime** on the server by combining V8 with additional features like:
- **Server APIs**: Extend JavaScript's capabilities for server-side operations.
- **Modules**: Provide utilities and tools to make server-side development more powerful and efficient.

## JavaScript Engines and ECMAScript Standard

JavaScript engines are responsible for executing JavaScript code. All JavaScript engines adhere to the **ECMAScript** standard, ensuring consistency across platforms. Different browsers use different engines:

- **Google Chrome & Brave**: V8
- **Mozilla Firefox**: SpiderMonkey
- **Safari**: JavaScriptCore (also known as Nitro)
- **Internet Explorer**: Chakra

### Why Do We Need JavaScript Engines?

When we write JavaScript, we are writing **high-level code** that needs to be understood by machines. The process involves:

1. **High-Level JavaScript Code**: Written by developers.
2. **Conversion to C++**: V8 translates JavaScript into C++ for further processing.
3. **Machine Code Conversion**: C++ is translated into **assembly code**, which is finally converted into **binary code** that machines can understand.

This seamless process allows JavaScript to be executed efficiently on both browsers and servers.

---

This episode covers how Node.js leverages the V8 engine and other powerful features to enable JavaScript execution on servers.
