import {Todos} from "./Todos";
import {makeObservable} from "proxily";

export const todos = makeObservable(new Todos());
