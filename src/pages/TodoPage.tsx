import React,{ useState } from "react";

const TodoPage = () => {
    const [todoText, setTodoText] = useState("");
    const [todoList, setNewTodoList] = React.useState([]);

    const onChangeTodoText = (e : any) => {
        setTodoText(e.target.value);
    }
    return(
        <>
            <div className="task-area">
                <h1>ToDoリスト</h1>
                <table>
                <thead>
                    <tr>
                    <td >ID</td>
                    <td>コメント</td>
                    <td>状態</td>
                    </tr>
                </thead>
                <tbody id="todo-body">  
                    {todoList.map((todo, index) => (
                    <tr>
                        <td></td>
                        <td></td>
                        <td><button></button></td>
                        <td><button>削除</button></td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <h2>新規タスクの追加</h2>
            <div className="add-todo">
                <input value={todoText} onChange={onChangeTodoText} />
                <button>追加</button>
            </div>
        </>
    )
}

export default TodoPage;

/*
Todoリストの作成
・未ログインならログイン画面表示
・ログイン後、jsonで固有ファイル持ってくる。
・ローカルストレージ保存しながら書き換え
・追加、削除のたびに更新
・main画面でログアウト、追加ボタン。
・それぞれのリストにチェックと削除要素
*/