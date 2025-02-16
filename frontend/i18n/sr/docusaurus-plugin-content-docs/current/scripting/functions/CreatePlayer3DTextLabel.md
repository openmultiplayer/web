---
title: CreatePlayer3DTextLabel
description: Креира 3D Text Label само за посебног играча.
tags: ["player", "3dtextlabel"]
---

## Опис

Креира 3D Text Label само за посебног играча.

| Име                | Опис                                                                   |
| ------------------ | ---------------------------------------------------------------------- |
| playerid           | Играч који треба да види новокреирани 3D label.                        |
| const text[]       | Текст који ће се приказати                                             |
| colour             | Боја текста                                                           |
| Float:x            | X координата(или офсет ако је причвршћен)                              |
| Float:y            | Y координата(или офсет ако је причвршћен)                              |
| Float:z            | Z координата(или офсет ако је причвршћен)                              |
| Float:drawDistance | Дистанца са које играч може видети лабел                         |
| attachedplayer     | Играч за кога желимо закачити 3D label. (Ниједан: INVALID_PLAYER_ID)   |
| attachedvehicle    | Возило за кога желимо закачити 3D label. (Ниједан: INVALID_VEHICLE_ID) |
| bool:testLOS       | 0/1 Опција да се текст лабела не може видети кроз зидове               |
| OPEN_MP_TAGS:...   | Indefinite number of arguments of any tag.                             |

## Враћа

ID од новокреираног 3D label-а, или `INVALID_3DTEXT_ID` ако смо прешли ограничење 3D Player Text Label-а (`MAX_3DTEXT_PLAYER`).

## Примери

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playerlabel", true))
    {
        new
            PlayerText3D:playerTextId,
            name[MAX_PLAYER_NAME],
            Float:x, Float:y, Float:z,
            string[64];

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);

        format(string, sizeof(string), "Hello %s!\nI'm at your position", name);
        playerTextId = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
        return 1;
    }
    return 0;
}
```

## Белешке

:::tip

DrawDistance изгледа као да је мањи у spectate моду.

:::

:::warning

Ако је text[] празан, играчи близу лабела могу да crash-ају. (Поправљено у open.mp верзији)

:::

## Повезане функције

- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Уништава 3D текстуалну ознаку играча.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Проверава да ли је 3D текстуална ознака играча валидна.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Мења текст 3D текстуалне ознаке играча.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Добија текст 3D текстуалне ознаке играча.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): Добија боју 3D текстуалне ознаке играча.
- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): Добија позицију 3D текстуалне ознаке играча.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): Добија дистанцу на којој се приказује 3D текстуална ознака играча.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Поставља дистанцу на којој се приказује 3D текстуална ознака играча.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Добија виртуелни свет ID 3D текстуалне ознаке играча.
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): Поставља виртуелни свет ID 3D текстуалне ознаке играча.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): Добија линију вида 3D текстуалне ознаке играча.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Поставља линију вида 3D текстуалне ознаке играча.
- [Create3DTextLabel](Create3DTextLabel): Креира глобалну 3D текстуалну ознаку.
