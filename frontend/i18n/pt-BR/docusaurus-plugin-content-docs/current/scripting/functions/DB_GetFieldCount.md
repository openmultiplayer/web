---
title: DB_GetFieldCount
sidebar_label: DB_GetFieldCount
description: Obtém o número de campos do conjunto de resultados especificado alocado com `DB_ExecuteQuery`.
keywords:
  - sqlite
tags: ["sqlite"]
---

## Descrição

A função obtém o número de campos do conjunto de resultados especificado alocado com [DB_ExecuteQuery](DB_ExecuteQuery).

| Nome              | Descrição                                         |
| ----------------- | ------------------------------------------------- |
| DBResult:dbresult | O resultado de [DB_ExecuteQuery](DB_ExecuteQuery). |

## Retorno

O número de campos no resultado.

## Exemplo

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // Variável de valor de retorno com valor de retorno padrão
    new ret = -1;

    // Contagem de campos
    new field_count = DB_GetFieldCount(dbResultSet);

    // Nome do campo atual
    new current_field_name[32];

    // Itera através de todos os campos
    for (new field_index; field_index < field_count; field_index++)
    {
        // Obtém o nome do campo
        if (DB_GetFieldName(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // Compara o nome do campo procurado com o nome do campo atual
            if (!strcmp(fieldName, current_field_name))
            {
                // Sucesso, armazena o índice do campo na variável de valor de retorno
                ret = field_index;

                // Sai do loop
                break;
            }
        }
    }

    // Retorna o índice do campo encontrado ou "-1"
    return ret;
}

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Variável de valor de retorno
    new Float:ret;

    // Conjunto de resultados do banco de dados
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `value` FROM `examples`");

    // Se o conjunto de resultados do banco de dados é válido
    if (db_result_set)
    {
        // Obtém o índice do campo alvo
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        // Verifica se o índice do campo é válido
        if (target_field_index >= 0)
        {
            // Faz operações
            do
            {
                // Adiciona o valor do campo "example" à variável de valor de retorno
                ret += DB_GetFieldFloat(db_result_set, target_field_index);
            }

            // Enquanto a próxima linha puder ser obtida
            while (DB_SelectNextRow(db_result_set));
        }

        // Libera o conjunto de resultados
        DB_FreeResultSet(db_result_set);
    }

    // Retorna a soma calculada
    return ret;
}
```

```c
// mode.pwn

// ...

#include <examples>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Cria uma conexão com um banco de dados
    gDBConnectionHandle = DB_Open("example.db");

    // Se a conexão com o banco de dados existe
    if (gDBConnectionHandle)
    {
        // Criou com sucesso uma conexão com o banco de dados
        print("Criou com sucesso uma conexão com o banco de dados \"example.db\".");
        printf("Soma calculada: %f", Examples_CalculateSum(gDBConnectionHandle));
    }
    else
    {
        // Falhou ao criar uma conexão com o banco de dados
        print("Falhou ao abrir uma conexão com o banco de dados \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Fecha a conexão com o banco de dados se a conexão estiver aberta
    if (DB_Close(gDBConnectionHandle))
    {
        // Limpeza extra
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notas

:::warning

Usar um handle inválido diferente de zero irá crashar o seu servidor! Obtenha um handle de conexão de banco de dados válido usando [DB_ExecuteQuery](DB_ExecuteQuery).

:::

## Funções Relacionadas

- [DB_Open](DB_Open): Abre uma conexão com um banco de dados SQLite
- [DB_Close](DB_Close): Fecha a conexão com um banco de dados SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): Consulta um banco de dados SQLite
- [DB_FreeResultSet](DB_FreeResultSet): Libera a memória do resultado de uma DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): Obtém o número de linhas em um resultado
- [DB_SelectNextRow](DB_SelectNextRow): Move para a próxima linha
- [DB_GetFieldCount](DB_GetFieldCount): Obtém o número de campos em um resultado
- [DB_GetFieldName](DB_GetFieldName): Retorna o nome de um campo em um índice específico
- [DB_GetFieldString](DB_GetFieldString): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [DB_GetFieldStringByName](DB_GetFieldStringByName): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [DB_GetFieldInt](DB_GetFieldInt): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [DB_GetFieldIntByName](DB_GetFieldIntByName): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [DB_GetFieldFloat](DB_GetFieldFloat): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [DB_GetMemHandle](DB_GetMemHandle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém o handle de memória para uma consulta SQLite que foi executada com DB_ExecuteQuery.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): A função obtém o número de resultados de banco de dados abertos.