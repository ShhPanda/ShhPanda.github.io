document.addEventListener("DOMContentLoaded", function() {
    //const imageUrl = "https://arweave.net/fQdZjoDxvChU1R4NJ4miTcLbLJQq5Lbf3WJLCU6evKI";
    const cloudfrontUrl = "//d23nwyc0vr15d5.cloudfront.net/";
    const imageUrl = "https://metadata.degods.com/g/2510.png?width=540&height=675"; // Replace with the actual image URL
    const modifiedImageUrl = new URL(imageUrl);
    const finalString = modifiedImageUrl.protocol + cloudfrontUrl 
        + modifiedImageUrl.hostname + modifiedImageUrl.pathname;
    console.log(finalString);

    const transformedLinkElement = document.getElementById("transformedLink");
    transformedLinkElement.textContent = finalString;

    const imgElement = document.getElementById("transformedImage");
    imgElement.src = finalString;
});
