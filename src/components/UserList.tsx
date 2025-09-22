import React, { useState, useEffect } from "react";
import './UserList.css'; // импорт CSS

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка при загрузке данных");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    // <-- вот сюда добавляем return с классом для CSS
    return (
        <ul className="user-list">
            {users.map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong> - {user.email} - {user.address.city}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
