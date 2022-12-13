import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

console.log(chalk.green("Hello world!"));

const sum = suma(1, 2);
console.log(sum);

const multi = multiplica(4, 5);
console.log(multi);
