import { useState, type FC, type ReactNode } from 'react'
import { TodoContext, type Todo } from './TodoContext'

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'This is title',
      description: 'Hello',
      category: 'Bug',
      status: 'In Progress',
      priority: 'High',
    },
    {
      id: '2',
      title: 'Есть над чем задуматься: непосредственные участники технического прогресса подвергнуты целой серии независимых исследований. Следует отметить, что повышение уровня гражданского сознания говорит о возможностях направлений прогрессивного развития.',
      description: 'Разнообразный и богатый опыт говорит нам, что семантический разбор внешних противодействий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса поэтапного и последовательного развития общества. Мы вынуждены отталкиваться от того, что разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает актуальность распределения внутренних резервов и ресурсов. Не следует, однако, забывать, что реализация намеченных плановых заданий играет важную роль в формировании кластеризации усилий.',
      category: 'Bug',
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: '3',
      title: 'Заголовок',
      description: 'Hello',
      category: 'Documentation',
      status: 'In Progress',
      priority: 'High',
    },
  ])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const saveTodo = (newTodo: Todo) => {
    setTodos(prev => [newTodo, ...prev])
  }
  const editTodo = (todoToEdit: Todo) => {
    setTodos((prev) => {
      for (const i in prev) {
        if (prev[i].id === todoToEdit.id) {
          prev[i] = todoToEdit
        }
      }
      return prev
    })
  }

  const getTodoByID = (todoID: string): Todo | null => {
    return todos.find(todo => todo.id === todoID) || null
  }
  const saveCurrentTodo = (todoID: string) => {
    const todo = getTodoByID(todoID)
    setCurrentTodo(todo)
  }
  const resetCurrentTodo = () => {
    setCurrentTodo(null)
  }
  const deleteTodo = (todoID: string) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoID)
    if (todoIndex >= 0) {
      sessionStorage.setItem('deletedTodo', JSON.stringify({ ...todos[todoIndex], index: todoIndex }))
      setTimeout(() => {
        sessionStorage.removeItem('deletedTodo')
      }, 5000)
      setTodos(prev => prev.filter(filteredTodo => filteredTodo.id !== todoID))
    }
  }
  const restoreTodo = () => {
    const todoString = sessionStorage.getItem('deletedTodo')
    if (todoString) {
      const todo: Todo & { index: number } = JSON.parse(todoString)
      setTodos((prev) => {
        const newTodos = [...prev]
        newTodos.splice(todo.index, 0, todo)
        return newTodos
      })
    }
  }
  return (
    <TodoContext.Provider value={{ todos, saveTodo, currentTodo, resetCurrentTodo, saveCurrentTodo, editTodo, deleteTodo, restoreTodo }}>{children}</TodoContext.Provider>
  )
}
