import Img1 from './assets/img/th.jpg'
import Event from './Event'
function App() {
  const name ='Mina'
  const color ={
    color : 'green',
    fontSize : '50px'
  }
  return (
    <>
    <img src={Img1} alt="Image" style={{borderRadius:"20px",width:"200px"}} />
      <h1>Hello <span style={color}>{name}</span>  from React!</h1>
      <p>Para 1</p>
      <div>
        < Event/>
      </div>
    </>
  )

}

export default App
