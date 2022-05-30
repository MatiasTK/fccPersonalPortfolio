const LanguageToSpanish = () => {
  /* Nav */
  const aboutBtn = document.getElementById("about-btn");
  const projectsBtn = document.getElementById("projects-btn");
  const contactBtn = document.getElementById("contact-btn");
  const languageBtn = document.getElementById("dropdownLanguage");
  const englishBtn = document.getElementById("english");
  const spanishBtn = document.getElementById("spanish");

  aboutBtn.innerText = "Acerca de mi";
  projectsBtn.innerText = "Proyectos";
  contactBtn.innerText = "Contacto";
  languageBtn.innerText = "Idioma";
  englishBtn.innerText = "Ingles";
  spanishBtn.innerText = "Español";

  /* About */
  const aboutTitle = document.getElementById("about-title");
  const aboutSubtitle = document.getElementById("about-subtitle");
  const aboutMeTitle = document.querySelector(".about-me-title");
  const aboutMeBody = document.querySelector(".about-me-body");
  const aboutTechlogyTitle = document.querySelector(".about-technology-title");

  aboutTitle.innerHTML = "Hola, soy <strong>Mati</strong>";
  aboutSubtitle.innerText = "Desarrollador Web Front-End";
  aboutMeTitle.innerText = "Sobre mi";
  aboutMeBody.innerHTML =
    "Hola! Mi nombre es Matias, soy de argentina. <br/> Soy un desarollador web frontend junior y estudiante en la Universidad de Ingenieria de Buenos Aires. <br/> Soy un apasionado por la tecnologia. Mi interes en el desarollo web comenzo por 2021 despues de probar algunos lenguajes de programacion. Me gusta crear cosas nuevas, resolver problemas y aprender algo nuevo cada dia. Mi objetivo principal es convertirme en un desarollador fullstack";
  aboutTechlogyTitle.innerText = "Tecnologias con las que trabajo";

  /* Projects */
  const projectsTitle = document.getElementById("projects-title");
  const wordleTitle = document.getElementById("wordle-title");
  const wordleBody = document.getElementById("wordle-body");
  const pomodoroTimerTitle = document.getElementById("pomodoro-timer-title");
  const pomodoroTimerBody = document.getElementById("pomodoro-timer-body");
  const taskNotesTitle = document.getElementById("task-notes-title");
  const taskNotesBody = document.getElementById("task-notes-body");
  const calcuatorTitle = document.getElementById("calculator-title");
  const calcuatorBody = document.getElementById("calculator-body");
  const markdownTitle = document.getElementById("markdown-title");
  const markdownBody = document.getElementById("markdown-body");
  const phasmophobiaTitle = document.getElementById("phasmophobia-title");
  const phasmophobiaBody = document.getElementById("phasmophobia-body");

  projectsTitle.innerText = "Algunos proyectos que he realizado";
  wordleTitle.innerText = "Wordle";
  wordleBody.innerText =
    "Un clon en español del popular juego Wordle creado por Josh Wardle";
  pomodoroTimerTitle.innerText = "Temporizador Pomodoro";
  pomodoroTimerBody.innerText =
    "Un temporizador web configurable basado en la tecnica de pomodoro para maximizar el tiempo de trabajo";
  taskNotesTitle.innerText = "Aplicacion de notas";
  taskNotesBody.innerText =
    "Una simple aplicacion web para guardar notas de tareas con login de Google y React Routing";
  calcuatorTitle.innerText = "Calculadora Javascript";
  calcuatorBody.innerText =
    "Una simple calculadora web basada en Javascript con una interfaz intuitiva";
  markdownTitle.innerText = "Visualizador de Markdown";
  markdownBody.innerText =
    "Una aplicacion web para visualizar y editar archivos markdown";
  phasmophobiaTitle.innerText = "Checklist Phasmophobia";
  phasmophobiaBody.innerText =
    "Una aplicacion de ayuda en español para el popular juego de steam Phasmophobia";

  /* Contact */
  const contactTitle = document.getElementById("contact-title");
  const contactEmail = document.getElementById("contact-email");

  contactTitle.innerText = "Contactame";
  contactEmail.innerText = "Enviame un Email";
};

const LanguageToEnglish = () => {
  /* Nav */
  const aboutBtn = document.getElementById("about-btn");
  const projectsBtn = document.getElementById("projects-btn");
  const contactBtn = document.getElementById("contact-btn");
  const languageBtn = document.getElementById("dropdownLanguage");
  const englishBtn = document.getElementById("english");
  const spanishBtn = document.getElementById("spanish");

  aboutBtn.innerText = "About";
  projectsBtn.innerText = "Projects";
  contactBtn.innerText = "Contact";
  languageBtn.innerText = "Language ";
  englishBtn.innerText = "English";
  spanishBtn.innerText = "Spanish";

  /* About */
  const aboutTitle = document.getElementById("about-title");
  const aboutSubtitle = document.getElementById("about-subtitle");
  const aboutMeTitle = document.querySelector(".about-me-title");
  const aboutMeBody = document.querySelector(".about-me-body");
  const aboutTechlogyTitle = document.querySelector(".about-technology-title");

  aboutTitle.innerHTML = "Hi, I am <strong>Mati</strong>";
  aboutSubtitle.innerText = "A Frontend Web Developer";
  aboutMeTitle.innerText = "About me";
  aboutMeBody.innerHTML = `Hello! My name is Matias I'm from Argentina. </br>
  I'm a started frontend web developer and a student at Engineering University of Buenos Aires. </br>
  I am passionate about technology. My interest in web development started back in 2021 after trying some programming languages. I Like to create new things, solve problems and learn something new every day. My main goal is to become a fullstack developer.`
  aboutTechlogyTitle.innerText = "Technologies I have worked with";

  /* Projects */
  const projectsTitle = document.getElementById("projects-title");
  const wordleTitle = document.getElementById("wordle-title");
  const wordleBody = document.getElementById("wordle-body");
  const pomodoroTimerTitle = document.getElementById("pomodoro-timer-title");
  const pomodoroTimerBody = document.getElementById("pomodoro-timer-body");
  const taskNotesTitle = document.getElementById("task-notes-title");
  const taskNotesBody = document.getElementById("task-notes-body");
  const calcuatorTitle = document.getElementById("calculator-title");
  const calcuatorBody = document.getElementById("calculator-body");
  const markdownTitle = document.getElementById("markdown-title");
  const markdownBody = document.getElementById("markdown-body");
  const phasmophobiaTitle = document.getElementById("phasmophobia-title");
  const phasmophobiaBody = document.getElementById("phasmophobia-body");

  projectsTitle.innerText = "Some of my projects";
  wordleTitle.innerText = "Wordle";
  wordleBody.innerText =
    "A spanish clone of popular game Wordle Created by Josh Wardle.";
  pomodoroTimerTitle.innerText = "Pomodoro Timer";
  pomodoroTimerBody.innerText =
    "A web configurable timer based on the pomodoro technique to maxime the productivity.";
  taskNotesTitle.innerText = "Task Notes App";
  taskNotesBody.innerText =
    "Simple task notes app with Google login and React Routing.";
  calcuatorTitle.innerText = "Javascript Calculator";
  calcuatorBody.innerText =
    "An online calculator with a simple and intuitive interface.";
  markdownTitle.innerText = "Markdown Previewer";
  markdownBody.innerText =
    "Online markdown editor with live preview.";
  phasmophobiaTitle.innerText = "Phasmophobia Calculator";
  phasmophobiaBody.innerText =
    "A spanish web helper for the popular game Phasmophobia.";

  /* Contact */
  const contactTitle = document.getElementById("contact-title");
  const contactEmail = document.getElementById("contact-email");

  contactTitle.innerText = "Contact Me";
  contactEmail.innerText = "Send a mail";
};

const handleLanguageChange = (e) => {
  if (e == "Spanish") {
    LanguageToSpanish();
  } else {
    LanguageToEnglish();
  }
};
