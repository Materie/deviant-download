const runScript = () => {
    const artStage = document.querySelector('div[data-hook="art_stage"]')
    if (artStage) addDownloadButton()
}

const getFileType = url => {
        const result = url.match(/\.(\w{3,4})(?=$|\?)/)
        if (!result.length || !result[1]) throw Error(`Could not get filetype from string [${url}]`)
        return result[1]
    }

const addDownloadButton = () => {
    const image = document.querySelector('div[data-hook="art_stage"]').querySelector('img')
    image.parentElement.classList.toggle('downloadCSS')
    const downloadLink = document.createElement('a')
    const userName = document.querySelector('*[data-hook="deviation_meta"] a[data-username]').dataset.username.toLowerCase()
    const code = image.src.match(/\/f\/[\w-_]+\/([\w_]+)-/)?.[1] ?? ""
    const title = document.querySelector('h1[data-hook="deviation_title"').innerText.toLowerCase().replace(/\W/g, "_")
    const fileName = `${title}_by_${userName}-${code}`
    const filetype = getFileType(image.src)
    const xhr = new XMLHttpRequest()
    xhr.open('get', image.src)
    xhr.responseType = "blob"
    xhr.onload = (response) => {
        const imageFile = new Blob([xhr.response], { type: 'application/octet-stream'})
        downloadLink.textContent = "Download image"
        downloadLink.style.tr
        image.parentNode.appendChild(downloadLink)
        downloadLink.setAttribute('href', window.URL.createObjectURL(imageFile))
        downloadLink.setAttribute('download', `${fileName}.${filetype}`)
    }
    xhr.send()
}
document.addEventListener("DOMContentLoaded", runScript)
