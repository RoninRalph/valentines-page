// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the buttons
    const yesButton = document.getElementById('yesButton');
    const maybeButton = document.getElementById('maybeButton');
  
    // Add event listeners to the buttons
    yesButton.addEventListener('click', handleYesButtonClick);
    maybeButton.addEventListener('click', handleMaybeButtonClick);
  
    // Function to handle yes button click
    function handleYesButtonClick() {
      alert('I love you! I knew you were gonna say yes!');
      createConfettiEffect();
    }
  
    // Function to handle maybe button click
    function handleMaybeButtonClick() {
      alert('I understand if you need time to think about it.');
    }
  
    // Function to create confetti effect
    function createConfettiEffect() {
      // Create 100 confetti elements
      for (let i = 0; i < 100; i++) {
        createConfettiElement();
      }
    }
  
    // Function to create a single confetti element
    function createConfettiElement() {
      // Create a new div element
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
  
      // Set random styles for the confetti element
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confetti.style.backgroundColor = getRandomColor();
  
      // Add the confetti element to the body
      document.body.appendChild(confetti);
  
      // Remove the confetti element after 5 seconds
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  
    // Function to get a random color
    function getRandomColor() {
      // Define an array of colors
      const colors = ['#ff4d4d', '#ff8c8c', '#ffcccc', '#ffdede', '#ffe6e6'];
  
      // Return a random color from the array
      return colors[Math.floor(Math.random() * colors.length)];
    }
  
    // Add event listener to handle touch events on mobile devices
    document.addEventListener('touchstart', (event) => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target === yesButton || target === maybeButton) {
          target.click();
        }
      }
    });
  });