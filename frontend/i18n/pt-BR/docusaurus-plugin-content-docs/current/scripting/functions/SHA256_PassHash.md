---
title: SHA256_PassHash
sidebar_label: SHA256_PassHash
description: "Faz hash de uma senha usando o algoritmo de hash SHA-256."
tags: ["encryption"]
---


<VersionWarn version='SA-MP 0.3.7 R1' />

:::warning

Esta função está obsoleta em open.mp. Use o plugin [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) para hash.

:::

## Descrição

Faz hash de uma senha usando o algoritmo de hash SHA-256. Inclui um sal. A saída tem sempre 256 bits de comprimento, ou o equivalente a 64 células de penhor.

| Nome | Descrição |
| ---------------------- | -------------------------------------------------- |
| const password[] | A senha para hash.                              |
| const salt[] | O sal para usar no hash.                       |
| output[] | O hash retornado em resumo hexadecimal maiúsculo. |
| size = sizeof (output) | O comprimento máximo do hash retornado.                  |

## Retornos

O hash é armazenado na matriz especificada.

## Exemplos

```c
public OnGameModeInit()
{
    new MyHash[64 + 1]; // + 1 para contabilizar o terminador nulo necessário
    SHA256_PassHash("test", "78sdjs86d2h", MyHash, sizeof MyHash);
    printf("Returned hash: %s", MyHash); // Hash retornado: CD16A1C8BF5792B48142FF6B67C9CB5B1BDC7260D8D11AFBA6BCDE0933A3C0AF
    return 1;
}
```
## Notas

:::tip

O hash retornado tem preenchimento zero (ou seja, possível prefixo 00ABCD123...).

:::

:::tip

O salt é anexado ao final da senha, o que significa que a senha 'foo' e o salt 'bar' formariam 'foobar'. O salt deve ser aleatório, único para cada jogador e pelo menos tão longo quanto a senha com hash. Deve ser armazenado junto com o hash real na conta do jogador.

:::

:::warning

Esta função não é segura para binários. Usar valores binários em senha e salt pode gerar resultados inesperados.

:::
