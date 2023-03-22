# PAUS tools
Performance, accessibility, usability, security. They're all important and work on one often affects the others. This repo is (and will be) a collection of tools and learning applications to help designers, developers, and product managers level up. It is divided into two broad categories:

## packages
The packages directory includes co-located tools for testing or evaluating PAUS in your applications. [Packages uses Nx]([url](https://nx.dev/)) to manage global dependencies and testing tools.

## examples
The examples directory includes one-off learning applications. It currently has two applications:

1. [screen reader semantics](https://github.com/1Copenut/paus-tools/tree/main/examples/screenReaderSemantics) demonstrates the importance of semantic HTML for screen reader users
2. [design review](https://github.com/1Copenut/paus-tools/tree/main/examples/designReview) helps designers spot visual a11y issues and learn about annotating visual designs

## Get started coding on your machine
This repo requires you to type a few commands into a terminal window. Commands are shown in code blocks that begin with a dollar sign like this `$ command to type`. You can retype these commands or copy and paste them into your terminal window. Do not include the dollar sign ` $ ` when you type or copy commands into your terminal.

1. Confirm you have NodeJS installed. Open a terminal and type `$ node --version`
1. You should see output like **v16.14.2**. If not, [download NodeJS](https://nodejs.org/en/download/) and install it on your local machine.
1. Clone this repo. If you&rsquo;ve never cloned a repo, GitHub has [great instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
1. Then type the following commands, one at a time:
1. `$ cd /paus-tools/` to change directories
1. `$ cd /packages/` or `$ cd `/examples/` depending on if you want to use tools or learning examples
1. `$ npm install` to install dependencies
4. View the `package.json` in the desired directory for local instructions. Often this will be `$ npm run start` to start a development server.
5. The application will compile and your terminal should provide a local URL like `localhost:3000` or `localhost:8080` to view the application.
