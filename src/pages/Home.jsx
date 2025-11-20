import React from 'react'
import { motion } from 'framer-motion'

// 🖼️ Import Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {
  const professions = [
    'AI Enthusiast',
    'Android App Developer',
    'Time Management Expert',
    'Computer Vision Researcher',
    'Developer'
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Pramod887' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/pramod-kumar-m-b8a1a4343/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:pr75090@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+918105021332' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/pramod_rathod__?igsh=czN0d2F1ZGF6MWF3' },
    { img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/pramod.rathod.581187?mibextid=ZbWKwL' }
  ]

  const infoCards = [
    { label: '📍 Location', value: 'Bengaluru, India' },
    { label: '💼 Expertise', value: 'Full Stack • Problem Solving' },
    { label: '📧 Contact', value: 'pr75090@gmail.com' }
  ]

  return (
    <section className="home-section">
      <div className="home-hero-grid">
        <motion.div
          className="home-hero-photo"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="home-photo-ring"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="home-photo-frame"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.img
              src={photo}
              alt="Pramod Kumar M"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="home-hero-info"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="home-heading">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-heading-gradient"
            >
              Pramod Kumar M
            </motion.span>
          </h1>

          <p className="typing-effect home-subheading">
            Java Developer | Frontend Developer | Tech Explorer
          </p>

          <motion.div
            className="home-professions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {professions.map((role) => (
              <motion.span
                key={role}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))'
                }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="home-info-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {infoCards.map((info) => (
              <motion.div
                key={info.label}
                className="home-info-card"
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="home-quick-links"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2>Connect</h2>
        <div className="home-quick-links-grid">
          {quickLinks.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="home-quick-link"
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)'
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
