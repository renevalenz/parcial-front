import './App.css'
import Card from './components/Card'


function App() {
 
  return (
   <div className='App'>
    <h1>Carga de estudiantes</h1>
    <form>
    <div className="container">
  <div className="left">
    <div className="header">
      <h2 className="animation a1">Bienvenid@ a clases!</h2>
      <h4 className="animation a2">Inicia sesion con tu email y password</h4>
    </div>
    <div className="form">
      <input type="email" className="form-field animation a3" placeholder="Email"/>
      <input type="password" className="form-field animation a4" placeholder="Password"/>
      <p className="animation a5"><a href="#">Forgot Password</a></p>
      <button className="animation a6">Entrar</button>
    </div>
  </div>
  <div className="right"></div>
</div>
    </form>
    <br />
    <Card />
   </div>
  )
}

export default App
