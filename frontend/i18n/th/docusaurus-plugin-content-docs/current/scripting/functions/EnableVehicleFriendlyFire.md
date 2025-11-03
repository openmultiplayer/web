---
title: EnableVehicleFriendlyFire
sidebar_label: EnableVehicleFriendlyFire
description: Enable friendly fire for team vehicles.
tags: ["vehicle"]
---

## คำอธิบาย

Enable friendly fire for team vehicles. Players will be unable to damage teammates' vehicles (SetPlayerTeam must be used!).

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerTeam](SetPlayerTeam): Set a player's team.
