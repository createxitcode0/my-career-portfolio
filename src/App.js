import React, { useState } from 'react';

export default function CareerPortfolio() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '15px 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5em', color: '#667eea', margin: 0 }}>My Career Portfolio</h1>
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
          {['home', 'about', 'skills', 'projects', 'vision', 'contact'].map(tab => (
            <a
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                color: activeTab === tab ? '#667eea' : '#333',
                textDecoration: 'none',
                fontWeight: activeTab === tab ? '600' : '500',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'color 0.3s ease'
              }}
            >
              {tab === 'vision' ? 'Career Vision' : tab}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        paddingTop: '70px'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
          
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '40px',
                marginBottom: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    style={{ 
                            width: '150px', 
                            height: '150px', 
                            borderRadius: '50%', 
                            border: '5px solid #667eea',
                            objectFit: 'cover'  
                            }}
                            />
                  
                  <div>
                    <h1 style={{ fontSize: '2.5em', color: '#333', marginBottom: '10px' }}>Jinfeng Wu</h1>
                    <p style={{ fontSize: '1.2em', color: '#667eea', marginBottom: '15px' }}>
                      IT Student | Future Full-Stack Developer
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#666' }}>
                      <span>📧 jinfewu@uef.fi</span>
                      <span>📱 +358 123 456789</span>
                      <span>📍 Kuopio, Finland</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{ color: '#667eea', marginBottom: '15px' }}>Welcome! 👋</h2>
                <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
                  I'm a passionate IT student with a vision to become a Senior Full-Stack Developer and Tech Lead. 
                  I love building web applications and solving complex problems with elegant code.
                </p>
                <p style={{ lineHeight: '1.8', color: '#555' }}>
                  This portfolio showcases my journey from student to professional developer, including my projects, 
                  skills, and 10-year career vision.
                </p>
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#667eea', marginBottom: '20px', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
                👨‍💻 About Me
              </h2>
              <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                I'm currently pursuing my IT degree at UEF, where I'm developing strong foundations 
                in computer science and software development. My journey into tech started with curiosity about 
                how websites work, and it has evolved into a passion for creating digital solutions.
              </p>
              
              <h3 style={{ color: '#333', marginTop: '25px', marginBottom: '15px' }}>🎓 Education</h3>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                <h4 style={{ color: '#333', marginBottom: '5px' }}>Your University Name</h4>
                <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '10px' }}>2022 - 2026 (Expected)</p>
                <p style={{ color: '#555' }}>Bachelor's Degree in Information Technology</p>
                <p style={{ color: '#555', marginTop: '10px' }}>
                  Relevant Coursework: Web Development, Data Structures, Algorithms, Database Systems, 
                  Software Engineering, Cloud Computing
                </p>
              </div>

              <h3 style={{ color: '#333', marginTop: '25px', marginBottom: '15px' }}>💪 My Strengths</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Fast Learner', 'Problem Solver', 'Team Player', 'Detail-Oriented', 'Curious', 'Persistent'].map(strength => (
                  <span key={strength} style={{
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontWeight: '500'
                  }}>
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#667eea', marginBottom: '20px', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
                💻 Technical Skills
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div>
                  <h3 style={{ color: '#333', marginBottom: '15px' }}>Frontend Development</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {['HTML/CSS', 'JavaScript', 'React.js', 'Tailwind CSS'].map(skill => (
                      <span key={skill} style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '0.9em',
                        fontWeight: '500'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ color: '#333', marginBottom: '15px' }}>Backend Development</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {['Node.js', 'Python', 'REST APIs', 'Express'].map(skill => (
                      <span key={skill} style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '0.9em',
                        fontWeight: '500'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ color: '#333', marginBottom: '15px' }}>Tools & Technologies</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {['Git/GitHub', 'VS Code', 'MongoDB', 'PostgreSQL'].map(skill => (
                      <span key={skill} style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '0.9em',
                        fontWeight: '500'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 style={{ color: '#333', marginTop: '30px', marginBottom: '15px' }}>📈 Currently Learning</h3>
              <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #ffc107' }}>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#856404' }}>
                  <li>Advanced React patterns and hooks</li>
                  <li>Cloud technologies (AWS/Azure)</li>
                  <li>System design and architecture</li>
                  <li>Docker and containerization</li>
                </ul>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#667eea', marginBottom: '20px', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
                🚀 My Projects
              </h2>

              {[
                {
                  title: 'My Career Portfolio',
                  date: 'November 2024',
                  description: 'A responsive personal portfolio website built with React.js, showcasing my projects, skills, and career vision.',
                  tech: ['React', 'CSS3', 'GitHub Pages']
                },
                {
                  title: 'Task Manager App',
                  date: 'October 2024',
                  description: 'A full-stack todo application with user authentication, allowing users to create, update, and delete tasks.',
                  tech: ['React', 'Node.js', 'MongoDB', 'Express']
                },
                {
                  title: 'Weather Dashboard',
                  date: 'September 2024',
                  description: 'A weather forecasting app that fetches real-time weather data from APIs and displays it with beautiful visualizations.',
                  tech: ['JavaScript', 'Weather API', 'Chart.js']
                }
              ].map((project, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  borderLeft: '4px solid #667eea'
                }}>
                  <h3 style={{ color: '#333', marginBottom: '5px' }}>{project.title}</h3>
                  <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9em', marginBottom: '10px' }}>
                    {project.date}
                  </p>
                  <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {project.tech.map(tech => (
                      <span key={tech} style={{
                        background: '#667eea',
                        color: 'white',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85em'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Career Vision Tab */}
          {activeTab === 'vision' && (
            <div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                marginBottom: '20px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{ color: '#667eea', marginBottom: '20px', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
                  🎯 My 10-Year Career Vision
                </h2>
                
                <div style={{
                  background: '#fff3cd',
                  borderLeft: '5px solid #ffc107',
                  padding: '20px',
                  marginBottom: '25px',
                  borderRadius: '5px'
                }}>
                  <p style={{ fontStyle: 'italic', color: '#856404', lineHeight: '1.8' }}>
                    "By 2034, I envision myself as a <strong>Senior Full-Stack Developer or Tech Lead</strong> at an 
                    innovative tech company, leading teams to build impactful digital solutions that solve real-world problems."
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  {[
                    { icon: '📍', title: 'WHERE', desc: 'Helsinki or remote in Europe' },
                    { icon: '🏢', title: 'ORGANIZATION', desc: 'Tech company or innovative startup' },
                    { icon: '👥', title: 'WITH WHOM', desc: 'Leading 5-10 developers' },
                    { icon: '💻', title: 'DOING WHAT', desc: 'Building scalable applications' },
                    { icon: '❤️', title: 'WHY', desc: 'Creating impactful technology' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      padding: '20px',
                      borderRadius: '10px',
                      color: 'white',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '2.5em', marginBottom: '10px' }}>{item.icon}</div>
                      <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.9em' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                marginBottom: '20px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📅 My Career Roadmap</h3>
                
                {[
                  {
                    years: '2024-2026',
                    phase: 'Foundation Phase',
                    role: 'Student → Junior Developer',
                    goals: ['Complete IT degree', 'Build 10+ projects', 'Get first internship', 'Master React & Node.js']
                  },
                  {
                    years: '2026-2028',
                    phase: 'Growth Phase',
                    role: 'Junior → Mid-Level Developer',
                    goals: ['First full-time job', 'Ship production features', 'Learn cloud tech', 'Build network']
                  },
                  {
                    years: '2028-2031',
                    phase: 'Advancement Phase',
                    role: 'Mid → Senior Developer',
                    goals: ['Become senior dev', 'Lead architecture', 'Mentor juniors', 'Speak at conferences']
                  },
                  {
                    years: '2031-2034',
                    phase: 'Leadership Phase',
                    role: 'Tech Lead / Manager',
                    goals: ['Lead team of 5-10', 'Own technical roadmap', 'Industry expert', 'Consider entrepreneurship']
                  }
                ].map((stage, index) => (
                  <div key={index} style={{
                    background: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    borderLeft: '4px solid #667eea'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <div>
                        <h4 style={{ color: '#667eea', margin: 0 }}>{stage.phase}</h4>
                        <p style={{ color: '#888', fontSize: '0.9em', margin: '5px 0' }}>{stage.years}</p>
                      </div>
                      <span style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '0.85em',
                        fontWeight: '500'
                      }}>
                        {stage.role}
                      </span>
                    </div>
                    <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px', color: '#555' }}>
                      {stage.goals.map((goal, i) => (
                        <li key={i} style={{ marginBottom: '5px' }}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '15px',
                padding: '30px',
                color: 'white',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ marginBottom: '15px' }}>💪 What Drives Me</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
                  ✨ I want to create technology that makes a real difference in people's lives.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
                  🚀 I thrive on continuous growth and learning new technologies.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
                  🤝 I want to lead and empower others through mentorship.
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  ❤️ I genuinely love building things and solving complex problems.
                </p>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#667eea', marginBottom: '20px', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
                📬 Get In Touch
              </h2>
              
              <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '25px' }}>
                I'm always open to discussing new projects, opportunities, or just having a chat about tech!
                Feel free to reach out through any of the channels below.
              </p>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                  { name: 'GitHub', url: 'https://github.com/yourusername' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
                  { name: 'Email', url: 'mailto:your.email@example.com' }
                ].map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '12px 30px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'transform 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#555', marginBottom: '10px' }}>📧 Email: your.email@example.com</p>
                <p style={{ color: '#555', marginBottom: '10px' }}>📱 Phone: +358 123 456789</p>
                <p style={{ color: '#555' }}>📍 Location: Helsinki, Finland</p>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            marginTop: '20px'
          }}>
            <p>© 2024 Your Name | My Career Portfolio | Built with React.js ❤️</p>
          </footer>
        </div>
      </div>
    </div>
  );
}