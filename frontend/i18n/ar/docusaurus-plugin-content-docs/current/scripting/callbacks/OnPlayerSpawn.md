---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: يستدعي الخادم هذه الدالة عند ظهور اللاعب في عالم اللعبة.
tags: ["player"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما يظهر اللاعب في عالم اللعبة، مثلما يحدث بعد استدعاء [SpawnPlayer](../functions/SpawnPlayer).

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي ظهر في عالم اللعبة. |

## القيم المعادة وترتيب الاستدعاء {#returns}

- `0`: تمنع السكربتات الجانبية الأخرى من تلقي هذا الاستدعاء.
- `1`: تسمح بتمريره إلى السكربت الجانبي التالي.

تُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));

    new string[64];
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);

    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

:::note

تخصم San Andreas تلقائيًا `100$` عند موت اللاعب مقابل العلاج في المستشفى. هذا السلوك موجود أيضًا في SA-MP، لكنه أُزيل من open.mp لتترك إدارة الأموال بالكامل للسكربتات.

بعض السكربتات تعوّض هذا الخصم بإضافة `100$` بعد الموت أو عند إعادة الظهور. إذا كان سكربتك يفعل ذلك، فاحذف التعويض؛ مع أن open.mp يحاول مراعاة السكربتات التي تستخدمه. أما إذا كنت تعتمد على الخصم الأصلي، فأضف ما يلي إلى [OnPlayerDeath](OnPlayerDeath):

```c
GivePlayerMoney(playerid, -100);
```

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnPlayerDeath](OnPlayerDeath): عند موت لاعب.
- [OnVehicleSpawn](OnVehicleSpawn): عند إعادة ظهور مركبة.

## دوال ذات صلة {#related-functions}

- [SpawnPlayer](../functions/SpawnPlayer): إظهار لاعب في عالم اللعبة برمجيًا.
- [AddPlayerClass](../functions/AddPlayerClass): إضافة فئة إلى شاشة اختيار الشخصية.
- [SetSpawnInfo](../functions/SetSpawnInfo): تعيين بيانات ظهور اللاعب.
