---
title: OnNPCDisconnect
description: Ang callback na ito ay tinatawag kapag ang NPC ay nadiskonekta sa server.
tags: ["npc"]
---

## Description

Ang callback na ito ay tinatawag kapag ang NPC ay nadiskonekta sa server.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| reason[]     | Ang dahilan kung bakit nadiskonekta ang bot sa server   |

## Examples

```c
public OnNPCDisconnect(reason[])
{
    printf("Disconnected from the server. %s", reason);
}
```

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnNPCConnect](OnNPCConnect): Tinatawag ang callback na ito kapag matagumpay na nakakonekta ang NPC sa server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ang callback na ito ay tinatawag kapag ang isang manlalaro ay umalis sa server.
- [OnPlayerConnect](OnPlayerConnect): Tinatawag ang callback na ito kapag kumonekta ang isang player sa server.