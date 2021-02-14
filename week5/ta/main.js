import HikesController from './HikesController.js';

window.addEventListener("load", () => {
  const controller = new HikesController("hikes");
  controller.showHikeList();

});