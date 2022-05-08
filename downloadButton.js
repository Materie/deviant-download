const runScript = () => {
    const artStage = document.querySelector('div[data-hook="art_stage"]')
    if (artStage) addDownloadButton()
}
const addDownloadButton = () => {
    const image = document.querySelector('div[data-hook="art_stage"]').querySelector('img')
    image.parentElement.classList.toggle('downloadCSS')
    const downloadLink = document.createElement('a')
    const userName = document.querySelector("a[data-username]").dataset.username.toLowerCase()
    const code = image.src.match(/\/f\/[\w-_]+\/([\w_]+)-/)?.[1] ?? ""
    const title = document.querySelector('h1[data-hook="deviation_title"').innerText.toLowerCase().replace(/\W/g, "_")
    const fileName = `${title}_by_${userName}-${code}`
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
