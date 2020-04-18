const API = '../../_data.json';
const place = document.getElementById('data');
const getData = () => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      data.forEach((results, index) => {
        let { languages } = results;
        let x, y, lg, t;
        if (results.isNew === true) {
          x = `<a href='#'>New!</a>`;
        } else {
          x = '';
        }

        results.featured === true ? (y = `<a href='#'>FEATURED!</a>`) : (y = '');
        //results.tools.length !== 0 ? console.log(results.tools) : console.log('whoops');
        results.tools === undefined ? (lg = '') : results.tools.map((tool) => (lg = tool));
        console.log(lg);
        languages === undefined ? (t = '') : languages.map((lag) => (t = lag));
        console.log(`-- ${t}`);
        //lg.map((tool) => tool);
        //results.languages !== '' ? console.log("I'm language") : console.log('shoop');
        html += `<div class='card'>
                  <div class='card__first--section'>
                    <div class='card__image'>
                      <img src='${results.logo}' alt='${results.company}' class='photosnap'>
                    </div>
                    <div class='card__data'>
                      <div class='data-requirements'>
                        <a href='#'>${results.company}</a>
                        ${x}
                        ${y}
                      </div>
                      <p class='job-title'>${results.position}</p>
                      <div class='data-beneficent'>
                        <a href='#'>${results.postedAt}</a>
                        <a href='#'>${results.contract}</a>
                        <a href='#'>${results.location}</a>
                      </div>
                    </div>
                  </div>
                  <div class='card__second--section'>
                    <ul class='list-technologies'>
                      <li class='item'><a href='#' class='item-link'>${results.role}</a> </li>
                      <li class='item'><a href='#' class='item-link'>${results.level}</a> </li>
                      <li class='item'><a href='#' class='item-link'>${lg}</a> </li>
                      <li class='item'><a href='#' class='item-link'>${t}</a> </li>
                    </ul>
                  </div>
                 </div>
        `;
      });
      place.innerHTML = html;
    })
    .catch((err) => new Error(err));
};
getData();
