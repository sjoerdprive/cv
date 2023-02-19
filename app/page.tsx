import IconText from './../components/iconText';
import SkillMeter from '@/components/skillMeter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobile,
  faAt,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faSass,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';

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
                <IconText start={<FontAwesomeIcon size="1x" icon={faMobile} />}>
                  Mobiel:{' '}
                </IconText>{' '}
                <a className="white" href="tel:+31619561814">
                  +31 6 1956 1814
                </a>
              </li>
              <li>
                <IconText start={<FontAwesomeIcon icon={faAt} />}>
                  Email:{' '}
                </IconText>{' '}
                <a className="white" href="mailto:sjrdwillemsen@gmail.com">
                  sjrdwillemsen@gmail.com
                </a>
              </li>
              <li>
                <IconText start={<FontAwesomeIcon icon={faGithub} />}>
                  GitHub :
                </IconText>{' '}
                <a className="white" href="https://github.com/sjoerdprive">
                  github.com/sjoerdprive
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Werkervaring</h2>
          <div className="columns">
            <div>
              <div className="mb-2">
                <h3 className="mb-0 fixed">
                  <span className="primary">Full stack developer </span>
                  bij Code.Rehab, Enschede
                </h3>
                <small>Sept. 2020 - Sept. 2021</small>
              </div>
              <p className="lead">
                Gecombineerde werkzaamheden met betrekking tot web development.
                Opleveren WordPress websites voor diverse klanten. Voornamelijk
                commerciële partijen, maar ook gemeente Enschede was bij ons
                cliënt. Doorontwikkelen React platform voor digitale magazines.
              </p>
              <ul className="bullets lead">
                <li>WordPress</li>
                <li>SCSS</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <div className="mb-2">
                <h3 className="mb-0 fixed">
                  <span className="primary">
                    Adviseur digitale toegankelijkheid{' '}
                  </span>
                  bij Firm Ground, Dieren
                </h3>
                <small>Aug. 2021 - Heden</small>
              </div>
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
            </div>
            <div>
              <div className="mb-2">
                <h3 className="mb-0 fixed">
                  <span className="primary">Eigenaar </span>
                  bij WebModu, Zutphen
                </h3>
                <small>Dec. 2021 - Heden</small>
              </div>
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
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container">
          <h2>Vaardigheden</h2>
          <div className="columns">
            <SkillMeter
              className="mb-3"
              label={<h3 className="mb-1 fixed">Javascript (React NextJS)</h3>}
              score={75}
              icon={<FontAwesomeIcon icon={faReact} />}
              tags={['/app', 'Context API', 'Hooks', 'Typescript', 'Prisma']}
            />
            <SkillMeter
              className="mb-3"
              label={<h3 className="mb-1 fixed">WordPress</h3>}
              score={60}
              icon={<FontAwesomeIcon icon={faWordpress} />}
              tags={['Sage', 'Gutenberg', 'Blade']}
            />
            <SkillMeter
              className="mb-3"
              label={<h3 className="mb-1 fixed">(S)CSS</h3>}
              score={75}
              icon={<FontAwesomeIcon icon={faSass} />}
              tags={[
                'Mixins',
                ':has()',
                'CSS Layers',
                'Bootstrap',
                'Fluid responsiveness',
              ]}
            />
            <SkillMeter
              className="mb-3"
              label={<h3 className="mb-1 fixed">Git</h3>}
              score={65}
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
            <SkillMeter
              className="mb-3"
              label={<h3 className="mb-1 fixed">A11y</h3>}
              score={70}
              icon={<FontAwesomeIcon icon={faUniversalAccess} />}
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
