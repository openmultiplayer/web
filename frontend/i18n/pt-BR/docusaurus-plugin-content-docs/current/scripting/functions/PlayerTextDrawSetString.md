---
title: PlayerTextDrawSetString
sidebar_label: PlayerTextDrawSetString
description: "Altere o texto de um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Altere o texto de um player-textdraw.

| Nome | Descrição |
| ----------------- | ------------------------------------------------- |
| playerid | O ID do jogador cuja string textdraw deve ser definida |
| PlayerText:textid | O ID do textdraw a ser alterado |
| const format[] | A nova string para TextDraw |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.        |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];
new pVehicleHealthTimer[MAX_PLAYERS];

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Entrou em um veículo como motorista
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Defina um cronômetro para atualizar o textdraw a cada segundo
        pVehicleHealthTimer[playerid] = SetTimerEx("UpdateVehicleHealthTextDraw", 1000, true, "i", playerid);
    }
    if (oldstate == PLAYER_STATE_DRIVER)
    {
        KillTimer(pVehicleHealthTimer[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
    return 1;
}

forward UpdateVehicleHealthTextDraw(playerid);
public UpdateVehicleHealthTextDraw(playerid)
{
    new
        string[32],
        vehicleid = GetPlayerVehicleID(playerid),
        Float:health;

    GetVehicleHealth(vehicleid, health);

    format(string, sizeof(string), "Vehicle Health: %.0f", health);
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], string); // <<< Atualize o texto para mostrar a saúde do veículo

    // DICA PROFISSIONAL: Você não precisa de `format` em open.mp
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], "Vehicle Health: %.0f", health);
    return 1;
}

/* NOTA: Este exemplo é apenas para fins de demonstração, não é garantido que funcione no jogo. É apenas para mostrar o uso da função PlayerTextDrawSetString. */
```
## Notas

:::tip

Você não precisa mostrar TextDraw novamente para aplicar as alterações.

:::

:::warning

Existem limites para o comprimento das strings textdraw! Consulte [Limites](../resources/limits) para obter mais informações.

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): Obtém o texto de um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
