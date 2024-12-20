function breakPage() {
    // Переход на вторую страницу
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("page2").classList.add("active");
    startMatrixEffect();
}

function startMatrixEffect() {
    const container = document.querySelector(".matrix-effect");
    createMatrixColumns(container);

    // Пересоздаем колонки при изменении размера окна
    window.addEventListener("resize", () => {
        container.innerHTML = ""; // Удаляем старые колонки
        createMatrixColumns(container);
    });
}

function createMatrixColumns(container) {
    const columns = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement("div");
        column.classList.add("matrix-row");
        column.style.left = `${i * 20}px`;
        column.innerHTML = generateRandomSymbols(rows);
        column.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(column);
    }
}

function generateRandomSymbols(count) {
    const symbols = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=<>?";
    let result = "";
    for (let i = 0; i < count; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length)) + "<br>";
    }
    return result;
}

function checkAnswer1() {
    const input = document.getElementById("answer1").value.toLowerCase();
    if (input === "your mind") {
        // Переход на третью страницу
        document.getElementById("page2").classList.remove("active");
        document.getElementById("page2").classList.add("hidden");
        document.getElementById("page3").classList.remove("hidden");
        document.getElementById("page3").classList.add("active");
    } else {
        alert("Wrong answer! Try again.");
    }
}

function checkAnswer2() {
    const input = document.getElementById("answer2").value.toLowerCase();
    if (input === "400?") {
        alert("You solved the final riddle!");
    } else {
        alert("Incorrect. The page will continue to behave unpredictably...");
        // Добавляем случайные движения страницы
        setInterval(() => {
            document.body.style.marginLeft = `${Math.random() * 10}px`;
            document.body.style.marginTop = `${Math.random() * 10}px`;
        }, 100);
    }
}

// Создание кастомного уведомления
function showCustomAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add("fade-out");
        setTimeout(() => alertBox.remove(), 1000);
    }, 3000);
}

// Проверка первого ответа
function checkAnswer1() {
    const input = document.getElementById("answer1").value.toLowerCase();
    if (input === "your mind") {
        document.getElementById("page2").classList.remove("active");
        document.getElementById("page2").classList.add("hidden");
        document.getElementById("page3").classList.remove("hidden");
        document.getElementById("page3").classList.add("active");
    } else {
        showCustomAlert("Wrong answer! Try again.");
    }
}

function checkAnswer2() {
    const input = document.getElementById("answer2").value.trim().toLowerCase();

    if (input === "be happy") {
        showCustomAlert("Correct! Proceeding to the next page...");
        document.getElementById("page3").classList.remove("active");
        document.getElementById("page3").classList.add("hidden");
        goToPage4(); // Переход на следующую страницу
    } else if (input === "423") {
        showCustomAlert("You think I'm that easy to fool? 423 is not the right answer, look harder.");
    } else {
        showCustomAlert("Incorrect. Try again!");
    }
}




function goToPage4() {
    // Переход на четвертую страницу
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById("page4").classList.remove("hidden");
    document.getElementById("page4").classList.add("active");
    startCountdown();
}

function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let time = 60; // Время в секундах

    window.countdownTimer = setInterval(() => {
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        countdownElement.textContent = `${minutes}:${seconds}`;

        if (time <= 0) {
            clearInterval(window.countdownTimer);
            showNextPageButton();
        }

        time--;
    }, 1000);
}


function showNextPageButton() {
    const button = document.getElementById("next-page-button");
    button.classList.remove("hidden");
}

function goToPage5() {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById("page5").classList.remove("hidden");
    document.getElementById("page5").classList.add("active");

    // Убираем кнопку на 4-й странице
    const button = document.getElementById("next-page-button");
    if (button) button.classList.add("hidden");

    // Удаляем таймер
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) countdownElement.textContent = ""; // Очистка текста таймера
    clearInterval(window.countdownTimer); // Остановка таймера
}




function checkFinalAnswer() {
    const input = document.getElementById("finalAnswer").value.trim().toLowerCase();

    if (input === "?") {
        showCustomAlert("Correct! Proceeding to the next page...");

        // Удаляем содержимое страницы 5
        const page5 = document.getElementById("page5");
        while (page5.firstChild) {
            page5.removeChild(page5.firstChild);
        }

        // Переход на 6-ю страницу
        document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
        document.getElementById("page6").classList.remove("hidden");
        document.getElementById("page6").classList.add("active");
    } else {
        showCustomAlert("Incorrect. Try again!");
    }
}


function checkDateAndProceed() {
    const currentDate = new Date();
    const targetDate = new Date("2024-12-31T00:00:00");

    if (currentDate >= targetDate) {
        document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
        document.getElementById("page7").classList.remove("hidden");
        document.getElementById("page7").classList.add("active");
    } else {
        showCustomAlert("Возвращайтесь в указанную дату, вас ждет еще больше вопросов. Я надеюсь что все хотят получить заветный приз");
    }
}

function goToPage6() {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden")); // Скрываем все страницы
    document.getElementById("page6").classList.remove("hidden"); // Показываем 6-ю страницу
    document.getElementById("page6").classList.add("active");

    // Проверяем дату, чтобы сделать кнопку доступной в нужное время
    const currentDate = new Date();
    const targetDate = new Date("2024-12-31T00:00:00");
    if (currentDate >= targetDate) {
        document.getElementById("nextPageButton6").classList.remove("hidden");
    }
}
