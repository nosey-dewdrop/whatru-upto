const possibleOptions = [];
const flowerPanel = document.getElementById('flowerPanel');
const flowerImages = ['flower1.png', 'flower2.png', 'flower3.png']; // varsa farklı çiçek resimleri
const emojiList = ['🌸', '🍀', '🌼', '💐', '🌹', '🌻', '🌷', '🌿', '🍁'];

function addItem() {
  const input = document.getElementById('inputBox').value.trim();
  if (input !== '') {
    possibleOptions.push(input);
    document.getElementById('inputBox').value = '';

    const img = document.createElement('img');
    img.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    img.onerror = function () {
      img.remove();
      showEmoji(input); // input'u parametre olarak gönder
    };
    flowerPanel.appendChild(img);
  }
}
function reset(){

}

function undo(){

}

function showEmoji(label) {
      const emojiChar = emojiList[Math.floor(Math.random() * emojiList.length)];
      const bgColor = getRandomPastelColor();
      const emoji = document.createElement('span');
      emoji.textContent = emojiChar;

      emoji.title = label;  

      emoji.style.fontSize = '24px';
      emoji.style.margin = '4px';
      emoji.style.padding = '8px';
      emoji.style.borderRadius = '12px';
      emoji.style.backgroundColor = bgColor;
      emoji.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      emoji.style.display = 'inline-block';
      emoji.style.cursor = 'pointer';

      emoji.addEventListener('click', () => {
            alert('it is: '+ label);
      });

      flowerPanel.appendChild(emoji);
    } 
// Pastel arka plan renkleri
function getRandomPastelColor() {
      const pastelColors = ['#fce4ec', '#e8f5e9', '#fff3e0', '#e3f2fd', '#f3e5f5', '#ede7f6', '#f0f4c3'];
      return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}
   
function shuffle() {
      if (possibleOptions.length === 0) {
            alert('Empty');
            return;
      }
      const result = possibleOptions[Math.floor(Math.random() * possibleOptions.length)];
      alert('decision: ' + result);
      possibleOptions.length = 0;
      flowerPanel.innerHTML = '';
}
