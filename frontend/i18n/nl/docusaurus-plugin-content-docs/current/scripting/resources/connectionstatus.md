---
title: "Verbindingsstatus"
sidebar_label: "Verbindingsstatus"
description: Statussen gebruikt door NetStats_ConnectionStatus.
---

Deze statussen worden gebruikt door [NetStats_ConnectionStatus](../functions/NetStats_ConnectionStatus) (RakNet).

| ID | Status                                               | Betekenis (beknopt) |
| -- | ---------------------------------------------------- | ------------------- |
| 0  | CONNECTION_STATUS_NO_ACTION / CONNSTAT_NO_ACTION     | Interne synchronisatie; doorgaans niet relevant          |
| 1  | CONNECTION_STATUS_DISCONNECT_ASAP / CONNSTAT_DISCONNECT_ASAP | Client zo snel mogelijk verbreken                |
| 2  | CONNECTION_STATUS_DISCONNECT_ASAP_SILENTLY / CONNSTAT_DISCONNECT_ASAP_SILNT | Stil verbreken (geen notificatie) |
| 3  | CONNECTION_STATUS_DISCONNECT_ON_NO_ACK / CONNSTAT_DISCONNECT_ON_NO_ACK | Onbekend |
| 4  | CONNECTION_STATUS_REQUESTED_CONNECTION / CONNSTAT_REQUESTED_CONNECTION | Client heeft verbinding aangevraagd |
| 5  | CONNECTION_STATUS_HANDLING_CONNECTION_REQUEST / CONNSTAT_HANDLING_CONN_REQ | Server verwerkt aanvraag |
| 6  | CONNECTION_STATUS_UNVERIFIED_SENDER / CONNSTAT_UNVERIFIED_SENDER | Alleen specifieke pakketten toegestaan |
| 7  | CONNECTION_STATUS_SET_ENCRYPTION_ON_MULTIPLE_16_BYTE_PACKET / CONNSTAT_SET_ENCRYPTION | Onbekend |
| 8  | CONNECTION_STATUS_CONNECTED / CONNSTAT_CONNECTED     | Client is verbonden |


