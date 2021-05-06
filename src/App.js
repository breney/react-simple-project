import Header from './components/Header'

function App() {
  const name = 'Breney' 
  const x = false
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h3>Check : {x ? 'true' : 'false'}</h3>
      <Header />
    </div> 
  )
}

export default App;
