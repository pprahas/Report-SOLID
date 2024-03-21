import { Container } from "inversify";
import { registerDependecies as appDependecy } from "./02_application/application.inversify.config";
import { registerDependecies as infrastructureDependecy } from "./03_infrastructure/infrastructure.inversify.config";

const myContainer = new Container();

infrastructureDependecy(myContainer);

appDependecy(myContainer);

export { myContainer };
