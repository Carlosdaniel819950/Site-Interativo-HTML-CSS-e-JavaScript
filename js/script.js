// Script base compartilhado entre páginas
// - Alternância de tema claro/escuro persistente
// - Ativação de link atual de navegação
// - Realce de navegação por seção (quando existir nav âncora)

document.addEventListener('DOMContentLoaded', function() {
    // Alternar tema
    const THEME_KEY = 'site-theme';
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const syncButtonState = () => {
            const isDark = document.body.classList.contains('dark');
            themeToggle.setAttribute('aria-pressed', String(isDark));
            themeToggle.textContent = isDark ? '☀️ Modo' : '🌙 Modo';
        };

        syncButtonState();
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
            syncButtonState();
        });
    }

    // Ativar link atual (pelas URLs entre páginas)
    const currentPath = location.pathname.split('/').pop();
    document.querySelectorAll('header .top-nav a, nav ul a').forEach(function(link) {
        const linkPath = link.getAttribute('href');
        if (linkPath && linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Suavizar rolagem para links âncora se existirem
    const anchorLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            history.pushState(null, '', targetId);
        });
    });

    // Botão voltar ao topo
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        const toggleBackToTop = () => {
            if (window.scrollY > 300) backToTop.classList.add('show');
            else backToTop.classList.remove('show');
        };
        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop);
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Menu hambúrguer
    const menuToggle = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', function() {
            const isOpen = primaryNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Respeitar usuários com preferência por movimento reduzido
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(function(el) {
            el.style.scrollBehavior = 'auto';
        });
    }

    // Botão copiar em blocos de código (.code-example)
    document.querySelectorAll('.code-example').forEach(function(block) {
        // Evitar duplicar
        if (block.querySelector('.copy-code')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-code';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Copiar código');
        btn.textContent = 'Copiar';
        block.appendChild(btn);

        btn.addEventListener('click', async function() {
            try {
                // Prioriza <code>, senão usa texto do bloco
                const codeEl = block.querySelector('code') || block;
                const text = codeEl.innerText || codeEl.textContent || '';
                await navigator.clipboard.writeText(text);
                const prev = btn.textContent;
                btn.textContent = 'Copiado!';
                btn.disabled = true;
                setTimeout(() => { btn.textContent = prev; btn.disabled = false; }, 1200);
            } catch (err) {
                alert('Não foi possível copiar.');
            }
        });
    });
});
