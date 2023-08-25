document.addEventListener("DOMContentLoaded", function() {
    const imageUrl = "https://arweave.net/fQdZjoDxvChU1R4NJ4miTcLbLJQq5Lbf3WJLCU6evKI"; // Replace with the actual image URL
    const transformedImageUrl = applyTransformations(imageUrl);

    const imgElement = document.getElementById("transformedImage");
    imgElement.src = transformedImageUrl;
});

function applyTransformations(url) {
    // Add your transformation logic here
    // For example, you can add query parameters to the URL
    //const transformedUrl = url + "?width=300&height=200";
    const transformedUrl = url;
    return transformedUrl;
}
