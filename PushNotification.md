Push Notification (Sending & Receiving push messages)

1. the user subscribes to the push service
2. the push service returns a "subscription object"
3. your app saves subscription object to the server
4. send a push message from ur server to the user via he push service
5. the service worker handles the push messages (serviceworker registration.showNotification)


#### vapid key 
the subscription object would be... 

```js
    {
        "endpoint": .... fcm.googleapis.com... (google fcm 을 쓴다면..),
        "keys": {
            "p256dh": .... public key
            "auth": ...authorization token 
        }
    }
```

#### way of sending message

send message payload from ur server to the endpoint URL encrypted with the public key

1. Generatet Message from server
2. Send to given End Point url
3. Endpoint grab the JSON and send to Browser
4. Receive sent message and show push notification registered callback function

#### The push event

it would be

```js
// to show the push notifiaction from service-worker.js

self.addEventListener('push', event => {
    const title= event.data.text();
    event.waitUntil(
        self.registration.showNotification(title)
    );
});

```

#### Check if user is subscribed

```js
navigator.serviceWorker.ready.then(reg => {
    reg.pushManager.getSubscription().then(sub => {
        if(sub === undefined){
            //ask user to register for Push
        }else{
            // You have subscription, update the databases
        }
    })
})
```

#### Subscribe to the push service

```js
navigator.serviceWorker.getRegistration().then(reg => {
    reg.pushManager.subscribe({
        userVisibleOnly: true
    }).then(sub => {
        //send sub.toJSON() to server
    })
})
```
