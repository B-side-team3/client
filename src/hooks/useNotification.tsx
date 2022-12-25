const useNotification = (title: string, options = {}) => {
  const noti = () => new Notification(title, options);

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {});
    } else {
      noti();
      console.log("noti gogo");
      console.log(title, options);
    }
  };

  return { fireNotif };
};

export default useNotification;
