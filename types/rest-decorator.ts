import { HttpMethod } from "./htttp-method";

export interface RestDecoratorInfo {
  httpMethod: HttpMethod;
  path: string;
  propertyName: string;
}
