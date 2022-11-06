import React, {ChangeEvent, ChangeEventHandler, CSSProperties, useEffect, useRef, useState} from 'react';
import AccountLayout from "../../layouts/accountLayout";

const AccountNewAppeal = () => {

    const defaultStyle: CSSProperties = {
        display: "block",
        overflow: "hidden",
        resize: "none",
        width: "100%",
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [currentValue, setCurrentValue] = useState("");// you can manage data with it

    useEffect(() => {

        if (textareaRef != null) {
            // @ts-ignore
            textareaRef.current.style.height = "100px";
            // @ts-ignore
            const scrollHeight = textareaRef.current.scrollHeight;
            // @ts-ignore
            textareaRef.current.style.height = scrollHeight + "px";


        }

        },
        [currentValue]);

    const fileRef = useRef<HTMLInputElement>(null)

    return (
        <AccountLayout>
            <div className="flex flex-col gap-4 p-3">
                <textarea rows={3} ref={textareaRef} value={currentValue} placeholder="Введите ваше обращение"
                          className="input resize-none" style={defaultStyle}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                              setCurrentValue(e.target.value);
                              //to do something with value, maybe callback?
                          }}/>
                <input id="fileref" type="file" ref={fileRef} className="hidden"/>
                <label htmlFor="fileref" className="button select-none cursor-pointer">
                    Файл
                </label>

            </div>
        </AccountLayout>
    );
};

export default AccountNewAppeal;