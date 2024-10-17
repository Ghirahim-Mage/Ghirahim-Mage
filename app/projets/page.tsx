import "@/app/ui/global.css";

export default function Page() {
  return <>
    <h1>Projets</h1>
    <div className="cardWrapper">
      <div className="cardProject">
        <div className="imgProject">
          <img src="/img/project/flatcraft.png" alt="project"/>
        </div>
        <div className="textSkill">
          <h3>Flatcraft [2023-2024] - [Java]</h3>
          <p>
            Dans ce projet, j'ai réalisé avec les membres de mon équipe le jeu Flatcraft inspiré du jeu Minecraft
            ou encore Terraria en Java.
          </p>
          <p>
            Ce projet m'a permis d'apprendre et de comprendre les patrons de conceptions en Java, mais aussi
            d'approfondir mes compétence en programmation orientée objet.
          </p>
        </div>
      </div>
      <div className="cardProject">
        <div className="imgProject">
          <img src="/img/project/ray-tracing.png" alt="project"/>
        </div>
        <div className="textSkill">
          <h3>Ray tracing [octobre 2023] - [Java]</h3>
          <p>
            Ce projet réalisé lors d'une situation d'apprentissage et d'évaluation, j'ai participé à ce projet qui
            a pour but de générer, à partir d'un fichier texte, une image composée de formes géométriques
            (triangles et sphères) et des plans. La génération de l'image prend en compte les lumières, les ombres
            générés par les objets et d'autres fonctionnalités.
          </p>
          <p>
            Ce projet m'a permis d'approfondir mes connaissances pour les patrons de conceptions en Java et en
            programmation orientée objet.
          </p>
        </div>
      </div>
      <div className="cardProject">
        <div className="imgProject">
          <img src="/img/project/jo.png" alt="project"/>
        </div>
        <div className="textSkill">
          <h3>JO 2024 [2023-2024] - [PHP | Laravel]</h3>
          <p>
            Réalisé avec le framework Laravel, ce projet à tout d'abord eu pour but d'afficher une liste de sports
            basés sur la liste des sports des Jeux Olympiques 2024, ensuite j'ai ajouté les athlètes et un classement
            de ces athlètes dans un jeu.
          </p>
          <p>
            Grâce a ce projet, j'ai découvert le framerwork Laravel, ainsi que certains aspects de ce framework
            comme le routage CRUD (Create, Read, Update, Delete) appliqué pour les sports et les athlètes,
            l'authentification et la gestion d'accès, et enfin les relations entre tables.
          </p>
        </div>
      </div>
      <div className="cardProject">
        <div className="imgProject">
          <img src="/img/project/marathon.png" alt="project"/>
        </div>
        <div className="textSkill">
          <h3>Marathon du web [décembre 2023] - [PHP | Laravel]</h3>
          <p>
            Dans ce projet, nous étions 4 étudiants du département informatique et 4 étudiants du département MMI.
            Durant 2 journées nous avions chacun des tâches à réaliser, la nôtre était de concevoir un site
            référençant une liste d'histoires composées de chapitres, et qu'un utilisateur connecté puisse lire une
            des histoires, mais aussi qu'il puisse créer lui-même son histoire.
          </p>
          <p>
            Cet évènement m'a permis de consolider mes compétences avec le framework Laravel et en
            base de données et de découvrir le travail de groupe avec d'autres membres que des étudiants
            du départements informatique, en particulier avec le rôle d'intégrateur pour ce projet.
          </p>
        </div>
      </div>
    </div>

  </>;
}
