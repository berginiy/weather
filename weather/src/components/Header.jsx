import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../components/LogIn';
import arkaneLogo from '../img/Ark20_LargeHero_Welcome.jpg';
import Deathloop from '../img/Deathloop_GameEntry.jpg';
import Dishonored from '../img/Dishonored_boxart-template-1200x1476.jpg';
import Dishonored2 from '../img/dishonored2-boxart-1200x1476.jpg';
import LGD from '../img/LGD_Teaser_Announce_Web_1200x1476-01.jpg';
import Prey from '../img/prey_mooncrash.jpg';
import Redfall from '../img/Redfall_Bnet_Boxart_1200x1476-01.jpg';
import Office from '../img/Arkane-Studios-Office-Internal-1024x512.jpg';
import Studios from '../img/arkane-studios.jpg';


const HomePage = ({ user }) => {
    return (
        <div className="main-page-container">
            <header className="header">
                <div className="header-title">
                    <h1>Arkane Studios</h1>
                </div>
                <div className='header-inner'>
                    <div>
                        { }
                    </div>
                    <nav>
                        {!user ? (
                            <>
                                <Link className='link' to='/LogIn'>Log In</Link>
                                <Link className='link' to='/register'>Sign Up</Link>
                            </>
                        ) : (
                            <>
                                <Link className='link' to='/logout'>Log out</Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            <div className='img-head'>
                <img src={arkaneLogo} alt="Arkane Studios Logo" style={{ maxWidth: '100%', width: '1500px', height: 'auto' }} />
            </div>
            <div className='conten-'>
                <div className="content">
                    <p>Founded in 1999, Arkane® Studios has grown to become one of the most renowned and critically acclaimed development teams in the video game industry. With teams located in Lyon, France, and Austin, Texas, Arkane has earned a reputation for creating games with unique style, immersive action, and a hand-crafted approach. The studio’s titles, which include.  by Arkane Lyon and helmed by Arkane veterans Dinga Bakaba (Game Director) and Sebastien Mitton (Art Director), is now available on PlayStation®5, Xbox Series X|S and PC. Arkane Austin is currently developing the upcoming title  </p>
                </div>
                <div className="content content-white-bg">
                    <p>Founded in 1999, Arkane® Studios has grown to become one of the most renowned and critically acclaimed development teams in the video game industry. With teams located in Lyon, France, and Austin, Texas, Arkane has earned a reputation for creating games with unique style, immersive action, and a hand-crafted approach. The studio’s titles, which include.  by Arkane Lyon and helmed by Arkane veterans Dinga Bakaba (Game Director) and Sebastien Mitton (Art Director), is now available on PlayStation®5, Xbox Series X|S and PC. Arkane Austin is currently developing the upcoming title  </p>
                </div>
            </div>

            <div className="image-grid">
                <div className="image-item">
                    <img src={Deathloop} alt="Deathloop" />
                </div>
                <div className="image-item">
                    <img src={Dishonored} alt="Dishonored" />
                </div>
                <div className="image-item">
                    <img src={Dishonored2} alt="Dishonored 2" />
                </div>
                <div className="image-item">
                    <img src={LGD} alt="LGD" />
                </div>
                <div className="image-item">
                    <img src={Prey} alt="Prey" />
                </div>
                <div className="image-item">
                    <img src={Redfall} alt="Redfall" />
                </div>
            </div>
            <div class="section-with-images">
                <div class="image-container">
                    <img src={Office} alt="Image 1" />
                    <div class="image-overlay">
                        <button class="image-button">Кнопка 1</button>
                    </div>
                </div>
                <div class="image-container">
                    <img src={Studios} alt="Image 2" />
                    <div class="image-overlay">
                        <button class="image-button">Кнопка 2</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
