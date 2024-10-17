
export default function Page() {
  return <>
    <div className="home">
      <div>
        <h1>Grégory Broulin</h1>
      </div>
      <div className="img">
        <img src="/img/profile.png" alt="photo portfolio"/>
      </div>
      <div>
        <a href="file\CV-Gregory-Broulin.pdf" download="CV-Gregory-Broulin.pdf">
          <button type="button">&nbsp;&nbsp;Download CV&nbsp;&nbsp;</button>
        </a>
      </div>
      <div className="apropos">
        <div className="ulFlex">
          <ul>
            <li><span>Téléphone :</span>&nbsp;+33 6 62 51 34 98</li>
            <li><span>Email :</span>&nbsp;gregory.brln@outlook.fr</li>
            <li><span>Adresse :</span>&nbsp;Noeux-les-Mines 62290, France</li>
          </ul>
          <ul>
            <li><span>Permis :</span>&nbsp;Permis B</li>
            <li><span>Mobilité :</span>&nbsp;Béthune, Loos-en-Gohelle, Lille, Arras et alentours</li>
            <li><span>Age :</span>&nbsp;19</li>
          </ul>
        </div>
        <p>Je suis passionné par l'informatique depuis le collège, ainsi à l'arrivée du lycée je choisis l'option
          Numérique et Sciences de l’Informatique. Actuellement je suis en 3<sup>ème</sup> année de BUT informatique à l'IUT de Lens.</p>
      </div>
    </div>
  </>;
}
