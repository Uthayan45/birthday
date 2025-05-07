function flipCard() {
    const card = document.getElementById('birthdayCard');
    card.classList.toggle('flipped');
  }
  
  function showModal(e) {
    e.stopPropagation();
    document.getElementById('popup').classList.remove('hidden');
  }
  function showModal(e) {
    e.stopPropagation();
    document.getElementById('popup').classList.remove('hidden');
  }
  function closeModal() {
    document.getElementById('popup').classList.add('hidden');
  }
  



  function createFlower() {
    for (let i = 0; i < 40; i++) {
    const flowers = ['🌸', '🌺', '💐','🎉','🎊' ,'🥳','🎂' ,'🪅'];
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.position = 'absolute';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = '-50px';
    flower.style.fontSize = Math.random() * 20 + 20 + 'px';
    flower.style.animation = `flowerFloat ${2 + Math.random() * 2}s linear`;

    document.querySelector('.flowers').appendChild(flower);
  
    setTimeout(() => flower.remove(), 4000);
  }
  
    setInterval(createFlower, 800);
  }
  




  function createEmojiBurst() {
    const emojis = ['🎉', '✨', '🌟', '💖', '🎂', '🎈', '🥳'];
  
    // First burst - fast emoji fall (removes after 4 seconds)
    for (let i = 0; i < 40; i++) {
      const emoji = document.createElement('div');
      emoji.classList.add('emoji');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = '-50px';
      emoji.style.fontSize = 9 + Math.random() * 9 + 'px';  // Smaller size
      emoji.style.animationDuration = 5 + Math.random() * 5 + 's';
  
      document.querySelector('.emoji-sparks').appendChild(emoji);
  
      // Remove emoji after 4 seconds
      setTimeout(() => emoji.remove(), 4000);
    }
  
    // Second burst - slower emoji fall (removes after 9 seconds)
    for (let i = 0; i < 200; i++) {
      const emoji = document.createElement('div');
      emoji.classList.add('emoji');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = '-50px';
      emoji.style.fontSize = `${5 + Math.random() * 5}px`; // Smaller size
      emoji.style.animationDuration = 5 + Math.random() * 5 + 's';
  
      document.querySelector('.emoji-sparks').appendChild(emoji);
  
      // Remove emoji after 9 seconds
      setTimeout(() => emoji.remove(), 9000);
    }
  }
  
  // Call once or repeatedly
  createEmojiBurst();  // One-time burst
  // setInterval(createEmojiBurst, 4000);  // Repeat burst every 4 seconds
  