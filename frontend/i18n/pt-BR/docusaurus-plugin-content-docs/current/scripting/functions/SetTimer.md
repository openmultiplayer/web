---
title: SetTimer
sidebar_label: SetTimer
description: "Define um 'temporizador' para chamar uma função após algum tempo."
tags: ["timer"]
---


## Descrição

Define um 'temporizador' para chamar uma função após algum tempo. Pode ser configurado para repetir.

| Nome | Descrição |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| const functionName[] | Nome da função a ser chamada como string. Esta deve ser uma função pública (encaminhada). Uma string nula aqui irá travar o servidor. |
| interval | Intervalo em milissegundos.                                                                                                       |
| bool:repeating | Booleano (true/false) sobre se o cronômetro deve repetir ou não.                                                                 |

## Retornos

O ID do temporizador que foi iniciado.

O temporizador IDs começa em **1**.

## Exemplos

```c
public OnGameModeInit()
{
    print("Starting timer...");
    SetTimer("OneSecondTimer", 1000, true); // Defina um temporizador de repetição de milissegundos 1000 (segundo 1)
}

forward OneSecondTimer();
public OneSecondTimer()
{
    print("1 second has passed.");
}
```
## Notas

:::warning

Os intervalos do temporizador não são precisos (cerca de 25% de desconto) em SA-MP. Existem correções disponíveis [aqui](https://sampforum.blast.hk/showthread.php?tid=289675) e [aqui](https://sampforum.blast.hk/showthread.php?tid=650736).

Mas está corrigido em open.mp

:::

:::warning

O uso de muitos temporizadores resultará em aumento do uso de memória/CPU.

:::

:::tip

O temporizador IDs nunca é usado duas vezes.

Você pode usar [KillTimer](KillTimer) em um timer ID e não importa se ele está funcionando ou não. A função que deve ser chamada deve ser pública, ou seja, deve ser encaminhada.

:::

## Definições

| Definition | Valor |
| ------------- | ----- |
| INVALID_TIMER | 0 |

## Funções Relacionadas

- [SetTimerEx](SetTimerEx): Defina um temporizador com parâmetros.
- [KillTimer](KillTimer): Interrompe um cronômetro.
- [IsValidTimer](IsValidTimer): Verifica se um temporizador é válido.
- [IsRepeatingTimer](IsRepeatingTimer): Verifica se um cronômetro está configurado para repetição.
- [GetTimerInterval](GetTimerInterval): Obtém o intervalo de um temporizador.
- [GetTimerRemaining](GetTimerRemaining): Obtém o intervalo restante de um temporizador.
- [CountRunningTimers](CountRunningTimers): Obtenha os temporizadores em execução.
