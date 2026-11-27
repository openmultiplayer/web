---
title: "OnClientMessage | open.mp"
description: "This callback gets called whenever the NPC sees a ClientMessage."
canonical: https://open.mp/docs/scripting/callbacks/OnClientMessage
language: en
---

# OnClientMessage

warning

This callback is deprecated.

## Description

This callback gets called whenever the NPC sees a ClientMessage. This will be everytime a [SendClientMessageToAll](https://open.mp/docs/scripting/functions/SendClientMessageToAll) function is used and everytime a [SendClientMessage](https://open.mp/docs/scripting/functions/SendClientMessage) function is sent towards the NPC. This callback won't be called when someone says something. For a version of this with player text, see [NPC:OnPlayerText](https://open.mp/docs/scripting/callbacks/OnPlayerText).

| Name | Description |
| --- | --- |
| color | The color the ClientMessage is. |
| text\[\] | The actual message. |

## Returns

This callback does not handle returns.

## Examples

```c
public OnClientMessage(color, text[])
{
    if (strfind(text, "Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerText](https://open.mp/docs/scripting/callbacks/OnPlayerText): This callback is called everytime anyone says anything in the chat. This includes any player, any other NPC, or the same NPC himself.
