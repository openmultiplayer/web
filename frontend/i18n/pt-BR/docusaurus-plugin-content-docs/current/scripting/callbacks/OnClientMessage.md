---
title: OnClientMessage
description: Esta callback é chamada toda vez que um NPC ver uma ClientMessage.
tags: []
---

## Descrição

Essa callback é chamada sempre que um NPC ver uma ClientMessage. Isso acontecerá sempre que uma função SendClientMessageToAll for usada e sempre que uma função SendClientMessage é enviada para um NPC. Esta callback não será chamada quando alguém falar algo. Para este tipo de texto, veja: NPC:OnPlayerText.

| Nome   | Descrição                    |
| ------ | ---------------------------- |
| color  | A cor que o ClientMessage é. |
| text[] | A mensagem em sí.            |

## Retornos

Esta callback não suporta retornos.

## Exemplos

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Balanço Bancário: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Eu sou pobre :(");
    }
}
```

## Funções Relacionadas
