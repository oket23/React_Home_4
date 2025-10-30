import TaskItem from "../taskItem/TaskItem.tsx";
import {useState} from "react";

const TaskTracker = () => {
    const [tasks, setTasks] = useState([
        {id: 1, text: "Finish React project", time: "10:30 AM", completed: false},
        {id: 2, text: "Go for a run", time: "12:00 PM", completed: true},
    ]);

    const [filter, setFilter] = useState("all");
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks(prev => [
            ...prev,
            {
                id: Date.now(),
                text: newTask.trim(),
                time: new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}),
                completed: false,
            },
        ]);
        setNewTask("");
    };

    const toggleTask = (id: number | string) => {
        setTasks(prev =>
            prev.map(task => (task.id === id ? {...task, completed: !task.completed} : task))
        );
    };

    const deleteTask = (id: number | string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    const completedCount = tasks.filter(t => t.completed).length;

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">TODO
                    LIST</h1>

                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-6">
                    <div className="flex w-full sm:w-auto gap-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={e => setNewTask(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && addTask()}
                            placeholder="Enter new task..."
                            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                        <button onClick={addTask}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-xl shadow-md transition-all duration-300">Add
                        </button>
                    </div>

                    <select
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>

                <p className="text-gray-600 mb-4 text-sm text-center sm:text-right">Completed: {completedCount} / {tasks.length}</p>

                <div className="flex flex-col gap-3 sm:gap-4">
                    {filteredTasks.length > 0
                        ? (filteredTasks.map(task => (
                            <TaskItem key={task.id} id={task.id} text={task.text} time={task.time}
                                      completed={task.completed} onToggle={toggleTask} onDelete={deleteTask}/>)))
                        : (<p className="text-center text-gray-500 italic py-10">No tasks found.</p>
                        )}
                </div>
            </div>
        </div>
    );
};

export default TaskTracker;
