import {$$} from "./lib/elements.js";
import projects from "../projects.json" with {type: "json"};

const projectList = document.getElementById("project-list");
const filterTagList = document.getElementById("filter-topics");

const filters = {
    tags: [],
}
let filter = (project) => {
    if (filters.tags.length === 0) return true;
    return filters.tags.some(
        (tag) => project.tags.includes(tag)
    );
};

function update() {
    projectList.innerHTML = "";

    for (const project of projects.projects.filter(filter)) {
        const element = $$("div.project", {
                listeners: {
                    click: () => window.location.href = `${project.id}.html`
                }
            },
            $$("img", {src: project.thumbnail}),
            $$("h2", project.title),
            $$("p", project.description)
        );
        projectList.appendChild(element);
    }
}

function updateFilterList() {
    // <input type="checkbox" data-tag="engineering" id="topic-engineering"/><label for="topic-engineering">Engineering</label>
    filterTagList.innerHTML = "";
    for (const tag of projects.tags) {
        const checkbox = $$("input", {
            type: "checkbox",
            id: `topic-${tag.tag}`,
            "data-tag": tag.tag,
            listeners: {
                change: ({target}) => {
                    if (target.checked) {
                        filters.tags.push(target.dataset.tag);
                    } else {
                        filters.tags = filters.tags.filter((t) => t !== target.dataset.tag);
                    }
                    update();
                },
            }
        });
        const label = $$("label", {
            for: `topic-${tag.tag}`
        }, tag.name);
        filterTagList.appendChild($$("div.filter-tag-container", checkbox, label));
    }
}

update();
updateFilterList();