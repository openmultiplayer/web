---
title: "SetNameTagDrawDistance | open.mp"
description: "Set the maximum distance to display the names of players."
canonical: https://open.mp/docs/scripting/functions/SetNameTagDrawDistance
language: en
---

# SetNameTagDrawDistance

## Description

Set the maximum distance to display the names of players.

| Name | Description |
| --- | --- |
| Float:distance | The distance to set. |

## Returns

This function does not return any specific values.

## Examples

```c
SetNameTagDrawDistance(20.0);
```

## Notes

note

Default distance is 70.0 SA units

## Related Functions

-   [LimitGlobalChatRadius](https://open.mp/docs/scripting/functions/LimitGlobalChatRadius): Limit the distance between players needed to see their chat.
-   [ShowNameTags](https://open.mp/docs/scripting/functions/ShowNameTags): Set nametags on or off.
-   [ShowPlayerNameTagForPlayer](https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
