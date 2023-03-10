# SPA-routing-experience (blue header)
Improving client-side routing in single-page apps (SPAs) through good UX. This version of the SPA routing experience does the following:

1. Announces route changes to screen readers with a live region
2. Focus is set automatically on the live region to ensure screen readers announce it consistently
3. Pressing `Tab` always sets focus on the skip to main content link
4. Previously this version made allownances to show / hide the skip link based on mouse or keyboard behavior, but that was factored out for a more unified UX

## A better accessible router and skip link
It's important to include a skip link for keyboard navigation. It's important to let screen readers know a route was changed client-side. These are fairly simple tasks in isolation, but become more nuanced when you try to do both well, together. This is our attempt at doing just that.

## Get started testing the user experience
All examples are hosted on separte GitHub repos as GitHub pages.

1. [Live region with focus set on skip link](https://1copenut.github.io/SPA-routing-experience/)
1. [Live region with focus set on body tag](https://1copenut.github.io/SPA-routing-experience-body/)
1. [Focus set on H1 only](https://1copenut.github.io/SPA-routing-experience-h1/)

## Get started coding on your machine
This repo requires you to type a few commands into a terminal window. Commands are shown in code blocks that begin with a dollar sign like this `$ command to type`. You can retype these commands or copy and paste them into your terminal window. Do not include the dollar sign ` $ ` when you type or copy commands into your terminal.

1. Confirm you have NodeJS installed. Open a terminal and type `$ node --version`
1. You should see output like **v16.14.2**. If not, [download NodeJS](https://nodejs.org/en/download/) and install it on your local machine.
1. Clone this repo. If you&rsquo;ve never cloned a repo, GitHub has [great instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
1. Then type the following commands, one at a time:
1. `$ cd /location/to/SPA-routing-experience/` to change directories
1. `$ npm install` to install libraries and dependencies
1. `$ npm run start` to start a development server
1. The application will compile and be available at `localhost:3000` in the browser of your choice

## Resources
* [What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)
* [React Router useLocation hook – Tutorial and Examples](https://www.kindacode.com/article/react-router-uselocation-hook-tutorial-and-examples/)
* [Deploying a CRA React App to GitHub Pages](https://github.com/gitname/react-gh-pages)
* [How to Deploy a Routed React App to GitHub Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)

## Tested combinations
* MacOS Monterey + Safari + VoiceOver
* MacOS Monterey + Firefox + VoiceOver

## Known issues for this solution
* ~~MacOS Monterey + Safari + VoicOver - Live region announcement is suppressed sometimes. This may be a timing issue, more reseach is needed.~~
