import api from "@utils/interceptor";

const NotiPermission = () => {
  Notification.requestPermission().then(status => {
    console.log("Notification 상태", status);
    if (status === "denied") {
      alert("Notification 거부됨");
    } else if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register("/service-worker.js") // serviceworker 등록
        .then(registration => {
          // push subscription이 유저에게 항상 보이는지 여부. 알림을 숨기는 등 작업이 들어가지는에 대한 여부인데, 크롬에서는 true 밖에 지원안한다.
          // https://developers.google.com/web/fundamentals/push-notifications/subscribing-a-user
          const subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey:
              "BGxdxvsr0yKikF6mWbzfJYQqDY2HIrkuyP9SX0Z3ffTKNwanO3EbrOGcJXmsVQ9WjY2WUWnOdPLz59U67Y5xv70", // 발급받은 vapid public key
          };

          return registration.pushManager.subscribe(subscribeOptions);
        })
        .then(async pushSubscription => {
          // subscription 정보를 저장할 서버로 보낸다.
          await api.post("/register", { data: pushSubscription });
        });
    }
  });
};

export default NotiPermission;
