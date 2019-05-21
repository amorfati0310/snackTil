### 웹팩 

* 모듈번들러 


1.path 
path모듈을 이용해서 경로 지정 

오늘 엄청 맞는데 맞는데 하면서 왜 안되지 했는데 어지간하면 경로를 지정할 때는 path모듈로 저장해논 값으로 다시 지정하는 것이 좋다?
사실 정확한 이유는 잘 모르겠다. -> 찾아봐야 겠다. 
path모듈을 통해서 지정했을때 entry not found 이런 error가 안 나게 되었다....


2. 주요 개념
* [doc](https://webpack.js.org/concepts)
웹팩 공식문서를 가보면 
* entry 
* output 
* Loaders
* Plugins
* Mode 
* Browser Compatibility 
를 주요 항목으로 소개 하고 있다. 


2.1 entry 

entry 말 그대로 파일 시작점이다. <br>
하나 <br>
여러개지정할 수 있다. <br>
[] , {}  <br>

2.2 output 

entry에 엮어진 파일들을 모듈화해서 묶어 묶어 번들링 해준 결과물 파일이다. 

entry/ output에는 
entry 위치 
output도 결과물 낼 폴더 -> entry-> 대응되는 이름 이정도로 지정을 해준다.

2.3 로더는 

js아닌 친구들 js로 변환해주는 애다.
의존성 그래프에 js아닌 애들도 추가해준다 :D 

```
module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

```

rules[]에 각각의 로더들을 명시한다. 
use에 사용할 로더를 넣고 test에 매칭할 파일 정규식을 적어준다.

2.4 Plugins

플러그인을 사용하면 번들 최적화,  환경 변수 주입과 같은 광범위한 작업을 수행 할 수 있습니다

2.5 Mode

mode development, production mode로 관리한다. 

config파일을 따로 설정해두고 

devlopment냐 prdocution이냐에 따라서 또 다른 설정을 둘 수 있다.
```
const config = {
  entry: entries.reduce((acc,crr)=>{
    acc[crr] = `${SRC_PATH}/ts/${crr}.ts`;
    return acc;
  },Object.create(null)),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: BUILD_PATH,
    publicPath: BUILD_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin(), // Generates default index.html
  ],
  devtool: 'inline-source-map',
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};

```

3. HTML WebpackPlugin();