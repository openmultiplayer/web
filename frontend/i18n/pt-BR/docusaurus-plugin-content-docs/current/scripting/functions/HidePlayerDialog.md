---
title: HidePlayerDialog
sidebar_label: HidePlayerDialog
description: "Oculta qualquer caixa de diálogo que o jogador possa ver no momento."
tags: ["player", "dialog"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Oculta qualquer caixa de diálogo que o jogador possa ver no momento.

| Nome | Descrição |
| -------- | ------------------------------------------------------- |
| playerid | O ID do jogador do qual ocultar a caixa de diálogo atual. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado ou não está visualizando uma caixa de diálogo.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    if (IsAccountRegistered(playerid)) // Função imaginária para verificar se o nome do jogador está registrado
    {
        ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Insert Your Password", "Login", ""); // mostra a caixa de diálogo de login para o jogador

        new ipAddress[16];
        GetPlayerIp(playerid, ipAddress, sizeof(ipAddress)); // obter o endereço IP do jogador

        if (IsBanned(ipAddress)) // verifique se o ip do jogador foi banido
        {
            SendClientMessage(playerid, 0xFF0000FF, "You are banned from this server!");
            HidePlayerDialog(playerid); // Oculta a caixa de diálogo de login
        }
    }
}
```
## Funções Relacionadas

- [ShowPlayerDialog](ShowPlayerDialog): Mostra ao jogador uma caixa de diálogo síncrona (apenas uma por vez).
- [GetPlayerDialogData](GetPlayerDialogData): Obtenha os dados da caixa de diálogo atualmente exibida ao jogador.
- [GetPlayerDialogID](GetPlayerDialogID): Obtenha o ID da caixa de diálogo atualmente exibida ao jogador.
