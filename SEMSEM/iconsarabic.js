const shapes = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 
                'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي'];
  const maxShapes = 50;
  let count = 0;

  function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    
    shape.style.left = Math.random() * window.innerWidth + 'px';
    
    const size = 20 + Math.random() * 30;
    shape.style.fontSize = size + 'px';
    
    const duration = 3 + Math.random() * 5;
    shape.style.animationDuration = duration + 's';
    
    document.body.appendChild(shape);

    setTimeout(() => {
      shape.remove();
    }, duration * 1000);
  }

  
  const interval = setInterval(() => {
    createShape();
    count++;
    if (count >= maxShapes) {
      clearInterval(interval);
    }
  }, 200);