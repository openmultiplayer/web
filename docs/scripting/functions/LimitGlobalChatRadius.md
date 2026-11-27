---
title: "LimitGlobalChatRadius | open.mp"
description: "Set a radius limitation for the chat."
canonical: https://open.mp/docs/scripting/functions/LimitGlobalChatRadius
language: en
---

# LimitGlobalChatRadius

## Description

Set a radius limitation for the chat. Only players at a certain distance from the player will see their message in the chat. Also changes the distance at which a player can see other players on the map at the same distance.

| Name | Description |
| --- | --- |
| Float:chatRadius | The range in which players will be able to see chat. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    LimitGlobalChatRadius(200.0);
    return 1;
}
```

## Related Functions

-   [SetNameTagDrawDistance](https://open.mp/docs/scripting/functions/SetNameTagDrawDistance): Set the distance from where people can see other player's nametags.
-   [SendPlayerMessageToPlayer](https://open.mp/docs/scripting/functions/SendPlayerMessageToPlayer): Force a player to send text for one player.
-   [SendPlayerMessageToAll](https://open.mp/docs/scripting/functions/SendPlayerMessageToAll): Force a player to send text for all players.

## Related Callbacks

-   [OnPlayerText](https://open.mp/docs/scripting/callbacks/OnPlayerText): Called when a player sends a message via the chat.
