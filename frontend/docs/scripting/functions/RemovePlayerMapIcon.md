---
title: RemovePlayerMapIcon
sidebar_label: RemovePlayerMapIcon
description: Removes a map icon that was set earlier for a player using SetPlayerMapIcon.
tags: ["player"]
---

## Description

Removes a map icon that was set earlier for a player using SetPlayerMapIcon.

| Name     | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| playerid | The ID of the player whose icon to remove.                                      |
| iconid   | The ID of the icon to remove. This is the second parameter of SetPlayerMapIcon. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute.

## Examples

```c
SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0);

// Later on
RemovePlayerMapIcon(playerid, 12);
```

## Related Functions

- [SetPlayerMapIcon](SetPlayerMapIcon): Create a mapicon for a player.
