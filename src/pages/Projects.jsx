import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🏠 RENTEX The real estate website',
    desc: "THIS PROJECT MAINLY FOCUSING ON RENTING, PURCHASING AND BUYING HOMES, PGS & APARTMENTS THROUGH ONLINE FACILITATED BY E-COMMERCE WHICH REALLY SAVES MANY PEOPLE'S TIME AND EFFORT. THIS REALLY SUPPORTS ECO- FRIENDLY ENVIRONMENT, ALSO SELLER CAN SELL THEIR PROPERTY BY FOLLOWING ALL THE TERMS AND CONDITIONS.",
    ss: '/rentex.jpeg', // ✅ Updated Path
    tech: ['Python', 'Php', 'MySql', 'Html', 'Css', 'Javascript'],
    live: '#',
    code: 'https://github.com/Pramod887'
  },
  {
    title: '⚡ Quick Commerce Website',
    desc: 'This project mainly focuses on delivering medicines, food, groceries, and e-commerce products within 10 minutes through an online platform facilitated by e-commerce, which really saves many peoples time and effort. This system supports a smart and eco-friendly delivery model. Also, sellers can list and sell their products by following all the terms and conditions.',
    ss: '/qk.png', // ✅ Updated Path
    tech: ['Python', 'Php', 'MySql', 'Html', 'Css', 'Javascript'],
    live: '',
    code: ''
  },
  {
    title: '🤖 AI-Powered Social Media Platform',
    desc: 'This project focuses on building an AI-powered social media app that allows users to share photos with auto-generated captions, smart filters, and chatbot support. It saves time, boosts creativity, and ensures an engaging experience. Users and creators follow all terms and conditions while using the platform.',
    ss: '/ai.webp', // ✅ Updated Path
    tech: ['Java', 'XML', 'Firebase'],
    live: '#',
    code: ''
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: '#',
    code: ''
  },
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <style>
        {`
          .project-desc-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .project-desc-scroll::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
          }
          .project-desc-scroll::-webkit-scrollbar-thumb {
            background: rgba(0,255,255,0.3);
            border-radius: 10px;
          }
          .project-desc-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(0,255,255,0.5);
          }
        `}
      </style>

      <div
        className="card"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>

        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: 'hidden' }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3
                  style={{
                    fontSize: 18,
                    color: '#0ea5e9',
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="project-desc-scroll"
                  style={{
                    fontSize: 14,
                    color: '#bbb',
                    marginBottom: 8,
                    lineHeight: 1.6,
                    maxHeight: '80px',
                    overflowY: 'auto',
                    paddingRight: '8px',
                    textAlign: 'justify',
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 10,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none',
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background:
                        'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
