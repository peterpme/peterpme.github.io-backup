import React from 'react'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
import medium from '../images/medium.svg'

var config = {
  image: 'https://res.cloudinary.com/peterpme/image/upload/f_auto,w_400,h_400/v1461435483/peter-piekarczyk-headshot.jpg',
  name: 'Peter Piekarczyk',
  title: 'Software Engineering Consultant',
}

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
  }
]

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
    url: 'https://speakerdeck.com/peterpme/what-the-flux-a-quick-primer-on-react-and-flux',
    label: '2015 Code N Cans @ Braintree - What The Flux? React & Flux Primer'
  },
  {
    url: 'https://speakerdeck.com/peterpme/future-of-high-performance-node',
    label: '2016 Node Foundation - Future of High Performance Node'
  },
  {
    url: '#',
    label: '2016 React Remote Conf - Moving Practically'
  },
  {
    url: 'https://speakerdeck.com/peterpme/things-i-wish-i-knew-about-react-native-when-i-started',
    label: '2017 RN Chicago - Things I Wish I Knew About React Native When I Started'
  },
  {
    url: '#',
    label: '2017 Node.js Chicago - Dealing with Stress and Anxiety as a Developer",
  },
]

const Header = ({
  image,
  name,
  title
}) => (
  <header className='Header'>
    <figure className='Header-figure'>
      <img className='Header-image' src={image} alt={`Photo of ${name}`} />
      <figcaption>
        <h1 className='Header-name'>{name}</h1>
        <span className='Header-title'>{title}</span>
      </figcaption>
    </figure>
  </header>
)

export default class Index extends React.Component {
  render () {
    return (
      <div className='Container'>
        <Header image={config.image} name={config.name} title={config.title} />
        <ul className='Social'>
          {socialLinks.map((link) => (
            <li className='Social-item' key={link.label}>
              <a href={link.url} title={link.label}>
                <img src={link.icon} width={36} height={36} alt={link.label} />
              </a>
            </li>
          ))}
        </ul>
        <p className='About'>
          I'm a software engineer heavily influenced by the Javascript stack. I love building complex applications in the most elegant of ways.<br/><br/>
          I help companies build cool stuff in modern technologies including React, Redux, Webpack, GraphQL, Babel, etc. If you're interested in learning more, <a className='Link' href='mailto:consulting@peterp.me'>email me</a>.
        </p>
        <h2 className='About-heading'>Speaking:</h2>
        <ul className='Speaking'>
          {speaking.map((event, index) => (
            <li className='Speaking-item' key={index}>
              <a href={event.url} title={event.label}>
                {event.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
