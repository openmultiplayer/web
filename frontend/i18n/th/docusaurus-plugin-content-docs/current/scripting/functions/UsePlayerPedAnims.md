---
title: UsePlayerPedAnims
sidebar_label: UsePlayerPedAnims
description: Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).
tags: ["player"]
---

## คำอธิบาย

Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).

## ตัวอย่าง

```c
public OnGameModeInit()
{
    UsePlayerPedAnims();
    return 1;
}
```

## บันทึก

:::tip

Only works when placed under [OnGameModeInit](../callbacks/OnGameModeInit).

Not using this function causes two-handed weapons (not dual-handed - a single weapon that is held by both hands) to be held in only one hand.

:::

:::tip

You can also enable standard player walking animation via [config.json](../../server/config.json)

```json
"use_player_ped_anims": true,
```

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ApplyAnimation](../functions/ApplyAnimation): Apply an animation to a player.
- [ClearAnimations](../functions/ClearAnimations): Clear any animations a player is performing.
