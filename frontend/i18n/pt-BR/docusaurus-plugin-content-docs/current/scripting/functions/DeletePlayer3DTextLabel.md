---

title: DeletePlayer3DTextLabel
sidebar_label: DeletePlayer3DTextLabel
description: Apaga um texto 3D criado com CreatePlayer3DTextLabel.
tags: ["player", "3dtextlabel"]
---

## descrição

Apaga um texto 3D criado com [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel).

| Nome                 | Descrição                                 |
| -------------------- | ----------------------------------------- |
| playerid             | ID do jogador cujo texto 3D será apagado. |
| PlayerText3D:textid | ID do texto 3D do jogador a apagar.       |

## retorno

**true** - A função executou com sucesso.

**false** - A função falhou, o que significa que o texto especificado não existe.

## exemplo

```c
new PlayerText3D:playerTextId[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    new
        name[MAX_PLAYER_NAME],
        Float:x, Float:y, Float:z,
        string[64];

    GetPlayerName(playerid, name, sizeof(name));
    GetPlayerPos(playerid, x, y, z);

    format(string, sizeof(string), "Olá %s!\nEstou na tua posição", name);
    playerTextId[playerid] = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DeletePlayer3DTextLabel(playerid, playerTextId[playerid]);
    return 1;
}
```

## funções relacionadas

* [Create3DTextLabel](Create3DTextLabel): Criar um texto 3D.
* [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Anexa um texto 3D a um jogador.
* [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Anexa um texto 3D a um veículo.
* [Update3DTextLabelText](Update3DTextLabelText): Muda o texto de um texto 3D.
* [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Criar um texto 3D para um jogador.
* [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Muda o texto de um texto 3D de um jogador.
* [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Verifica se um texto 3D de jogador é válido.
