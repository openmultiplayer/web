---
slug: launcher-false-positive
title: Falso positivo do Windows Defender no Launcher
authors: [iamir, itsneufox]
---

Alguns usuários relataram que o **Windows Defender está sinalizando o open.mp Launcher como um Trojan/vírus**. Isso é um **falso positivo**; o launcher é completamente seguro para uso.

O launcher é **totalmente open source** e você pode revisá-lo ou compilá-lo por conta própria:
[https://github.com/openmultiplayer/launcher](https://github.com/openmultiplayer/launcher)

Nós **já estamos trabalhando para corrigir isso**, para que builds futuras não sejam sinalizadas.

<!-- truncate -->

## O que fazer por enquanto

Até que a Microsoft atualize suas assinaturas de detecção, adicione a pasta do launcher como uma exclusão no Windows Defender:

1. Abra a **Segurança do Windows** (procure por ela no menu Iniciar)
2. Vá para **Proteção contra vírus e ameaças**
3. Em **Configurações de proteção contra vírus e ameaças**, clique em **Gerenciar configurações**
4. Role para baixo até **Exclusões** e clique em **Adicionar ou remover exclusões**
5. Clique em **Adicionar uma exclusão** → **Pasta**
6. Selecione sua **pasta de instalação do open.mp launcher** e confirme
7. Feche e reabra o launcher

### Observações

- Exclua a **pasta inteira do launcher**, não arquivos individuais, porque os hashes dos arquivos mudam entre atualizações.
- Se o Defender ainda mostrar um aviso depois de adicionar a exclusão, feche completamente o launcher, verifique novamente o caminho da exclusão e tente de novo.

## Por que isso acontece?

Falsos positivos são comuns em softwares relacionados a jogos. Heurísticas de antivírus podem sinalizar programas legítimos que interagem com processos de jogos. Estamos trabalhando com a Microsoft para que o launcher seja colocado corretamente na lista de permissões.

Ainda tem dúvidas? Entre em contato pelo nosso [Discord](https://discord.gg/samp).
