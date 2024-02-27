import "./App.css";
import logo from "./assets/logo.png";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import phone from "./assets/phone.svg"
import facebook from "./assets/facebook.svg"
import globe from "./assets/globe.svg"

function App() {
  return (
    <>
      <div className="container">
        <div className="headerContainer">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="bodyContainer">
          <div className="left">
            <img src={img1} alt="" className="trophy" />
          </div>
          <div className="right">
            <h3>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <div className="rText">
              <div className="text">
                <ul>
                  <li>
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </li>
                  <li>
                    C.R.I. is the highest contributor in the country for the
                    projects of EESL (Energy Efficiency Services Limited) to
                    replace the old inefficient pumps with 5 Star rated energy
                    efficient smart pumps with IoT enabled control panel.
                  </li>
                </ul>
              </div>
              <img src={img2} alt="" className="photo" />
              <div className="text">
                Government of India has awarded the{" "}
                <b>"National Energy Conservation Award 2018"</b>. Mr. G.
                Selvaraj, Joint Managing Director of C.R.I. Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </div>
            </div>
          </div>
        </div>
        <div className="body2Container">
          <div className="text2">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </div>
          <img src={img3} alt="" className="material" />
          <div className="desc">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </div>
        </div>
        <hr className="line" />
        <div className="footer">
          <div className="top">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </div>
          <div className="center">
            CHEMICALS & PROCESS | POWER WATER & WASTE | WATER | OILS & GAS | PHARMA |
            SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING
            | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE
            FIGHTING | AGRICULTURE & RESIDENTIAL
          </div>
          <div className="bottom">
            <div className="links">
              <div className="link">
                <img src={phone} alt="" className="icon"/>
                <div className="domain">Toll free 1800 200 1234</div>
              </div>
              <div className="link">
                <img src={facebook} alt="" className="icon"/>
                <div className="domain">www.facebook.com/cripumps</div>

              </div>
              <div className="link">
                <img src={globe} alt="" className="icon"/>
                <div className="domain">www.crigroups.com</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
