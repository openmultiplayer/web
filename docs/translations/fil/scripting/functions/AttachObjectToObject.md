---
title: AttachObjectToObject
description: Maaari mong gamitin ang function na ito upang ilagay ang mga object sa iba pang mga object.
tags: []
---

<VersionWarn version='SA-MP 0.3d' />

## Description

Maaari mong gamitin ang function na ito upang ilagay ang mga object sa iba pang mga object.

| Name          | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| objectid      | Ang object na ikakabit sa isa pang object.                                |
| attachtoid    | Ang object na ikakabit sa object.                                         |
| Float:OffsetX | Ang distansya sa pagitan ng pangunahing object at object sa direksyon ng X.|
| Float:OffsetY | Ang distansya sa pagitan ng pangunahing object at object sa direksyon ng Y.|
| Float:OffsetZ | Ang distansya sa pagitan ng pangunahing object at object sa direksyon ng Z.|
| Float:RotX    | Ang pag-ikot ng X sa pagitan ng object at ng pangunahing object           |
| Float:RotY    | Ang pag-ikot ng Y sa pagitan ng object at ng pangunahing object.          |
| Float:RotZ    | Ang pag-ikot ng Z sa pagitan ng object at ng pangunahing object.          |
| SyncRotation  | Kung nakatakda sa 0, ang pag-ikot ng objectid ay hindi magbabago sa attachtoid's.|

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Nangangahulugan ito na ang unang object (objectid) ay wala. Walang mga panloob na pagsusuri upang i-verify na ang pangalawang object (attachtoid) ay umiiral.

## Examples

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Notes

:::tip

Ang parehong object ay kailangang gawin bago subukang ilakip ang mga ito. Walang player-object na bersyon ng function na ito (AttachPlayerObjectToObject), ibig sabihin ay hindi ito susuportahan ng mga streamer.

:::

## Related Functions

- [AttachObjectToPlayer](AttachObjectToPlayer): Maglagay ng isang object sa isang manlalaro.
- [AttachObjectToVehicle](AttachObjectToVehicle): Ikabit ang isang object sa isang sasakyan.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Maglagay ng object ng player sa isang player.
- [CreateObject](CreateObject): Gumawa ng object.
- [DestroyObject](DestroyObject): Sirain ang object.
- [IsValidObject](IsValidObject): Sinusuri kung wasto ang object.
- [MoveObject](MoveObject): Ilipat ang object.
- [StopObject](StopObject): Itigil ang paglipat ng object.
- [SetObjectPos](SetObjectPos): I-set ang posisyon ng object.
- [SetObjectRot](SetObjectRot): I-set ang rotasyon ng object.
- [GetObjectPos](GetObjectPos): Hanpin ang object.
- [GetObjectRot](GetObjectRot): Tignan ang rotasyon ng object.
- [CreatePlayerObject](CreatePlayerObject): Gumawa ng object para lamang sa isang manlalaro.
- [DestroyPlayerObject](DestroyPlayerObject): Sirain ang player object.
- [IsValidPlayerObject](IsValidPlayerObject): Tignan kung valid ang isang object ng player.
- [MovePlayerObject](MovePlayerObject): Ilipat ang player object.
- [StopPlayerObject](StopPlayerObject): Itigil ang paglipat ng player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): I-set ang posisyon ng player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): I-set ang rotasyon ng player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Hanapin ang player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Tignan ang rotasyon ng player object.