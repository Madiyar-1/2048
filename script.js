function uploadPhoto() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');
    const category = document.getElementById('category').value;

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'gallery-img';
            img.dataset.topic = category;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

