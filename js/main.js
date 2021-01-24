function loadContents() {
  // incluide all links in the array
  let linksHtml = "";
  const links = [{
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },

  ];

  links.map((link) => {
    linksHtml += `<li><a href=${link.url}>${link.label}</a></li>`;
  });

  document.getElementById("contentList").innerHTML = linksHtml;
  console.log("pass cr");

}