# Debounce and Throttling
debounce and throttling 
성능 및, 짧은 시간에 이벤트가 여러번 발생해서 꼬일 수 있는 문제를 해결하는 기법 2가지를 정리해보는 포스팅을 하려 합니다 :) <br>
이 두 기법을 알고 있다고 생각했는데, 오늘 이게 뭐에요? 라고 물어봤을 때, 제대로 답을 못했네요 <br>
다시 공부해보면서 알아보려 해요 <br>
## Throttling 시간 동안 한 번 만 실행되게 하는 함수
ex) 0.1ms 동안 한 번만 실행 나머지 event 무시 


Event가 많이 발생하는 경우 
ex) ScrollEvent, autocompleteInput , drag, resizing, 
우리가 흔히 쓰는 ui에 이러한 기법들이 많이 적용되어 있습니다 :) 

## debounce 시간 주기가 지났을 때 이벤트가 실행되게 하는 함수 

2가지 기법은 예로 한 번 들어볼게요 
0.1초를 예로 들자면 
debounce: 나 0.1초 안 쉬고 달렸으니 다음 일은 거부한다 term이 0.1초 있어야 한다.
throttle: 0.1초동안 한 번만 처리할거야, 다음 일은 그 다음 0.1초에 


주로 사용되는 곳 
throttle: 스크롤 이벤트 , 
debounce : 자동완성 검색 input 등 , 어느정도 멈춤을 감지해야 할 때 ? 키 입력 이벤트에 많이 쓰임 
The Difference Between Throttling and Debouncing | CSS-Tricks
I got these confused the other day and someone corrected me. So I tossed it on the ol' list of blog post ideas and here…css-tricks.com