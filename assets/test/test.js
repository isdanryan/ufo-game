/**
 * @jest-environment jsdom
 */
const { score, gameareaHeight, gameareaWidth, gameover, ufoHeight, ufoWidth, ufoX, ufoY, asteroidArray, asteroidHeight, asteroidSpeed, asteroidWidth, asteroidX, star1Height, star1Width, star2Height, star2Width, star3Height, star3Width, starArray, starSpeed, starX, ufo, moveUFODown, moveUFOUp, screenWidth, detectCollision } = require("../js/game");

describe('Game Initialization', () => {
  beforeEach(() => {
    // Set the screen size
    global.screenWidth = 280;
  });

  test('Variables should be initialized correctly based on screen size', () => {
    // Check the variables have been initialized correctly based on the screen size
    expect(gameareaWidth).toBe(300);
    expect(asteroidX).toBe(300);
    expect(starX).toBe(300);
    expect(asteroidSpeed).toBe(-2);
    expect(starSpeed).toBe(-1);
    expect(ufo.x).toBe(20);
  });
});
  
  //Test to see if the ufo moves
  describe('UFO movement', () => {
    test('UFO moves up when the up key is pressed', () => {
      // Set the initial y position of the UFO
      const initialY = ufo.y;
  
      // Simulate the up key press
      moveUFOUp();
  
      // Check if the y position of the UFO has decreased
      expect(ufo.y).toBeLessThan(initialY);
    });

    test('UFO moves down when the down key is pressed', () => {
        // Set the initial y position of the UFO
        const initialY = ufo.y;
    
        // Simulate the down key press
        moveUFODown();
    
        // Check if the y position of the UFO has increased
        expect(ufo.y).toBeGreaterThan(initialY);
      });
  });


  describe('Game over event is called when ufo and asterios collision is detected', () => {
    test('Game over event is called on UFO and asteroid collision', () => {
      // Create a mock UFO and asteroid objects
      const ufo = { x: 50, y: 50, width: 50, height: 50 };
      const asteroid = { x: 50, y: 50, width: 50, height: 50 };
    
      // Call the detectCollision function with the mock objects
      const collision = detectCollision(ufo, asteroid);
    
      // Assert that the collision is true, indicating a collision occurred
      expect(collision).toBe(true);
    
      // Add any additional assertions or checks to verify that the game over event is triggered
    });
  })