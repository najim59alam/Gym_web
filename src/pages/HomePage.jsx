import './HomePage.css'
import hulk1 from '../assets/hulk1.jpg'
import hulk2 from '../assets/hulk2.jpg'
import hulk3 from '../assets/hulk3.jpg'

function HomePage(){
return (
<div className="heroSection">

<header>
  <h1>Hulk Fitness Gym</h1>
  <p>Mithapur, Patna | Muscle & Strength Training</p>
</header>

<div className="hero">
  <h2>Build Your Body Like Hulk 💪</h2>
</div>

<div className="section">
  <h2>About Us</h2>
  <p>
    We focus on bodybuilding, strength training and complete body transformation.
    Modern equipment, professional trainers and energetic environment.
  </p>
</div>

<div className="section">
  <h2>Our Facilities</h2>
  <div className="gallery">
    <img src={hulk1} alt="Gym 1"/>
    <img src={hulk2} alt="Gym 2"/>
    <img src={hulk3} alt="Gym 3"/>
  </div>
</div>

<div className="section">
  <h2>Contact Us</h2>
  <p>📍 Mithilesh Market, Ramvilas Chowk, Patna</p>
  <a className="btn" href="tel:+9608613251">Call Now</a>
</div>

<footer>
  © 2026 Hulk Fitness Gym | Designed by Najim Alam
</footer>

</div>
)
}

export default HomePage
