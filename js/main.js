function loadContents() {
  // incluide all links in the array
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
    return `<li><a href=${link.url}>${link.label}</a></li>`;
  });


}