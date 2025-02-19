---
title: OnClientMessage
sidebar_label: OnClientMessage
description: Ова повратна функција је позван када год NPC види клијент поруку (ClientMessage).
tags: []
---

## Опис

Ова повратна функција је позван када год NPC види клијент поруку (ClientMessage). Ово ће увек бити када је [SendClientMessageToAll](../functions/SendClientMessageToAll) функција позвана и сваки пут када је [SendClientMessage](../functions/SendClientMessage) позвана NPC-у. Овај callback неће бити позиван када неко каже нешто. За верзију овога погледајте: [NPC:OnPlayerText](OnPlayerText).

| Име    | Опис                |
| ------ | ------------------- |
| color  | Боја ClientMessage. |
| text[] | Порука.             |

## Узвраћања

Ова повратна функција не враћа било шта.

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

## Повезане повратне функције

Следећа повратна функција може бити корисан, јер је на неки начин повезан са функцијом датом горе.

- [OnPlayerText](OnPlayerText): Ова повратна функција се позива сваки пут када било ко нешто каже у чету. То укључује било ког играча, било који други NPC, или самог тог NPC-а.

