---
title: sendpacket
sidebar_label: sendpacket
description: Sends a packet. (deprecated function)
tags: ["datagram"]
---

<LowercaseNote />

:::warning

This function is deprecated, Use [HTTP](HTTP) or [pawn-requests](https://github.com/Southclaws/pawn-requests) plugin.

:::

## Description

Sends a packet.

| Name                     | Description                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const packet[]           | The buffer that contains the packet to send.                                                                                                                                                |
| size                     | Buffer size.                                                                                                                                                                                |
| const destination[] = "" | The IP address and port number to which the packet must be sent. If absent or an empty string, this function will broadcast the packet and use the default port number 9930 _(optional="")_ |

## Return Values

**1** on success, **0** on failure.

## Related Functions

- [@receivepacket](@receivepacket): A packed was received.
- [sendstring](sendstring): Sends a packet containing a string.
