AFRAME.registerComponent("car-model", {
  schema: {
   modelRef: { type: "string", default: "./assets/car/scene.gltf" },
  },
  init: function () {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 0, z: 80 };
    const rotation = { x: 0, y: 0, z: 0 };
    const scale = { x: 750, y: 750, z: 750 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
    this.el.setAttribute("scale", scale);

    window.addEventListener("click", e => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        const rotation = { x: 0, y: 20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2) {
        const rotation = { x: 0, y: 60, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 3) {
        const rotation = { x: 0, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 4) {
        const rotation = { x: 0, y: 140, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 5) {
        const rotation = { x: 0, y: 180, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 6) {
        const rotation = { x: 0, y: 220, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 7) {
        const rotation = { x: 0, y: 260, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 8) {
        const rotation = { x: 0, y: 300, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 9) {
        const rotation = { x: 0, y: 330, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 10) {
        const rotation = { x: 0, y: 360, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else {
        this.data.clickCounter = 0
        const rotation = { x: 0, y: 0, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }
    })
  },

});

AFRAME.registerComponent("display", {
  schema: {
    // moveX: { type: "number", default: 1 },
    rotateX: { type: "number", default: 1 },
    rotateY: { type: "number", default: 1 },

  },

  tick: function () {
    // this.data.moveX = this.data.moveX + 0.01;
    // this.data.rotateX = this.data.rotateX + 1;
    this.data.rotateY = this.data.rotateY + 1;
    this.data.radius = this.data.radius + 0.01;

    var rot = this.el.getAttribute("rotation");
    rot.x = this.data.rotateX;
    rot.y = this.data.rotateY;
    this.el.setAttribute("rotation", { x: rot.x, y: rot.y, z: rot.z });
  }
});

