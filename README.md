# 🧠 API Node.js - Personagens Históricos com IA

API REST usando **Node.js**, **Express** e **MongoDB**, com integração a uma **IA da Hugging Face** para responder perguntas sobre personagens históricos.

---

## 🔧 Tecnologias

- Node.js + Express  
- MongoDB + Mongoose  
- dotenv  
- @huggingface/inference  
- Render (Deploy)  
- Arquitetura MVC

---

## 🚀 Funcionalidades

- CRUD de personagens históricos  
- IA que responde perguntas com base nos dados  
- Deploy na Render

---

## 🌐 Endpoints principais

| Método | Rota              | Ação                  |
| ------ | ----------------- | --------------------- |
| GET    | /personagens      | Lista personagens     |
| POST   | /personagens      | Cria novo personagem  |
| GET    | /personagens/\:id | Detalha um personagem |
| PUT    | /personagens/\:id | Atualiza personagem   |
| DELETE | /personagens/\:id | Remove personagem     |
| POST   | /ia/perguntar     | Responde via IA       |


