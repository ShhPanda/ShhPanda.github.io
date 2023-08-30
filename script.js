document.addEventListener("DOMContentLoaded", function() {
    //const imageUrl = "https://arweave.net/fQdZjoDxvChU1R4NJ4miTcLbLJQq5Lbf3WJLCU6evKI";
    const cloudfrontUrl = "//d23nwyc0vr15d5.cloudfront.net/images/";
    const imageUrl = "https://metadata.degods.com/g/4947.png"; // Replace with the actual image URL
    const modifiedImageUrl = new URL(imageUrl);
    const finalString = modifiedImageUrl.protocol + cloudfrontUrl 
        + modifiedImageUrl.hostname + modifiedImageUrl.pathname;
    console.log(finalString);

    const transformedLinkElement = document.getElementById("transformedLink");
    transformedLinkElement.textContent = finalString;

    const imgElement = document.getElementById("transformedImage");
    imgElement.src = finalString;
});
