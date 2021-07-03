import React from 'react';
import { AddEvent } from "../../components/AddEvent";
import { TodoList } from "../../components/TodoList";

import './styles.css';

export function UserPage() {
  return (
    <div id="user_page">
      <header className="header">
        <h1>Bem-Vindo Guilherme Araújo</h1>
        <button>Sair</button>
      </header>
      <div className="schedule_and_history">
        <button>Agenda</button>
        <button>Histórico</button>
      </div>
      <section className="user_content">
       <AddEvent/>
       <TodoList/>
      </section>
      <span>Créditos - Click Aqui</span>
    </div>
  );
}
