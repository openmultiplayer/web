---
title: DB_ExecuteQuery
sidebar_label: DB_ExecuteQuery
description: A função é usada para executar uma consulta SQL em um banco de dados SQLite aberto.
keywords:
  - sqlite
tags: ["sqlite"]
---

## Descrição

A função é usada para executar uma consulta SQL em um banco de dados SQLite aberto.

| Nome             | Descrição                                   |
| ---------------- | ------------------------------------------- |
| DB:db            | O handle do banco de dados para consultar. |
| const query[]    | A consulta a ser executada.                |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retorno

O índice do resultado da consulta (começando em 1) se bem-sucedida, caso contrário 0.

## Exemplos

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // Seleciona todas as entradas na tabela "entities"
    new DBResult:db_result_set = DB_ExecuteQuery(connectionHandle, "SELECT * FROM `entities`");

    // Se o handle do conjunto de resultados do banco de dados é válido
    if (db_result_set)
    {
        // Faz alguma coisa...

        // Libera o conjunto de resultados
        DB_FreeResultSet(db_result_set);
    }
}
```

```c
// mode.pwn

#include <entity_storage>

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
        EntityStorage_SpawnAll(gDBConnectionHandle);
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

Sempre libere os resultados usando [DB_FreeResultSet](DB_FreeResultSet)!

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