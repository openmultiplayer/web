---
title: fremove
sidebar_label: fremove
description: "Exclua um arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Exclua um arquivo.

| Nome | Descrição |
| ---------------- | ------------------------------- |
| const filename[] | O caminho do arquivo a ser excluído. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O arquivo não existe ou você não tem permissão para excluí-lo.

## Exemplos

**Excluir um arquivo:**

```c
if (fremove("example.txt"))
{
    print("The file \"example.txt\" removed.");
}
else
{
    print("The file \"example.txt\" does not exists.");
}
```
**Excluir um diretório:**

```c
if (fremove("logs"))
{
    print("The directory \"logs\" removed.");
}
else
{
    print("The directory \"logs\" does not exists, or it is not empty.");
}
```
## Notas

:::tip

Os arquivos que estão atualmente abertos (fopen) devem ser fechados primeiro (fclose) para serem excluídos.

:::

:::warning

O caminho do arquivo deve ser válido.

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
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
