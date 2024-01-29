import Header from './components/Header';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <MainContent>
        <h1>hola</h1>
      </MainContent>
    </>
  );
}

export default App;
