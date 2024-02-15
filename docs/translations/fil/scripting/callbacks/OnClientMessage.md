---
title: OnClientMessage
description: This callback gets called whenever the NPC sees a ClientMessage.
tags: []
---

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Deskripsyon

Ang callback na ito ay na tatawag kapag ang NPC ay nakakita ng ClientMessage. Eto ay mangyayari lagi kapag nagamitan ng SendClientMessageToAll na function at SendClientMessage na function papunta sa NPC. Ang callback na ito ay hindi matatawag kapag may sinabi ang isang player. Para sa version nito sa OnPlayerText gamitin ang NPC:OnPlayerText.

| Pangalan | Deskripsyon                     |
| -------- | ------------------------------- |
| color    | Ang color ng ClientMessage.     |
| text[]   | Ang mismong message.            |

## Returns

Hindi nag rereturn ang callback na ito.

## Mga Halimbawa

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Mga Related na Callbacks