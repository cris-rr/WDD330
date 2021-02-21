import CommentView from './CommentView.js';
import CommentModel from './CommentModel.js';

export default class CommentController {
  constructor() {
    this.commentList = [];
  }

  addComment(event) {
    let self = this;
    event.preventDefault();
    let content = document.querySelector("#content").value;
    let hikeName = document.querySelector("#hikeName").value;
    self.commentList.push(CommentModel.addComment(content, hikeName));
    console.log(self.commentList);
    CommentModel.saveComments(self.commentList);
    self.showComments(hikeName);
  }

  showAllComments() {
    let self = this;
    // console.log(CommentModel.getAllComments());
    self.commentList = CommentModel.getAllComments();
    console.log(self.commentList);
    CommentView.renderComments(self.commentList);
    CommentView.renderDeleteForm();
  }

  showComments(hikeName) {
    let currentComments = this.commentList.filter(c => c.name == hikeName);
    CommentView.renderComments(currentComments);
    CommentView.renderAddComment(hikeName);
  }

}


export class Comment {
  constructor(type, hikeName, comment) {
    this.type = type;
    this.name = hikeName;
    this.date = new Date();
    this.content = comment;
  }
}