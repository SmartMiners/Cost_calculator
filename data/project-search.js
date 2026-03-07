let projects = [];

fetch("data/tn_projects.json")
.then(res => res.json())
.then(data => {
    projects = data;
    displayProjects(projects);
});

const searchInput = document.getElementById("projectSearch");

searchInput.addEventListener("input", function(){

    const value = searchInput.value.toLowerCase();

    const filtered = projects.filter(p =>
        p.project && p.project.toLowerCase().includes(value)
    );

    displayProjects(filtered);

});

function displayProjects(list){

    const container = document.getElementById("results");
    
    container.innerHTML = "";
    
    if(list.length === 0){
    
    container.innerHTML = "<p>No projects found</p>";
    
    return;
    
    }
    
    list.forEach(p => {
    
    const div = document.createElement("div");
    
    div.className = "card shadow p-3 mb-3";
    
    div.innerHTML = `
    <h5>${p.project || "Project"}</h5>
    <p><b>District:</b> ${p.district || "-"}</p>
    <p><b>Village:</b> ${p.village || "-"}</p>
    <p><b>Owner:</b> ${p.owner || "-"}</p>
    `;
    
    container.appendChild(div);
    
    });
    
    }