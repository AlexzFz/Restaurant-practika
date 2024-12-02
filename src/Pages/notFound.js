import React from "react";
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div id="error-page">
                <div class="content">
                    <h2 class="header" data-text="404">404</h2>
                    <h4 data-text="Упс! Страница не найдена">Упс! Страница не найдена</h4>
                    <p>К сожалению, страница, которую вы ищете, не существует.</p>
                    <div class="btns">
                    <NavLink to="/">На главную</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export { NotFound }