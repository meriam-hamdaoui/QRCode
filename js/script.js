function qrAPI(txt, size) {
  return `https://quickchart.io/chart?cht=qr&chs=${size}&chl=${txt}`;
}

function generateQRCode() {
  var qrMsg = document.getElementById("QRtxt").value;

  if (qrMsg === "") {
    alert("Please enter a message to generate a QR code.");
    return;
  }
  // code for select tag
  // var qrSize = document.getElementById("size").value;

  // code for radio button
  var qrSize = document.querySelector('input[name="size"]:checked').value;

  var qrCode = document.getElementById("qrCode");
  qrCode.src = qrAPI(qrMsg, qrSize);
  qrCode.style.display = "block";

  // var message = document.getElementById("showMsg");
  // message.innerHTML = showMe;
}
