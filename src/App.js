import './style.css';
import imageInSrc from './imageInSrc.jpg' 

function App() {
  return (
    <div className="App">
      <div style={{"border":"solid 1px black","max-width":"100vw"}}>
        <h1 class="title red">Sarah Mz</h1>
        <h1 class="title blue">Sarah Mz</h1>
        <h1 class="title green">Sarah Mz</h1>
        <br />
        <img class="image" src={imageInSrc} alt='src' />
        <br />
        <img class="image" src="/imageInPublic.jpg" alt='public' />
      </div>
      <div>
      <video width="320" height="240" controls>
        <source src="/Swans - 1287.mp4" type="video/mp4" />
      </video>
    </div>
    </div>
  );
}

export default App;
