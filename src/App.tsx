import "./App.css";

function App() {
  return (
    <section className="hero-section" id="hero">
      <div className="background">
        <video autoPlay muted playsInline loop>
          <source
            src="../I-Surrender-Hillsong-Worship-00.06.57.428-00.07.43.628.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Welcome to My Official Website</h1>
        <p>Uplifting Souls Through Music</p>
        <div className="cta-buttons">
          <button>Listen Now</button>
          <button>Upcoming Events</button>
        </div>
      </div>
    </section>
  );
}

export default App;
