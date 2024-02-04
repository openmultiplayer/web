---
title: OnVehicleStreamIn
الزصف : يتم استدعاء هذا الاستدعاء أو الكال باك عند تدفق سيارة بواسطة كلاينت اللاعب
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

<div dir="rtl" style={{ textAlign: "right" }}>


## الوصف

يتم استدعاء هذا الاستدعاء أو الكال باك عند تدفق سيارة بواسطة كلاينت اللاعب

| الوصف        |        الإسم                                                |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | ايدي السيارة الذي تم تدفقها للاعب.                          |
| forplayerid | هوية اللاعب الذي قام بتدفق السيارة                          |

## Returns

دائمًا يتم استدعاؤه أولاً في الفلترسكربتات.

## أمثلة

</div>

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```
<div dir="rtl" style={{ textAlign: "right" }}>

## Notes

<TipNPCCallbacks/>

## الاستدعاءات او كالباكات ذات الصلة

قد تكون الاستدعاءات التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى.

- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): يتم استدعاؤه عندما يتم تدفق السبارة خارج كلاينت اللاعب.
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): يتم استدعاؤه عندما يتم تدفق لاعب آخر إلى كلاينت اللاعب.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): يتم استدعاؤه عندما يتم تدفق لاعب آخر خارج كلاينت اللاعب.

</div>

