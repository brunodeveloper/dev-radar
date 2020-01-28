import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() =>  {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude)
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
   
    <div id="app">
      <aside> 
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github </label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group ">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude " required value={latitude} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input name="longitude " id="longitude " required value={longitude}/>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/5034413?s=460&v=4" alt="Bruno Carvalho"></img>
                <div className="user-info">
                  <strong>Bruno Carvalho</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>Mostrar a biografia aqui.</p>
              <a href="https://github.com/brunodeveloper">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/5034413?s=460&v=4" alt="Bruno Carvalho"></img>
                <div className="user-info">
                  <strong>Bruno Carvalho</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>Mostrar a biografia aqui.</p>
              <a href="https://github.com/brunodeveloper">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/5034413?s=460&v=4" alt="Bruno Carvalho"></img>
                <div className="user-info">
                  <strong>Bruno Carvalho</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>Mostrar a biografia aqui.</p>
              <a href="https://github.com/brunodeveloper">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/5034413?s=460&v=4" alt="Bruno Carvalho"></img>
                <div className="user-info">
                  <strong>Bruno Carvalho</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>Mostrar a biografia aqui.</p>
              <a href="https://github.com/brunodeveloper">Acessar perfil no Github</a>
            </li>
          </ul>
      </main>
    </div>


  );
}

export default App;
