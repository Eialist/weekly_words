import rocket from "../assets/rocket-lunch.png";
import sparkles from "../assets/sparkles.png";
import hand from "../assets/hand-holding-seeding.png";

export const BoxCardComponent = () => {
  return (
    <div className="container boxcard-container">
      <div className="row">
        <div className="col-sm blue">
          <img src={sparkles} alt="" width={40} />
          <br></br>
          <h4>Träna</h4>
          <p>
            För att lära sig ett nytt språk är det en förutsättning att behärska
            ord. Ju fler desto bättre. Glosor har länge varit en integrerad del
            av språkundervisningen, och detta av goda skäl. Vi förstärker vår
            inlärning genom repetition.
          </p>
        </div>
        <div className="col-sm yellow">
          <img src={rocket} alt="" width={40} />
          <br></br>
          <h4>Weekly Words</h4>
          <p>
            Weekly Words är ett komplement till skolans engelska undervisnings.
            Glosorna är särskilt anpassade för varje årskurs med hänsyn till
            skolans läromedel och följer de specifika kunskapskraven enligt
            läroplanen.
          </p>
        </div>
        <div className="col-sm green">
          <img src={hand} alt="" width={40} />
          <br></br>
          <h4>Lärarhjälpmedel</h4>
          <p>
            Under Lärarresurser går det att enkelt skriva ut veckans glosor för
            att dela ut och gå igenom dem med eleverna. Eleverna kan sedan
            fortsätta att träna digitalt på sin mobil, iPad eller dator. Kom
            ihåg att också träna med papper och penna ibland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxCardComponent;
