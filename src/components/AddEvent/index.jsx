import React from 'react';
import './styles.css';

export function AddEvent() {
  return (
    <div id="add_event">
      <form>
        <legend>Agendar</legend>
        <fieldset className="form_content">
          <select name="event" id="event">
            <option value="" disabled selected hidden>
              Evento...
            </option>
          </select>
          <fieldset className="date_and_hour">
            <input type="date" />
            <input type="time" />
          </fieldset>
          <select name="category" id="category">
            <option value="" disabled selected hidden>
              Categoria...
            </option>
          </select>
          <textarea
            name="description"
            id="description_textarea"
            cols="30"
            rows="10"
            placeholder="Descrição..."
          ></textarea>
        </fieldset>
        <div className="options_buttons">
          <button>Salvar</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  );
}
