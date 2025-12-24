---
title: db_get_result_mem_handle
sidebar_label: db_get_result_mem_handle
description: Obtém o handle de memória para um conjunto de resultados de banco de dados SQLite que foi alocado com `db_query`.
tags: ["sqlite"]
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

## Descrição

A função obtém o handle de memória para um conjunto de resultados de banco de dados SQLite que foi alocado com [db_query](db_query).

| Nome  | Descrição                                                  |
| ----- | ---------------------------------------------------------- |
| DB:db | O índice da consulta (retornado por [db_query](db_query)). |

## Retorno

Retorna o handle de memória do handle do conjunto de resultados do banco de dados.

## Exemplos

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Cria uma conexão com um banco de dados
    gDBConnectionHandle = db_open("example.db");

    // Se a conexão com o banco de dados existe
    if (gDBConnectionHandle)
    {
        // Criou com sucesso uma conexão com o banco de dados
        new DBResult:result_set = db_query("SELECT * FROM `examples`");
        print("Criou com sucesso uma conexão com o banco de dados \"example.db\".");
        if (result_set)
        {
            printf("Handle de memória da conexão do banco de dados: 0x%x", db_get_result_mem_handle(result_set));
            db_free_result(result_set);
        }
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
    if (db_close(gDBConnectionHandle))
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

Usar um handle inválido diferente de zero irá crashar o seu servidor! Obtenha um handle de conexão de banco de dados válido usando [db_query](db_query).

:::

## Funções Relacionadas

- [db_open](db_open): Abre uma conexão com um banco de dados SQLite
- [db_close](db_close): Fecha a conexão com um banco de dados SQLite
- [db_query](db_query): Consulta um banco de dados SQLite
- [db_free_result](db_free_result): Libera a memória do resultado de uma db_query
- [db_num_rows](db_num_rows): Obtém o número de linhas em um resultado
- [db_next_row](db_next_row): Move para a próxima linha
- [db_num_fields](db_num_fields): Obtém o número de campos em um resultado
- [db_field_name](db_field_name): Retorna o nome de um campo em um índice específico
- [db_get_field](db_get_field): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [db_get_field_assoc](db_get_field_assoc): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [db_get_field_int](db_get_field_int): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [db_get_field_assoc_int](db_get_field_assoc_int): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [db_get_field_float](db_get_field_float): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
- [db_get_field_assoc_float](db_get_field_assoc_float): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [db_get_mem_handle](db_get_mem_handle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [db_debug_openfiles](db_debug_openfiles): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [db_debug_openresults](db_debug_openresults): A função obtém o número de resultados de banco de dados abertos.
