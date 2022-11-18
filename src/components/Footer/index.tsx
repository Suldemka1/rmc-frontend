import React from 'react';

const Footer = () => {
    return (
        <footer className="min-h-[100px] bg-gray-700 py-6">
            <div className="container mx-auto flex sm:flex-col md:flex-row justify-between text-gray-200 font-semibold text-md">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-4 font-semibold sm:text-xl md:text-2xl">
                        <img src="/favicon.ico"/>
                        <h1>Центр управления <br/> регионом</h1>
                    </div>

                    <div>
                        Lorem
                    </div>
                    <div>
                        ipsum
                    </div>

                </div>

                <div>
                    <p>asd</p>
                </div>

                <div>
                    <h1>Карта сайта</h1>
                    <p>asd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;