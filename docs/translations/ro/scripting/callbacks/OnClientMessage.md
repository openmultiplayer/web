---
titlu: OnClientMessage
descriere: Acest callback este apelat oricand NPC-ul vede un ClientMessage
tags: []
---

## Descriere

Acest callback este apelat oricand NPC-ul vede un ClientMessage. Acesta va fi de fiecare data cand se utilizeaza functia SendClientMessageToAll si de fiecare data functia SendClientMessage este trimisa spre NPC. Acest callback nu o sa fie folosit cand cineva spune ceva. Pentru o versiune ca asta cu player text, vedem NPC:OnPlayerText.

| Nume   | Descriere                    |
| ------ | ---------------------------- |
| color  | Culoarea ClientMessage este. |
| text[] | Mesajul actual               |

## Returns

Acest callback nu accepta returns.

## Exemplu

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Related Functions
