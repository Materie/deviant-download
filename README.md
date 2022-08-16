# Deviant Download

## Why?
DeviantArt does not always provide a download button on a given image, which makes downloading that image slightly more tedious, as you must manually open the image and name the file yourself, which might not always be what you want. For instance, if you download an image in a series, the name typically contains a number which means the list will naturally sort correctly, while naming the file yourself usually ends up messing up the order.

To fix this, this tool creates a download link which becomes visible when you hover over an image, then gives it a filename using this system, which is identical to the system deviantart uses: ```[title]_by_[userName]-[random_code]```.

Enjoy!

## How to use:
Use a script injection tool or similar. [User JavaScript and CSS by tenRabbits](
https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) is what I personally use. If you know of any issues with that plugin, please let me know.

- Open an image page on DeviantArt.
- Open your script injection plugin
- Paste downloadButton.js into the Javascript tab
- Paste downloadButton.css into the CSS tab
- Hover the main image, and the download button should become visible.
- Click the button to open the download dialog, where the filename should be prefilled correctly.
