document.addEventListener('DOMContentLoaded', () => {
    const classNames = ['first', 'second', 'third'];
    classNames.forEach(className => {
        const targets = document.querySelectorAll(`.cluster-about.${className}`);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); // 一度だけで良い場合
                }
            });
        }, { threshold: 0.2 });
        targets.forEach(target => observer.observe(target));
    });
});