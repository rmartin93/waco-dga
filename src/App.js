import Calendar from './components/calendar'
function handleClick() {
    document.body.classList.toggle('dark')
}

function App() {
  return (
    <div className="App">
        <button className="btn btn-primary" onClick={handleClick}>Hello</button>
        <Calendar/>
    </div>
  );
}

export default App;
