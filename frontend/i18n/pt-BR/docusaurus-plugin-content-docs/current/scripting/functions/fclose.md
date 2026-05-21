---
title: fclose
sidebar_label: fclose
description: "Fecha um arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Fecha um arquivo. Os arquivos devem sempre ser fechados quando o script não precisar mais deles (após leitura/escrita).

| Nome | Descrição |
| ----------- | ----------------------------------------------------- |
| File:handle | O identificador de arquivo a ser fechado. Retornado por [fopen](fopen). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O arquivo não pôde ser fechado. Pode já estar fechado.

## Exemplos

```c
// Abra "file.txt" no modo "somente acréscimo"
new File:handle = fopen("file.txt", io_append);

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    // Escreva "Hi there!" no arquivo
    fwrite(handle, "Hi there!");

    // Feche o arquivo
    fclose(handle);
}
else
{
    // Erro
    print("Failed to open file \"file.txt\".");
}
```
## Notas

:::warning

Usar um identificador inválido irá travar seu servidor! Obtenha um identificador válido usando [fopen](fopen) ou [ftemp](ftemp).

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fread](fread): Leia um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
