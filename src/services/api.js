// ... imports ...
// Stockage local des todos
let todos = [
    {
        intitule: "Faire les courses",
        etat: "A faire",
        dateech: "2024-11-20"
    },
    {
        intitule: "Appeler le médecin",
        etat: "Terminé",
        dateech: "2024-11-30"
    },
    {
        intitule: "Réviser pour l'examen",
        etat: "En cours",
        dateech: "2024-12-05"
    },
    {
        intitule: "Payer les factures",
        etat: "A faire",
        dateech: "2024-12-10"
    },
    {
        intitule: "Rendez-vous dentiste",
        etat: "A faire",
        dateech: "2024-12-15"
    },
    {
        intitule: "Nettoyer l'appartement",
        etat: "Terminé",
        dateech: "2024-11-25"
    },
    {
        intitule: "Préparer présentation",
        etat: "En cours",
        dateech: "2024-12-01"
    },
    {
        intitule: "Acheter cadeau anniversaire",
        etat: "A faire",
        dateech: "2024-12-20"
    }
];
// Interface LocalTodo reste inchangée
// ...
export const todoService = {
    async getTodos() {
        return Promise.resolve([...todos]);
    },
    async createTodo(todo) {
        todos.push(todo);
        return Promise.resolve(todo);
    },
    async updateTodo(id, todo) {
        todos[id] = todo;
        return Promise.resolve(todo);
    },
    async deleteTodo(id) {
        todos = todos.filter((_, index) => index !== id);
        return Promise.resolve(true);
    },
};
