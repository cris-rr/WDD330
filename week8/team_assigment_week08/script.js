console.log("aqui estoy");
const first_url = "https://swapi.dev/api/people";
const button_next = document.querySelector(".button_next");
const button_prev = document.querySelector(".button_prev");
const list_container = document.querySelector(".people_list_container");
const buttons_container = document.querySelector(".button_container");
let active_html_element;

let next_url = "";
let prev_url = "";


requestData(first_url);

button_next.addEventListener("click", () => {
    console.log("next");

    if (next_url !== null && next_url !== undefined && next_url !== "") {
        console.log("url 1");
        requestData(next_url);
        console.log(next_url);
    }
    
});

button_prev.addEventListener("click", () => {
    console.log("prev");
    if (next_url !== null && next_url !== undefined && next_url !== "") {
        requestData(prev_url);
    }

    
});




//requestData(res_to_json.next);


function renderList(item, the_list_container) {

    the_list_container.innerHTML = "";   
    let counter = 0; 
    
    item.results.forEach(element => {
        let li_item = renderItem(element);
        li_item.id = counter;
        the_list_container.appendChild(li_item);
        counter++;
    });

    renderPageButtons(item.count,buttons_container);
}


function renderItem(element) {
    let parent_element = document.createElement("li");

    html_content = `
            
        <div class="p_name"><strong class="p_label">Name: </strong>${element.name}</div>
        <div class="p_height"><strong class="p_label">Height: </strong>${element.height}</div>
        <div class="p_eye_color"><strong class="p_label">Eye Color: </strong>${element.eye_color}</div>
        <div class="p_hair_color"><strong class="p_label">Hair Color: </strong>${element.hair_color}</div>
        <div class="p_skin_color"><strong class="p_label">Skin Color: </strong>${element.skin_color}</div>
        <div class="p_birth_year extra_info"><strong class="p_label">Birth Year: </strong>${element.birth_year}</div>
        <div class="p_created extra_info"><strong class="p_label">Created: </strong>${element.created}</div>
        <div class="p_mass extra_info"><strong class="p_label">Mass: </strong>${element.mass}</div>
        <div class="p_edited extra_info"><strong class="p_label">Edited: </strong>${element.edited}</div>

    `
    parent_element.innerHTML = html_content;
    parent_element.addEventListener("click", () => {
        renderItemFull(element, parent_element);
        active_html_element = parent_element;
    });
    return parent_element;
}


function renderItemFull(one_element, parent) {
    if(active_html_element!==undefined) {
        active_html_element.classList.toggle("active");    
    }
    
    parent.classList.toggle("active");
    active_html_element = parent;
}


function requestData(the_url) {
    console.log("soy request data");
    
    fetch(the_url)
    .then(res => res.json())
    .then( res_to_json => {
        console.log(res_to_json);
        renderList(res_to_json, list_container);
        
        next_url = res_to_json.next;
    
        prev_url = res_to_json.previous;
        

    });
}

function renderPageButtons(the_count, container) {
    container.innerHTML = "";
    console.log(the_count);
    let i = Math.ceil(the_count/10);

    
    
    for(let x = 0; x<i; x++) {
        console.log(x);
        let the_html_content = `<button class="page_button" onclick="loadPage(${x+1})">${x+1}</button>`
        container.innerHTML+=the_html_content;

    }
}

function loadPage(the_count) {
    requestData(`${first_url}?page=${the_count}`);

}