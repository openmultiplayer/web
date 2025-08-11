---
title: CreatePlayer3DTextLabel
sidebar_label: CreatePlayer3DTextLabel
description: Cria um rótulo de texto 3D apenas para um jogador específico.
tags: ["player", "3dtextlabel"]
---

## Descrição

Cria um rótulo de texto 3D apenas para um jogador específico

| Nome               | Descrição                                                                       |
| ------------------ | ------------------------------------------------------------------------------- |
| playerid           | O jogador que deve ver o rótulo de texto 3D recém-criado.                      |
| const text[]       | O texto a ser exibido.                                                         |
| colour             | A cor do texto                                                                  |
| Float:x            | Coordenada X (ou deslocamento se anexado)                                      |
| Float:y            | Coordenada Y (ou deslocamento se anexado)                                      |
| Float:z            | Coordenada Z (ou deslocamento se anexado)                                      |
| Float:drawDistance | A distância onde você pode ver o rótulo de texto 3D                            |
| attachedplayer     | O jogador ao qual você quer anexar o rótulo de texto 3D. (Nenhum: INVALID_PLAYER_ID)   |
| attachedvehicle    | O veículo ao qual você quer anexar o rótulo de texto 3D. (Nenhum: INVALID_VEHICLE_ID) |
| bool:testLOS       | 0/1 Testa a linha de visão para que este texto não possa ser visto através de paredes |
| OPEN_MP_TAGS:...   | Número indefinido de argumentos de qualquer tag.                               |

## Retorno

O ID do rótulo de texto 3D do jogador recém-criado, ou `INVALID_3DTEXT_ID` se o limite de rótulos de texto 3D do jogador (`MAX_3DTEXT_PLAYER`) foi atingido.

## Exemplos

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

        format(string, sizeof(string), "Olá %s!\nEstou na sua posição", name);
        playerTextId = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

drawDistance parece ser muito menor quando especta.

:::

:::warning

Se text[] estiver vazio, o servidor/clientes próximos ao texto podem crashar! (Corrigido no open.mp)

:::

## Funções Relacionadas

- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Deleta o rótulo de texto 3D de um jogador.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): Verifica se o rótulo de texto 3D de um jogador é válido.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Altera o texto do rótulo de texto 3D de um jogador.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Obtém o texto do rótulo de texto 3D do jogador.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): Obtém a cor do rótulo de texto 3D do jogador.
- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): Obtém a posição do rótulo de texto 3D do jogador.
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): Obtém a distância de desenho do rótulo de texto 3D do jogador.
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Define a distância de desenho do rótulo de texto 3D do jogador.
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Obtém o ID do mundo virtual do rótulo de texto 3D do jogador.
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): Define o ID do mundo virtual do rótulo de texto 3D do jogador.
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): Obtém a linha de visão do rótulo de texto 3D do jogador.
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Define a linha de visão do rótulo de texto 3D do jogador.
- [Create3DTextLabel](Create3DTextLabel): Cria um rótulo de texto 3D global.