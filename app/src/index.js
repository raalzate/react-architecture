import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/dist/component1';
import * as serviceWorker from './serviceWorker';

const AppWrapper = () => {
    const [count, setCount] = useState(0);
    return <App count={count} setCount={setCount}/>;
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

serviceWorker.unregister();
