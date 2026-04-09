---
title: Sistema de variáveis do servidor
sidebar_label: Sistema de variáveis do servidor

description: O sistema de variáveis do servidor (abreviado, SVar) é uma nova forma de criar variáveis de servidor de maneira eficiente e dinâmica globalmente, o que significa que podem ser usadas no gamemode e filterscripts do servidor ao mesmo tempo.
---

O **sistema de variáveis do servidor** (abreviado, **SVar**) é uma nova forma de criar variáveis globais de servidor de maneira eficiente e dinâmica, o que significa que podem ser usadas no gamemode e filterscripts do servidor ao mesmo tempo.

Eles são semelhantes às [PVars](perplayervariablesystem), mas não estão vinculados a um ID de jogador.

:::warning

Este sistema foi introduzido no SA-MP 0.3.7 R2-1 e não funcionará em versões anteriores!

:::

:::note

O sistema SVar é o mesmo que as PVars, porém as variáveis criadas são globais do servidor, não vinculadas a nenhum ID de jogador, e persistem através das mudanças de gamemode.

:::

## Vantagens

- SVars podem ser compartilhadas/acessadas em scripts de gamemode e filterscripts.

- Você pode facilmente enumerar e imprimir/armazenar a lista de SVars. Isso facilita a depuração.

- Mesmo se uma SVar não tiver sido criada, ela ainda retornará um valor padrão de 0.

- SVars podem armazenar strings muito grandes usando memória alocada dinamicamente.

- Você pode Definir, Obter, Criar SVars dentro do jogo.

## Desvantagens

- SVars são várias vezes mais lentas que variáveis regulares. Geralmente é mais favorável trocar memória por velocidade, em vez do contrário.

## Funções Relacionadas

- [SetSVarInt](../scripting/functions/SetSVarInt): define um inteiro para uma variável de servidor.
- [GetSVarInt](../scripting/functions/GetSVarInt): obtém uma variável de servidor como inteiro.
- [SetSVarString](../scripting/functions/SetSVarString): define uma string para uma variável de servidor.
- [GetSVarString](../scripting/functions/GetSVarString): obtém a string previamente definida de uma variável de servidor.
- [SetSVarFloat](../scripting/functions/SetSVarFloat): define um float para uma variável de servidor.
- [GetSVarFloat](../scripting/functions/GetSVarFloat): obtém o float previamente definido de uma variável de servidor.
- [DeleteSVar](../scripting/functions/DeleteSVar): exclui uma variável de servidor.
