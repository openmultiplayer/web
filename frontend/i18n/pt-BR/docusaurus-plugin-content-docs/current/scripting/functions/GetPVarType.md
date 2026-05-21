---
title: GetPVarType
sidebar_label: GetPVarType
description: "Obtém o tipo (inteiro, flutuante ou string) de uma variável do jogador."
tags: ["player variable", "pvar"]
---


## Descrição

Obtém o tipo (inteiro, flutuante ou string) de uma variável do jogador.

| Nome | Descrição |
| ------------ | -------------------------------------------------------------- |
| playerid | O ID do jogador cuja variável de jogador deseja obter o tipo. |
| const pvar[] | O nome da variável do jogador da qual obter o tipo.            |

## Retornos

Retorna o tipo de PVar. Veja a tabela abaixo.

## Exemplos

```c
stock PrintPVar(playerid, varname[])
{
    switch(GetPVarType(playerid, varname))
    {
        case PLAYER_VARTYPE_NONE:
        {
            return 0;
        }
        case PLAYER_VARTYPE_INT:
        {
            printf("Integer PVar '%s': %i", varname, GetPVarInt(playerid, varname));
        }
        case PLAYER_VARTYPE_FLOAT:
        {
            printf("Float PVar '%s': %f", varname, GetPVarFloat(playerid, varname));
        }
        case PLAYER_VARTYPE_STRING:
        {
            new varstring[256];
            GetPVarString(playerid, varname, varstring);

            printf("String PVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnPlayerConnect(playerid)
{
    SetPVarInt(playerid, "Level", 20);

    PrintPVar(playerid, "Level"); // Saída: "PVar inteiro 'Nível': 20"
    return 1;
}
```
## Funções Relacionadas

- [SetPVarInt](SetPVarInt): Defina um número inteiro para uma variável do jogador.
- [GetPVarInt](GetPVarInt): Obtenha o número inteiro definido anteriormente de uma variável do jogador.
- [SetPVarString](SetPVarString): Defina uma string para uma variável do jogador.
- [GetPVarString](GetPVarString): Obtenha a string definida anteriormente de uma variável do jogador.
- [SetPVarFloat](SetPVarFloat): Defina um float para uma variável do jogador.
- [GetPVarFloat](GetPVarFloat): Obtenha o float definido anteriormente de uma variável do jogador.
- [DeletePVar](DeletePVar): Exclua uma variável do jogador.

## Recursos relacionados

- [Tipos de variáveis de jogador](../resources/pvartypes)
