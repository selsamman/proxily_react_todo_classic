import {Todos} from "./Todos";
import {observable} from "proxily";

export const todos = observable(new Todos());
