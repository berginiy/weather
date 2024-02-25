import { Link } from 'react-router-dom';

export default function Footer() {
  return(
    <footer className='footer'>
      <div className='footer-content'>
        <div className="rule-of-game">
          <h3>Rule of the game:</h3>
          <ul>
            <li>0 HP heh you die</li>
            <li>you should play by your role</li>
            <li>dont try break site plz</li>
          </ul>
        </div>
        <div className='social-links'>
          <h2>Social</h2>
          <ul className="social">
            <li><Link className='link' to="https://www.facebook.com/dungeonsanddragons/">Facebook</Link></li>
            <li><Link className='link' to="https://www.instagram.com/dndwizards/?hl=en">Instagram</Link></li>
            <li><Link className='link' to="https://twitter.com/wizards_dnd">Twitter</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
