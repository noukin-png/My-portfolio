'use strict';

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const mask = document.getElementById('mask');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
  mask.classList.toggle('active');
});

nav.addEventListener('click', () => {
  hamburger.classList.remove('active');
  nav.classList.remove('active');
  mask.classList.remove('active');
})

mask.addEventListener('click', () => {
  hamburger.classList.remove('active');
  nav.classList.remove('active');
  mask.classList.remove('active');
})


const worksData = {
  1: {
    title: 'Webサイト模写',
    desc: 'HTML/CSSを使用したコーディング',
    imagepc: 'img/dog-pc.jpeg',
    imagesp: 'img/dog-sp.jpeg',
    url: 'https://noukin-png.github.io/HTML-walking.app/'
  },

  2: {
    title: 'Webサイト模写',
    desc: 'JavaScriptを使用したコーディング',
    imagepc: 'img/sneak-pc.jpeg',
    imagesp: 'img/sneak-sp.jpeg',
    url: 'https://noukin-png.github.io/HTML-advanced/'
  },

  3: {
    title: '実案件のコーディング',
    desc: 'デザインカンプからのコーディング',
    imagepc: 'img/pc-header.jpeg',
    imagesp: 'img/header.jpeg',
    url: 'https://noukin-png.github.io/html-design-comp/'
  },
};

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.work').forEach(workEl => {
  workEl.addEventListener('click', e => {
    e.preventDefault();

    const id = workEl.dataset.id;
    const work = worksData[id];

    document.querySelector('.modal-title').textContent = work.title;
    document.querySelector('.modal-desc').textContent = work.desc;
    document.getElementById('modal-imagepc').src = work.imagepc;
    document.getElementById('modal-imagesp').src = work.imagesp;
    document.getElementById('modal-link').href = work.url;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
