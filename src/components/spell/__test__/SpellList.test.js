import React from "react";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { SpellList} from "../SpellList";

it('renders loading spell page', () => {
    const { getByText } = render(
        <Provider store={store}>
            <SpellList />
      </Provider>
    );
  
    expect(getByText(/Loading/i)).toBeInTheDocument();
});