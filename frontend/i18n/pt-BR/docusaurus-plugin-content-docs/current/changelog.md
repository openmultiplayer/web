---
title: Changelog
sidebar_label: Changelog
description: Progresso de desenvolvimento e changelog do open.mp.
---

## **Servidor open.mp**

### **[v1.5.8.3079](https://github.com/openmultiplayer/open.mp/releases/tag/v1.5.8.3079) (Mais Recente)**

Estamos animados em anunciar o lançamento da nossa versão mais recente do servidor!

Esta atualização estabelece a direção para o restante deste ano e lança as bases para um novo capítulo em 2026. Estamos entrando em uma fase focada em ferramentas mais profundas, integrações nativas mais fortes e lançamentos mais ambiciosos.

Para o changelog completo, por favor leia [aqui](https://github.com/openmultiplayer/open.mp/releases/tag/v1.5.8.3079).

**Recursos Principais:**

- Introduzidos **NPCs totalmente controláveis como recurso nativo do servidor**, removendo a necessidade de plugins externos de NPC e permitindo IA do lado do servidor e automação mais profundas.
- Adicionada uma **API C e SDK de API C**, permitindo que desenvolvedores integrem open.mp diretamente com código nativo e ferramentas externas.
- Adicionada a capacidade de **chamar natives Pawn do SDK C++ do open.mp**, melhorando significativamente a interoperabilidade entre scripts e módulos nativos.

**Rede e Performance:**

- Melhorias significativas de **performance de rede**, resultando em sincronização mais rápida e jogabilidade mais responsiva.
- Adicionadas múltiplas **verificações de validação de sincronização** para prevenir dados inválidos, estados falsificados e pacotes malformados.
- Valores de MTU agora são **validados contra o máximo permitido por versão do cliente**, prevenindo configurações incorretas e instabilidade.

**Plataforma e Compatibilidade:**

- Atualizado **OpenSSL de 1.1.1 para 3.0.13**, oficialmente depreciando distribuições Linux legadas e garantindo suporte adequado para sistemas modernos.
- Adicionado **suporte a variáveis de ambiente para `config.json`**, tornando implantações containerizadas, CI/CD e de produção mais fáceis e flexíveis.

**Melhorias de NPC e Gameplay:**

- IDs de NPC agora alocam do **mais alto para o mais baixo**, prevenindo conflitos e melhorando previsibilidade.
- Depreciado `ConnectNPC` em favor do novo sistema nativo de NPC.
- Forçada a criação de trens a sempre usar **4 IDs consecutivos**, corrigindo inconsistências antigas.
- Corrigidos problemas de sincronização de passageiros de trem.

**Estabilidade e Correções:**

- Corrigido um problema infame com dados de spawn.
- Corrigidos problemas de atraso no kick.
- Corrigidos crashes relacionados a gangzones na lista de verificação durante reinicializações do servidor.
- Corrigidas ocorrências aleatórias do estado do jogador sendo definido como `None` após espectar.
- Corrigido bloqueio de stdin no Linux durante o desligamento do servidor.
- Corrigido `chatlogging` não afetando mensagens de morte.
- Removido o componente legado **Fixes** devido a instabilidade, redundância e sua funcionalidade ter sido substituída por sistemas mais novos.
- Numerosas pequenas correções de natives Pawn para melhor correção e usabilidade.

<br />

<hr />

## **Launcher open.mp**

### **[v1.6.1](https://github.com/openmultiplayer/launcher/releases/tag/v1.6.1) (Mais Recente)**

Esta versão estabelece a base para o restante deste ano e prepara o cliente para um novo e empolgante capítulo em 2026. Com um launcher mais forte, integração mais profunda no jogo e estabilidade melhorada, os próximos lançamentos continuarão a expandir funcionalidades e experiência do usuário em todo o ecossistema open.mp.

Para o changelog completo, por favor leia [aqui](https://github.com/openmultiplayer/launcher/releases/tag/v1.6.1).

**Recursos no Jogo e do Cliente:**

- Adicionado um **navegador de servidores no jogo** (pressione **F9**), permitindo que você navegue pela lista de servidores e troque ou reconecte a servidores **sem sair do jogo**.
- Adicionadas **telas de splash personalizadas**.
- Adicionadas **configurações do open.mp** diretamente no menu de pausa do jogo.
- Adicionadas opções nas configurações do open.mp para **alternar status do Discord** (e outros indicadores de status).
- Melhorado tratamento de status do Discord e corrigido relatório incorreto de IP.
- Corrigidos múltiplos problemas relacionados à **lógica de reconexão e protocolo open.mp**.
- Corrigidos vários **cenários de crash do SA-MP**, melhorando a estabilidade geral.

**Melhorias do Launcher:**

- **Melhorias massivas de estabilidade e performance** em todo o launcher.
- Grande **refatoração da base de código** tanto no lado Rust quanto TypeScript para manutenibilidade a longo prazo.
- Significativamente melhorado o **mecanismo de consulta de servidores** para melhor eficiência e prevenção de spam.
- Adicionado **reordenamento por arrastar e soltar** para servidores favoritos.
- Melhorada **compatibilidade com Windows 7**.
- O instalador agora vem com o **instalador WebView2 incluído**, simplificando a configuração.
- Removidas configurações de status do Discord da aba Avançado.
- Adicionado suporte para **nomes de executáveis de jogo personalizados** nas configurações Avançadas.
- Adicionada a capacidade de **importar e exportar listas de servidores favoritos**.
- Seleciona automaticamente a **versão de cliente apropriada** se o SA-MP ainda não estiver instalado.
- Adicionada **seleção de versão de cliente por servidor**.
- Adicionadas **mensagens de log extensivas e significativas** para melhorar diagnósticos e suporte.
- Adicionado um **prompt de entrada** para servidores protegidos por senha ao usar conexão rápida.
- Adicionados **timeouts de API** para a maioria das APIs para melhorar responsividade e confiabilidade.

**Correções de Bugs e Melhorias de UX:**

- Corrigidos problemas com cópia de arquivos quando arquivos estão faltando (notavelmente arquivos de fonte).
- Corrigidos dados de servidor sendo armazenados em cache mesmo após reiniciar a aplicação.
- Corrigidas falhas na troca de tema.
- Corrigidas falhas no input de nickname por servidor.
- Corrigidas setas de ordenação invertidas.
- Corrigido input de busca não incluindo texto de gamemode.
- Melhorada resolução de hostname de servidor.
- Melhorado tratamento de permissões e mensagens voltadas ao usuário.
- Corrigidos problemas de validação de URL web.
- Corrigidos títulos da aba de configurações não atualizando após mudanças de idioma.
- Adicionado limitação de taxa para requisições de consulta de servidor para prevenir spam.
- Atualizados e expandidos arquivos de localização em múltiplos idiomas.