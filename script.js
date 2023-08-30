document.addEventListener("DOMContentLoaded", function() {
    //const imageUrl = "https://arweave.net/fQdZjoDxvChU1R4NJ4miTcLbLJQq5Lbf3WJLCU6evKI";
    const cloudfrontUrl = "//d23nwyc0vr15d5.cloudfront.net/";
    const imageUrl = "http://metadata.degods.com/g/4947.png?width=100&height=100"; // Replace with the actual image URL
    const modifiedImageUrl = new URL(imageUrl);
    const finalString = modifiedImageUrl.protocol + cloudfrontUrl 
        + modifiedImageUrl.hostname + modifiedImageUrl.pathname + encodeURIComponent(encodeURIComponent(modifiedImageUrl.search));
    console.log(finalString);

    const transformedLinkElement = document.getElementById("transformedLink");
    transformedLinkElement.textContent = finalString;

    const imgElement = document.getElementById("transformedImage");
    imgElement.src = finalString;
});
