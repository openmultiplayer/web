---
title: OnClientMessage
description: Овај колбек је позван када год NPC види клијент поруку (ClientMessage).
tags: []
---

## Опис

Овај колбек је позван када год NPC види клијент поруку (ClientMessage). Ово ће увек бити када је SendClientMessageToAll функција позвана и сваки пут када је SendClientMessage позвана NPC-у. Овај колбек неће бити позиван када неко каже нешто. За верзију овога погледајте: NPC:OnPlayerText.

| Име    | Опис                |
| ------ | ------------------- |
| color  | Боја ClientMessage. |
| text[] | Порука.             |

## Узвраћања

Овај колбек нема узвраћања.

## Примери

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Сродне функције
