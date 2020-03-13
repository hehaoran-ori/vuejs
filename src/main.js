console.log(document.querySelector('#top'));
document.querySelector('#camera');

const todos = [
    {
        id: 1,
        text: 'meeting with boss',
        isComplete: true
    },
    {
        id: 2,
        text: 'reading with boss',
        isComplete: false
    },
    {
        id: 3,
        text: 'talking with son',
        isComplete: true
    }
];

todos.forEach((e) => {
    console.log(e.text);
});

todos
    .filter((todo) => {
        return todo.isComplete === true;
    })
    .map((todo) => {
        console.log(todo.id + 1);
    });

for (let i = 0; i < 10; i++) {
    console.log(i);
}
