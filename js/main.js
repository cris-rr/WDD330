function loadContents() {
  // incluide all links in the array
  const linksHtml = `<p> thi is a test: </p>`;
  const links = [{
      label: "Week1",
      url: "week1/index.html"
    },
    {
      label: "Week2",
      url: "week2/index.html"
    },
  ];

  links.map((link) => {
    linksHtml += `<li><a href=${link.url}>${link.label}</a></li>`;
  });

  document.getElementById("contentList").innerHTML = linksHtml;
  console.log("pass cr");

}