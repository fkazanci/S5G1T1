const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: 'Workintech',
  logo: 'https://i.ibb.co/8YwDpRj/logo.png',
  links: [
    {
      href: 'programlarimiz.html',
      text: 'Programlarımız',
    },
    {
      href: 'blog.html',
      text: 'Blog',
    },
    {
      href: 'sorulariniz.html',
      text: 'Sorularınız',
    },
    {
      href: 'hakkimizda.html',
      text: 'Hakkımızda',
    },
  ],
};

/* Kodlar Buradan aşağıya */
const newTitle = document.getElementsByTagName('title')[0];
newTitle.textContent = 'Workintech';
const newLogo = document.getElementById('logo-img');
newLogo.src = 'https://i.ibb.co/8YwDpRj/logo.png';
const newNavi = document.getElementsByTagName('a');
newNavi[0].textContent = 'Programlarımız';
newNavi[0].href = 'programlarimiz.html';
newNavi[1].textContent = 'Blog';
newNavi[1].href = 'blog.html';
newNavi[2].textContent = 'Sorularınız';
newNavi[2].href = 'sorulariniz.html';
newNavi[3].textContent = 'Hakkımızda';
newNavi[3].href = 'hakkimizda.html';
