import React, { useState } from 'react';
import './SongList.css';

function Home() {
  const [value, setValue] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [guessedSongs, setGuessedSongs] = useState([]);
  const [status,setStatus] = useState(false)
  const [gameEnded,setGameEnded] = useState(false);
  
  const realSongs = ["tim mcgraw","picture to burn","teardrops on my guitar","a place in this world", "cold as you","the outside","tied together with a smile","stay beautiful","should've said no", "mary's song","our song","fearless","fifteen","love story","hey stephen","white horse","you belong with me","breathe","tell me why","you're not sorry","the way i loved you","forever and always","the best day","change","mine","sparks fly","back to december","speak now","dear john","mean","story of us","never grow up","enchanted","better than revenge","innocent","haunted","last kiss","long live","state of grace","red","treacherous","i knew you were trouble","all too well","22","i almost do","we are never ever getting back together","stay stay stay","the last time","holy ground","sad beautiful tragic","the lucky one","everything has changed","starlight","begin again","welcome to new york","blank space","style","out of the woods","all you had to do was stay","shake if off","i wish you would","bad blood","wildest dreams","how you get the girl","this love","i know places","clean",
'ready for it','end game','i did something bad','dont blame me','delicate','look what you made me do','so it goes','gorgeous','getaway car','king of my heart','dancing with our hands tied','dress','this is why we cant have nice things','call it what you want','new years day','i forgot that you existed','cruel summer','lover','the man','the archer','i think he knows','miss americana and the heartbreak prince','paper rings','cornelia street','death by a thousand cuts','london boy','soon youll get better','false god','you need to calm down','afterglow','me','its nice to have a friend','daylight','the 1','cardigan','the last great american dynasty','exile','my tears ricochet','mirrorball','seven','august','this is me trying','illicit affairs','invisible string','mad woman','epiphany','betty','peace','hoax','willow','champagne problems','gold rush','tis the damn season','tolerate it','no body no crime','happiness','dorothea','coney island','ivy','cowboy like me','long story short','marjorie','closure','evermore','lavender haze','maroon','antihero','snow on the beach','youre on your own kid','midnight rain','question','vigilante shit','bejeweled','labyrinth','karma','sweet nothing','mastermind'];
const [tableState, setTableState] = useState(Array(realSongs.length).fill(false));
const onClear = () => {
    setValue("");
  };
  const startGame = () => {
    resetGame();
    setStatus(true);
    setTableState(Array(realSongs.length).fill(false)); // Reset the table state
    setGameEnded(false); // Reset the gameEnded state to hide answers
  };

  
 const resetGame = () =>
 {
     setStatus(false);
     setGuessedSongs([]); 
     setCorrectCount(0);
     setTableState(Array(realSongs.length).fill(false));
     setGameEnded(false);

 }
 const endGame = () => {
    setGameEnded(true); // Add this state variable
  };

  const onInput = (e) => setValue(e.target.value);

  const input = (e) => {
    e.preventDefault();
    const enteredValue = value.toLowerCase();
    
    if (enteredValue && status) {
      const songExists = realSongs.includes(enteredValue);

      if (songExists && !guessedSongs.includes(enteredValue)) {
        setCorrectCount(correctCount + 1);
        setGuessedSongs([...guessedSongs, enteredValue]);
      }

      onClear();
    }
  };


  const renderRow = (songName, index) => {
    const isGuessed = guessedSongs.includes(songName);
    const isUnguessed = !isGuessed && gameEnded;
    const isHidden = status && !isGuessed && tableState[index]; // Check if the song should be hidden
  
    return (
      <tr key={index} className={isHidden ? 'hidden' : ''}>
        <td
          className={`song-cell ${isGuessed ? 'guessed' : ''} ${isUnguessed ? 'unguessed' : ''}`}
        >
          {isGuessed || isUnguessed ? songName : ""}
        </td>
      </tr>
    );
  };
 
  
  
  
  
  
  

  return (
    <div>
        <div className = 'topScreen'>
      <h1>Can You Name All of Taylor Swift's Songs?</h1>
      <div className = "submit">
      <form onSubmit={input}>
        <label>
          <input
            type="text"
            value={value}
            onInput={onInput}
          />
        </label>
        <button className = "trySong" type="submit" >Enter</button>
      </form>
      </div> 
      <button onClick={() => startGame()}>Start Game</button>
      <button onClick={() => resetGame()}>Reset</button>
      <button onClick={() => endGame()}>See Answers</button>
      <h1>Correct Count: {correctCount}/144</h1></div>
<div className='one'>
  <div className="guessed-songs">
    <div className="table-container">
      <table className='debut'>
        <thead>
          <tr>
            <th>Taylor Swift (Debut)</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(0, 11).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='fearless'>
        <thead>
          <tr>
            <th className = "fearlessHead">Fearless</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(11, 24).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='speak now'>
        <thead>
          <tr>
            <th>Speak Now</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(24, 38).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='red'>
        <thead>
          <tr>
            <th>Red</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(38, 54).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='one-nine'>
        <thead>
          <tr>
            <th>1989</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(54, 67).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
    </div>
   
  </div>
 
</div>
<div className="table-container2">
      <table className='reputation'>
        <thead>
          <tr>
            <th>Reputation</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(67, 82).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='lover'>
        <thead>
          <tr>
            <th>Lover</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(82, 100).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='folklore'>
        <thead>
          <tr>
            <th>folklore</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(100, 116).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='evermore'>
        <thead>
          <tr>
            <th>evermore</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(116, 131).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='midnights'>
        <thead>
          <tr>
            <th>Midnights</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(131, 144).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      </div>
</div>

  );
}

export default Home;