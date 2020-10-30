---
title: GetGravity_FR
description: Permets d'obtenir la valeur de la gravité.
tags: []
---

## คำอธิบาย

Permets d'obtenir la valeur de la gravité.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Gravité actuelle: %f", GetGravity());
```

## บันทึก

:::warning

Cette fonction n'est pas définie par défaut. Ajouté 'native GetGravity();' juste en dessous de l'include a_samp.inc pour pouvoir l'utiliser.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
