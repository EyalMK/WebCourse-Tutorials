const grid = () => {
    const grid = document.createElement("div");
    grid.classList.add(...processClassList("grid grid-cols-5 gap-2"));
    return grid;
}

const processClassList = (classList) => {
    return classList.split(" ").filter(cls => cls.trim() !== "");
}

export {
    grid,
    processClassList
}