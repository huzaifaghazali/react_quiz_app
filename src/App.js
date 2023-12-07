import Header from './Components/Header';
import Main from './Components/Main';
import Loader from './Components/Loader';
import Error from './Components/Error';
import StartScreen from './Components/StartScreen';
import Question from './Components/Question';
import NextButton from './Components/NextButton';
import Progress from './Components/Progress';
import FinishScreen from './Components/FinishScreen';
import Footer from './Components/Footer';
import Timer from './Components/Timer';
import { useQuiz } from './context/QuizContext';

function App() {
  const { status } = useQuiz();

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
