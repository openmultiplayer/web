---
title: "DisableNameTagLOS | open.mp"
description: "Disables the nametag Line-Of-Sight checking so that players can see nametags through objects."
canonical: https://open.mp/docs/scripting/functions/DisableNameTagLOS
language: en
---

# DisableNameTagLOS

## Description

Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## Notes

warning

This can not be reversed until the server restarts.

tip

You can also disable nametags Line-Of-Sight via [config.json](https://open.mp/docs/server/config.json)

```json
"use_nametag_los": false,
```

## Related Functions

-   [ShowNameTags](https://open.mp/docs/scripting/functions/ShowNameTags): Set nametags on or off.
-   [ShowPlayerNameTagForPlayer](https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
