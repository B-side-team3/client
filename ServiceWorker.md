Service Worker 와 chrome WorkBox

#### 서비스워커: 프로그래밍 가능한 네트워크 프록시

- 서비스워커는 브라우저가 백그라운드에서 실행하는 스크립트로, 웹페이지와는 별도의 생명주기를 가지고 따로 동작.
- 태초에 오프라인에서 웹페이지를 사용자에게 보여주기 위해 만들어졌기 때문에, 서비스 워커를 이용하면 브라우저에서 파일을 캐시할 수 있고, Request 를 가로채는 등 프록시 서버와 비슷하게 동작.

#### 특징

- 서비스워커는 보안상의 이유로 HTTPS 에서만 실행됨. 하여, 배포시에 HTTPS 환경으로 배포 해야 함.


### 기본 작업

- public 폴더 안에 서비스워커 파일을 정의. 
- https://rolebit.xz/sw.js 에 파일이 있다면, 서비스 워커는 https://rolebit.xz/**/* 에 해당하는 모든 파일에 대해 적용된다.

``` js
if ('serviceWorker' in navigator) { // 서비스 워커 지원 확인
    window.addEventListener('load', function () { // 브라우저 로드가 완료되면
        navigator.serviceWorker.register('/sw.js'); // 서비스 워커 등록
    });
}
```
HTML 을 직접 불러오는 main.js (rolebit 프로젝트 에서는 _app.tsx 또는 _document.ts) // 불분명 2022-12-11 -> _document.tsx 에 생성 2022-12-25
서비스워커를 등록해야 적용이 된다.

service-worker.js 파일을 정의 -> public/sw.js 생성

```js
console.log('Service Worker 동작 성공!')
```

### 설치 기준 (manifest 작성)
- short_name 또는 name
- icons - 192px 및 512px 아이콘 포함
- start_url
- display fullscreen, standalone 또는 minimal-ui 중 하나여야함
- prefer_related_applications 가 존재하거나 false 여서는 안됨
  
fetch 핸들러에 서비스워커를 등록해야함.

manifest.json reference: https://web.dev/add-manifest/

### ServiceWorker 작성

rolebit 프로젝트에서 next-pwa를 적용하고 있어 해당 문서를 살펴봐야함.
https://www.npmjs.com/package/next-pwa
