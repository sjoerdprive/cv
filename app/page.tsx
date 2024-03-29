import {
  faGithub,
  faReact,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faGraduationCap,
  faMobile,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconText from "@/components/iconText";
import Job from "@/components/job";
import SkillMeter from "@/components/skillMeter";

export default function Home() {
  return (
    <main>
      <section className="bg-primary white section">
        <div className="container columns jumbotron">
          <img src="/profile.jpeg" alt="" className="profile-pic" />
          <div className="body py-4">
            <h1 className="jumbo ">Sjoerd Willemsen</h1>

            <ul className="mt-auto">
              <li>
                <IconText start={<FontAwesomeIcon icon={faMobile} />}>
                  Mobiel:{" "}
                </IconText>{" "}
                <a className="white" href="tel:+31619561814">
                  +31 6 1956 1814
                </a>
              </li>
              <li>
                <IconText start={<FontAwesomeIcon icon={faAt} />}>
                  Email:{" "}
                </IconText>{" "}
                <a className="white" href="mailto:sjrdwillemsen@gmail.com">
                  sjrdwillemsen@gmail.com
                </a>
              </li>
              <li>
                <IconText start={<FontAwesomeIcon icon={faGithub} />}>
                  GitHub:
                </IconText>{" "}
                <a className="white" href="https://github.com/sjoerdprive">
                  github.com/sjoerdprive
                </a>
              </li>
              <li>
                <IconText
                  hideLabel
                  start={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                  Afgestudeerd
                </IconText>
                <span>HBO Creative Media & Game Design, Saxion Enschede</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Over mij</h2>
          <p>
            Ik ben graag bezig met de ontwikkelingen in de front-end wereld.
            Nieuwe technologieën die uitkomen bekijk en probeer ik graag. Naast
            mijn interesse in de technische hoek speel ik met veel plezier
            gitaar in een band. Ik hou van goed eten, koken, en ik interesseer
            me elke maand in iets anders.
          </p>
          <p>
            Na de middelbare school dacht ik dat ik van scheikunde mijn
            opleiding ging maken. Na een een paar maanden Chemie te hebben
            gestudeerd ben ik toch een andere richting in geslagen met de brede
            Kunst en Technologie opleiding. Deze is richting het eind van mijn
            opleiding veranderd naar Creative Media &amp; Game Technology.
          </p>
          <p>
            Gedurende deze opleiding ben ik in contact gekomen met web
            development. Bij mijn stage bij Code.Rehab heb ik kennis gemaakt met
            het fijne van WordPress en React. Ik ben sindsdien zelf bezig met
            mijzelf ontwikkelen op het gebied van front-end developent. Later
            ben ik voor het afronden van mijn opleiding nog een half jaar
            werkzaam geweest bij Code.Rehab als full stack developer, waarna ik
            mijn opleiding heb afgemaakt.
          </p>
          <p>
            Via een bekende heb ik kennis gemaakt met digitale toegankelijkheid.
            Zij bood mij bij haar bedrijf Firm Ground een baan aan als adviseur,
            waar ik na mijn opleiding direct begonnen ben.
          </p>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container">
          <h2>Projecten (een selectie)</h2>
          <div className="columns">
            <div>
              <h3 className="fixed">Expo (plugin)</h3>

              <p className="lead">
                Custom Gutenberg block, in opdracht gemaakt. Deze WordPress
                plugin creëert een nieuwe Custom Post Type en verandert de
                editor hiervan in een klik-en-sleep expositiebouwer, waar
                afbeeldingen en tekst geplaatst en versleept kunnen worden op
                een raster.
              </p>
              <IconText smLabel start={<FontAwesomeIcon icon={faGithub} />}>
                <a href="https://github.com/sjoerdprive/gutenberg-expo-v2">
                  https://github.com/sjoerdprive/gutenberg-expo-v2
                </a>
              </IconText>
            </div>
            <div>
              <h3 className="fixed">Exposure (CMS)</h3>

              <p className="lead">
                Lopend project. Eigen CMS voor het maken van portfolio&apos;s
                gericht op fotografie, of andere beeldende werken. Uitgebreidere
                versie van de Expo Gutenberg plugin.
              </p>
              <IconText smLabel start={<FontAwesomeIcon icon={faGithub} />}>
                <a href="https://github.com/sjoerdprive/exposure">
                  https://github.com/sjoerdprive/exposure
                </a>
              </IconText>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Werkervaring</h2>
          <div className="columns">
            <Job
              title="Full stack developer"
              employer="Code.Rehab, Enschede"
              period="Sept. 2020 - Sept. 2021"
            >
              <p className="lead">
                Gecombineerde werkzaamheden met betrekking tot web development.
                Opleveren WordPress websites voor diverse klanten. Voornamelijk
                commerciële partijen, maar ook gemeente Enschede was bij ons
                cliënt. Doorontwikkelen React platform voor digitale magazines.
                Ik ben sindsdien zelf bezig met mijzelf ontwikkelen op het
                gebied van front-end developent.
              </p>
              <ul className="bullets lead">
                <li>WordPress</li>
                <li>SCSS</li>
                <li>React</li>
              </ul>
            </Job>

            <Job
              title="Adviseur digitale toegankelijkheid"
              employer="Firm Ground, Dieren"
              period="Aug. 2021 - Heden"
            >
              <p className="lead">
                Voornamelijk overheid en gemeenten als cliënt. Diverse
                werkzamheden met betrekking tot digitale toegankelijkheid,
                waaronder:
              </p>
              <ul className="bullets lead">
                <li>Advies</li>
                <li>Rapportage</li>
                <li>Trainingen en workshops</li>
                <li>Klantcontact</li>
              </ul>
            </Job>

            <Job
              title="Eigenaar"
              employer="WebModu, Zutphen"
              period="Dec. 2021 - Heden"
            >
              <p className="lead">
                Op ZZP basis maak ik (WordPress) websites en custom Gutenberg
                oplossingen voor particuliere cliënten.
              </p>
              <ul className="bullets lead">
                <li>Klantcontact</li>
                <li>WordPress</li>
                <li>SCSS</li>
                <li>Gutenberg</li>
              </ul>
            </Job>

            <Job
              title="Front end developer"
              employer="Kolibri, Arnhem"
              period="April 2023 - Heden"
            >
              <p className="lead">
                Kolibri bouwt met Typescript React aan het gelijknamige CMR voor
                makelaars. In een team van 4 front-enders werken we aan het
                verbeteren en uitbreiden van dit product.
              </p>
              <ul className="bullets lead">
                <li>Grootschalige applicatie</li>
                <li>Typescript React</li>
                <li>Testen</li>
              </ul>
            </Job>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container">
          <h2>Vaardigheden</h2>
          <div className="columns">
            <SkillMeter
              className="mb-3"
              label={"Typescript React"}
              score={80}
              icon={<FontAwesomeIcon icon={faReact} />}
              tags={["Context API", "Hooks", "Typescript", "Generics", "Redux"]}
            />
            <SkillMeter
              className="mb-3"
              label={"WordPress"}
              score={70}
              icon={<FontAwesomeIcon icon={faWordpress} />}
              tags={["Sage", "Gutenberg", "Blade"]}
            />
            <SkillMeter
              className="mb-3"
              label={"(S)CSS"}
              score={85}
              icon={<FontAwesomeIcon icon={faSass} />}
              tags={["Mixins", ":has()", "CSS Layers", "Fluid responsiveness"]}
            />
            <SkillMeter
              className="mb-3"
              label={"Git"}
              score={70}
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
            <SkillMeter
              className="mb-3"
              label={"A11y"}
              score={70}
              icon={<FontAwesomeIcon icon={faUniversalAccess} />}
              tags={["WCAG 2.1 AA"]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// Zutphen
// +31 6 1956 1814

// Ik heb enige formele ervaring met full-stack (React) development. Na het afmaken van mijn opleiding heb ik mijzelf verder ontwikkeld op dit gebied. Bekwaam met React, NextJS, (S)CSS, Bootstrap, WordPress (Sage), Gutenberg.

// PERSOONLIJKE GEGEVENS
//   Address: , Zutphen,
//   Nationality:
//   Driving License:
//   Hobbies: Het leven bestaat uit meer dan alleen werk. Naast wat ik voor geld doe, speel ik gitaar in een band en hou ik van goed eten en koken. Verder interesseer ik me elke maand in iets anders.

// SOCIALE PROFIELEN
//   * ZZP website: webmodu.nl
//   * GitHub: https://github.com/sjoerdprive

// TALEN
//   ★★★★★ Nederlands
//   ★★★★☆ Engels

// VAARDIGHEDEN
//   ★★★★☆ HTML/CSS
//   ★★★☆☆ Wordpress
//   ★★★★☆ JavaScript
//   ★★★★☆ React
//   ★★★☆☆ Git

// WERKERVARING
//   * september 2020 – september 2021
//     Full stack developer bij Code.Rehab, Enschede
//       Gecombineerde werkzaamheden met betrekking tot web development.

//   Opleveren WordPress websites voor diverse klanten. Voornamelijk commerciële partijen, maar ook gemeente Enschede was bij ons cliënt.
//   Doorontwikkelen React platform voor digitale magazines.

//   * augustus 2021 – Heden
//     Adviseur digitale toegankelijkheid bij Firm Ground, Dieren
//       Voornamelijk overheidspartijen als cliënt. Diverse werkzamheden met betrekking tot digitale toegankelijkheid, waaronder:

//   Advies
//   Rapportage
//   Trainingen en workshops

//   * december 2021 – Heden
//     Eigenaar bij WebModu, Zutphen
//       Op ZZP basis maak ik (WordPress) websites en custom Gutenberg oplossingen voor particuliere cliënten.

// OPLEIDING
//   * september 2015 – september 2021
//     Saxion Universities, Enschede Creative Media & Game Technology

//     Na een een paar maanden Chemie te hebben gestudeerd toch een andere richting in geslagen met de brede Kunst en Technologie opleiding. Deze is richting het eind van mijn opleiding veranderd naar Creative Media &amp; Game Technology. Gedurende deze opleiding ben ik in contact gekomen met web development en daar heb ik bij mijn stage bij Code.Rehab kennis gemaakt met het fijne van WordPress en React. Later ben ik voor het afronden van mijn opleiding nog een half jaar werkzaam geweest bij Code.Rehab als full stack developer, waarna ik mijn opleiding heb afgemaakt en werkzaam ben geraakt in de digitale toegankelijkheid.
