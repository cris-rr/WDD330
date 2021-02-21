import HikesController from './HikesController.js';

const controller = new HikesController("hikes");
window.addEventListener("load", () => {
  controller.showHikeList();
});

window.addComment = controller.addComment;