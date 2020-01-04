document.addEventListener("DOMContentLoaded", () => {
    //Installation du Service Worker au chargement du document
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(serviceWorker => {
        console.log('Service Worker registered: ' + serviceWorker);
})
.catch(error => {
        console.log('Error registering the Service Worker: ' + error);
});
}
});