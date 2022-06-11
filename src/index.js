import { printHelloWorldToConcole } from "./dir2/index";
import { logThisDirName } from "./dir1/index.js";
import sum from "./dir1/sum";
import multiplication from "./dir2/multiplication";

const fn = () => {
  printHelloWorldToConcole();
  logThisDirName();
  sum(1, 1);
  multiplication(2, 2);
};
fn();
