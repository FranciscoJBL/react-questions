import './App.css';
import ChatContainer from './components/chatContainer';
import ChatHeader from './components/chatHeader';

function App() {
  return (
    <div className="App">
      <ChatHeader />
      <ChatContainer></ChatContainer>
    </div>
  );
}

export default App;
