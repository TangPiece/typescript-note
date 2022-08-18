# keyof 操作符

## Take Object Type /union of its keys
> The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:

```ts
  type Point = { x: number; y: number };
  type P = keyof Point;
  let a: P = 'x';
  a = 'y';
```

## Index Signature


```ts
type T1 = {[n: string]: string}

type T2 = keyof T1;

const a: T2 = {}


type T1 = {[n: number]: string}

type T2 = keyof T1;

const a: T2 = '1212'
```



## Practice

### Sample1

```ts
    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
      type: keyof ReactSVG;
    }

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
      type: keyof ReactHTML;
    }
```


### Sample2-`Borrow-Other-Type`

```ts
  type T1<T> = {
      [P in keyof T]: number;
  };
  type T2 = {
      name: string,
      age: number,
  }

  const a: T1<T2> = {
      name: 'aaaa',
      age: 12,
  }
```


```ts
  type T1<T> = {
      [P in keyof T]?: number;
  };
  type T2 = {
      name: string,
      age: number,
  }

  const a: T1<T2> = {
      age: 12,
  }

  const b: T2 = {
      age: 12,
  }
```


### Sample3-`MyPartial`

```ts
  type T1<T> = {
      [P in keyof T]?: T[P];
  };
  type T2 = {
      name: string,
      age: number,
  }

  const a: T1<T2> = {
      age: 12,
  }

  const b: T2 = {
      age: 12,
  }

  type MyPartial<T> = {
      [P in keyof T]?: T[P]
  }
```


### Sample4-`Setter Generics`

```ts
  // Generics/ Type Parameter
  type TSetter<T> = <Key extends keyof T>(name: Key, value: T[Key]) => void

  type T1 = {
    name: string,
    age: number,
  }


  const a: T1 = {
    name: 'yg',
    age: 18,
  }

  function mySetter<T, Key extends keyof T>(obj: T, name: Key, value: T[Key]) {
    obj[name] = value;
  }

  // mySetter(a, 'name', 'yg') // ok
  mySetter(a, 'name', 100) // error

  // mySetter(a, 'age', 100) // ok
  mySetter(a, 'age', '100') // error

```