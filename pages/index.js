import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import github from '../images/github.svg';
import medium from '../images/medium.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';

var config = {
  image:
    'https://res.cloudinary.com/peterpme/image/upload/f_auto,w_200,h_200,g_center,c_fill/v1461435483/peter-piekarczyk-headshot.jpg',
  name: 'Peter Piekarczyk',
  title: 'Cofounder, Draftbit'
};

var socialLinks = [
  {
    label: 'Github',
    url: 'https://github.com/peterpme',
    icon: github
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/peterpme',
    icon: twitter
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@peterpme/',
    icon: medium
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/peterpme/',
    icon: instagram
  },
  {
    label: 'Linked In',
    url: "https://www.linkedin.com/in/peterpme"
    icon: linkedin
  }
];

var speaking = [
  {
    url: 'https://www.youtube.com/watch?v=KE2GC9lm6jw',
    label: '2015 React Rally - React & Web Audio Api: Building a MIDI Interface'
  },
  {
    url: 'https://www.youtube.com/watch?v=X7njm67K6QA',
    label: '2015 JSConf - Backbone & React - Building a Hybrid Application'
  },
  {
    url:
      'https://speakerdeck.com/peterpme/what-the-flux-a-quick-primer-on-react-and-flux',
    label: '2015 Code N Cans @ Braintree - What The Flux? React & Flux Primer'
  },
  {
    url: 'https://speakerdeck.com/peterpme/future-of-high-performance-node',
    label: '2016 Node Foundation - Future of High Performance Node'
  },
  {
    url: 'https://realm.io/blog/react-native-radio-realm/',
    label: 'React Native Radio 24: Realm React Native'
  },
  {
    url: '#',
    label: '2016 React Remote Conf - Moving Practically'
  },
  {
    url:
      'https://speakerdeck.com/peterpme/things-i-wish-i-knew-about-react-native-when-i-started',
    label:
      '2017 RN Chicago - Things I Wish I Knew About React Native When I Started'
  },
  {
    url: '#',
    label:
      '2017 Node.js Chicago - Dealing with Stress and Anxiety as a Developer'
  },
  {
    url: 'https://www.youtube.com/watch?v=8XrCfsR7GoU',
    label: '2017 DevopsDays - Stress & Anxiety as a Developer'
  },
  {
    url:
      'https://crosscuttingconcerns.com/Podcast-050-Peter-Piekarczyk-on-Burnout',
    label: 'Burnout, Stress & Anxiety as a Developer'
  },
  {
    url: 'https://www.youtube.com/watch?v=a8tm_bxiE48',
    label: '2018 React Chicago - ReasonML A Love Story',
    year: 2018
  },
  {
    url: 'https://www.youtube.com/watch?v=HAz_WUqO62A',
    label: '2019 AppJs Conf Poland - Building apps visually with Draftbit',
    year: 2019
  },
  {
    url: 'https://www.youtube.com/watch?v=Hp4t-bMCVe4',
    label: '2019 Reason Conf Vienna - How ReasonML Has Helped our Hiring Process',
    year: 2019
  },
  {
    url: '#',
    label: '2019 MagnoliaJS - Building apps visually with Draftbit',
    year: 2019
  },
  {
    url: '#',
    label: '2019 GOTO Conf Chicago - ReasonML & the future of React',
    year: 2019
  },
  {
    url: '#',
    label: '2019 Detroit Tech Watch - Becoming 10x the engineer with ReasonML',
    year: 2019
  },
  {
    url: '#',
    label: '2019 - React Native EU - Building Next Generation Apps Visually using Draftbit',
    year: 2019
  }
];

const Header = ({ image, name, title }) => (
  <header className="Header">
    <figure className="Header-figure">
      <img className="Header-image" src={image} alt={`Photo of ${name}`} />
      <figcaption>
        <h1 className="Header-name">{name}</h1>
        <span className="Header-title">{title}</span>
      </figcaption>
    </figure>
  </header>
);

export default class Index extends React.Component {
  render() {
    return (
      <div className="Container">
        <Header image={config.image} name={config.name} title={config.title} />
        <ul className="Social">
          {socialLinks.map(link => (
            <li className="Social-item" key={link.label}>
              <a className="Link" href={link.url} title={link.label}>
                <img src={link.icon} width={36} height={36} alt={link.label} />
              </a>
            </li>
          ))}
        </ul>
        <p className="About">
          I'm a Javascript Engineer. I love building complex applications in the
          most elegant of ways.<br />
          <br />
          I'm currently working on{' '}
          <a
            title="Orchard: Manage your personal and professional network"
            className="Link"
            target="_blank"
            href="https://www.orchard.ai"
          >
            Orchard
          </a>. Orchard helps you stay in touch with the people that matter the
          most. We use machine learning and some relationship science to help
          you reconnect with old colleagues, friends and business partners.<br />
          <br />
          When it comes to building things, I like to move rapidly. I utilize
          technologies such as React & React Native, Expo, Apollo, GraphQL and
          ReasonML.<br />
          <br />
          If you'd like to get in touch with me, shoot me an{' '}
          <a className="Link" href="mailto:contact@peterp.me">
            email
          </a>
        </p>
        <br />
        <h2 className="About-heading">Speaking:</h2>
        <ul className="Speaking">
          {speaking.reverse().map((event, index) => (
            <li
              className="About-heading"
              style={{ textAlign: 'left' }}
              key={index}
            >
              <a
                target="_blank"
                className="Link"
                href={event.url}
                title={event.label}
              >
                {event.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
