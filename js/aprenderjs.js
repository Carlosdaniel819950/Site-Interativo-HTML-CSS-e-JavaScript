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
    
    // ===== PRÁTICA: VARIÁVEIS =====
    document.getElementById('var-practice').addEventListener('click', function() {
        const output = document.getElementById('var-output');
        output.innerHTML = '';
        
        // Demonstração de variáveis
        var varExemplo = "Variável var (escopo de função)";
        let letExemplo = "Variável let (escopo de bloco)";
        const constExemplo = "Variável const (valor constante)";
        
        // Tentar modificar const (gerará erro)
        try {
            // constExemplo = "Tentativa de modificar const"; // Isto causaria erro
        } catch (error) {
            console.error(error);
        }
        
        // Exibir resultados
        output.innerHTML = `
            <p><strong>var:</strong> ${varExemplo}</p>
            <p><strong>let:</strong> ${letExemplo}</p>
            <p><strong>const:</strong> ${constExemplo}</p>
            <p><em>Nota: Tentar modificar uma const resulta em erro.</em></p>
        `;
    });
    
    // ===== PRÁTICA: OPERADORES =====
    document.getElementById('operator-practice').addEventListener('click', function() {
        const output = document.getElementById('operator-output');
        output.innerHTML = '';
        
        // Operadores aritméticos
        let a = 10, b = 3;
        let soma = a + b;
        let subtracao = a - b;
        let multiplicacao = a * b;
        let divisao = a / b;
        let resto = a % b;
        
        // Operadores de comparação
        let igual = a == "10"; // true (com conversão de tipo)
        let estritamenteIgual = a === "10"; // false (sem conversão)
        
        // Operadores lógicos
        let eLogico = (a > 5) && (b < 5); // true
        let ouLogico = (a < 5) || (b > 5); // false
        let naoLogico = !(a > 5); // false
        
        output.innerHTML = `
            <h5>Operadores Aritméticos:</h5>
            <p>10 + 3 = ${soma}</p>
            <p>10 - 3 = ${subtracao}</p>
            <p>10 * 3 = ${multiplicacao}</p>
            <p>10 / 3 = ${divisao.toFixed(2)}</p>
            <p>10 % 3 = ${resto}</p>
            
            <h5>Operadores de Comparação:</h5>
            <p>10 == "10": ${igual} (com conversão de tipo)</p>
            <p>10 === "10": ${estritamenteIgual} (sem conversão de tipo)</p>
            
            <h5>Operadores Lógicos:</h5>
            <p>(10 > 5) && (3 < 5): ${eLogico}</p>
            <p>(10 < 5) || (3 > 5): ${ouLogico}</p>
            <p>!(10 > 5): ${naoLogico}</p>
        `;
    });
    
    // ===== PRÁTICA: ESTRUTURAS DE CONTROLE =====
    document.getElementById('control-practice').addEventListener('click', function() {
        const output = document.getElementById('control-output');
        output.innerHTML = '';
        
        // If-else
        let hora = new Date().getHours();
        let saudacao;
        
        if (hora < 12) {
            saudacao = "Bom dia!";
        } else if (hora < 18) {
            saudacao = "Boa tarde!";
        } else {
            saudacao = "Boa noite!";
        }
        
        // Switch
        let dia = new Date().getDay();
        let nomeDia;
        
        switch (dia) {
            case 0: nomeDia = "Domingo"; break;
            case 1: nomeDia = "Segunda-feira"; break;
            case 2: nomeDia = "Terça-feira"; break;
            case 3: nomeDia = "Quarta-feira"; break;
            case 4: nomeDia = "Quinta-feira"; break;
            case 5: nomeDia = "Sexta-feira"; break;
            case 6: nomeDia = "Sábado"; break;
            default: nomeDia = "Dia desconhecido";
        }
        
        // Loop for
        let numerosPares = "";
        for (let i = 2; i <= 10; i += 2) {
            numerosPares += i + " ";
        }
        
        // Loop while
        let contador = 5;
        let contagemRegressiva = "";
        while (contador > 0) {
            contagemRegressiva += contador + " ";
            contador--;
        }
        
        output.innerHTML = `
            <h5>Condicional if-else:</h5>
            <p>${saudacao} (agora são ${hora} horas)</p>
            
            <h5>Condicional switch:</h5>
            <p>Hoje é ${nomeDia}</p>
            
            <h5>Loop for:</h5>
            <p>Números pares de 2 a 10: ${numerosPares}</p>
            
            <h5>Loop while:</h5>
            <p>Contagem regressiva: ${contagemRegressiva}</p>
        `;
    });
    
    // ===== PRÁTICA: MANIPULAÇÃO DO DOM =====
    const domText = document.getElementById('dom-text');
    const originalText = domText.textContent;
    const originalColor = domText.style.color;
    
    document.getElementById('change-text').addEventListener('click', function() {
        domText.textContent = "Texto modificado com JavaScript!";
        domText.style.fontWeight = 'bold';
    });
    
    document.getElementById('change-color').addEventListener('click', function() {
        domText.style.color = 'white';
        domText.style.backgroundColor = '#3498db';
        domText.style.padding = '10px';
        domText.style.borderRadius = '4px';
    });
    
    document.getElementById('reset-dom').addEventListener('click', function() {
        domText.textContent = originalText;
        domText.style = '';
    });
    
    // ===== PRÁTICA: FUNÇÕES =====
    document.getElementById('calculate-square').addEventListener('click', function() {
        const input = document.getElementById('function-input');
        const output = document.getElementById('function-output');
        
        if (input.value) {
            const num = parseFloat(input.value);
            const resultado = quadrado(num);
            output.innerHTML = `<p>O quadrado de ${num} é ${resultado}</p>`;
        } else {
            output.innerHTML = '<p>Por favor, digite um número.</p>';
        }
    });
    
    document.getElementById('calculate-cube').addEventListener('click', function() {
        const input = document.getElementById('function-input');
        const output = document.getElementById('function-output');
        
        if (input.value) {
            const num = parseFloat(input.value);
            const resultado = cubo(num);
            output.innerHTML = `<p>O cubo de ${num} é ${resultado}</p>`;
        } else {
            output.innerHTML = '<p>Por favor, digite um número.</p>';
        }
    });
    
    function quadrado(x) {
        return x * x;
    }
    
    const cubo = x => x * x * x;
    
    // ===== PRÁTICA: OBJETOS E ARRAYS =====
    document.getElementById('object-practice').addEventListener('click', function() {
        const output = document.getElementById('object-output');
        output.innerHTML = '';
        
        // Criar objeto
        let carro = {
            marca: "Toyota",
            modelo: "Corolla",
            ano: 2022,
            cor: "prata",
            ligado: false,
            ligar: function() {
                this.ligado = true;
                return "Carro ligado!";
            },
            desligar: function() {
                this.ligado = false;
                return "Carro desligado!";
            }
        };
        
        // Manipular objeto
        let info = `
            <p><strong>Marca:</strong> ${carro.marca}</p>
            <p><strong>Modelo:</strong> ${carro.modelo}</p>
            <p><strong>Ano:</strong> ${carro.ano}</p>
            <p><strong>Estado:</strong> ${carro.ligado ? "Ligado" : "Desligado"}</p>
        `;
        
        info += `<p>${carro.ligar()}</p>`;
        info += `<p><strong>Estado atual:</strong> ${carro.ligado ? "Ligado" : "Desligado"}</p>`;
        
        // Mostrar chaves e valores
        info += `<p><strong>Chaves:</strong> ${Object.keys(carro).join(", ")}</p>`;
        
        output.innerHTML = info;
    });
    
    document.getElementById('array-practice').addEventListener('click', function() {
        const output = document.getElementById('object-output');
        output.innerHTML = '';
        
        // Criar e manipular array
        let frutas = ["maçã", "banana", "laranja", "uva", "manga"];
        
        let info = `<p><strong>Array original:</strong> ${frutas.join(", ")}</p>`;
        
        // Adicionar elemento
        frutas.push("abacaxi");
        info += `<p><strong>Após push("abacaxi"):</strong> ${frutas.join(", ")}</p>`;
        
        // Remover último elemento
        frutas.pop();
        info += `<p><strong>Após pop():</strong> ${frutas.join(", ")}</p>`;
        
        // Filtrar array
        let frutasComM = frutas.filter(fruta => fruta.startsWith("m"));
        info += `<p><strong>Frutas que começam com "m":</strong> ${frutasComM.join(", ")}</p>`;
        
        // Mapear array
        let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
        info += `<p><strong>Frutas em maiúsculas:</strong> ${frutasMaiusculas.join(", ")}</p>`;
        
        output.innerHTML = info;
    });
    
    // ===== PRÁTICA: JAVASCRIPT ASSÍNCRONO =====
    document.getElementById('simulate-async').addEventListener('click', function() {
        const output = document.getElementById('async-output');
        output.innerHTML = '<p>Iniciando operação assíncrona...</p>';
        
        // Simular operação assíncrona com Promise
        function operacaoAssincrona() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simular sucesso 80% das vezes
                    if (Math.random() < 0.8) {
                        resolve("Dados carregados com sucesso!");
                    } else {
                        reject("Erro: Falha ao carregar dados.");
                    }
                }, 2000);
            });
        }
        
        // Usar async/await para lidar com a Promise
        async function executarOperacao() {
            try {
                const resultado = await operacaoAssincrona();
                output.innerHTML = `<p style="color: green;">${resultado}</p>`;
            } catch (erro) {
                output.innerHTML = `<p style="color: red;">${erro}</p>`;
            }
        }
        
        executarOperacao();
    });
    
    // ===== PROJETO: CALCULADORA =====
    const calcDisplay = document.getElementById('calc-display');
    let calcValue = '';

    // Avaliador seguro: permite apenas números, operadores básicos e ponto
    function safeEvaluate(expr) {
        const sanitized = expr.replace(/\s+/g, '');
        // Bloqueia caracteres não permitidos
        if (!/^[-+*/().\d]+$/.test(sanitized)) {
            throw new Error('Expressão inválida');
        }
        // Bloquear sequências perigosas como múltiplos operadores
        if (/[*+/\-]{2,}/.test(sanitized)) {
            throw new Error('Operadores inválidos');
        }
        // Previne números iniciando com múltiplos zeros
        if (/\d{2,}0\d/.test(sanitized)) {
            // não é crítico, mas mantemos simples
        }
        // Usa Function em escopo fechado, sem acesso a this/escopo global
        // eslint-disable-next-line no-new-func
        const fn = new Function('return (' + sanitized + ')');
        const result = fn();
        if (!isFinite(result)) throw new Error('Resultado inválido');
        return result;
    }
    
    document.querySelectorAll('.calc-btn').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
            
            if (value === '=') {
                try {
                    // Avaliar a expressão matemática com sanitização
                    calcValue = String(safeEvaluate(calcValue));
                    calcDisplay.value = calcValue;
                } catch (error) {
                    calcDisplay.value = 'Erro';
                    setTimeout(() => {
                        calcValue = '';
                        calcDisplay.value = '';
                    }, 1000);
                }
            } else if (value === 'clear') {
                calcValue = '';
                calcDisplay.value = '';
            } else {
                calcValue += value;
                calcDisplay.value = calcValue;
            }
        });
    });
    
    // ===== PROJETO: LISTA DE TAREFAS =====
    const todoInput = document.getElementById('todo-task');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    
    addTodoButton.addEventListener('click', function() {
        const taskText = todoInput.value.trim();
        
        if (taskText) {
            addTodoItem(taskText);
            todoInput.value = '';
            todoInput.focus();
        }
    });
    
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodoButton.click();
        }
    });
    
    function addTodoItem(text) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        
        span.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});