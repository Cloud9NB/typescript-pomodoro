import ReactDOM from 'react-dom/client';

import Timer from './components/Timer';

import './css/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Timer />);
