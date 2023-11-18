import { useEffect } from 'react';

import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error('Error occurred ' + err));

    return () => {};
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        <p>1 / 15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
