import Main from './components/Main';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
