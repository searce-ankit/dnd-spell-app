import React from "react";
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { SpellDetail } from "../SpellDetail";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


it('renders loading spell detail page', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Router>
                <SpellDetail/>
            </Router>
      </Provider>
    );
  
    expect(getByText(/Loading/i)).toBeInTheDocument();
});

it('should render spell not found data', async () => {
    render(
        <Provider store={store}>
            <Router>
                <SpellDetail  />
            </Router>
      </Provider>
    );

    const spellDetail = await screen.findByTestId('spell-detail-not-found');

    expect(spellDetail).toBeInTheDocument();
});