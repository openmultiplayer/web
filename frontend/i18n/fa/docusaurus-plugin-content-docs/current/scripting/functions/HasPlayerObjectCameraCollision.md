---
title: HasPlayerObjectCameraCollision
sidebar_label: HasPlayerObjectCameraCollision
description: چک می‌کنه که آیا یه player-object برخورد دوربین فعال داره یا نه. (SetPlayerObjectNoCameraCollision)
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه player-object برخورد دوربین فعال داره یا نه. ([SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision))

| نام      | توضیحات                         |
|----------|--------------------------------|
| playerid | ID بازیکن.                       |
| objectid | ID آبجکتی که باید چک بشه.       |

## مقادیر برگشتی

`true` - برخورد دوربین player-object فعاله.

`false` - برخورد دوربین player-object غیرفعاله.

## مثال‌ها

```c
if (HasPlayerObjectCameraCollision(playerid, playerobjectid))
{
    printf("Player: %d  Object: %d  Camera collision: enable", playerid, playerobjectid);
}
else
{
    printf("Player: %d  Object: %d  Camera collision: disable", playerid, playerobjectid);
}
```

## توابع مرتبط

- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): غیرفعال کردن برخورد بین دوربین بازیکنان و آبجکت مشخص شده.
- [HasObjectCameraCollision](HasObjectCameraCollision): چک می‌کنه که آیا یه آبجکت برخورد دوربین فعال داره یا نه.