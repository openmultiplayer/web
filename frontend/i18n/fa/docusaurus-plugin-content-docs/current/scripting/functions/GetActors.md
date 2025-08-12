---
title: GetActors
sidebar_label: GetActors
description: آرایه‌ای از شناسه‌های Actor های ساخته شده در سرور رو می‌گیره.
tags: ["actor"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آرایه‌ای از شناسه‌های Actor های ساخته شده در سرور رو می‌گیره.

| اسم       | توضیح                                                                  |
| --------- | ---------------------------------------------------------------------- |
| actors[]  | آرایه‌ای که شناسه‌های Actor ها توش ذخیره میشه، که با reference پاس داده میشه. |
| size      | اندازه آرایه.                                                           |

## مقادیر برگشتی

تابع تعداد Actor هایی که در آرایه ذخیره شدن رو برمی‌گردونه.

## مثال‌ها

</div>

```pawn
new actors[MAX_ACTORS];

GetActors(actors, sizeof(actors));
// The `actors` array now contains created actor IDs. { 0, 1, 2, 3, 4, ... }
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetPlayers](GetPlayers): آرایه‌ای از شناسه‌های بازیکنان فعلی سرور رو می‌گیره.
- [GetVehicles](GetVehicles): آرایه‌ای از شناسه‌های خودروهای ساخته شده در سرور رو می‌گیره.

</div>