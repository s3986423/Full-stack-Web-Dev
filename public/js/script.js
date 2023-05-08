//This code give the vendor a preview of the submitted picture in the SignUpVendor page:
const image_input = document.querySelector("#vendor_image_input");
var uploaded_image = "";

image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        document.querySelector("#vendor_display_image").style.backgroundImage = `url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
})