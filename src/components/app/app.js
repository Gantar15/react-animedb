import Header from '../header';
import RandomBox from '../random-box';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default function App () {
    return (
        <div className="app">
            <Header />
            <RandomBox />
            <div className="page-body">
                <div>
                    <ItemList />
                </div>
                <div>
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
}