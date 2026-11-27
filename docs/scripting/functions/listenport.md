---
title: "listenport | open.mp"
description: "Sets up the port number to listen at."
canonical: https://open.mp/docs/scripting/functions/listenport
language: en
---

# listenport

warning

This function is deprecated, Use [HTTP](https://open.mp/docs/scripting/functions/HTTP) or [pawn-requests](https://github.com/Southclaws/pawn-requests) plugin.

## Description

Sets up the port number to listen at.

| Name | Description |
| --- | --- |
| port | The number of the port to listen at. This must be a value between 1 and 65535, but you should probably avoid to use any of the reserved port numbers. |

## Return Values

This function always returns **0**.

## Notes

warning

You must call this function **before** receiving the first packet. In other words, you should set up a port in main.

note

If no port number has been explicitily chosen, the module will listen at port **9930**.

## Related Functions

-   [@receivestring](https://open.mp/docs/scripting/functions/@receivestring): A packed was received.
-   [sendstring](https://open.mp/docs/scripting/functions/sendstring): Sends a packet containing a string.
