'use client';
import React, { useEffect } from 'react';
const Injector = ({ text, splitter, klass, after, }) => {
    const injectText = () => {
        const a = text.split(splitter);
        let inject = '';
        if (a.length) {
            a.forEach((item, i) => {
                inject += `<span class="${klass}${i + 1}">${item}</span>${after}`;
            });
        }
        return inject;
    };
    return <div dangerouslySetInnerHTML={{ __html: injectText() }}/>;
};
const CircleComponent = () => {
    useEffect(() => {
        const injector = (t, splitter, klass, after) => {
            const a = t.innerText.split(splitter);
            let inject = '';
            if (a.length) {
                a.forEach((item, i) => {
                    inject += `<span class="${klass}${i + 1}">${item}</span>${after}`;
                });
                t.innerHTML = inject;
            }
        };
        const elements = document.querySelectorAll('.hero-title-anime');
        elements.forEach(element => {
            injector(element, '', 'char', '');
        });
    }, []);
    return (<div className="circle-text-wrap position-relative">
            <div className="circle-text-tag">
                <span className="hero-title-anime">SCROLL DOWN SCROLL DOWN SCROLL DOWN</span>
                <Injector text="" splitter=" " klass="word" after=" "/>
            </div>
            <i className="icon-arrow-top-left arrow-down"/>
        </div>);
};
export default CircleComponent;
