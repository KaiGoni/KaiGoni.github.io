/**
 * Create an element with a tag name, attributes, and children
 * @param tag - The tag name of the element
 * @param attributes - The attributes of the element, or the text content of the element, or the children of the element
 * @param children - The text content of the element, or the children of the element
 * @returns The created element
 * @example
 * const el = $$("div#test", { style: "display: inline" }, "Hello world");
 * // <div id="test" style="display: inline">Hello world</div>
 */
export function $$(tag, attributes, ...children) {
    const parts = tag.split(/(?=[.#])/g);
    if (!parts.length) throw new Error("Invalid tag")
    const el = document.createElement(parts.shift());
    if (parts.length) {
        const id = parts.find((p) => p.startsWith("#"))?.slice(1);
        if (id) el.id = id;
        const classes = parts.filter((p) => p.startsWith(".")).map((p) => p.slice(1));
        if (classes.length) el.classList.add(...classes);
    }

    if (typeof attributes === "string") {
        el.textContent = attributes;
    } else if (attributes instanceof HTMLElement) {
        el.appendChild(attributes);
    } else if (Array.isArray(attributes)) {
        attributes.forEach((child) => {
            if (typeof child === "string") {
                el.appendChild(document.createTextNode(child));
            } else {
                el.appendChild(child);
            }
        })
    } else if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === "listeners") {
                Object.entries(value).forEach(([event, listener]) => {
                    el.addEventListener(event, listener);
                })
            } else el.setAttribute(key, (value === undefined ? "" : value));
        })
    }

    if (children) {
        if (typeof children === "string") {
            el.textContent = children;
        } else if (Array.isArray(children)) {
            children.forEach((child) => {
                if (typeof child === "string") {
                    el.appendChild(document.createTextNode(child));
                } else {
                    el.appendChild(child);
                }
            })
        } else {
            el.appendChild(children);
        }
    }

    return el;
}