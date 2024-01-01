---
title: SetMyFacingAngle
description: Set the NPC's facing angle.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Set the NPC's facing angle.

| Name                 | Description                   |
| -------------------- | ----------------------------- |
| Float:ang            | The new NPC's facing angle.   |

## Examples

```c
SetMyFacingAngle(0); //NPC faces north
```

```c
       north (0)
          |
(90) west- -east (270)
          |
       south (180)
```

## Related Functions

- [GetMyFacingAngle](GetMyFacingAngle): Get the NPC's facing angle.
