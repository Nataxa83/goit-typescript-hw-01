// Створіть змінну, яка може містити або рядок, або число (union type)? 
// Також, оголосіть змінну, яка може містити лише одне з двох можливих 
// кових значень: 'enable' або 'disable' (literal type).

let bland : string | number;

bland = "hello";
bland = 100;

let status: "enable" | "disable";

status = "enable"; // допустиме
status = "disable"; // допустиме
// status = 'active';  // помилка: значення не входить в літеральний тип