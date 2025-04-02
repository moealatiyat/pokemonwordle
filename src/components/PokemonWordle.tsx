import { useState, useEffect } from 'react';
import { gen1Pokemon, Pokemon } from '../data/pokemon';
import './PokemonWordle.css';

const MAX_ATTEMPTS = 5;

// Add color mapping for Pokemon
const getPokemonColor = (pokemon: Pokemon): string => {
  // Define color based on primary type
  const typeColors: { [key: string]: string } = {
    fire: '#FF6B6B',
    water: '#4ECDC4',
    grass: '#95E1D3',
    electric: '#FFE66D',
    psychic: '#FF8B94',
    ice: '#A8E6CF',
    dragon: '#FFD3B6',
    dark: '#2C3E50',
    fairy: '#FFB5E8',
    normal: '#D4D4D4',
    fighting: '#FF6B6B',
    flying: '#B5EAD7',
    poison: '#C7CEEA',
    ground: '#E2F0CB',
    bug: '#FFDAC1',
    ghost: '#E6E6FA',
    rock: '#D4A5A5',
    steel: '#B8B8D0'
  };
  return typeColors[pokemon.type[0]] || '#D4D4D4';
};

// Function to get Pokemon image URL
const getPokemonImageUrl = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

// Function to get evolution stage
const getEvolutionStage = (pokemon: Pokemon): string => {
  const baseForms = ['bulbasaur', 'charmander', 'squirtle', 'caterpie', 'weedle', 'pidgey', 'rattata', 'spearow', 'ekans', 'pikachu', 'sandshrew', 'nidoran-f', 'nidoran-m', 'clefairy', 'vulpix', 'jigglypuff', 'oddish', 'meowth', 'psyduck', 'growlithe', 'poliwag', 'machop', 'bellsprout', 'tentacool', 'geodude', 'ponyta', 'slowpoke', 'magnemite', 'farfetchd', 'doduo', 'seel', 'grimer', 'shellder', 'gastly', 'onix', 'drowzee', 'krabby', 'voltorb', 'exeggcute', 'cubone', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'rhyhorn', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'goldeen', 'staryu', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'lapras', 'ditto', 'eevee', 'porygon', 'omanyte', 'kabuto', 'aerodactyl', 'articuno', 'zapdos', 'moltres', 'dratini', 'mewtwo', 'mew'];
  const firstEvolutions = ['ivysaur', 'charmeleon', 'wartortle', 'metapod', 'kakuna', 'pidgeotto', 'raticate', 'fearow', 'arbok', 'raichu', 'sandslash', 'nidorina', 'nidorino', 'clefable', 'ninetales', 'wigglytuff', 'gloom', 'persian', 'golduck', 'arcanine', 'poliwhirl', 'machoke', 'weepinbell', 'tentacruel', 'graveler', 'rapidash', 'slowbro', 'magneton', 'dodrio', 'dewgong', 'muk', 'cloyster', 'haunter', 'drowzee', 'krabby', 'voltorb', 'exeggcute', 'cubone', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'rhyhorn', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'goldeen', 'staryu', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'lapras', 'ditto', 'eevee', 'porygon', 'omanyte', 'kabuto', 'aerodactyl', 'articuno', 'zapdos', 'moltres', 'dratini', 'mewtwo', 'mew'];
  
  if (baseForms.includes(pokemon.name)) return 'Base';
  if (firstEvolutions.includes(pokemon.name)) return 'First';
  return 'Final';
};

export const PokemonWordle = () => {
  const [targetPokemon, setTargetPokemon] = useState<Pokemon | null>(null);
  const [guesses, setGuesses] = useState<Pokemon[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gen1Pokemon.length);
    setTargetPokemon(gen1Pokemon[randomIndex]);
  }, []);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (gameOver) return;

    if (event.key === 'Enter') {
      const guess = currentGuess.toLowerCase();
      const guessedPokemon = gen1Pokemon.find(p => p.name === guess);

      if (!guessedPokemon) {
        setMessage('Not a valid Gen 1 Pokemon!');
        return;
      }

      setGuesses([...guesses, guessedPokemon]);
      setCurrentGuess('');
      setMessage('');

      if (guess === targetPokemon?.name) {
        setGameOver(true);
        setMessage('Congratulations! You won!');
        setShowImage(true);
      } else if (guesses.length + 1 >= MAX_ATTEMPTS) {
        setGameOver(true);
        setMessage(`Game Over! The Pokemon was ${targetPokemon?.name}`);
        setShowImage(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentGuess, guesses, gameOver, targetPokemon]);

  const getGuessStatus = (guess: Pokemon) => {
    if (!targetPokemon) return { name: '', type: '', color: '', evolution: '' };
    
    return {
      name: guess.name === targetPokemon.name ? 'correct' : 'incorrect',
      type: guess.type.some(type => targetPokemon.type.includes(type)) ? 'correct' : 'incorrect',
      color: guess.color === targetPokemon.color ? 'correct' : 'incorrect',
      evolution: getEvolutionStage(guess) === getEvolutionStage(targetPokemon) ? 'correct' : 'incorrect'
    };
  };

  return (
    <div className="game-container">
      <h1>Pokemon Wordle</h1>
      <p>Guess the Gen 1 Pokemon! You have {MAX_ATTEMPTS} attempts.</p>
      
      <div className="grid">
        {[...Array(MAX_ATTEMPTS)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {guesses[rowIndex] ? (
              <div className="guess-cell">
                <div className={`guess-section ${getGuessStatus(guesses[rowIndex]).name}`}>
                  <div className="section-label">Name</div>
                  <div className="pokemon-name">{guesses[rowIndex].name}</div>
                  <img 
                    src={getPokemonImageUrl(guesses[rowIndex].id)} 
                    alt={guesses[rowIndex].name}
                    className="pokemon-image"
                  />
                </div>
                <div className={`guess-section ${getGuessStatus(guesses[rowIndex]).type}`}>
                  <div className="section-label">Type</div>
                  <div className="pokemon-types">
                    {guesses[rowIndex].type.map(type => (
                      <span key={type} className={`type-badge ${type}`}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`guess-section ${getGuessStatus(guesses[rowIndex]).color}`}>
                  <div className="section-label">Color</div>
                  <div className="color-name">
                    {guesses[rowIndex].color}
                  </div>
                </div>
                <div className={`guess-section ${getGuessStatus(guesses[rowIndex]).evolution}`}>
                  <div className="section-label">Evolution</div>
                  <div className="evolution-stage">
                    {getEvolutionStage(guesses[rowIndex])}
                  </div>
                </div>
              </div>
            ) : (
              <div className="guess-cell empty">
                {rowIndex === guesses.length ? (
                  <input
                    type="text"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
                    placeholder="Type a Pokemon name..."
                    autoFocus
                  />
                ) : (
                  <div className="empty-cell">?</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {message && <p className="message">{message}</p>}
      
      {showImage && targetPokemon && (
        <div className="target-pokemon-image">
          <img 
            src={getPokemonImageUrl(targetPokemon.id)} 
            alt={targetPokemon.name}
            className="large-pokemon-image"
          />
        </div>
      )}
      
      {gameOver && (
        <button 
          className="restart-button"
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * gen1Pokemon.length);
            setTargetPokemon(gen1Pokemon[randomIndex]);
            setGuesses([]);
            setCurrentGuess('');
            setGameOver(false);
            setMessage('');
            setShowImage(false);
          }}
        >
          Play Again
        </button>
      )}
    </div>
  );
}; 