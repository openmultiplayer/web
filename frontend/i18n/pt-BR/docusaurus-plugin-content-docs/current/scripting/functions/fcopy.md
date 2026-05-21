---
title: fcopy
sidebar_label: fcopy
description: "Copie um arquivo."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Copie um arquivo.

| Nome | Descrição |
| -------------- | --------------------------------------------------------------------------------- |
| const source[] | O nome do arquivo (existente) que deve ser copiado, incluindo opcionalmente um caminho. |
| const target[] | O nome do novo arquivo, incluindo opcionalmente um caminho completo.                       |

## Retornos

**true** em caso de sucesso, **false** em caso de falha.

## Exemplos

```c
if (fcopy("example.txt", "file.txt"))
{
    // Sucesso
    printf("The file \"example.txt\" copied to \"file.txt\" successfully.");
}
else
{
    // Erro
    print("The file \"example.txt\" does not exists, or can't be opened.");
}
```
## Notas

:::warning

Se o arquivo de destino já existir, ele será sobrescrito.

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Libera um arquivo no disco (garantir que todas as gravações estejam concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
