Conceitos

- É um objeto criado usando o construtor `Worker`
    que Roda um arquivo javascript passado como parâmetro
    em um contexto global diferente do `window` padrão.
    Pode ser encontrado na forma de DedicatedWorkers(Singles)
    ou como SharedWorker.

  Pode rodar qualquer tipo de código (salvas exceções).
    Não manipula o DOM ou usar algumas propiedades e métodos do `window`
    *Possui* acesso a diversos itens do `window`, como WebSockets e Indexed DB

- Utiliza um sistema de mensagens (publish/subscribe, `EventEmitter`)
    mensagens são enviadas por ambos os lados (window/Worker)
    `postMessage()` é o método utilizado
    onMessage é o tratador de eventos utilizados para responder mensagens no lado do worker
    **TODOS** os dados são enviados como **CÓPIAS** e **NÃO** são compartilhados

- Workers podem criar novos workers, desde que dentro da mesma origem
- Workers podem utilizar `XMLHttpRequests` para I/O na rede.
    O único detalhe é que as propiedades `responseXML` e `channel` *sempre* retornarão null

- In context of a worker, both self and this refer to the global scope.
