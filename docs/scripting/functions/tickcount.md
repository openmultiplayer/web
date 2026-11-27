---
title: "tickcount | open.mp"
description: "Returns the number of milliseconds since the start-up of the server."
canonical: https://open.mp/docs/scripting/functions/tickcount
language: en
---

# tickcount

## Description

This function can be used as a replacement for [GetTickCount](https://open.mp/docs/scripting/functions/GetTickCount), as it returns the number of milliseconds since the start-up of the server.

| Name | Description |
| --- | --- |
| &granularity=0 | Upon return, this value contains the number of ticks that the internal system time will tick per second. This value therefore indicates the accuracy of the return value of this function. |

## Returns

The number of milliseconds since start-up of the system. For a 32-bit cell, this count overflows after approximately 24 days of continuous operation.

## Related Functions

-   [GetTickCount](https://open.mp/docs/scripting/functions/GetTickCount): Get the uptime of the server.
