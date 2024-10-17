import "@/app/ui/global.css";

export default function Page() {
  return <>
    <h1>Compétences</h1>
    <div class="cardWrapperProject">
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/git-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">Git (github, gitlab)</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/java-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">Java (Spring, JPA, ...)</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/angular-icon-1.svg" alt="compétence"/>
        </div>
        <div class="textSkill">Angular</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/sql-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">Base de données (SQL, MongoDB, PostgreSQL)</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/html5-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">HTML</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/css-3-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">CSS</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/python-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">Python</div>
      </div>
      <div className="cardSkill">
        <div className="imgSkill">
          <img src="/img/skills/php-svgrepo-com.svg" alt="compétence"/>
        </div>
        <div class="textSkill">PHP (laravel)</div>
      </div>
    </div>
  </>;
}
