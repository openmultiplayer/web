---
title: OnObjectMoved
description: Acest callback este apelat atunci când un obiect este mutat după MoveObject (când se oprește din mișcare).
tags: []
---

## Descriere

Acest callback este apelat atunci când un obiect este mutat după MoveObject (când se oprește din mișcare).

| Nume     | Descriere                           |
| -------- | ----------------------------------- |
| objectid | ID-ul obiectului care a fost mutat  |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnObjectMoved(objectid)
{
    printf("Obiectul %d s-a terminat de mutat.", objectid);
    return 1;
}
```

## Note

:::tip

SetObjectPos nu funcționează atunci când este utilizat în acest callback. Pentru a o repara, recreați obiectul.

:::

## Funcții similare

- [MoveObject](../functions/MoveObject): Mișcă un obiect.
- [MovePlayerObject](../functions/MovePlayerObject): Mutați un obiect de jucător.
- [IsObjectMoving](../functions/IsObjectMoving): Verificați dacă obiectul se mișcă.
- [StopObject](../functions/StopObject): Opriți mișcarea unui obiect.
- [OnPlayerObjectMoved](OnPlayerObjectMoved): Apelat atunci când un obiect de jucător se oprește în mișcare.