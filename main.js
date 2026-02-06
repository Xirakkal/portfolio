import './src/css/app.scss';

//la navbar apparaît après le hero
const nav = document.getElementById('mainNav');
const hero = document.getElementById('hero');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
    }
  },
  {
    threshold: 0
  }
);

observer.observe(hero);

//ouvrir le portfolio si on clique sur le CTA

const heroCta = document.getElementById('cta-hero');
const portfolioCollapse = document.getElementById('collapsePortfolio');

heroCta.addEventListener("click", function () { portfolioCollapse.classList.add("show") });
