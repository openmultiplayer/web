---
title: GetPlayerKeys
description: Verifica quais teclas um jogador está pressionando.
tags: ["player"]
---

## Descrição

Verifica quais teclas um jogador está pressionando.

| Nome      | Descrição                                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | O ID do jogador do qual deseja obter as teclas.                                                                                                          |
| keys      | Um conjunto de bits contendo o estado das teclas do jogador. Este valor é chamado de máscara de bits (bit mask). Clique aqui para ver a lista de teclas. |
| updown    | Up/down state.                                                                                                                                           |
| leftright | Left/right state.                                                                                                                                        |

## Retorno

AS teclas são armazenadas nas variáveis especificadas.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    new
        Keys, ud, lr;
    GetPlayerKeys(playerid, Keys, ud, lr);

    if (ud == KEY_UP)
    {
        SendClientMessage(playerid, -1, "UP");
    }
    else if (ud == KEY_DOWN)
    {
        SendClientMessage(playerid, -1, "DOWN");
    }

    if (lr == KEY_LEFT)
    {
        SendClientMessage(playerid, -1, "LEFT");
    }
    else if (lr == KEY_RIGHT)
    {
        SendClientMessage(playerid, -1, "RIGHT");
    }

    return 1;
}
```

## Notas

:::warning

Apenas a FUNÇÃO das teclas pode ser detectada; não as teclas reais. Por exemplo, não é possivel detectar se um jogador pressiona ESPAÇO, mas você pode detectar se ele pressiona SPRINT (que pode ser mapeado(atribuído/vinculado) a QUALQUER tecla (mas é espaço por padrão)). A partir da atualização 0.3.7, as teclas "A" e "D" não são reconhecidas quando está em um veículo. No entanto, as teclas "W" e "S" podem ser detectadas com o parâmetro "keys".

:::

## Funções Relacionadas
