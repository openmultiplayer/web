---
title: SetTimerEx
sidebar_label: SetTimerEx
description: "Define um cronômetro para chamar uma função após o intervalo especificado."
tags: ["timer"]
---


## Descrição

Define um cronômetro para chamar uma função após o intervalo especificado. Esta variante ('Ex') pode passar parâmetros (como um jogador ID) para a função.

| Nome | Descrição |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| const functionName[] | O nome de uma função pública a ser chamada quando o cronômetro expirar.                                                                              |
| interval | Intervalo em milissegundos (1 segundo = 1000 MS).                                                                                             |
| bool:repeating | Booleano (true/false (ou 1/0)) que indica se o temporizador deve ser chamado repetidamente (só pode ser interrompido com KillTimer) ou apenas uma vez. |
| const specifiers[] | Formato especial que indica os tipos de valores que o temporizador passará.                                                                         |
| OPEN_MP_TAGS:... | Número indefinido de argumentos a serem passados ​​(deve seguir o formato especificado no parâmetro anterior).                                               |

## Retornos

O ID do cronômetro que foi iniciado. O temporizador IDs começa em 1 e nunca é reutilizado. Não há verificações internas para verificar se os parâmetros passados ​​são válidos (por exemplo, duração e não um valor negativo). O plugin Y_Less' 'fixes2' implementa essas verificações e também melhora enormemente a precisão dos temporizadores, e também adiciona suporte para passagem de array/string.

## Exemplos

```c
SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
// EndAntiSpawnKill - A função que será chamada
// 5000 - 5000 MS (5 segundos). Este é o intervalo. O cronômetro será chamado após 5 segundos.
// falso - Não está repetindo. Será chamado apenas uma vez.
// "i" - I significa inteiro (`integer`). Estamos passando um número inteiro (um ID de jogador) para a função.
// playerid – O valor a ser transmitido. Este é o número inteiro especificado no parâmetro anterior.
```
<br />

```c
// O retorno de chamada do evento (OnPlayerSpawn) – iniciaremos um cronômetro aqui
public OnPlayerSpawn(playerid)
{
    // Proteção anti-spawnkill (5 segundos)

    // Defina sua saúde muito alta para que não possam ser mortos
    SetPlayerHealth(playerid, 999999.0);

    // Notifique-os
    SendClientMessage(playerid, -1, "You are protected against spawn-killing for 5 seconds.");

    // Inicie um temporizador de 5 segundos para encerrar a proteção anti-spawnkill
    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
}

// Encaminhe (torne pública) a função para que o servidor possa vê-la
forward EndAntiSpawnKill(playerid);
// A função do temporizador - o código a ser executado quando o temporizador for chamado vai aqui
public EndAntiSpawnKill(playerid)
{
    // 5 segundos se passaram, então vamos definir a vida do jogador de volta para 100
    SetPlayerHealth(playerid, 100.0);

    // Vamos notificá-los também
    SendClientMessage(playerid, -1, "You are no longer protected against spawn-killing.");
    return 1;
}
```
## Notas

:::warning

Os intervalos do temporizador não são precisos (cerca de 25% de desconto) em SA-MP. Existem correções disponíveis [aqui](https://sampforum.blast.hk/showthread.php?tid=289675) e [aqui](https://sampforum.blast.hk/showthread.php?tid=650736).

Mas está corrigido em open.mp

:::

:::tip

As variáveis do temporizador ID devem ser redefinidas para 0 quando possível, para minimizar a chance de matar acidentalmente novos temporizadores por engano. `-1` é comumente confundido com o ID inválido - não é.

A função a ser chamada deve ser pública. Isso significa que tem que ser encaminhado.

:::

## Definições

| Definition | Valor |
| ------------- | ----- |
| INVALID_TIMER | 0 |

## Funções Relacionadas

- [SetTimer](SetTimer): Defina um cronômetro.
- [KillTimer](KillTimer): Interrompe um cronômetro.
- [IsValidTimer](IsValidTimer): Verifica se um temporizador é válido.
- [IsRepeatingTimer](IsRepeatingTimer): Verifica se um cronômetro está configurado para repetição.
- [GetTimerInterval](GetTimerInterval): Obtém o intervalo de um temporizador.
- [GetTimerRemaining](GetTimerRemaining): Obtém o intervalo restante de um temporizador.
- [CountRunningTimers](CountRunningTimers): Obtenha os temporizadores em execução.
- [CallLocalFunction](CallLocalFunction): Chame uma função no script.
- [CallRemoteFunction](CallRemoteFunction): Chame uma função em qualquer script carregado.
