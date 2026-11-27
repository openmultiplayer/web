---
title: "GetServerTickRate | open.mp"
description: "Gets the tick rate (like FPS) of the server."
canonical: https://open.mp/docs/scripting/functions/GetServerTickRate
language: en
---

# GetServerTickRate

## Description

Gets the tick rate (like FPS) of the server.

## Returns

The server tick rate (per second). Returns 0 when the server is just started.

## Examples

```c
printf("The current server tick rate is: %i", GetServerTickRate());
```

## Related Functions

-   [GetNetworkStats](https://open.mp/docs/scripting/functions/GetNetworkStats): Gets the servers networkstats and saves it into a string.
