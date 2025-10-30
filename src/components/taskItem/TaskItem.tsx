import {cn} from "../../utils/cn.ts";

type TaskItemProps = {
    id: number | string;
    text: string;
    time: string;
    completed: boolean;
    onToggle: (id: number | string) => void;
    onDelete: (id: number | string) => void;
};

const TaskItem = ({id, text, time, completed, onToggle, onDelete}: TaskItemProps) => {
    return (
        <div
            className={cn(
                "rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 transition-all duration-300 ease-in-out",
                completed
                    ? "bg-green-50 border-green-300 hover:shadow-green-200 opacity-90 scale-[0.99]"
                    : "bg-white border-gray-100 hover:shadow-md"
            )}>

            <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">

                <label className="flex items-center cursor-pointer select-none">
                    <input type="checkbox" checked={completed} onChange={() => onToggle(id)} className="hidden"/>

                    <span
                        className={cn(
                            "w-6 h-6 sm:w-7 sm:h-7 border-2 rounded-md flex items-center justify-center transition-all duration-200",
                            completed
                                ? "bg-green-500 border-green-500"
                                : "bg-gray-100 border-gray-300 hover:border-indigo-400"
                        )}
                    >
                            {completed && (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                                          d="M5 13l4 4L19 7"/>
                                </svg>)}
                    </span>

                </label>
                <div>
                    <p
                        className={cn(
                            "text-base sm:text-lg font-medium break-words transition-all duration-300",
                            completed ? "text-gray-400 line-through" : "text-gray-800"
                        )}
                    >
                        {text}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{time}</p>
                </div>
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-3">
                <button onClick={() => onDelete(id)}
                        className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg transition-colors duration-200"
                        title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
