import './rental.css'

const Rental = () => {
  return (
    <section className='rental'>
        <div className="r-1-wrapper">
            <h1><span>Take the console</span> <span>home<div className="dot"></div></span></h1>
            <div className="process-cta">
              <button className='active'>01 Build</button>
              <button>02 Pay</button>
              <button>03 Verify</button>
              <button>04 Done</button>
            </div>
            <div className="rcontent-wrapper">
              <div className="content">

                <small>choose your console</small>
                <div className="console-cards">
                  <div className="c-card active ps-5">
                    <img src="console/ps5-console.webp" alt="PlayStation 5 console" />
                    <div className="console-details">
                      <div className="details">
                        <span>Sony</span>
                        <h2>PS5</h2>
                      </div>
                      <div className="price">₹549/day</div>
                    </div>
                  </div>
                  <div className="c-card ps-4">
                    <img src="console/ps4-console.webp" alt="PlayStation 4 console" />
                    <div className="console-details">
                      <div className="details">
                        <span>Sony</span>
                        <h2>PS4</h2>
                      </div>
                      <div className="price">₹449/day</div>
                    </div>
                  </div>
                  <div className="c-card ps-2">
                    <img src="console/ps2-console.webp" alt="PlayStation 2 console" />
                    <div className="console-details">
                      <div className="details">
                        <span>Sony</span>
                        <h2>PS2</h2>
                      </div>
                      <div className="price">₹249/day</div>
                    </div>
                  </div>
                </div>

                <small>What's in the box</small>
                <div className="given-box">
                  <div className="gb gb1">
                    <h3>PS5 console</h3>
                    <span>INCLUDED</span>
                  </div>
                  <div className="gb gb2">
                     <h3>Power Cable</h3>
                    <span>INCLUDED</span>
                  </div>
                  <div className="gb gb3">
                     <h3>HDMI</h3>
                    <span>INCLUDED</span>
                  </div>
                  <div className="gb gb4">
                    <h3>Controllers <span>1 includes, 150 each extra</span></h3>
                    <div className="controller">
                      <span>2</span>
                      <span>3</span>
                      <span className='active'>4</span>
                    </div>
                  </div>
                </div>

                <div className="small-box">
                  <small>PS5 Games Library</small>
                  <small>0 picked / 4 included, then 150 each</small>
                </div>
                <input type="text"  placeholder='Search games' className='game-search'/>
                <div className="game-cards">
                  <div className="g-card" >
                    <img src={"https://gmedia.playstation.com/is/image/SIEPDC/Demons-Souls-thumbnail-01-ps4-en-12nov20"} alt="" />
                    <span className='title'>{"game.title"}</span>
                    <span className='genre'>{"game.players"}</span>
                </div>
                </div>

                <small>Choose your rental plan</small>
                <div className="rental-cards">
                  <div className="r-card active">
                    <div className="round"></div>
                    <div className="duration">1 day</div>
                    <div className="price">300</div>
                    <span>300 / day</span>
                    <span className="off bp">base rate</span>
                  </div>
                   <div className="r-card">
                    <div className="round"></div>
                    <div className="duration">1 day</div>
                    <div className="price">300</div>
                    <span>300 / day</span>
                    <span className="off">33 %</span>
                  </div>
                </div>
                {/* <small>Pickup date and time</small>
                <div className="pickup">
                  <div className="date">
                    <small>Pickup date</small>
                    <div className="d-box">
                      <input type="text" placeholder='Date'/>
                      <input type="text" placeholder='Month'/>
                      <input type="text" placeholder='Year'/>
                    </div>
                  </div>
                  <div className="time">
                    <small>Pickup time</small>
                    <div className="t-box">
                      <input type="text" placeholder='01'/>
                      <span>am</span>
                      <span>pm</span>
                    </div>
                  </div>
                </div> */}

              </div>
              <div className="bill">
                  <div className="bill-card">
                    <span>Rental Bill Summary</span>
                    <h2>PS5</h2>
                    <p className="delivery-up">Delivery Sun 1 Nov</p>
                    <p className="pick-up">Pickup Sun 4 Nov</p>
                    <div className="bill-details">
                      <div className="bill-row">
                        <span>PS5 / 1 Day</span>
                        <span>₹300</span>
                      </div>
                      <div className="bill-row">
                        <span>Controllers</span>
                        <span>2</span>
                      </div>
                      <div className="bill-row">
                        <span>Games picked</span>
                        <span>2</span>
                      </div>
                    </div>
                    <div className="bill-total">
                        <span>Total</span>
                        <span>₹300</span>
                      </div>
                      <button>Pay Verify</button>
                  </div>
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default Rental