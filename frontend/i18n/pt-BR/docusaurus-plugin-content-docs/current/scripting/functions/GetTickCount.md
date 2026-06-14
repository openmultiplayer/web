---
title: GetTickCount
sidebar_label: GetTickCount
description: "Retorna um valor que aumenta a cada milissegundo."
tags: ["time"]
---


## Descrição

Retorna um valor que aumenta a cada milissegundo, deve ser usado para comparar dois pontos no tempo.

## Exemplos

Permitir que um jogador chame um comando apenas uma vez a cada dez segundos (10.000 milissegundos):

```c
static gLastCommandUse[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/limited") == 0)
    {
        if (GetTickCount() - gLastCommandUse[playerid] >= 10000)
        {
            // Já passou bastante tempo.
            SendClientMessage(playerid, COLOUR_ERROR, "Called!");
            gLastCommandUse[playerid] = GetTickCount();
        }
        else
        {
            SendClientMessage(playerid, COLOUR_ERROR, "Please wait");
        }
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

A diferença nos valores que `GetTickCount` pode manipular é limitada a pouco menos de 25 dias (2147483647 milissegundos). Contanto que os eventos que estão sendo comparados sejam inferiores a esse valor, esta função funciona perfeitamente com uma pequena ressalva. Devido ao estouro de número inteiro, o código a seguir pode não funcionar:

```c
new start = GetTickCount();
// Código longo.
new end = GetTickCount();
if (start + 2000 > end)
{
    // O código demorou menos de dois segundos.
}
```
Se `start` for muito alto, esse código será contornado e poderá fazer com que a verificação seja aprovada erroneamente. Porém, resolver isso é muito simples:

```c
new start = GetTickCount();
// Código longo.
new end = GetTickCount();
if (end - start < 2000)
{
    // O código demorou menos de dois segundos.
}
```
Simplesmente reorganizar a comparação de forma que `start` e `end` estejam do mesmo lado resolve totalmente o problema. Aqueles familiarizados com rearranjos de fórmulas devem reconhecer que os dois trechos de código são inteiramente equivalentes, mas o último é mais correto em módulo aritmético.

:::

## Funções Relacionadas

- [tickcount](tickcount): Obtenha o tempo de atividade do servidor real.
