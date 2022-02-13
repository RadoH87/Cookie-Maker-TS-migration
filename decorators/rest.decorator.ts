// factory decorator
import { HttpMethod } from "../types/htttp-method";
import { MyRouter } from "../types/my-router";

export function rest(httpMethod: HttpMethod, path: string) {
  return (target: MyRouter, propertyName: string): any => {};
}
