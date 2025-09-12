---
title: HasObjectCameraCollision
sidebar_label: HasObjectCameraCollision
description: چک می‌کنه که آیا یه آبجکت برخورد دوربین فعال داره یا نه. (SetObjectNoCameraCollision)
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه آبجکت برخورد دوربین فعال داره یا نه. ([SetObjectNoCameraCollision](SetObjectNoCameraCollision))

| نام      | توضیحات                         |
|----------|--------------------------------|
| objectid | ID آبجکتی که باید چک بشه.       |

## مقادیر برگشتی

`true` - برخورد دوربین آبجکت فعاله.

`false` - برخورد دوربین آبجکت غیرفعاله.

## مثال‌ها

```c
if (HasObjectCameraCollision(objectid))
{
    printf("Object %d camera collision: enable", objectid);
}
else
{
    printf("Object %d camera collision: disable", objectid);
}
```

## توابع مرتبط

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): غیرفعال کردن برخورد بین دوربین بازیکنان و آبجکت مشخص شده.
- [HasPlayerObjectCameraCollision](HasPlayerObjectCameraCollision): چک می‌کنه که آیا یه player-object برخورد دوربین فعال داره یا نه.