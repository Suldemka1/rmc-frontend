import React, {RefObject, useRef, useState} from 'react';
import AccountLayout from "../../layouts/accountLayout";

const onEscape = function (action: { (): void; (): void; }) {
    window && window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            action();
        };
    });
};

const AccountSettings = () => {

    const [username, setUsername] = useState<string>('username')

    const userRef = useRef<HTMLInputElement | null>(null)

    onEscape(() => {
        // @ts-ignore
        userRef.current.blur();
    });

    return (
        <AccountLayout>
            <div className="flex gap-5">
                <p>Логин</p>
                <input type="text" ref={userRef}
                       defaultValue={username}
                       // onChange={(e) => setUsername(e.target.value)}
                       className="select-none "/>
            </div>

            <div>
                <p>Пароль</p>
                <input type="text" placeholder="Новый пароль"/>
            </div>

        </AccountLayout>
    );
};

export default AccountSettings;