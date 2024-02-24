




  async function Api() {
    const imageTag = document.querySelector('#ImageId');
    const input_text = document.querySelector('#input_text').value;
    const h1text = document.querySelector('.yoyo');
    console.log(input_text);
    const calling_Api = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input_text}`);

    if (calling_Api.ok && input_text.length>0) {
        const responseData = await calling_Api.blob();
        const imageUrl = URL.createObjectURL(responseData);
        imageTag.src = imageUrl;
    } else {
        console.error('Failed to fetch QR code image');
        h1text.classList.add('textt');
    }
}

