---
title: Códigos de Escape
sidebar_label: Códigos de Escape
---

Ao criar uma string, você pode descobrir que alguns caracteres podem ser impossíveis ou extremamente difíceis de expressar no código-fonte do seu script. É aí que os códigos de escape se tornam úteis - eles permitem que você use os símbolos e expressões que se enquadram nesta categoria. Abaixo está uma lista de códigos de escape para a linguagem PAWN.

| Códigos de Escape                                 | Código       |
| ------------------------------------------------- | ------------ |
| Bip audível (na máquina do servidor)              | \a (ou \7)   |
| Backspace                                         | \b           |
| Escape                                            | \e           |
| Avanço de página                                  | \f           |
| Nova linha                                        | \n           |
| Retorno de carro                                  | \r           |
| Tabulação horizontal                              | \t           |
| Tabulação vertical                                | \v           |
| Barra invertida (\)                               | \\           |
| Aspas simples (')                                 | \'           |
| Aspas duplas (")                                  | \"           |
| Sinal de porcentagem                              | \%           |
| Código de caractere com código decimal "ddd".     | \ddd;        |
| Código de caractere com código hexadecimal "hhh". | \xhhh;       |

:::note

O ponto e vírgula após os códigos nddd; e nxhhh; é opcional. Seu propósito é dar à sequência de escape um símbolo de terminação explícito quando ela é usada em uma constante de string.

:::

Fonte: [pawn-lang.pdf (pg 99)](https://github.com/pawn-lang/compiler/raw/master/doc/pawn-lang.pdf)
