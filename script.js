document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show-element');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.hidden-element').forEach((el) => observer.observe(el));
});

function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`${type} berhasil disalin!`);
    }).catch(err => {
        alert(`Gagal menyalin. Silakan copy manual: ${text}`);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast-notification show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}
