type GetReturnType<Type> = Type extends (...args: never[]) => infer sfdsfds
  ? sfdsfds
  : never;



// 调用签名
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}


interface Say {
  (val: string): boolean
}
const say: Say = () => true
say('1')

// 构造签名
type SomeConstructor = {
  new (s: string): {};
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

interface GenericIdentityFn {
  <T>(arg: T): T;
  age: string;
}

function identity<T>(arg: T): T {
  return arg;
}
identity.age = '1'

let myIdentity: GenericIdentityFn = identity;