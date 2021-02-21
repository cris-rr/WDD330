export default class CommentView {

  static renderComments(commentsData) {
    const comments = document.querySelector('#commentsContainer');
    let view = "";
    console.log('commentView:' + commentsData);
    commentsData.forEach(c => {
      console.log(c);
      let date = `${c.date.getMonth() +1} - ${c.date.getDate()} - ${c.date.getFullYear()}`;
      view += `
      <li class='comment-item'>
        <div>${c.name}</div>
        <div>${date}</div>
        <p>${c.content}</p>
        </li>
      `
    });
    comments.innerHTML = view;
  }

  static renderAddComment(hikeName) {
    const form = document.querySelector('#formComment');
    let view = `<form action="">
      <label htmlFor="newComment"></label>
      <input type="text" name="newComment" id="content" required/>
      <input type ="hidden" value = "${hikeName}" id="hikeName">
      <button type = "button" id="add" onclick='addComment(event)'>Add Comment</button>
      </form>`;
    form.innerHTML = view;
  }

  static renderDeleteForm() {
    const form = document.querySelector('#formComment');
    form.innerHTML = "";
  }
}