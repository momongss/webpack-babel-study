끓어오르는 분노를 참아가며 웹팩 바벨 연동을 시도했다.

결론부터 얘기하면 웹팩에서 바벨을 동작시키는 구조에서 버그를 발견하며
webpack.config.js 안에 직접 바벨을 설정하는 것을 포기했다.

(나보다 훌륭한 분들은 뭔가 방법을 알겠지만, 나는 일단 우회할거다.)

발견한 버그는 이렇다.
webpack 에서 babel 로 트랜스파일을 마친 뒤, 마지막으로 webpack 이
번들된 코드를 감쌀 때 arrow function 을 사용하는 바람에,
ie 에서 동작하지 않게 된다.

왜 이런 버그가 발견되지 않았을까? 보통 react 나 vue 환경을 구축하는데 babel을 사용하기 때문인 것 같다.
<br>
<br>
react jsx 를 컴파일하는데 babel 을 사용하는 것과, IE 지원을 위해 babel을 사용하는 방식이 다르기 때문에, 설정도 따로 하는게 맞다는 생각이 든다. IE 지원을 위한 컴파일은 배포 직전 1회만 해주면 되는데, react jsx 컴파일은 개발 내내 이뤄지기 때문에, 이 환경설정은 같이 해주면 IE 지원을 위한 컴파일이 쓸데없이 수행될 것이다.

그래서, 이제 어떻게 할거냐면 webpack 으로 번들된 파일에 babel을 따로 적용할 거다.
아마 babel 도 컴파일시 --watch 옵션이 있을 것이다. 번들된 파일이 들어있는 폴더에 babel watch를
걸어놓으면 될 것 같다.

=> 되는 거 확인했다. watch mode 로도 된다.

너무 간단해서 눈물이 난다.
