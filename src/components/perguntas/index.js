import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

export default function Dashboard() {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadResults() {
      const response = await api.get("/FAQ", {
        headers: {
          "X-Parse-Application-Id": "br.com.metasix.poc"
        }
      });

      setResults(response.data.results);
    }

    loadResults();
  }, [results]);

  async function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  return (
    <>
      <div className="faq">
        <div className="flex-container">
          <h1>FAQ - Perguntas Frequentes</h1>
          <form className="input-group" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Busque por termo"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button>
              <i className="fa fa-search"></i>buscar
            </button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Pergunta</th>
              <th>
                <i className="fa fa-lg fa-plus-circle"></i>Nova Pergunta
              </th>
              <th>Ordem</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {results.map((itemResults, index) => (
              <tr key={itemResults.objectId}>
                <td>
                  <p>{itemResults.question}</p>
                </td>
                <td></td>
                <td>
                  <strong>{index + 1}</strong>
                </td>
                <td>
                  <i className="fa table-icons fa-lg fa-edit"></i>
                </td>
                <td>
                  <i className="fa table-icons fa-lg fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
