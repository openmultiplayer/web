---
title: GetMyFacingAngle
description: Get the current facing angle of the NPC.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Get the current facing angle of the NPC.

| Name                 | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| &Float:Angle         | A float to save the angle in, passed by reference.               |

## Returns

The facing angle is stored in the specified variable.

## Examples

```c
public OnPlayerText(playerid, text[])
{
new Float:Angle;
GetMyFacingAngle(Angle);
printf("I am currently facing %f!", Angle);

```

## Related Functions

- [SetMyFacingAngle](SetMyFacingAngle): Set the NPC's facing angle.
