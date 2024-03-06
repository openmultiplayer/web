---
title: sendstring
description: Sends a packet containing a string. (deprecated function)
tags: ["datagram"]
---

<LowercaseNote />

:::warning

This function is deprecated, Use [HTTP](HTTP) or [pawn-requests](https://github.com/Southclaws/pawn-requests) plugin.

:::

## Description

Sends a packet containing a string.

| Name                     | Description                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const message[]          | The buffer that contains the string to send.  If this is an unpacked string,  it will be UTF-8 encoded before being transferred.                                                             |
| const destination[] = "" | The IP address and port number to which the packet must be sent.  If absent or an empty string, this function will broadcast the packet and use the default port number 9930 *(optional="")* |

## Return Values

**1** on success, **0** on failure.

## Related Functions

- [@receivestring](@receivestring): A packed was received.
- [sendpacket](sendpacket): Sends a packet.
