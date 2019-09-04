### hooks

class 형 컴포넌트 없이 함수형 컴포넌트로 state management 및 라이프 사이클을 사용할 수 있게 도와주는 api
그리고 ! 간단한 상태관리 redux & mobx 없이 가능하게 해줌

#### useState | useEffect

> useState
> useState , fn컴포넌트에서도 상태변화를 감지해서 update시켜주는 api
> `const [상태값이름, 상태값 변화 함수 이름] = useState(초기값)`

> useEffect

useEffect( callback, [관찰할 상태 값])

vue의 watch 같기도 하네
기존에 있었던 ComponentDidmount에서 fetching하거나 api 호출 logging등에 자주 쓰인다

공식 문서를 보면서 더 추가해 놓기
