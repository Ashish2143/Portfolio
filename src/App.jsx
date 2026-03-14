import { useEffect, useState, useRef } from 'react'
import './App.css'
import Particles from './Particles.jsx'
import emailjs from "@emailjs/browser"

function App() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_r5pigob",
      "template_y2z9fkn",
      form.current,
      "3oyCRRjf7VVDXBl_y"
    ).then(
      () => {
        alert("Message sent successfully!")
      },
      () => {
        alert("Failed to send message")
      }
    )
  }

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  return (
    <>
      <Particles />
      <div className="app">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-mark">AA</span>
          <span className="logo-text">Ashish Arsad</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#internship">Internship</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="tag">Portfolio · Software Engineering</p>
            <h1>
              Ashish <span>Pravin</span> Arsad
            </h1>
            <p className="titles">
              I&apos;m a <span>Software Developer</span> ·{' '}
              <span>Full Stack Developer</span>
            </p>
            <p className="hero-subtitle">
              Innovative Electronics Engineering student with strong software skills, eager to create impactful solutions through hardware–software integration and open-source development.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn primary">
                Contact Me
              </a>
              <a
               href="/Ashish_Arsad_Resume.pdf"
               className="btn ghost"
               download="Ashish_Arsad_Resume.pdf"
              >
               Download Resume
              </a>
              <a href="#projects" className="btn ghost">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-card-title">Quick Summary</p>
            <p className="hero-card-line">
              📧 Email: <span>ashisharsad9307@gmail.com</span>
            </p>
            <p className="hero-card-line">
              🔗 LinkedIn: <span>linkedin.com/in/ashisharsad2143</span>
            </p>
            <p className="hero-card-line">
              🐱 Github: <span>github.com/Ashish2143</span>
            </p>
            <p className="hero-card-line">
              💼 Portfolio: <span>capable-pixie-9fd2d6.netlify.app</span>
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>About</h2>
            
          </div>
          <div className="section-body two-column">
            <p>
              "I'm Ashish Arsad, a Third-Year Electronics Engineering student at YCCE, driven by a passion for software development and hardware–software integration.
               I enjoy working on software programming, PCB circuit design, and embedded systems. Currently, I’m sharpening my coding and software engineering skills while building a strong foundation in core electronics."
            </p>
            <p>
               "I’m enthusiastic about applying my knowledge to real-world projects, developing innovative solutions, and collaborating with professionals across both domains. Open to internships, impactful collaborations, and networking with like-minded innovators who share a vision for technology-driven progress."
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-header">
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            <h2>•	Programming Languages :</h2>
            <div className="chip-row">
              <span className="chip">C</span>
              <span className="chip">C++</span>
              <span className="chip">Python</span>
              <span className="chip">Java</span>
            </div>
           <h2>•	Development :</h2>
            <div className="chip-row">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">JavaScript</span>
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">Android</span>
            </div>
            <h2>•	Database: </h2>
            <div className="chip-row">
              <span className="chip">My sql</span>
              <span className="chip">MongoDB</span>
            </div>
            <h2>•	Tools : </h2>
            <div className="chip-row">
              <span className="chip">Vs Code</span>
              <span className="chip">Android Studio</span>
              <span className="chip">GitHub</span>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-header">
            <h2>Education</h2>
            <p>List your degrees and key coursework.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Degree in B-Tech</h3>
                <p className="timeline-meta">Yeshwantrao Chavan College , Nagpur  · 2024 – 2027</p>
                <p>
                  I am eager to apply my skills in software development and hardware–software integration through internships and real-world projects, while continuously learning and growing in the field of technology.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Diploma / MSBTE</h3>
                <p className="timeline-meta">Goverment Polytechnic College, Arvi · 2021 – 2024</p>
                <p>I completed my Diploma in Computer Science, where I studied programming, data structures, databases, and web development while building practical software projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="internship" className="section">
          <div className="section-header">
            <h2>Internship</h2>
            <p>Completed internships as an Android Developer at Mount Reach Solutions (June–July 2023) and in Full Stack Development at Smarted Internship, gaining experience in mobile app development, UI/UX, debugging, and web technologies</p>
          </div>
          <div className="card-list">
            <article className="card">
              <h3>Android Developer Intern</h3>
              <p className="card-meta">Mount Reach Solutions · June 2023 – July 2023</p>
              <p>
               I developed an Android application using Java and Android Studio, worked on UI/UX design, debugging, and performance optimization, and learned the fundamentals of mobile app development and project deployment.
              </p>
              <ul className="card-points">
                <li>Contributed to developing and improving an Android application during the internship</li>
                <li>Used tools and technologies such as Java and Android Studio for app development and debugging.</li>
                <li>Gained hands-on experience in mobile app development, UI/UX design, and performance optimization.</li>
              </ul>
            </article>
          </div>

          <div className="card-list">
            <article className="card">
              <h3>Android Developer Intern & Web Developer</h3>
              <p className="card-meta">Byte Uprise · June 2026 – July 2026</p>
              <p>
                I worked on developing Android applications and web-based features using Java, Android Studio, HTML, CSS, and JavaScript, contributed to UI/UX design, debugging, and feature implementation, and gained practical experience in mobile and web application development.              </p>
              <ul className="card-points">
                <li>Contributed to developing Android applications and web-based features during the internship.</li>
                <li>Used technologies such as Java, Android Studio, HTML, CSS, and JavaScript for development.</li>
                <li>Gained hands-on experience in mobile app development, web development, debugging, and UI/UX design while building real-world projects.</li>
              </ul>
            </article>
          </div>

          <div className="card-list">
            <article className="card">
              <h3>Full Stack Development Intern</h3>
              <p className="card-meta">Smart Ed Internship · Feb 2026 – March 2026</p>
              <p>
                I worked on building web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB, contributed to both frontend and backend development, and gained hands-on experience in creating and managing complete web applications. 
              </p>             
                <ul className="card-points">
                <li>Contributed to developing and improving full-stack web applications, working on both frontend and backend features.</li>
                <li>Used technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB during development.</li>
                <li>Gained hands-on experience in building, debugging, and deploying complete web applications.</li>
              </ul>
            </article>
          </div>
          
        </section>

        

        <section id="projects" className="section">
          <div className="section-header">
            <h2>Projects</h2>
            
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>TimeTable Generation</h3>
              <p className="card-meta">HTML,CSS,JSP</p>
              <p>
                TimeTable-Generator is a web-based application that automatically generates a clash-free timetable based on selected subjects, sections, and preferred time slots.
              </p>
              <div className="card-actions">
                <a href="https://github.com/Ashish2143/TimeTable-Generator" className="link">
                  View Code
                </a>
                
              </div>
            </article>
            <article className="card">
              <h3>AI-Code-Review</h3> 
              <p className="card-meta"> Python</p>
              <p>
                “An AI-powered tool that automatically analyzes source code and provides suggestions to improve code quality, detect bugs, and enhance overall software performance.”
              </p>
              <div className="card-actions">
                <a href="https://github.com/Ashish2143/ai-code-review" className="link">
                  View Code
                </a>
              </div>
            </article>
            <article className="card">
              <h3> Portfolio</h3> 
              <p className="card-meta"> javascript</p>
              <p>
                  “A personal portfolio website showcasing my projects, skills, and development work with links to GitHub, LinkedIn, and contact information.”              </p>
              <div className="card-actions">
                <a href="https://github.com/Ashish2143/Portfolio" className="link">
                  View Code
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <h2>Contact</h2>
            
          </div>
          <div className="contact-grid">
            <div>
              <ul className="contact-list">
                <li>
                  📧Email:{' '}
                  <a href="ashisharsad9307@gmail.com">
                    ashisharsad9307@gmail.com
                  </a>
                </li>
                <li>
                  🔗LinkedIn:{''}
                  <a href="https://www.linkedin.com/in/ashisharsad2143/" target="_blank" rel="noreferrer">
                  ashisharsad2143
                  </a>
                </li>
                <li>
                  🐱 GitHub:{' '}
                  <a href="https://github.com/Ashish2143" target="_blank" rel="noreferrer">
                   Ashish2143
                  </a>
                </li>
                <li>
                  💼 Portfolio:{' '}
                  <a href="capable-pixie-9fd2d6.netlify.app" target="_blank" rel="noreferrer">
                   Ashish Pravin Arsad
                  </a>
                </li>
              </ul>
            </div>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
  <div className="form-row">
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="user_name"
      id="name"
      placeholder="Enter your name"
      required
    />
  </div>

  <div className="form-row">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="user_email"
      id="email"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="form-row">
    <label htmlFor="message">Message</label>
    <textarea
      name="message"
      id="message"
      rows={4}
      placeholder="Write your message here"
      required
    />
  </div>

  <button className="btn primary" type="submit">
    Send Message
  </button>
</form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Ashish Pravin Arsad. All rights reserved.
        </p>
      </footer>
      </div>
    </>
  )
}

export default App
