document.addEventListener("DOMContentLoaded", function() {
    //const imageUrl = "https://arweave.net/fQdZjoDxvChU1R4NJ4miTcLbLJQq5Lbf3WJLCU6evKI";
    const imageUrl = "https://metadata.degods.com/g/3676-dead.png"; // Replace with the actual image URL
    const transformedImageUrl = applyTransformations(imageUrl);

    const transformedLinkElement = document.getElementById("transformedLink");
    transformedLinkElement.textContent = transformedImageUrl;

    const imgElement = document.getElementById("transformedImage");
    imgElement.src = transformedImageUrl;
});

function applyTransformations(url) {
    const cloudfrontUrl = "//d23nwyc0vr15d5.cloudfront.net/";
    const modifiedImageUrl = new URL(url);
    const modifiedPath = encodeURI(modifiedImageUrl.hostname + modifiedImageUrl.pathname);
    //const modifiedPath = modifiedImageUrl.pathname.replace(/\//g, "_");
    const transformedUrl = modifiedImageUrl.protocol + cloudfrontUrl + modifiedPath;
    console.log(transformedUrl);
    return transformedUrl;
}
