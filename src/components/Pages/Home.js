import hotellNordlys from "../../assets/images/hotellNordlysWide.jpg";
import "./home.css";

function Home() {
  return (
    <>
      <div className="test">
        {/* <img
          src={hotellNordlys}
          alt="hotell nordlys med nordlys i bakgrunnen"
        /> */}
      </div>
      <div className="bakgroundContainer">
        {/* <img
        height={200}
        width={500}
        src={hotellNordlys}
        alt="hotell nordlys med nordlys i bakgrunnen"
      /> */}

        <div className="textContainer">
          <h1>Hotell Nordlys</h1>
          <section>
            <p>
              Opplev magien av naturen hos oss! Hotell Nordlys ligger idyllisk
              til med spektakulær utsikt over fjordene og fjellene. Vi tilbyr
              moderne rom, en koselig atmosfære og førsteklasses service,
              perfekt for både avslapning og eventyr. Utforsk de mange
              aktivitene i næromerådet, eller bare nyt roen og utsikten fra vårt
              hotell. Din drømmeferie begynner her!
            </p>
            <div className="overnattingContainer">
              <a href="overnatting" className="bookingLink">
                Book Rom Her
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
