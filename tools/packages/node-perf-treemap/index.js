import open from "open";
import Pako from "pako";
import { readFile } from "fs/promises";

const atob = (a) => Buffer.from(a, "base64").toString("binary");
const btoa = (b) => Buffer.from(b).toString("base64");

const json = JSON.parse(
  await readFile(new URL("./treemap.json", import.meta.url))
);

const base = "nick flut blonde quando flu!";
const encoded = btoa(base);
const decoded = atob(encoded);
const treemap = btoa(Pako.deflate(JSON.stringify(json)));
const url = `https://googlechrome.github.io/lighthouse/treemap/?gzip=1#${treemap}`;

// console.log(`Base string: ${base}`);
// console.log(`Base64 encoded: ${encoded}`);
// console.log(`Decoded: ${decoded}`);
// TIL: example.com is a real, testable domain
// YAHTZEE!
console.log(url);
