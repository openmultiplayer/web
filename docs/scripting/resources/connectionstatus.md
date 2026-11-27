---
title: "Connection status | open.mp"
description: "Connection status used by NetStats_ConnectionStatus."
canonical: https://open.mp/docs/scripting/resources/connectionstatus
language: en
---

# Connection status

## Description

This page contains the connection statuses used by [NetStats\_ConnectionStatus](https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus). These constants are used internally by RakNet (the networking library SA-MP uses).

## Often used

| ID | State | Meaning |
| --- | --- | --- |
| 0 | CONNECTION\_STATUS\_NO\_ACTION **/** CONNSTAT\_NO\_ACTION | Whenever a packet has to be sent to the client, it will be processed by a separate thread. As this thread is sending a packet, it is possible for the server to say... receive a disconnection packet, which may get processed in the meantime. This would result in data racing (and thus the behavior is undefined). To solve this problem, the connection state will change to CONNECTION\_STATUS\_NO\_ACTION, and any changes to the player ID will not occur until the update thread has given the main thread the "green light". Now, as a server developer, this connection state is not really relevant to you, so you probably won't ever need it. |
| 1 | CONNECTION\_STATUS\_DISCONNECT\_ASAP **/** CONNSTAT\_DISCONNECT\_ASAP | The client is to be disconnected as soon as possible. It is possible for NetStats\_ConnectionStatus to return this value during the disconnect process, specifically when a player is not yet "truely" disconnected, yet [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect) may have fired already for this player. |
| 2 | CONNECTION\_STATUS\_DISCONNECT\_ASAP\_SILENTLY **/** CONNSTAT\_DISCONNECT\_ASAP\_SILNT | The client is to be disconnected as soon as possible, but without sending the ID\_DISCONNECTION\_NOTIFICATION packet to the client. SA-MP sends this in several cases (however SA-MP itself most likely doesn't, RakNet definitely does), for example when the server password is entered incorrectly. |
| 3 | CONNECTION\_STATUS\_DISCONNECT\_ON\_NO\_ACK **/** CONNSTAT\_DISCONNECT\_ON\_NO\_ACK | Unknown. |
| 4 | CONNECTION\_STATUS\_REQUESTED\_CONNECTION **/** CONNSTAT\_REQUESTED\_CONNECTION | The client has requested a connection with the server. |
| 5 | CONNECTION\_STATUS\_HANDLING\_CONNECTION\_REQUEST **/** CONNSTAT\_HANDLING\_CONN\_REQ | The server is currently handling the connection request. |
| 6 | CONNECTION\_STATUS\_UNVERIFIED\_SENDER **/** CONNSTAT\_UNVERIFIED\_SENDER | Initially, incoming connection requests appear to use UNVERIFIED\_SENDER. While the client-server connection is in this state, only ID\_CONNECTION\_REQUEST packets are read. The server will automatically close the connection and add the client IP to a temporary blacklist if anything else is sent. Whether or not it is possible for [NetStats\_ConnectionStatus](https://open.mp/docs/scripting/functions/NetStats_ConnectionStatus) to return this status is doubtful. |
| 7 | CONNECTION\_STATUS\_SET\_ENCRYPTION\_ON\_MULTIPLE\_16\_BYTE\_PACKET **/** CONNSTAT\_SET\_ENCRYPTION | Unknown. |
| 8 | CONNECTION\_STATUS\_CONNECTED **/** CONNSTAT\_CONNECTED | The client is connected to the server. |
