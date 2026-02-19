import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at top, #0d0d0d, #000)',
        color: 'white',
        padding: '3rem 1rem',
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: '100%',
          maxWidth: '1100px',
          textAlign: 'left',
          marginTop: '1rem',
          lineHeight: 1.8,
          background: 'rgba(255,255,255,0.04)',
          padding: '3rem 3.5rem',
          borderRadius: '18px',
          boxShadow: '0 0 25px rgba(0,255,200,0.08)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: '1.9rem',
            marginBottom: '1.2rem',
            background:
              'linear-gradient(90deg, var(--accent), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '1rem',
          }}
        >
          Hi, I’m <strong>Pramod</strong> — an enthusiastic{' '}
          <strong>MCA student</strong> passionate about software development and
          building innovative digital solutions. I love working with{' '}
          <strong>Java, Kotlin, and Android development</strong>, combining
          logic and creativity to bring ideas to life.
        </p>

        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
          My goal is to create meaningful applications that are efficient,
          user-friendly, and impactful — while continuously learning and
          improving my technical expertise.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: '3rem' }}
        >
          <h3
            style={{
              fontSize: '1.6rem',
              marginBottom: '1.5rem',
              background:
                'linear-gradient(90deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {/* --- MCA --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 25px rgba(0,255,200,0.15)',
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '14px',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 15px rgba(0,255,200,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                    fontSize: '1.25rem',
                  }}
                >
                  MCA - Master of Computer Application
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: '0.2rem',
                  }}
                >
                  <strong>
                    Bapuji Institute of Engineering and Technology
                  </strong>{' '}
                  — Davangere
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  GPA: 7.1 | 2023 – 2025
                </p>
              </div>
            </motion.div>

            {/* --- BCA --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 25px rgba(0,255,200,0.15)',
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '14px',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 15px rgba(0,255,200,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                    fontSize: '1.25rem',
                  }}
                >
                  BCA - Bachelor of Computer Application
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: '0.2rem',
                  }}
                >
                  <strong>Mangalore University</strong>
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  CGPA: 7.2 | 2020 – 2023
                </p>
              </div>
            </motion.div>

            {/* --- 12th --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 25px rgba(0,255,200,0.15)',
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '14px',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 15px rgba(0,255,200,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                    fontSize: '1.25rem',
                  }}
                >
                  12th Board — Pre-University Board
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: '0.2rem',
                  }}
                >
                  <strong>Karnataka Board</strong>
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Percentage: 53% | 2018 – 2020
                </p>
              </div>
            </motion.div>

            {/* --- 10th --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 25px rgba(0,255,200,0.15)',
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '14px',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 15px rgba(0,255,200,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                    fontSize: '1.25rem',
                  }}
                >
                  10th Board — Secondary School Certificate
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: '0.2rem',
                  }}
                >
                  <strong>Karnataka Board</strong>
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Percentage: 79% | Completed in 2018
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
