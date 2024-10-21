import './App.css';
import Pessoa from './components/Pessoa.js';
import List from './components/List.js';


function App() {

  const Pessoas = [["https://segredosdomundo.r7.com/wp-content/uploads/2019/04/ugly-models-e-a-agencia-que-contrata-apenas-pessoas-feias-13.jpg", "Mario", "Milhonário"], ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfi6xxe7PjQEYED1NXaIv95tnwsBg05zp9w&s", "Framboeso", "Lixeiro"],["https://static6.depositphotos.com/1000647/567/i/450/depositphotos_5676642-stock-photo-nerd-student-girl.jpg" , "Menina Fei", "Rainha de Bateria"] ]

  return (
    <div>
      <div className="Container">
        {Pessoas.map((element) => <Pessoa key={element[1]} profileImage={element[0]} name={element[1]} work={element[2]}/>)}
      </div>
      <div className="Container">
        <List/>
      </div>
    </div>
  );
}

export default App;
