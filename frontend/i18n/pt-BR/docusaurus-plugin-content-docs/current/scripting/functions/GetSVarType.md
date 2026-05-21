---
title: GetSVarType
sidebar_label: GetSVarType
description: "Obtém o tipo (inteiro, flutuante ou string) de uma variável de servidor."
tags: ["server variable", "svar"]
---


## Descrição

Obtém o tipo (inteiro, flutuante ou string) de uma variável de servidor.

| Nome | Descrição |
| ------------ | --------------------------------------------------- |
| const svar[] | O nome da variável do servidor da qual obter o tipo. |

## Retornos

Retorna o [tipo](../resources/svartypes) do SVar.

## Exemplos

```c
stock PrintSVar(varname[])
{
    switch(GetSVarType(varname))
    {
        case SERVER_VARTYPE_NONE:
        {
            return 0;
        }
        case SERVER_VARTYPE_INT:
        {
            printf("Integer SVar '%s': %i", varname, GetSVarInt(varname));
        }
        case SERVER_VARTYPE_FLOAT:
        {
            printf("Float SVar '%s': %f", varname, GetSVarFloat(varname));
        }
        case SERVER_VARTYPE_STRING:
        {
            new varstring[256];
            GetSVarString(varname, varstring);

            printf("String SVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnGameModeInit()
{
    SetSVarInt("Version", 37);

    PrintSVar("Version"); // Saída: "Inteiro SVar 'Versão': 37"
    return 1;
}
```
## Funções Relacionadas

- [SetSVarInt](SetSVarInt): Defina um número inteiro para uma variável do servidor.
- [GetSVarInt](GetSVarInt): Obtenha um servidor de jogador como um número inteiro.
- [SetSVarString](SetSVarString): Defina uma string para uma variável de servidor.
- [GetSVarString](GetSVarString): Obtenha a string definida anteriormente de uma variável de servidor.
- [SetSVarFloat](SetSVarFloat): Defina um ponto flutuante para uma variável do servidor.
- [GetSVarFloat](GetSVarFloat): Obtenha o float definido anteriormente de uma variável do servidor.
- [DeleteSVar](DeleteSVar): Exclua uma variável de servidor.

## Recursos relacionados

- [Tipos de variáveis de servidor](../resources/svartypes)
