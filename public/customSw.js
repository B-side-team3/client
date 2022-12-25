
self.__WB_DISABLE_DEV_LOGS = true
// listen to message event from window
self.addEventListener("message", event => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  // window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event?.data);
  displayNoti('title', event.data.message)
});

self.addEventListener('push', (event) => {
  // event는 서버에서 payload로 보내준 데이터이다.
  let { title, body, icon, tag } = JSON.parse(event.data && event.data.text());

  // 이외에도 여러 옵션이 있다.
  // 참고: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
  event.waitUntil(self.registration.showNotification(title || '', { body, tag, icon }));
});

self.addEventListener("notificationclick", event => {
  event?.notification.close();
  event?.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(clientList => {
        if (clientList.length > 0) {
          let client = clientList[0];
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i];
            }
          }

          return client.focus();
        }

        return self.clients.openWindow("/");
      }),
  );
});

function displayNoti(title, message) {
  console.log(title, message);
  const options = {
    body: message,
    icon: "/public/assets/icons/48x48.png",
    image: "/public/assets/icons/48x48.png",
    dir: "ltr",
    lang: "ko-KR",
    vibrate: [100, 50, 200],
    badge: "/public/assets/icons/48x48.png",
    tag: "confirm-notificaction",
    renotify: true,
    actions: [
      {
        action: "confirm",
        title: "확인하기",
        icon: "/public/assets/icons/48x48.png",
      },
      {
        action: "cancel",
        title: "취소",
        icon: "/public/assets/icons/48x48.png",
      },
    ],
  };
  console.log(self.registration.showNotification)
  self.registration.showNotification('title testestestt', options);
}


// /*

// body : notification 내용입니다.

// icon : notification text 좌측 또는 우측에 icon image가 함께 보여집니다.

// image : notification 상단에 image가 함께 보여집니다. (device 종류에 따라 위치가 다를 수 있음)

// dir : text의 direction을 나타냅니다. (예 : ltr(left to right)

// lang : 사용자 언어이며 4 letter country code(BCP 47)로 표시합니다

// vibrate : vibration pattern을 설정합니다. [ 100ms : 진동, 50ms : 멈춤, 200ms 진동 ] -> 일부 device에서만 지원됩니다.

// badge : 자동으로 badge용 image 형태로 변형되어 notification 수신 시 device 상단의 status bar에 badge image가 표시됩니다. -> 일부 device에서만 지원됩니다.

// tag : notification의 id와 같은 역할을 하며, 같은 tag를 가진 notification을 반복적으로 보내거나 중복 notification을 나타나지 않도록 할 수 있습니다. -> 일부 device에서만 지원됩니다.

// renotify : renotify가 true로 설정되면 same tag로 설정된 notification이 와도 사용자에게 alert 또는 vibrate(진동)로 알립니다. -> 일부 device에서만 지원됩니다.

// actions : notification에 어떤 action(confirm, cancle)을 취했을 때 event를 발생시킵니다. -> 일부 device에서만 지원됩니다.

// */

// self.addEventListener("notificationclick", event => {
//   if (event.action === "confirm") {
//     console.log("######## Confirm was chosen");
//   } else {
//     console.log("######## Not Confirm button clicked");
//   }
//   event.notification.close();
// });

// To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// https://developers.google.com/web/tools/workbox/guides/configure-workbox#disable_logging
//
