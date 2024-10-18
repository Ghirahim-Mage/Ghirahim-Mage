import "@/app/ui/global.css";

export default function Page() {
  return <>
    <h1>Compétences</h1>
    <div className="cardWrapperProject">
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/git-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">Git (github, gitlab)</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/java-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">Java (Spring, JPA, ...)</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/angular-icon-1.svg" alt="compétence"/>
        </div>
        <p className="textSkill">Angular</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/sql-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">Base de données (SQL, MongoDB, PostgreSQL)</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/html5-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">HTML</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/css-3-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">CSS</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/python-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">Python</p>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/php-svgrepo-com.svg" alt="compétence"/>
        </div>
        <p className="textSkill">PHP (laravel)</p>
      </div>
    </div>
  </>;
}
