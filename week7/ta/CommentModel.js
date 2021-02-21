import {
  Comment
} from './CommentController.js';

export default class CommentModel {

  static getAllComments() {
    let commentList = []

    // commentList.push(new Comment('Hikes', 'Teton Canyon', 'My first comment'));
    // commentList.push(new Comment('Hikes', 'Teton Canyon', 'My Second comment'));
    // commentList.push(new Comment('Hikes', 'Teton Canyon', 'My Third comment'));
    // commentList.push(new Comment('Hikes', 'Teton Canyon', 'My Fourth comment'));

    // get data from localStorage
    commentList = JSON.parse(localStorage.getItem('comments'));
    commentList.forEach(c => {
      c.date = new Date(c.date)
    });
    return commentList;
  }

  static saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  static addComment(content, hikeName) {
    let comment = new Comment('Hikes', hikeName, content);
    return comment;
  }
}