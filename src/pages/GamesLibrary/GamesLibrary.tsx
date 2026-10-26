import { useState } from 'react'
import logo from "../../assets/logo.png"
import './gamesLibrary.css'

const GamesLibrary = () => {

  const [chooseConsole, setChooseConsole] = useState("All")

  const choosingConsole = (console:string) => {

    setChooseConsole((prev) => prev=console)
  }

  const gamesList = [ {
    "console":"PS5",
    "title":"GOD OF WAR GOD OF WAR GOD OF WAR GOD OF WAR GOD OF WAR GOD OF WAR GOD OF WAR GOD OF WAR",
    "category":"action",
    "players":"1",
    "thumnail":"https://gmedia.playstation.com/is/image/SIEPDC/ghost-of-tsushima-directors-cut-01-03sep21$en"

  }, {
    "console":"PS2",
    "title":"GOD WAR",
    "category":"action",
    "players":"1",
    "thumnail":"https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/vC7trMorHJgbImp8PCQvpI0p.png"
  }, {
    "console":"PS4",
    "title":"GOD OF ",
    "category":"action",
    "players":"Multi",
    "thumnail":"https://gmedia.playstation.com/is/image/SIEPDC/Demons-Souls-thumbnail-01-ps4-en-12nov20"

  }]
  const filteredGames = chooseConsole === "All"
  ? gamesList
  : gamesList.filter(g => g.console === chooseConsole)

  return (
    <>
    <section className='games-library'>
        <div className="gb-1-wrapper">
            <small>Find your next adventure</small>
            <h1>
                <span>Every game,</span>
                 <br />
            <span>on the shelf.</span>
            </h1>
            {/* <p className='description'>Explore games available on our gaming PCs and consoles.</p> */}

            <div className="console-cta">
                <button onClick={ ()=> choosingConsole("All")}>All</button>
                <button onClick={ ()=> choosingConsole("PS2")}>PS2</button>
                <button onClick={ ()=> choosingConsole("PS4")}>PS4</button>
                <button onClick={ ()=> choosingConsole("PS5")}>PS5</button>
            </div>

            <div className="game-cards">
                {
                    filteredGames.map((game,index)=>(<div className="g-card" key={game.title + game.console}>
                    <img src={game.thumnail} alt="" />
                    <span className='console'>{game.console}</span>
                    <span className='title'>{game.title}</span>
                    <span className='players'>{game.players}</span>
                </div>))
                }
            </div>
            
        </div>
    </section>
    </>
  )
}

export default GamesLibrary