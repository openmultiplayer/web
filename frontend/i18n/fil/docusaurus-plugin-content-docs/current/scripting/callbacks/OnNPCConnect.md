---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: Tinatawag ang callback na ito kapag matagumpay na nakakonekta ang isang NPC sa server.
tags: ["npc"]
---

## Description

Tinatawag ang callback na ito kapag matagumpay na nakakonekta ang isang NPC sa server.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| myplayerid   | Ang playerid na binigay sa NPC                     |

## Examples

```c
public OnNPCConnect(myplayerid)
{
    printf("I successfully connected the server with ID %i!", myplayerid);
}
```

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnNPCDisconnect](OnNPCDisconnect): Ang callback na ito ay tinatawag kapag ang NPC ay nadiskonekta sa server.
- [OnPlayerConnect](OnPlayerConnect): Tinatawag ang callback na ito kapag kumonekta ang isang player sa server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ang callback na ito ay tinatawag kapag ang isang manlalaro ay umalis sa server.