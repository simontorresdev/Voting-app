import Header from './components/Header';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import VotesSection from './components/VotesSection';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <MainContent>
        <VotesSection />
      </MainContent>
    </>
  );
}

export default App;
