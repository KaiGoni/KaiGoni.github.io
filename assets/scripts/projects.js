import {$$} from "./lib/elements.js";
import projects from "./project-list.js";

console.log(projects);

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

async function getThumbnailUrl(projectId) {
  // Try PNG first, fall back to JPG
    const extensions = ["png", "jpg"];

    for (const ext of extensions) {
        const url = `../assets/images/thumbnails/${projectId}.${ext}`;
        try {
            const response = await fetch(url, { method: "HEAD" });
            if (response.ok) return url;
        } catch (e) {
            // File doesn't exist, try next extension
        }
    }

    // Fallback if neither exists
    console.warn(`No thumbnail found for project: ${projectId}`);
    return `../../assets/images/MissingImage.png`;
}

async function update() {
    projectList.innerHTML = "";

    for (const project of projects.projects.filter(filter)) {
        const thumbnailUrl = await getThumbnailUrl(project.id);
        const element = $$("div.project", {
                listeners: {
                    click: () => window.location.href = project.id
                }
            },
            $$("img", {src: thumbnailUrl}),
            $$("h2", project.title),
            $$("p", project.description)
        );
        projectList.appendChild(element);
    }
}

function updateFilterList() {
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