import { PriorityType } from 'entities/Task/types'
import React, { Context, useContext, useState } from 'react'

type TaskType = {
    done: boolean
    title: string
    description: string
    id: string
    priority: PriorityType
}

type todoListState = Record<string, Array<TaskType>>

type TodoListStateContext = {
    updateTaskStatus: (date: string, id: string, status: boolean) => void
    tasks: todoListState
}

enum Priority {
    High = 'high',
    Low = 'low',
    Medium = 'medium',
}

const defaultState = {
    '2023-01-24': [
        {
            done: false,
            title: 'fdfsdf',
            description: 'fsdfsdfd',
            id: 'fsdf-12sdff-fdsf78',
            priority: Priority.Low,
        },
    ],
    '2023-01-25': [
        {
            done: false,
            title: 'tomorrowTask',
            description: 'dadadaadada',
            id: 'fsdf-12sdff-fdsdsf98',
            priority: Priority.Medium,
        },
    ],
    '2023-01-26': [
        {
            done: false,
            title: 'tomorrowTask',
            description: 'dadadaadada',
            id: 'fsdf-12sdff-fdsdsf54',
            priority: Priority.Medium,
        },
    ],
}

export const useTodolistData = () => {
    const [tasks, setTasks] = useState<todoListState>(defaultState)

    const updateTaskStatus = (date: string, id: string, status: boolean) => {
        const newTasks = JSON.parse(JSON.stringify(tasks)) as todoListState

        newTasks[date] = newTasks[date].map((task) =>
            task.id === id ? { ...task, done: status } : task
        )

        setTasks(newTasks)
    }

    return { tasks, updateTaskStatus }
}

export const TodoListStateContext = React.createContext<TodoListStateContext | null>(null)

export const useTodo = (): TodoListStateContext => {
    return useContext<TodoListStateContext>(TodoListStateContext as Context<TodoListStateContext>)
}
