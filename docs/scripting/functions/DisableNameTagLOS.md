---
id: DisableNameTagLOS
title: DisableNameTagLOS
description: Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.
tags: []
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.

| Name | Description |
| ---- | ----------- |


## Examples

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## Notes

:::warning

This can not be reversed until the server restarts.

:::

## Related Functions

- [ShowNameTags](../functions/ShowNameTags.md): Set nametags on or off.
- [ShowPlayerNameTagForPlayer](../functions/ShowPlayerNameTagForPlayer.md): Show or hide a nametag for a certain player.
