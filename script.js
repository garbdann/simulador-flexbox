const flexContainer = document.querySelector('.flex-container-main');

const directionSelect = document.querySelector('#select-direction');
const justifySelect = document.querySelector('#select-justify-content');
const alignSelect = document.querySelector('#select-align-items');

const sizeInput = document.querySelector('input[type="number"]');

const squares = document.querySelectorAll('.main-square');

const squareFormat = document.querySelector('#format-square');
const circleFormat = document.querySelector('#format-circle');

// Função para alterar a cor
function changeColor(id) {
    document.querySelectorAll('.box-color').forEach((colorDiv) => {
        colorDiv.style.border = 'none';
    });

    squares.forEach((square) => {
        let color = '';
        if (id === "box0") color = "violet";
        else if (id === "box1") color = "salmon";
        else if (id === "box2") color = "blue";
        else if (id === "box3") color = "white";
        else if (id === "box4") color = "orange";
        else if (id === "box5") color = "green";

        square.style.backgroundColor = color;
        squareFormat.style.backgroundColor = color;
        circleFormat.style.backgroundColor = color;
    });

    document.getElementById(id).style.border = "2px solid black";
}

// Função para alterar o formato
function changeFormat(id) {
    document.querySelectorAll('.formats-inline div').forEach((format) => {
        format.style.border = 'none';
    });

    squares.forEach((square) => {
        if (id === "format-circle") {
            square.style.borderRadius = "50%";
        } else if (id === "format-square") {
            square.style.borderRadius = "0%";
        }
    });

    document.getElementById(id).style.border = "2px solid black";
}

// Eventos para input e mudança nos selects 
sizeInput.addEventListener('input', () => {
    const size = sizeInput.value + 'px';
    squares.forEach((square) => {
        square.style.width = size;
        square.style.height = size;
    });
});

directionSelect.addEventListener('change', () => {
    flexContainer.style.flexDirection = directionSelect.value.toLowerCase();
});

justifySelect.addEventListener('change', () => {
    flexContainer.style.justifyContent = justifySelect.value.toLowerCase();
});

alignSelect.addEventListener('change', () => {
    flexContainer.style.alignItems = alignSelect.value.toLowerCase();
});

// Eventos para clique nas cores e formatos
document.querySelectorAll('.box-color').forEach((colorBox) => {
    colorBox.addEventListener('click', () => changeColor(colorBox.id));
});

document.querySelectorAll('.formats-inline div').forEach((formatBox) => {
    formatBox.addEventListener('click', () => changeFormat(formatBox.id));
});
