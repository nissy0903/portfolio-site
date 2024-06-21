import React,{ useState } from "react";

const TodoPage = () => {
    const [todoText, setTodoText] = useState("");
    const [todoList, setNewTodoList] = React.useState([]);
    return(
        <div className="max-height todo">
            <h1>Todoリスト</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>コメント</td>
                        <td>状態</td>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((todo, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{todo.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>製作中</p>
        </div>
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