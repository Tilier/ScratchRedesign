json();
window.addEventListener('load', json);

function json() {
$.getJSON("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/proxy/featured/", function(udata) {
    var data = udata.curator_top_projects;
    console.log(data);
    var itemone = data[1];
    var curator = itemone.curator_name;
    document.querySelector('#curator').innerHTML = curator;
    for (i = 0; i < 5; i++) {
        var curates = document.querySelector('.cgrid');
        var entry = data[i];
        var element = `
        <div class="item curated">
            <img src="https://uploads.scratch.mit.edu/projects/thumbnails/` + entry.id +  `.png" class="projectc">
            <h3>` + entry.title +  `</h3>
            <h6>` + entry.creator +  `</h6>
        </div>
    `;
        $(curates).append(element);
        console.log('hi');
    };
});
};
