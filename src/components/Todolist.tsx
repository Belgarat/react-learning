export interface TodolistItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

interface TodolistProps {
  data: TodolistItem[]
}

export function Todolist({data}: TodolistProps) {
  return (
    <>
      <div>TODO-LIST</div>
      <div>
        {data && data.map(todo =>
            (todo.id && !todo.completed && 
              <div key={todo.id}>
                {todo.title}{todo.completed && " | completed"}
              </div>
            )
        )}
      </div>
    </>
  );
}
