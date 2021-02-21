import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
import CommentController from './CommentController.js';

// Hike controller
export default class HikesController {
  self = null;
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    console.log('main.js new comment controller');
    this.commentController = new CommentController();
    self = this;

  }

  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), this.parentElement);
    this.addHikeListener();
    this.commentController.showAllComments();
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
    this.hikesView.renderOneHikeFull(this.hikeModel.getHikeByName(hikeName), this.parentElement);
    this.addBackListener()
    this.commentController.showComments(hikeName);
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    let array = [...this.parentElement.children];
    let self = this;
    console.log(array);
    array.forEach(function (item) {
      console.log(item);

      item.addEventListener("click", function (event) {
        let mi_variable = item.querySelector("h2").innerText;
        self.showOneHike(mi_variable);
      });
    })

  }

  addBackListener() {
    let self = this;
    document.getElementById("unico").addEventListener("click", function () {
      self.showHikeList();
    });
  }

  addComment(event) {
    self.commentController.addComment(event);
  }
}