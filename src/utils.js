const row = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`;
    container.insertAdjacentHTML('beforeend', row);
}

const processClassList = (classList) => {
    return classList.split(" ").filter(cls => cls.trim() !== "");
}

export {
    row,
    processClassList
}