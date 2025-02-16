---
title: GetMyFacingAngle
sidebar_label: GetMyFacingAngle
description: Get the current facing angle of the NPC.
tags: []
---

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

- [SetMyFacingAngle](../functions/SetMyFacingAngle): Set the NPC's facing angle.
