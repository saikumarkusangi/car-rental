import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Search job by</h3>
              <h2>Categories</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={'https://cdn-icons-png.flaticon.com/512/4661/4661409.png'} alt="icon_img" />
                <h3>UI Designer <br></br>
                 Posted Jobs: 2505</h3>
                <p>
                As a UI (User Interface) designer, your primary responsibility is to 
                create visually appealing and user-friendly.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={'https://cdn-icons-png.flaticon.com/512/11340/11340050.png'} alt="icon_img" />
                <h3>IT Software Posted <br></br>Jobs: 3204</h3>
                <p>
                A career in IT software involves working with computer systems and developing 
                software applications. 
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={'https://cdn-icons-png.flaticon.com/512/2888/2888403.png'} alt="icon_img" />
                <h3>Video Editing <br></br>
                Posted Jobs: 2205</h3>
                <p>
                Video editing is the process of manipulating video footage,
                 audio. Video editors work with various tools and software.
                </p>
              </div>
              <div className="plan-container__boxes__box">
                <img src={'https://cdn-icons-png.flaticon.com/512/1478/1478956.png'} alt="icon_img" />
                <h3>Tutor/Teacher <br></br>
                Posted Jobs: 2005</h3>
                <p>
                You should have a deep understanding of the subject you teach, All language, 
                 any other discipline. 
                </p>
              </div>
              <div className="plan-container__boxes__box">
                <img src={'https://cdn-icons-png.flaticon.com/512/2706/2706950.png'} alt="icon_img" />
                <h3>Call Center<br></br>
                Posted Jobs: 2205</h3>
                <p>
                Call center representatives are  customer service to callers. This involves addressing inquiries, 
                resolving issues or complaints, and ensuring customer satisfaction.
                </p>
              </div>
              <div className="plan-container__boxes__box">
                <img src={'https://cdn-icons-png.flaticon.com/512/10622/10622781.png'} alt="icon_img" />
                <h3>Sales Market<br></br>
                Posted Jobs: 2205</h3>
                <p>
                Sales professionals and marketers conduct market research to gather information 
                about the target audience, competitors, and industry trends. 
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
