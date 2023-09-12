import React, { useState } from 'react';
import './SongList.css';

function Home() {
  const [value, setValue] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [guessedSongs, setGuessedSongs] = useState([]);
  const [status,setStatus] = useState(false)
  const [gameEnded,setGameEnded] = useState(false);
  
  
  const realSongs = ["tim mcgraw","picture to burn","teardrops on my guitar","a place in this world", "cold as you","the outside","tied together with a smile","stay beautiful","shouldve said no", "marys song","our song","im only me when im with you","invisible","a perfectly good heart","fearless","fifteen","love story","hey stephen","white horse","you belong with me","breathe","tell me why","youre not sorry","the way i loved you","forever and always","the best day","change","jump then fall","untouchable","come in with the rain","SuperStar","The other side of the door","today was a fairytale","you all over me","mr perfectly fine","we were happy","thats when","dont you","bye bye baby","mine","sparks fly","back to december","speak now","dear john","mean","story of us","never grow up","enchanted","better than revenge","innocent","haunted","last kiss","long live","ours","superman","electric touch","when emma falls in love","i can see you","castles crumbling","foolish one","timeless","state of grace","red","treacherous","i knew you were trouble","all too well","22","i almost do","we are never ever getting back together","stay stay stay","the last time","holy ground","sad beautiful tragic","the lucky one","everything has changed","starlight","begin again","the moment i knew","come back be here","girl at home","ronan","better man","nothing new","babe","message in a bottle","i bet you think about me","forever winter","run","the very first night","all too well (10 minute version)","welcome to new york","blank space","style","out of the woods","all you had to do was stay","shake it off","i wish you would","bad blood","wildest dreams","how you get the girl","this love","i know places","clean",
"wonderland","you are in love","new romantics",'ready for it','end game','i did something bad','dont blame me','delicate','look what you made me do','so it goes','gorgeous','getaway car','king of my heart','dancing with our hands tied','dress','this is why we cant have nice things','call it what you want','new years day','i forgot that you existed','cruel summer','lover','the man','the archer','i think he knows','miss americana and the heartbreak prince','paper rings','cornelia street','death by a thousand cuts','london boy','soon youll get better','false god','you need to calm down','afterglow','me','its nice to have a friend','daylight','the 1','cardigan','the last great american dynasty','exile','my tears ricochet','mirrorball','seven','august','this is me trying','illicit affairs','invisible string','mad woman','epiphany','betty','peace','hoax','the lakes','willow','champagne problems','gold rush','tis the damn season','tolerate it','no body no crime','happiness','dorothea','coney island','ivy','cowboy like me','long story short','marjorie','closure','evermore','right where you left me','its time to go','lavender haze','maroon','antihero','snow on the beach','youre on your own kid','midnight rain','question','vigilante shit','bejeweled','labyrinth','karma','sweet nothing','mastermind','the great war','bigger than the whole sky','paris','high infidelity','glitch','wouldve couldve shouldve','dear reader','youre losing me','hits different','snow on the beach(more lana del rey)',"karma (ice spice)",'beautiful eyes','shouldve said no','teardrops on my guitar','picture to burn','im only me when im with you','i heart?','last christmas','christmases when you were mine','santa baby','silent night','christmas must be something more','white christmas','safe and sound','eyes open','crazier','i dont want to live forever','only the young','sweeter than fiction','beautiful ghosts','carolina','highway dont care','both of us','half of my heart','gasoline','babe','two is better than one','renegade','birch','the joker and the queen','the alcott','christmas tree farm','if this was a movie','all of the girls you loved before'];

const [tableState, setTableState] = useState(Array(realSongs.length).fill(false));
const onClear = () => {
    setValue("");
  };
  const startGame = () => {
    resetGame();
    setStatus(true);
    setTableState(Array(realSongs.length).fill(false)); 
    setGameEnded(false); 
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
        setCorrectCount(correctCount + realSongs.filter((x) => x == enteredValue).length);
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
      {!status ? <em><h3>Press Start to Begin</h3></em> : null}
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
      <button className = "startGame" onClick={() => startGame()}>Start Game</button>
      <button className = "reset" onClick={() => resetGame()}>Reset</button>
      <div><button className = "end" onClick={() => endGame()}>See Answers</button></div>
      <h1>Correct Count: {correctCount}/{realSongs.length}</h1></div>
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
          {realSongs.slice(0, 14).map((songName, index) => (
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
          {realSongs.slice(14, 39).map((songName, index) => (
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
          {realSongs.slice(39, 61).map((songName, index) => (
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
          {realSongs.slice(61, 90).map((songName, index) => (
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
          {realSongs.slice(90, 106).map((songName, index) => (
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
          {realSongs.slice(106, 121).map((songName, index) => (
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
          {realSongs.slice(121, 140).map((songName, index) => (
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
          {realSongs.slice(140, 156).map((songName, index) => (
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
          {realSongs.slice(156, 173).map((songName, index) => (
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
          {realSongs.slice(173, 197).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      </div>
      <div className="table-container3">
      <table className='beautiful-eyes'>
        <thead>
          <tr>
            <th>Beautiful Eyes</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(197, 203).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='holiday'>
        <thead>
          <tr>
            <th>The Holiday Collection</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(203, 209).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='movies'>
        <thead>
          <tr>
            <th>Featured in Movies</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(209, 217).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='featured'>
        <thead>
          <tr>
            <th>Featuring In</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(217, 227).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      <table className='others'>
        <thead>
          <tr>
            <th>Others</th>
          </tr>
        </thead>
        <tbody>
          {realSongs.slice(227, 230).map((songName, index) => (
            renderRow(songName, index)
          ))}
        </tbody>
      </table>
      </div>
</div>

  );
}

export default Home;