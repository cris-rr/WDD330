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
    {
      label: "Week4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },
    {
      label: "Todo Challenge",
      url: "todo/index.html"
    },
    {
      label: "Week8 notes",
      url: "week8/index.html"
    },
    {
      label: "Week9 notes",
      url: "week9/index.html"
    },
  ];

  links.map((link) => {
    linksHtml += `<li><a href=${link.url}>${link.label}</a></li>`;
  });

  document.getElementById("contentList").innerHTML = linksHtml;
  console.log("pass cr");

}