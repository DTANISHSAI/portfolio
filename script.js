const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Typing animation restart function
const restartTypingAnimation = () => {
  const typingLines = document.querySelectorAll('.typed-line');
  const typingSubtitle = document.querySelector('.typing-subtitle');
  
  // Reset line animations
  typingLines.forEach((line, index) => {
    line.style.animation = 'none';
    line.offsetHeight; // Trigger reflow
    line.style.animation = `typing-line 2s steps(40, end) ${index * 2.2}s forwards`;
  });
  
  // Reset subtitle animation
  if (typingSubtitle) {
    typingSubtitle.style.animation = 'none';
    typingSubtitle.offsetHeight; // Trigger reflow
    typingSubtitle.style.animation = 'fade-in-typing 3s steps(30, end) 8.8s both';
  }
};

// Restart animation on page load/refresh
document.addEventListener('DOMContentLoaded', restartTypingAnimation);

// Project Modal System
const projectData = {
  contentcreator: {
    title: 'AI Content Creator',
    description: 'Advanced AI-powered content generation system built using cutting-edge Hugging Face APIs and transformer models. Features intelligent text and image generation with context-aware capabilities, natural language processing, and seamless API integration. Perfect for content creators, marketers, and developers looking to leverage AI for creative workflows.',
    tags: ['Hugging Face', 'Transformers', 'JavaScript', 'AI/ML', 'NLP', 'APIs'],
    github: 'https://github.com/DTANISHSAI/ContentCreator',
    demo: null
  },
  netflix: {
    title: 'Netflix Clone',
    description: 'Full-featured Netflix-style streaming platform with responsive design and dynamic content management. Includes user authentication, movie/TV show browsing, search functionality, category filtering, video streaming capabilities, and a modern, responsive interface that works seamlessly across all devices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Frontend', 'Streaming'],
    github: 'https://github.com/DTANISHSAI/netflix_clone_',
    demo: null
  },
  trs: {
    title: 'Train Reservation System',
    description: 'Complete railway booking and reservation management system with real-time seat availability, user authentication, payment integration, and booking history. Features include train search, seat selection, ticket generation, cancellation management, and administrative dashboard for system management.',
    tags: ['HTML5', 'Database', 'Booking System', 'Transportation', 'Full-Stack'],
    github: 'https://github.com/DTANISHSAI/trs',
    demo: null
  },
  effiq: {
    title: 'EffiQ - Efficiency Tool',
    description: 'Modern productivity and workflow management tool built with TypeScript. Originally forked and extensively enhanced with additional features including task management, time tracking, team collaboration, project analytics, and customizable workflows to boost individual and team productivity.',
    tags: ['TypeScript', 'Productivity', 'Workflow Management', 'Team Collaboration', 'Open Source'],
    github: 'https://github.com/DTANISHSAI/EffiQ',
    demo: null
  }
};

function openProjectModal(projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalGithub').href = project.github;
  
  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = '';
  project.tags.forEach(tag => {
    const tagSpan = document.createElement('span');
    tagSpan.className = 'tech-tag';
    tagSpan.textContent = tag;
    tagsContainer.appendChild(tagSpan);
  });

  const demoBtn = document.getElementById('modalDemo');
  if (project.demo) {
    demoBtn.href = project.demo;
    demoBtn.style.display = 'flex';
  } else {
    demoBtn.style.display = 'none';
  }

  document.getElementById('projectModal').classList.add('active');
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
}

// Project Filtering System
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects with animation
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.classList.remove('filtered-out');
        } else {
          card.classList.add('filtered-out');
        }
      });
    });
  });
});

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Skills Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Skill filtering
  const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCategories = document.querySelectorAll('.skill-category');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      skillFilterBtns.forEach(button => button.classList.remove('active'));
      this.classList.add('active');
      
      // Filter skill categories
      skillCategories.forEach(category => {
        const categoryType = category.getAttribute('data-category');
        
        if (filter === 'all' || categoryType === filter) {
          category.classList.remove('hidden');
        } else {
          category.classList.add('hidden');
        }
      });
    });
  });

  // Animate skill bars when they come into view
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const progress = progressBar.getAttribute('data-progress');
          
          setTimeout(() => {
            progressBar.style.width = progress + '%';
            progressBar.classList.add('animate');
          }, 200);
          
          observer.unobserve(progressBar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
  };

  animateSkillBars();
});

// Scroll Progress Indicator
function createScrollProgressIndicator() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
  });
}

// Add scroll progress indicator
document.addEventListener('DOMContentLoaded', createScrollProgressIndicator);

// Enhanced smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Add highlight effect
        targetElement.style.transform = 'scale(1.02)';
        setTimeout(() => {
          targetElement.style.transform = 'scale(1)';
        }, 300);
      }
    });
  });
});

// Parallax effect for orbs
document.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll('.orb');
  
  orbs.forEach((orb, index) => {
    const rate = scrolled * (0.5 + index * 0.1);
    orb.style.transform = `translateY(${rate}px)`;
  });
});

// Interactive Contact Form
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Clear previous errors
      clearFormErrors();
      
      // Validate form
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim()
      };
      
      let hasErrors = false;
      
      // Validation
      if (!formData.name) {
        showError('nameError', 'Please enter your name');
        hasErrors = true;
      }
      
      if (!formData.email) {
        showError('emailError', 'Please enter your email');
        hasErrors = true;
      } else if (!isValidEmail(formData.email)) {
        showError('emailError', 'Please enter a valid email address');
        hasErrors = true;
      }
      
      if (!formData.subject) {
        showError('subjectError', 'Please select a subject');
        hasErrors = true;
      }
      
      if (!formData.message) {
        showError('messageError', 'Please enter your message');
        hasErrors = true;
      } else if (formData.message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        hasErrors = true;
      }
      
      if (!hasErrors) {
        // Submit form via AJAX to prevent redirect
        const submitBtn = document.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        
        // Prepare form data for submission
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('message', formData.message);
        
        // Submit via fetch to prevent redirect
        fetch('https://formspree.io/f/mlgwrdwl', {
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            // Show success message
            document.getElementById('formSuccess').style.display = 'flex';
            document.getElementById('contactForm').reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(error => {
          // Show error message
          alert('Sorry, there was an error sending your message. Please try again or email me directly.');
        })
        .finally(() => {
          // Reset button state
          submitBtn.disabled = false;
          btnText.style.display = 'inline';
          btnLoading.style.display = 'none';
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            document.getElementById('formSuccess').style.display = 'none';
          }, 5000);
        });
      }
    });
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.classList.add('show');
}

function clearFormErrors() {
  const errors = document.querySelectorAll('.form-error');
  errors.forEach(error => {
    error.textContent = '';
    error.classList.remove('show');
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add floating animation to form inputs
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
});

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((section) => observer.observe(section));
} else {
  reveals.forEach((section) => section.classList.add("in-view"));
}

const themeButtons = document.querySelectorAll(".theme-btn");
let torchEnabled = false;

const updateTorchPosition = (event) => {
  document.body.style.setProperty("--torch-x", `${event.clientX}px`);
  document.body.style.setProperty("--torch-y", `${event.clientY}px`);
};

const enableTorch = () => {
  if (torchEnabled) return;
  torchEnabled = true;
  document.body.style.setProperty("--torch-x", "50vw");
  document.body.style.setProperty("--torch-y", "40vh");
  document.addEventListener("pointermove", updateTorchPosition);
};

const disableTorch = () => {
  if (!torchEnabled) return;
  torchEnabled = false;
  document.removeEventListener("pointermove", updateTorchPosition);
};

const setTheme = (theme) => {
  document.body.setAttribute("data-theme", theme);
  themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });

  if (theme === "torch") {
    enableTorch();
  } else {
    disableTorch();
  }

  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // Ignore storage errors (e.g., private mode)
  }
};

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
  } catch (error) {
    // Ignore storage errors
  }

  if (window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "dark";
};

if (themeButtons.length) {
  const initialTheme = getInitialTheme();
  setTheme(initialTheme);

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });
}

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileTalkBtn = document.querySelector('.mobile-talk-btn');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  // Close menu when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close menu when clicking on mobile talk button
  if (mobileTalkBtn) {
    mobileTalkBtn.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}
