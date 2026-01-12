hljs.highlightAll();

// Load header image from thumbnails folder
async function loadHeaderImage() {
    const headerImage = document.getElementById('header-image');
    if (!headerImage) return; // Skip if no header image element

    // Extract project ID from the current URL path
    const pathParts = window.location.pathname.split('/');
    const projectId = pathParts[pathParts.length - 2]; // Gets folder name

    const extensions = ["png", "jpg"];

    for (const ext of extensions) {
        const url = `../../assets/images/thumbnails/${projectId}.${ext}`;
        try {
            const response = await fetch(url, { method: "HEAD" });
            if (response.ok) {
                headerImage.src = url;
                return;
            }
        } catch (e) {
            // File doesn't exist, try next extension
        }
    }

    console.warn(`No thumbnail found for project: ${projectId}`);
  headerImage.src = `../../assets/images/MissingImage.png`
}

// Load header image when page loads
document.addEventListener('DOMContentLoaded', loadHeaderImage);