import { Link } from 'react-router-dom';

export default function Footer() {
  return(
    <footer className='footer'>
      <div className='footer-content'>
        <div className="rule-of-game">
          <h3>Правила игры:</h3>
          <ul>
            <li>Если HP достигает 0, вы умираете</li>
            <li>Вы должны играть свою роль</li>
            <li>Пожалуйста, не пытайтесь сломать сайт</li>
          </ul>
        </div>
        <div className='social-links'>
          <h2>Социальные сети</h2>
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
