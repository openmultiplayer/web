---
title: OnActorStreamIn
description: This callback is called when an actor is streamed in by a player's client.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

<div dir="rtl" style={{ textAlign: "right" }}>


## الوصف

يتم استدعاء هذا الاستدعاء أو الكال باك عند تدفق الممثل (أكتور) بواسطة كلاينت اللاعب

| Name        | Description                                                     |
| ----------- | -------------------------------------------------------------   |
| actorid     | ايدي الممثل الذي تم تدفقه للاعب.                                |
| forplayerid | هوية اللاعب الذي قام بتدفق الممثل (أكتور)                              |

## Returns

دائمًا يتم استدعاؤه أولاً في الفلترسكربتات.

## أمثلة
</div>

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```
<div dir="rtl" style={{ textAlign: "right" }}>

## Notes

<TipNPCCallbacks/>

## الاستدعاءات او كالباكات ذات الصلة

قد تكون الاستدعاءات التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى.

- [OnActorStreamOut](OnActorStreamOut): يتم استدعاؤه عندما يتم تدفق ممثل (أكتور) خارج كلاينت اللاعب.
</div>