fetch('../json/depoimentos.json').then(res => res.json()).then(json =>{

  const container = document.getElementById('depoimentos_container');
  let id = 0;
  json.depoimentos.forEach(element => {
    let titulo = document.createElement('h1');
    let desc = document.createElement('p');
    let card = document.createElement('div');
    let img = document.createElement('img');

    img.src = '../image/depoimentos/fluent-color--person-24.svg'
    if (id == 0){
      card.setAttribute('id','ativo');
      id++;
    }
    img.classList.add('person_img');
    card.classList.add('card');

    titulo.innerText = element.titulo;
    desc.innerText = element.texto;
    
    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(desc);
    container.appendChild(card);
  });
  
  let items = document.querySelectorAll('.card');
  let ativo = document.getElementById('ativo');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let cardId = 0;
  
  next.addEventListener('click', (e) => {
    if(items[cardId].classList.contains('transition') || items[cardId].classList.contains('transition_2')) {
      items[cardId].classList.remove('transition')
      items[cardId].classList.remove('transition_2')
    }
    ativo = document.getElementById('ativo');
    ativo.id = '';
    
    if (cardId == items.length - 1){
      cardId = 0;
    }
    else {
      cardId++;
    }

    items[cardId].setAttribute('id', 'ativo');
    
    items[cardId].classList.add('transition_2');
    
    items[cardId].addEventListener('animationend', () => {
      items[cardId].classList.remove('transition_2');
    })

  })

  prev.addEventListener('click', (e) => {
    if(items[cardId].classList.contains('transition') || items[cardId].classList.contains('transition_2')) {
      items[cardId].classList.remove('transition')
      items[cardId].classList.remove('transition_2')
    }
    ativo = document.getElementById('ativo');
    ativo.id = '';

    if (cardId == 0){
      cardId = 4;
    }
    else {
      cardId--;
    }

    items[cardId].setAttribute('id', 'ativo');

    items[cardId].classList.add('transition');

    items[cardId].addEventListener('animationend', () => {
      items[cardId].classList.remove('transition');
    })
  })

});

const next = document.getElementById('next');
const prev = document.getElementById('prev');

prev.addEventListener('mouseenter', () => {
  prev.classList.add('button_hover');
})

prev.addEventListener('mouseleave', () => {
  prev.classList.remove('button_hover');
  prev.classList.add('button_leave');
  prev.addEventListener('animationend', () => {
    prev.classList.remove('button_leave');
  })
})

next.addEventListener('mouseenter', () => {
  next.classList.add('button_hover_next');
})

next.addEventListener('mouseleave', () => {
  next.classList.remove('button_hover_next');
  next.classList.add('button_leave_next');
  next.addEventListener('animationend', () => {
    next.classList.remove('button_leave_next');
  })
})
