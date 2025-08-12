---
title: GetPlayerClass
sidebar_label: GetPlayerClass
description: داده‌های کلاس را دریافت می‌کند.
tags: ["class"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

داده‌های کلاس را دریافت می‌کند.

| نام           | توضیحات                                                   |
| ------------- | --------------------------------------------------------- |
| classid       | شناسه کلاسی که می‌خواهید داده‌هایش را بگیرید.                |
| &team         | متغیری برای ذخیره کردن تیم، که با reference پاس می‌شود.    |
| &skin         | متغیری برای ذخیره کردن اسکین، که با reference پاس می‌شود.  |
| &Float:spawnX | متغیر float برای ذخیره کردن مختصات X، که با reference پاس می‌شود. |
| &Float:spawnY | متغیر float برای ذخیره کردن مختصات Y، که با reference پاس می‌شود. |
| &Float:spawnZ | متغیر float برای ذخیره کردن مختصات Z، که با reference پاس می‌شود. |
| &Float:angle  | متغیر float برای ذخیره کردن زاویه، که با reference پاس می‌شود. |
| &WEAPON:weapon1 | متغیری برای ذخیره کردن اسلحه اول، که با reference پاس می‌شود. |
| &ammo1 | متغیری برای ذخیره کردن مهمات اول، که با reference پاس می‌شود. |
| &WEAPON:weapon2 | متغیری برای ذخیره کردن اسلحه دوم، که با reference پاس می‌شود. |
| &ammo2 | متغیری برای ذخیره کردن مهمات دوم، که با reference پاس می‌شود. |
| &WEAPON:weapon3 | متغیری برای ذخیره کردن اسلحه سوم، که با reference پاس می‌شود. |
| &ammo3 | متغیری برای ذخیره کردن مهمات سوم، که با reference پاس می‌شود. |

## مثال‌ها

```c
new
    classid = 10,
    team,
    skin,
    Float:spawnX,
    Float:spawnY,
    Float:spawnZ,
    Float:angle,
    WEAPON:weapon1,
    ammo1,
    WEAPON:weapon2,
    ammo2,
    WEAPON:weapon3,
    ammo3;

GetPlayerClass(classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);

printf("[Class id %d data]\n\
    team: %d\n\
    skin: %d\n\
    spawnX: %f\n\
    spawnY: %f\n\
    spawnZ: %f\n\
    angle: %f\n\
    weapon1: %d\n\
    ammo1: %d\n\
    weapon2: %d\n\
    ammo2: %d\n\
    weapon3: %d\n\
    ammo3: %d", 
    classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
```

## تابع‌های مرتبط

- [AddPlayerClass](AddPlayerClass): یک کلاس اضافه می‌کند.
- [AddPlayerClassEx](AddPlayerClassEx): یک کلاس با تیم پیش‌فرض اضافه می‌کند.
- [GetAvailableClasses](GetAvailableClasses): تعداد کلاس‌های تعریف شده را دریافت می‌کند.