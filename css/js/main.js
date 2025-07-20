// Load gallery images
function loadGallery() {
    const gallery = document.querySelector('.gallery-grid');
    // This is a simplified example. In production, you'd fetch from a server
    const images = [
        'images/Bloom in Silence.jpg',
        'images/Bold.jpg',
        'images/Charcoal potrait.jpg',
        'images/Broken.jpg',
        'images/Momoa.jpg',
        'images/Beauty.jpg',
        'images/Color pencils portrait.jpg',
        // Add more image paths
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Art piece';
        gallery.appendChild(img);
    });
}

// Load vlogs
function loadVlogs() {
    const vlogGrid = document.querySelector('.vlog-grid');
    const vlogs = [
        'vlogs/vlog1.mp4',
        'vlogs/vlog2.mp4',
        // Add more video paths
    ];

    vlogs.forEach(src => {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        vlogGrid.appendChild(video);
    });
}

// Handle image uploads
function uploadImages() {
    const input = document.getElementById('imageUpload');
    const files = input.files;
    
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded art';
            document.querySelector('.gallery-grid').appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    loadVlogs();
});
