import './HomePage.css'
function HomePage(){
return (
<div className="heroSection">
<header>
  <h1>Hulk Fitness Gym</h1>
  <p>Mithilesh Market, Ramvilas Chowk, Mithapur, Patna</p>
  <a class="btn" href="tel:+91XXXXXXXXXX">Call Now</a>
  <a class="btn" href="https://wa.me/91XXXXXXXXXX">WhatsApp</a>
</header><section>
  <h2>About Our Gym</h2>
  <p>
    Hulk Fitness Gym ek modern aur fully-equipped gym hai jahan aapko 
    strength training, cardio aur personal training ki best facilities milti hain. 
    Hamara goal hai aapko fit, strong aur confident banana.
  </p>
</section><section>
  <h2>Our Services</h2>
  <div className="services">
    <div className="card">
      <h3>Weight Training</h3>
      <p>Advanced machines aur free weights ke saath professional training.</p>
    </div>
    <div className="card">
      <h3>Cardio Training</h3>
      <p>Treadmill, cycling aur fat loss focused workouts.</p>
    </div>
    <div className="card">
      <h3>Personal Training</h3>
      <p>Certified trainer ke saath one-to-one guidance.</p>
    </div>
    <div class="card">
      <h3>Body Transformation</h3>
      <p>Weight loss aur muscle gain ke liye special programs.</p>
    </div>
  </div>
</section><section>
  <h2>Timing</h2>
  <p>Monday – Sunday</p>
  <p><strong>Morning:</strong> 5:00 AM – 11:00 AM</p>
  <p><strong>Evening:</strong> 4:00 PM – 11:00 PM</p>
</section><section>
  <h2>Location</h2>
  <p>Mithilesh Market, near Ramvilas Chowk, Indra Nagar, Mithapur, Patna, Bihar</p>
  <a class="btn" href="#">Open in Google Maps</a>
</section><footer>
  <p>© 2026 Hulk Fitness Gym | Designed by Demo Developer</p>
</footer>
</div>
)
}

export default HomePage
