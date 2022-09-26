export const CONTAINER_ID = 'layout-container';
window.addEventListener('DOMContentLoaded', () => {
    fin.me.showDeveloperTools();
    // Before .50 AI version this may throw...
    fin.Platform.Layout.init({containerId: CONTAINER_ID});
});
