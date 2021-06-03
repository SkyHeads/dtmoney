import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return {
        transactions: [
          {
            id: 1,
            title: 'Aplicação Web com ReactJS',
            type: 'deposit',
            category: 'jobs',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'house',
            amount: 800,
            createdAt: new Date('2021-03-01 10:00:00'),
          },
        ],
      };
    });
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
