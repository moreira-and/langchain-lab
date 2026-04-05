# Chat Graph Engine

Motor simples de processamento de mensagens baseado em grafo (nodes encadeados), com fluxo definido via JSON.

---

## 📌 O que faz

Recebe uma entrada (ex: texto), executa um fluxo de nodes e retorna uma resposta.

Cada node:
- lê o estado  
- transforma dados  
- define o próximo passo  

---

## 🏗️ Estrutura

```text
src/
  nodes/        # unidades de processamento
  graph.ts      # executor do fluxo
  state.ts      # estado compartilhado
  server.ts     # API HTTP
  index.ts      # bootstrap

langgraph.json  # definição do fluxo
````

---

## 🚀 Como rodar

```bash
npm install
npm run dev
```

---

## 🔌 Testar

```bash
curl localhost:3000/chat \
  -d '{"question":"hello"}' \
  -H "Content-Type: application/json"
```

---

## 🧪 Testes

```bash
npm test
```

---

## 🧠 Conceito chave

* **Graph**: define o fluxo
* **Node**: executa uma etapa
* **State**: compartilha dados entre nodes

---

## ⚠️ Observações

* Fluxo é definido em `langgraph.json`
* Nodes devem ser independentes
* Sem versionamento de grafo (ainda)