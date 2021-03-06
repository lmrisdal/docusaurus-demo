# Rest Inbound Adapter

ConnXio (CX) lets customers provide data to the CX pipeline by providing it through a Rest endpoint. This page details how to set up a Rest fetch integration and the limits of using Api's in this way.

## Limitations

The greatest limitation calling Api's is the general statelessness of Api endpoints, in essence; how does CX know what it picked up from the endpoint last time and how do we ensure that data arrives in the correct order on the receiver side? The most obvious way to solve the problem of knowing what was requested is to keep track of this on the Api side. This could however cause desynchronization when messages fail and are not handled before the [polling interval](#polling-interval) fires again. Another solution is to practice [soft delete](https://en.wiktionary.org/wiki/soft_deletion#:~:text=Noun,data-itself-from-the-database.) on items and make the receiving system [idempotent](https://en.wikipedia.org/wiki/Idempotence). A third solution is to update the Api side with Acknowledgements on another endpoint for every file that is successfully delivered to the receiver. All of these strategies are applicable and could be used to mitigate desynchronization, however they are only necessary because data is picked up via Rest and are usually not needed when using other adapters, it's therefore seen as a limitation of the Rest adapter.

## Extending Logging

CX will add an `InterchangeId` header to the intake request to facilitate for continued transactional logging on the sender side if applicable.

## Configuring Restful message intake

To configure CX to start fetching data from a Rest endpoint select the "REST" option in the "Inbound Connection" shape:

![img](https://cmhpictsa.blob.core.windows.net/pictures/Azure%20storage%20menu.png?sv=2020-04-08&st=2021-10-27T11%3A56%3A53Z&se=2040-10-28T12%3A56%3A00Z&sr=b&sp=r&sig=S%2FltUS0elTLePVt5Aq536uNkr7Pa9XcY8ovTFJLUhmc%3D)

A new window pops up. Add data as seen below:

![img](https://cmhpictsa.blob.core.windows.net/pictures/Rest%20Inbound%20Config.png?sv=2020-08-04&st=2021-11-04T11%3A54%3A52Z&se=2040-11-05T11%3A54%3A00Z&sr=b&sp=r&sig=A2BUYolZuVJZ08rvAFV91MXGTRtGP%2F7Ybns0gjELH3o%3D)

- **Method**: The Http verb (or method as its properly called) to use when contacting the restful endpoint.
- **Endpoint Url**: The url of the endpoint.
- **Security Configuration**: The [security configuration](/Security/Security-Configurations) to use for authenticating the request.
- **Headers & Authorization Header Type**: Add headers here as necessary to either authenticate the request or add other needed parameters.

## Polling interval

`needs picture`
Polling interval dictates when the fetch operation triggers from CX. The minimum interval allowed at this time is 60 seconds. You can specify intervals by typing in seconds.

## Retry

Since CX reaches out and picks up files when using the Rest inbound adapter, retry is handled by the CX framework. If a fault happens when the [polling interval](#polling-interval) hits, the integration will be marked for execution at the next interval, which is after 60 seconds. This means that even if you have the polling interval set to trigger hourly or event daily, CX will try to execute the configuration every minute util it succeeds. This does not happen if the message is already picked up however since CX cant be sure the message is possible to requeue on the external message. The message will then be sent to catastrophic retry as described in the [Retry Page](/Retry).
