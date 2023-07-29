---
title: GetPlayerObjectModel
description: Kunin ang model ID ng isang player-object.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Kunin ang model ID ng isang player-object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | Ang ID ng player na player-object para makuha ang model       |
| objectid | Ang ID ng player-object kung saan kukunin ang model ID        |

## Returns

Ang model ID ng object ng player.

Kung wala ang player o object, mag rereturn ito -1 o 0 kung wala ang player o object.

## Examples

```c
new objectId = CreatePlayerObject(playerid, 1234, 0, 0, 0, 0, 0, 0);
new modelId = GetPlayerObjectModel(playerid, objectId);
```

## Related Functions

- [GetObjectModel](GetObjectModel): Kunin ang model ID ng isang object.