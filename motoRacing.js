const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.height = innerHeight;
canvas.width = innerWidth;
let gravity = 0.5;
let roadWidth = innerWidth / 4

// Creating Road
const Road = new Updating(
  {
    position: {
      x: (innerWidth - innerWidth / 4) / 2,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    size: {
      width: roadWidth,
      height: innerHeight,
    },
  },
  0,
  "rgb(32, 31, 31)"
);

const randomNum = () => {             // Subtraction CAR Width From Road Width 
  return Math.floor(Math.random() * (roadWidth - 40))
};

Car = new Updating(
  {
    position: {                                  
      x: (innerWidth - innerWidth / 4) / 2 + randomNum(),
      y: 0,
    },
    velocity: {
      x: 0,
      y: 5,
    },
    size: {
      width: 40,
      height: 80,
    },
  },0,"white"
);

// Creating Player (Biker)
const newPlayer = new Updating(
  {
    position: {
      x: (innerWidth - innerWidth / 4) / 2 + innerWidth / 4 / 2 - 20,
      y: innerHeight - 50 - 25, //Subtracting height And Giving space between bottom border and player
    },
    velocity: {
      x: 0,
      y: 0,
    },
    size: {
      width: 50,
      height: 50,
    },
  },
  0,
  "Red"
);

// Controller Keys
let key = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  }
};

function animate() {
  requestAnimationFrame(animate);
  Road.update();
  Car.update();
  newPlayer.update();

  // Changing Player X Velocity
  newPlayer.velocity.x = 0;
  newPlayer.velocity.y = 0;

  if (key.a.pressed) {
    newPlayer.velocity.x = -5;
  } else if (key.d.pressed) {
    newPlayer.velocity.x = +5;
  } else if (key.w.pressed) {
    newPlayer.velocity.y = -5;
  } else if (key.s.pressed){
    newPlayer.velocity.y = +5
  }
}
animate();

// Checking : Key Is Down
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      key.d.pressed = true;
      break;

    case "a":
      key.a.pressed = true;
      break;

    case "w":
      key.w.pressed = true;
      break;
      
    case "s":
      key.s.pressed = true;
      break;
  }
});

// Checking : Key Is Up
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "d":
      key.d.pressed = false;
      break;

    case "a":
      key.a.pressed = false;
      break;

    case "w":
      key.w.pressed = false;
      break;

    case "s":
      key.s.pressed = false;
      break;
  }
});