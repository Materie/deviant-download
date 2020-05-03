const runScript = () => {
    const artStage = document.querySelector('div[data-hook="art_stage"]')
    if (artStage) addDownloadButton()
}
const addDownloadButton = () => {
    const image = document.querySelector('div[data-hook="art_stage"]').querySelector('img')
    image.parentElement.classList.toggle('downloadCSS')
    const downloadLink = document.createElement('a')
    const currentPath = window.location.pathname.slice(1) //remove initial forwardslash
    const pathParts = currentPath.split('/')
    const userName = pathParts[0]
    const artName = pathParts[2]
    const fileName = artName.replace(' ', '_') + "_by_" + userName
    const xhr = new XMLHttpRequest()
    xhr.open('get', image.src)
    xhr.responseType = "blob"
    xhr.onload = (response) => {
        const imageFile = new Blob([xhr.response], { type: 'application/octet-stream'})
        downloadLink.textContent = "Download image"
        downloadLink.style.tr
        image.parentNode.appendChild(downloadLink)
        downloadLink.setAttribute('href', window.URL.createObjectURL(imageFile))
        downloadLink.setAttribute('download', fileName + '.png')
    }
    xhr.send()
}
document.addEventListener("DOMContentLoaded", runScript)