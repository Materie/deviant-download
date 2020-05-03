const artStage = document.querySelector('div[data-hook="art_stage"]')

const addDownloadButton = () => {
    const downloadCSS = `
        .downloadCSS {
            position: relative;
        }
        .downloadCSS a {
            position: absolute;
            right: 0;
            bottom: 0;
            border: 2px solid black;
            background-color: black;
            color: white;
            transition: opacity 1s;
            opacity: 0;
            padding: 10px 20px;
        }
        .downloadCSS:hover a {
            opacity: 1;
        }
    `

    let downloadStylesheet = document.createElement('style')
    downloadStylesheet.type = "text/css"
    downloadStylesheet.innerText = downloadCSS
    document.head.appendChild(downloadStylesheet)

    const image = document.querySelector('div[data-hook="art_stage"]').querySelector('img')
    //image.parentNode.style.position = "relative" //make sure we can absolutely position the button
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
        console.log("Fetched image", response)
        const imageFile = new Blob([xhr.response], { type: 'application/octet-stream'})
        console.log(imageFile)

        downloadLink.textContent = "Download image"
        downloadLink.style.tr
        image.parentNode.appendChild(downloadLink)
        downloadLink.setAttribute('href', window.URL.createObjectURL(imageFile))
        downloadLink.setAttribute('download', fileName + '.png')
    }
    xhr.send()
}

if (artStage) addDownloadButton()