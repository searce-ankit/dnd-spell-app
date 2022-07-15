import React from "react";
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { FavouriteSpellList } from "../FavouriteSpellList";

it('renders spell not found page', async () => {
    render(
        <Provider store={store}>
            <FavouriteSpellList />
      </Provider>
    );

    const element=await screen.findByTestId('spell-not-found');
  
    expect(element).toBeInTheDocument();
});