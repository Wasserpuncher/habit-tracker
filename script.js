document.getElementById("addHabit").addEventListener("click", function() {
    const habitInput = document.getElementById("habitInput");
    const habitList = document.getElementById("habitList");

    if (habitInput.value) {
        const li = document.createElement("li");
        li.textContent = habitInput.value;
        habitList.appendChild(li);
        habitInput.value = '';

        saveHabits();
    }
});

function saveHabits() {
    const habits = [];
    const habitList = document.getElementById("habitList");
    
    for (let li of habitList.children) {
        habits.push(li.textContent);
    }
    
    localStorage.setItem('habits', JSON.stringify(habits));
}

function loadHabits() {
    const habits = JSON.parse(localStorage.getItem('habits')) || [];
    const habitList = document.getElementById("habitList");

    habits.forEach(habit => {
        const li = document.createElement("li");
        li.textContent = habit;
        habitList.appendChild(li);
    });
}

loadHabits();
