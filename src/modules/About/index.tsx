// About
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import { Container, Typography } from '@/components'
import { Person } from './components'
import * as S from './styles'
import * as SC from '@/styles/common'
import data from '@/data/index.json'
import { authorPhoto } from '@/assets'

const aboutData = data.about

const About = () => {
  const aboutRef = useNav('About')

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.to('#aboutSection', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'bottom 33%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#aboutSection',
          start: 'top 70%',
          end: 'top 33%',
        },
      })
      .from('#aboutHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      })
      .from('#aboutCircle', {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
      })
      .from('#aboutImg', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
      })
      .from('#aboutCol p', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 1.25,
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="aboutSection" ref={aboutRef}>
      <Container>
        <Typography variant="h3" id="aboutHeading">
          {aboutData.heading}
        </Typography>
        <S.Content>
          <Person image={authorPhoto} />
          <S.Col id="aboutCol">
            {aboutData.description.map((paragraph, idx) => (
              <Typography variant="p" key={idx}>
                {paragraph.text}
              </Typography>
            ))}
          </S.Col>
        </S.Content>
      </Container>
    </SC.Section>
  )
}

export default About
