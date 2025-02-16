---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: This callback is called when an object is moved after MoveObject (when it stops moving).
tags: []
---

## Description

Ang callback na ito ay itinatawag kapag ang object ay iginalaw pagkatapos ang MoveObject (kapag natapos na itong gumalaw).

| Name     | Description                         |
| -------- | ----------------------------------- |
| objectid | Ang ID ng object na iginalaw        |

## Returns

Palagi itong tinatawag una sa mga filterscripts.

## Examples

```c
public OnObjectMoved(objectid)
{
    printf("Ang object id %d ay natapos nang gumalaw.", objectid);
    return 1;
}
```

## Mga Dapat Unawain

:::tip

Ang SetObjectPos ay hindi gumagana kapag ginamit sa callback na ito. Upang ito'y maayos, gawin muli o i-recreate ang object.

:::

## Mga Kaugnay na Functions

- [MoveObject](../functions/MoveObject.md): Galawin ang isang Object.
- [MovePlayerObject](../functions/MovePlayerObject.md): Galawin ang isang player Object.
- [IsObjectMoving](../functions/IsObjectMoving.md): Tignan kapag ang object ay gumagalaw.
- [StopObject](../functions/StopObject.md): Tigilan ang isang object sa paggalaw.
- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved.md): Itinatawag kapag ang isang player object ay tumigil sa paggalaw.
