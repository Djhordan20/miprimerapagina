document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('responseMessage').textContent = xhr.responseText;
                document.getElementById('contactForm').reset();
            } else {
                console.error('Error:', xhr.status);
            }
        }
    };

    xhr.open('POST', 'tu_archivo_de_procesamiento.php', true);
    xhr.send(formData);
});
