// 简单脚本：如果需要轮播图可在 slides 数组中添加图片路径
document.addEventListener('DOMContentLoaded', function () {
    const footerMarkup = `
        <div>版权所有 © 2025 宋立岩教授课题组 | 保留所有权利</div>
        <div>网站名称：科研成果介绍 | 备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">鲁ICP备2026025607号-1</a> | 域名：msw-song.com | 首页：<a href="https://www.msw-song.com" target="_blank" rel="noopener noreferrer">www.msw-song.com</a></div>
    `;

    document.querySelectorAll('.copyright').forEach((element) => {
        element.innerHTML = footerMarkup;
    });

    const hero = document.querySelector('.hero');
    if (hero) {
        const slides = ['images/hero1.png'];
        let index = 0;
        // 如果有多张图则轮播
        if (slides.length > 1) {
            setInterval(() => {
                index = (index + 1) % slides.length;
                hero.style.backgroundImage = `url('${slides[index]}')`;
            }, 6000);
        }
    }

    const revealTargets = document.querySelectorAll(
        '.about-section .container, .contact-section .container, .about-page-section .container, .research-group, .research-card, .research-section .container, .contact-page-section .container, .news-title-item, .news-item, .direction-card, .team-mentor-panel, .team-member, .product-card, .equipment-card, .news-entry, .news-article, .paper-list li, .team-detail-section .team-detail-card, .team-detail-section .detail-paragraph, .team-detail-section .detail-chip'
    );

    revealTargets.forEach((element, index) => {
        element.classList.add('reveal-on-scroll');
        element.style.transitionDelay = `${Math.min((index % 8) * 60, 360)}ms`;
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -24px 0px'
            }
        );

        revealTargets.forEach((element) => observer.observe(element));
    } else {
        revealTargets.forEach((element) => element.classList.add('is-visible'));
    }
});