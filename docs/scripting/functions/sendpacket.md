---
title: "sendpacket | open.mp"
description: "Sends a packet (deprecated function)."
canonical: https://open.mp/docs/scripting/functions/sendpacket
language: en
---

# sendpacket

warning

This function is deprecated, Use [HTTP](https://open.mp/docs/scripting/functions/HTTP) or [pawn-requests](https://github.com/Southclaws/pawn-requests) plugin.

## Description

Sends a packet.

| Name | Description |
| --- | --- |
| const packet\[\] | The buffer that contains the packet to send. |
| size | Buffer size. |
| const destination\[\] = "" | The IP address and port number to which the packet must be sent. If absent or an empty string, this function will broadcast the packet and use the default port number 9930 _(optional="")_ |

## Return Values

**1** on success, **0** on failure.

## Related Functions

-   [@receivepacket](https://open.mp/docs/scripting/functions/@receivepacket): A packed was received.
-   [sendstring](https://open.mp/docs/scripting/functions/sendstring): Sends a packet containing a string.
