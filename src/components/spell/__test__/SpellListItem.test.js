import React from "react";
import { render,cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { SpellListItem } from "../SpellListItem";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import renderer  from 'react-test-renderer';


afterEach(cleanup);

it('renders spell list item', () => {
    const spell={
        index:'expecto-patronum',
        name:'expecto patronum'
    };
    const { getByText } = render(
        <Provider store={store}>
            <Router>
                <SpellListItem key={spell.index} spell={spell} isFavourite={ false } />
            </Router>
        </Provider>
    );
  
    expect(getByText(/expecto patronum/i)).toBeInTheDocument();
});

it('maches snapshot',()=>{

    const spell={
        index:'expecto-patronum',
        name:'expecto patronum'
    };

    const tree = renderer.create(<Provider store={store}>
        <Router>
            <SpellListItem key={spell.index} spell={spell} isFavourite={ false } />
        </Router>
    </Provider>).toJSON();
    
    expect(tree).toMatchSnapshot();

});