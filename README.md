# New Meharwade Events – Full Code

This README contains all the source code for my website project.  
Below you will find every HTML, CSS, and JavaScript file included in the project.

---

## 📄 index.html
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MEHARWADE EVENTS</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="logo">Meharwade Events</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<section class="hero">
    <div class="light-particles"></div>

    <img src="ball.jpeg" class="floating" 
    style="width:220px; position:absolute; left:3%; top:18%; opacity:0.7;">

    <img src="main.jpeg" class="floating"
    style="width:300px; position:absolute; right:5%; bottom:18%; opacity:0.7;">

    <div class="hero-content">
        <h1 class="white">We Create Luxury Moments</h1>
        <p>Premium Wedding • Baby Shower • Haldi • Birthday • Engagement Decor</p>
        <a class="btn" href="contact.html">Book Now</a>
    </div>
</section>

</body>
</html>

---

## 📄 about.html
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About | MEHARWADE EVENTS</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="logo">Meharwade Events</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<section class="curved">
    <h1 class="gold" style="font-size:50px;">About Us</h1>

    <p style="
        margin-top:30px;
        font-size:18px;
        line-height:32px;
        color:#ccc;
        max-width:900px;">
        At <span class="gold">Meharwade Events</span>, we specialize in creating unforgettable,
        luxurious experiences for Weddings, Baby Showers, Haldi Functions, Birthdays,
        Engagements, Corporate Events, and more.
        <br><br>
        We bring creativity, elegance, and premium décor together to turn your
        celebration into a beautiful memory.
    </p>

    <img src="petals.jpg.jpeg" class="floating"
    style="width:160px; position:absolute; right:10%; top:20%; opacity:0.5;">

</section>

<footer>© 2025 Meharwade Events • All Rights Reserved</footer>

</body>
</html>

---

## 📄 gallery.html
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gallery | MEHARWADE EVENTS</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="logo">Meharwade Events</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<h1 class="gold" style="font-size:50px; margin-top:150px; text-align:center;">Our Work</h1>

<div class="gallery">
    <img src="img1.jpg.jpeg" class="floating">
    <img src="img2.jpg.jpeg">
    <img src="img3.jpg.jpeg" class="floating">
    <img src="img4.jpg.jpeg">
</div>

<footer>© 2025 Meharwade Events • All Rights Reserved</footer>

</body>
</html>

---

## 📄 contact.html
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact | MEHARWADE EVENTS</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="logo">Meharwade Events</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<div class="contact-box">
    <h1 class="gold" style="font-size:50px;">Book Us</h1>

    <!-- ⭐ FORM STARTS HERE -->
    <form onsubmit="sendWhatsAppMessage(); return false;">
        <input id="name" type="text" placeholder="Your Name" required>
        <input id="phone" type="text" placeholder="Phone Number" required>
        <textarea id="msg" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
    <!-- ⭐ FORM ENDS HERE -->
</div>

<footer>© 2025 Meharwade Events • All Rights Reserved</footer>

<!-- ⭐ PUT THIS SCRIPT AT THE END JUST BEFORE </body> -->
<script>
function sendWhatsAppMessage() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("msg").value;

    // ⭐ REPLACE WITH YOUR OWN WHATSAPP NUMBER
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
</script>
<script src="script.js"></script>
</body>
</html>


</body>
</html>

---

## 📄 services.html
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Services | MEHARWADE EVENTS</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="logo">Meharwade Events</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<section class="curved">
    <h1 class="gold" style="font-size:50px;">Our Premium Services</h1>

    <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
        gap:25px;
        margin-top:50px;
    ">

        <div style="padding:25px; background:#0f0f0f; border:1px solid gold; border-radius:12px; box-shadow:0 0 15px rgba(255, 215, 0, 0.4);">
            <h2 class="gold">Wedding Decoration</h2>
            <p style="margin-top:10px; color:#ccc;">Royal stage, flowers, lighting & full luxury setup.</p>
        </div>

        <div style="padding:25px; background:#0f0f0f; border:1px solid gold; border-radius:12px; box-shadow:0 0 15px rgba(255, 215, 0, 0.4);">
            <h2 class="gold">Baby Shower Themes</h2>
            <p style="margin-top:10px; color:#ccc;">Premium themes, balloons, backdrop & props.</p>
        </div>

        <div style="padding:25px; background:#0f0f0f; border:1px solid gold; border-radius:12px; box-shadow:0 0 15px rgba(255, 215, 0, 0.4);">
            <h2 class="gold">Birthday Decoration</h2>
            <p style="margin-top:10px; color:#ccc;">Stage decor, balloons, LED names & theme sets.</p>
        </div>

        <div style="padding:25px; background:#0f0f0f; border:1px solid gold; border-radius:12px; box-shadow:0 0 15px rgba(255, 215, 0, 0.4);">
            <h2 class="gold">Haldi & Mehndi</h2>
            <p style="margin-top:10px; color:#ccc;">Traditional yellow theme, floral swings & decor.</p>
        </div>
    </div>

</section>

<footer>© 2025 Meharwade Events • All Rights Reserved</footer>

</body>
</html>

---

## 🎨 style.css
css
/* ------------------------------------------------------
   GLOBAL STYLING — GOLD + BLACK LUXURY THEME
------------------------------------------------------ */

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #000;
    color: #fff;
    overflow-x: hidden;
}

/* ------------------ GOLD GRADIENT ------------------- */

.gold {
    background: linear-gradient(90deg, #d4af37, #f7d472, #d4af37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* ------------------ HEADER -------------------------- */

header {
    width: 100%;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,215,0,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Great Vibes', cursive;
    font-size: 34px;
    color: gold;
    letter-spacing: 2px;
}

nav a {
    margin-left: 25px;
    color: #fff;
    font-size: 17px;
    transition: 0.3s;
}

nav a:hover {
    color: gold;
    text-shadow: 0 0 10px gold;
}

/* ------------------ HERO SECTION -------------------- */

.hero {
    height: 100vh;
    background: url('https://pngtree.com/free-backgrounds-photos/black') center/cover fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.7);
}

/* GOLD LIGHT PARTICLES */
@keyframes particles {
    0% { opacity: 0.3; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-20px); }
    100% { opacity: 0.3; transform: translateY(0); }
}

.light-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://pngtree.com/free-backgrounds-photos/black') repeat;
    animation: particles 8s infinite;
    opacity: 0.4;
}

/* HERO TEXT */
.hero-content {
    position: relative;
    text-align: center;
    max-width: 800px;
}

.hero h1 {
    font-size: 60px;
    font-family: 'Great Vibes', cursive;
    color: gold;
}

.hero p {
    font-size: 20px;
    margin-top: 15px;
    color: #f1f1f1;
}

.btn {
    display: inline-block;
    margin-top: 25px;
    padding: 14px 30px;
    border-radius: 30px;
    background: linear-gradient(90deg, #cba135, #f7d472);
    color: #000;
    font-weight: bold;
    box-shadow: 0 0 12px gold;
    transition: 0.3s;
}

.btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 18px gold;
}

/* ------------------ FLOATING ITEMS ------------------- */

@keyframes float {
    0% { transform: translateY(0px); opacity: 0.8; }
    50% { transform: translateY(-20px); opacity: 1; }
    100% { transform: translateY(0px); opacity: 0.8; }
}

.floating {
    animation: float 6s infinite ease-in-out;
}

/* ------------------ CURVED SECTIONS ------------------ */

.curved {
    padding: 150px 60px;
    background: #111;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    border-top: 1px solid rgba(255,215,0,0.3);
}

/* ------------------ GALLERY -------------------------- */

.gallery {
    margin: 150px auto;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 25px;
}

.gallery img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid gold;
    box-shadow: 0 0 15px rgba(255,215,0,0.4);
    transition: 0.3s;
}

.gallery img:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px gold;
}

/* ------------------ CONTACT FORM -------------------- */

.contact-box {
    margin: 150px auto;
    width: 70%;
}

input, textarea {
    width: 100%;
    padding: 14px;
    margin: 12px 0;
    background: #111;
    border: 1px solid gold;
    border-radius: 8px;
    color: #fff;
}

button {
    padding: 14px 25px;
    background: gold;
    border-radius: 8px;
    border: none;
    color: black;
    font-size: 17px;
    cursor: pointer;
    box-shadow: 0 0 15px gold;
}

button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px gold;
}

/* ------------------ FOOTER -------------------------- */

footer {
    text-align: center;
    padding: 30px;
    font-size: 14px;
    color: gold;
}

---

## 🧠 script.js
javascript
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

---

## 🖼 Images used in this project

- ball.jpeg  
- ballon.jpeg  
- img1.jpg.jpeg  
- img2.jpg.jpeg  
- img3.jpg.jpeg  
- img4.jpg.jpeg  
- main.jpeg  
- petals.jpeg  
- petals.jpg.jpeg  
---

## 📝 Project Info
This project is created for FSD assignment.
