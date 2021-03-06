export const resultStats = (notes) =>{

return notes.reduce((acc, note) => {
    const category = acc.find((value) => value.nameCategory === note.category);

    if (!category) {
        return [
            ...acc,
            {
                nameCategory: note.category,
                active: note.archived ? 0 : 1,
                archived: note.archived ? 1 : 0,
            },
        ];
    }

    note.archived ? category.archived++ : category.active++;
    return acc;
}, []);
}
