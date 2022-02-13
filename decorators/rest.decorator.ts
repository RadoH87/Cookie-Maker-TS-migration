// factory decorator
import { HttpMethod } from "../types/htttp-method";
import { MyRouter } from "../types/my-router";
import { RestDecoratorInfo } from "../types/rest-decorator";

export function rest(httpMethod: HttpMethod, path: string) {
  return (target: MyRouter, propertyName: string): any => {
    const ar: RestDecoratorInfo[] = Reflect.get(target, "_restApiCalls") ?? [];
    ar.push({
      httpMethod,
      propertyName,
      path,
    });
    Reflect.set(target, "_restApiCalls", ar);
  };
}
