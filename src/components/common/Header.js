import { Navigation } from './Navigation';
import './Header.css';

export function Header(){


    return (
        <div>
            <div className="app-header">
                Dungeons & Dragons Spells App
            </div>
            <Navigation />
        </div>
    );

}