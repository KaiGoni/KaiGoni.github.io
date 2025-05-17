// document.getElementById("project-list").style.width = window.innerWidth > 445 ? window.innerWidth - 185 : 260;
defaultImg = "https://i.imgur.com/q2fXDtg.png";
projects = {
    "Compound Machines": {img: "https://arielsweet.weebly.com/uploads/4/0/3/7/40378585/933135_orig.jpg", url: "compound-machine.html", description: "Learn to create compound machines from simple machines", topic: "Engineering"},
    "Physical Computing": {img: "", url: "", description: "", topic: "Engineering"},
}
filteredlessons = [];

function loadProjects() {
    for (let project in projects) {
        let block = document.createElement("div")
        let img = document.createElement("img")
        block.appendChild(img);
        img.width = 240;
        img.height = 180;
        img.src = projects[project].img ? projects[project].img : defaultImg;
        block.id = project;
        block.innerHTML = block.innerHTML + "<br><b>" + project + "</b><br>" + projects[project].description;
        block.className = "project";
        // block.style.display = "inline-block";
        // block.style.textAlign = "center";
        // block.style.fontSize = 14;
        // block.style.padding = 4;
        // block.style.border = "1px solid #ffffff";
        // block.style.borderRadius = "4px";
        // block.style.margin = 4;
        // block.style.cursor = "pointer";
        // block.style.transition = "all 0.2s ease-in-out";
        block.onmouseover = function() {
            this.style.backgroundColor = "#ffffff";
        }
        block.onmouseout = function() {
            this.style.backgroundColor = "#e1f3fd";
        }
        block.onclick = function() {
            window.location.href = projects[project].url;
        }
        document.getElementById("project-list").appendChild(block);
    }
}

function filter() {
    topic = [];
    if (document.getElementById("topic-engineering").checked)topic.push("Engineering");
    if (document.getElementById("topic-computer-science").checked)topic.push("Computer Science");

    if (topic.length == 0)topic = topics;

    // Display and filter projects
    for (let project in projects) {
        document.getElementById(project).style.display = "inline-block";
        if (!topic.includes(projects[project].topic)) {
            document.getElementById(project).style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);