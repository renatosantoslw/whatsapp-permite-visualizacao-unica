# Whatsapp Web permite visualizacao unica
Extensão para Chrome, Edge, OperaGX que permite a exibição de mensagens do tipo visualização única no WhatsApp Web.

- A extensão do repositório utiliza arquivos como injector.js, script.js, e service_worker.js para manipular o comportamento do WhatsApp Web. Ela é projetada para contornar a função de "visualização única" do WhatsApp, permitindo que o usuário visualize mais de uma vez ou retenha mídias originalmente limitadas a uma única visualização. No entanto, só funciona quando o remetente envia a mídia do aplicativo móvel do WhatsApp, e não na versão WhatsApp Web ou Desktop.

## Componentes do Código
- Manipulação do WhatsApp Web: A extensão atua injetando scripts no WhatsApp Web para interceptar e modificar o comportamento padrão da plataforma. O WhatsApp Web usa JavaScript para controlar o frontend, e a extensão aproveita isso para capturar e modificar os eventos de visualização única.

- Modificação do DOM: Parte do código envolve a manipulação do Document Object Model (DOM) da página do WhatsApp Web, permitindo que o conteúdo de visualização única seja preservado no navegador e armazenado temporariamente.

- Persistência de mídia: A extensão altera a maneira como o WhatsApp Web lida com a visualização de mídias, ela utiliza APIs de armazenamento do navegador (como localStorage e IndexedDB) para manter a mídia acessível mesmo após a visualização única.

## Instalação
- Clone este repositório
- No navegador visite: chrome://extensions e ative o modo de desenvolvedor
- Arraste e solte a pasta na página de extensões

> [!NOTE]
A visualização única não pode ser ignorada quando o remetente está enviando uma mídia de visualização única do WA WEB/Desktop, só funciona quando o remetente está enviando uma mídia de visualização única do WA Mobile App.

- [Creditos](https://github.com/newfebriwisnu/WhatsApp-Bypass-Once-View)
