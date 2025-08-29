document.addEventListener('DOMContentLoaded', function() {
    // Suavizar rolagem para links âncora
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Aplicar CSS personalizado na área de prática
    const cssEditor = document.getElementById('css-editor');
    const applyCssBtn = document.getElementById('apply-css');
    const resetCssBtn = document.getElementById('reset-css');
    const practiceBox = document.querySelector('.practice-box');
    // Criar um <style> dedicado para aplicar CSS do editor com segurança
    const dynamicStyle = document.createElement('style');
    dynamicStyle.setAttribute('data-origin', 'practice-style');
    document.head.appendChild(dynamicStyle);
    
    applyCssBtn.addEventListener('click', function() {
        try {
            const css = cssEditor.value || '';
            // Garante que a regra aponte para .practice-box
            // Se o usuário colar regras sem seletor, embrulhamos
            const trimmed = css.trim();
            const hasSelector = trimmed.startsWith('.') || trimmed.startsWith('#') || trimmed.startsWith('@') || trimmed.includes('{');
            const rule = hasSelector ? css : `.practice-box {\n${css}\n}`;
            dynamicStyle.textContent = rule;
        } catch (error) {
            alert('Erro ao aplicar CSS: ' + error.message);
        }
    });
    
    resetCssBtn.addEventListener('click', function() {
        cssEditor.value = `.practice-box {
    width: 200px;
    height: 200px;
    background-color: #3498db;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
}`;
        dynamicStyle.textContent = cssEditor.value;
    });
    
    // Mostrar/ocultar soluções de desafios
    const challengeButtons = document.querySelectorAll('.challenge-btn');
    
    challengeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const solution = document.getElementById(targetId);
            
            if (solution.classList.contains('active')) {
                solution.classList.remove('active');
                this.textContent = 'Ver Solução';
            } else {
                solution.classList.add('active');
                this.textContent = 'Ocultar Solução';
            }
        });
    });
    
    // Destacar seções ao rolar
    const sections = document.querySelectorAll('article');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Adicionar classe ativa ao primeiro link de navegação
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});