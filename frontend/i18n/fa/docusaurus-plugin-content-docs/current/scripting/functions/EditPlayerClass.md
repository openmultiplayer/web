---
title: EditPlayerClass
sidebar_label: EditPlayerClass
description: ویرایش داده‌های کلاس.
tags: ["class"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ویرایش داده‌های کلاس.

| نام           | توضیحات                                                                  |
|----------------|-------------------------------------------------------------------------|
| classid        | شناسه کلاس برای ویرایش.                                                |
| team           | تیمی که می‌خواهید بازیکن در آن اسپاون شود.                             |
| skin           | [اسکین](../resources/skins) که بازیکن با آن اسپاون خواهد شد.          |
| Float:spawnX   | مختصات X نقطه اسپاون این کلاس.                                         |
| Float:spawnY   | مختصات Y نقطه اسپاون این کلاس.                                         |
| Float:spawnZ   | مختصات Z نقطه اسپاون این کلاس.                                         |
| Float:angle    | جهتی که بازیکن بعد از اسپاون رو به آن خواهد کرد.                        |
| WEAPON:weapon1 | اولین سلاح اسپاون برای بازیکن.                                          |
| ammo1          | مقدار مهمات برای اولین سلاح اسپاون.                                     |
| WEAPON:weapon2 | دومین سلاح اسپاون برای بازیکن.                                          |
| ammo2          | مقدار مهمات برای دومین سلاح اسپاون.                                     |
| WEAPON:weapon3 | سومین سلاح اسپاون برای بازیکن.                                          |
| ammo3          | مقدار مهمات برای سومین سلاح اسپاون.                                     |

## مثال‌ها

```c
// ویرایش کلاس شناسه 10
EditPlayerClass(10, TEAM_NONE, 299, -253.8291, 2602.9312, 62.8527, -90.0000, WEAPON_KNIFE, 1, WEAPON_MP5, 100, WEAPON_COLT45, 20);
```

## توابع مرتبط

- [AddPlayerClass](AddPlayerClass): افزودن یک کلاس.
- [AddPlayerClassEx](AddPlayerClassEx): افزودن کلاس با تیم پیش‌فرض.
- [GetAvailableClasses](GetAvailableClasses): دریافت تعداد کلاس‌های تعریف شده.

## منابع مرتبط

- [Skin IDs](../resources/skins)
- [Weapon IDs](../resources/weaponids)