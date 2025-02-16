---
title: GetObjectModel
description: Kunin ang model ID ng isang object (CreateObject).
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Kunin ang model ID ng isang object (CreateObject).

| Name     | Description                              |
| -------- | ---------------------------------------- |
| objectid | Ang ID ng object na kukunin ang model    |

## Returns

Ang model ID ng object.

-1 kung walang object.

## Examples

```c
new objectid = CreateObject(1234, 0, 0, 0, 0, 0, 0);
new modelid = GetObjectModel(objectid);
```

## Related Functions

- [GetPlayerObjectModel](GetPlayerObjectModel): Kunin ang model ID ng isang player-object.