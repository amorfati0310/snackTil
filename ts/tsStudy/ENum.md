1. string 형 enum | 숫자형 enum 


2. Reverse Mapping 

3. const enums 



### TYPE ASSERTION & NON NULL ASSERTION 

```typescript

1. 확실히 결과 값 보장 될 때 assertion -> as HTMLInputElement
2. const test = ( value: any)=>{
    (value as string).indexOf('')
}

```

### NON NULL ASSERTION 

```typescript

function  optional(b: {foo: string | null}) {
  console.log(b.foo.length)
  
  // b.parentElement!
}


```
