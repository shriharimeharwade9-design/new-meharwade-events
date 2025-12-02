function sendWhatsAppMessage() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("msg").value;

    let whatsappNumber = "918217363713";

    let url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        "*New Booking Enquiry*%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Message: " + msg;

    window.open(url, "_blank");
}
