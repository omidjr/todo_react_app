import './Navbar.css';
import React, { useCallback, useEffect, useState } from 'react'
import { NavbarAddTodo } from './NavbarAddTodo';

const Navbar = ({todos, setTodos, newTodo, setNewTodo, chosenCollection, showSidebar, setShowSidebar}) => {
    const [addModal, setAddModal] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
         
        return () => window.removeEventListener("resize", handleWindowResize);
       },[]);

    const sidebarToggle = useCallback(() => {
        setShowSidebar(!showSidebar);
    });

    return (
        <>
            {width > breakPoint ? (
                <div className="navbar">
                <div className="navbarMenu">
                    <span>
                        <svg onClick={sidebarToggle} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.125 7.8125H21.875C22.7375 7.8125 23.4375 7.1125 23.4375 6.25C23.4375 5.3875 22.7375 4.6875 21.875 4.6875H3.125C2.2625 4.6875 1.5625 5.3875 1.5625 6.25C1.5625 7.1125 2.2625 7.8125 3.125 7.8125ZM21.875 10.9375H3.125C2.2625 10.9375 1.5625 11.6375 1.5625 12.5C1.5625 13.3625 2.2625 14.0625 3.125 14.0625H21.875C22.7375 14.0625 23.4375 13.3625 23.4375 12.5C23.4375 11.6375 22.7375 10.9375 21.875 10.9375ZM21.875 17.1875H3.125C2.2625 17.1875 1.5625 17.8875 1.5625 18.75C1.5625 19.6125 2.2625 20.3125 3.125 20.3125H21.875C22.7375 20.3125 23.4375 19.6125 23.4375 18.75C23.4375 17.8875 22.7375 17.1875 21.875 17.1875Z" fill="#EEEEEE"/>
                    </svg>
                    </span>
                </div>
                <div className="navbarIcons">
                    {chosenCollection ? (
                        <button className="addTodo_btn nav_btn" onClick={() => setAddModal(true)}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1V17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    ) : (
                        <button className="navAddTodo_btn_disabled nav_btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1V17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    )}
                    <span>
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9555 21.5171H1.54194C1.40701 21.5167 1.27443 21.4818 1.15678 21.4158C1.03913 21.3497 0.940327 21.2547 0.869745 21.1397C0.799163 21.0247 0.759148 20.8935 0.753501 20.7587C0.747854 20.6239 0.776762 20.4899 0.83748 20.3694C1.81412 18.401 2.32591 16.2346 2.33346 14.0372V11.2273C2.33346 9.12806 3.16739 7.11479 4.65178 5.63039C6.13618 4.146 8.14945 3.31207 10.2487 3.31207C12.348 3.31207 14.3612 4.146 15.8456 5.63039C17.33 7.11479 18.1639 9.12806 18.1639 11.2273V14.0214C18.1715 16.2188 18.6833 18.3851 19.6599 20.3536C19.7244 20.4746 19.7563 20.6103 19.7525 20.7474C19.7487 20.8845 19.7094 21.0183 19.6384 21.1356C19.5674 21.2529 19.4671 21.3497 19.3474 21.4166C19.2276 21.4835 19.0926 21.5181 18.9555 21.5171V21.5171ZM2.7688 19.9341H17.7286C16.9738 18.054 16.5843 16.0473 16.5809 14.0214V11.2273C16.5809 9.54791 15.9138 7.93729 14.7262 6.74978C13.5387 5.56226 11.9281 4.89512 10.2487 4.89512C8.5693 4.89512 6.95868 5.56226 5.77116 6.74978C4.58365 7.93729 3.91651 9.54791 3.91651 11.2273V14.0214C3.91313 16.0473 3.5236 18.054 2.7688 19.9341V19.9341Z" fill="#EEEEEE"/>
                        <path d="M10.2487 24.6832C9.19907 24.6832 8.19243 24.2663 7.45024 23.5241C6.70804 22.7819 6.29108 21.7752 6.29108 20.7256C6.29108 20.5157 6.37447 20.3144 6.52291 20.1659C6.67135 20.0175 6.87268 19.9341 7.0826 19.9341C7.29253 19.9341 7.49385 20.0175 7.64229 20.1659C7.79073 20.3144 7.87412 20.5157 7.87412 20.7256C7.87468 21.3552 8.12522 21.9587 8.57067 22.4036C9.02364 22.8334 9.62426 23.073 10.2487 23.073C10.8731 23.073 11.4738 22.8334 11.9267 22.4036C12.0005 22.3298 12.0881 22.2713 12.1846 22.2314C12.281 22.1914 12.3843 22.1709 12.4887 22.1709C12.5931 22.1709 12.6964 22.1914 12.7929 22.2314C12.8893 22.2713 12.9769 22.3298 13.0507 22.4036C13.1245 22.4774 13.183 22.5651 13.223 22.6615C13.2629 22.7579 13.2835 22.8612 13.2835 22.9656C13.2835 23.07 13.2629 23.1733 13.223 23.2698C13.183 23.3662 13.1245 23.4538 13.0507 23.5276C12.6825 23.8949 12.2455 24.186 11.7647 24.3843C11.2839 24.5826 10.7688 24.6842 10.2487 24.6832Z" fill="#EEEEEE"/>
                        <path d="M10.2487 4.89512C10.0388 4.89512 9.83749 4.81173 9.68905 4.66329C9.54061 4.51485 9.45721 4.31352 9.45721 4.1036V1.72902C9.45721 1.5191 9.54061 1.31777 9.68905 1.16933C9.83749 1.02089 10.0388 0.9375 10.2487 0.9375C10.4587 0.9375 10.66 1.02089 10.8084 1.16933C10.9569 1.31777 11.0403 1.5191 11.0403 1.72902V4.1036C11.0403 4.31352 10.9569 4.51485 10.8084 4.66329C10.66 4.81173 10.4587 4.89512 10.2487 4.89512Z" fill="#EEEEEE"/>
                    </svg>
                    </span>
                    <span>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91665 16.8333C13.2889 16.8333 16.8333 13.2889 16.8333 8.91665C16.8333 4.5444 13.2889 1 8.91665 1C4.5444 1 1 4.5444 1 8.91665C1 13.2889 4.5444 16.8333 8.91665 16.8333Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.0001 20L14.5112 14.5111" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <div className="profile" />
                </div>
                {addModal ? <NavbarAddTodo todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo} chosenCollection={chosenCollection} setAddModal={setAddModal} /> : <div style={{display: 'none'}} />}
            </div>
            ) : (
                <>
                    {addModal ? <NavbarAddTodo todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo} chosenCollection={chosenCollection} setAddModal={setAddModal} /> : <div style={{display: 'none'}} />}
                    <div className="navbar_sm">
                    <span>
                        <svg onClick={sidebarToggle} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 7.8125H21.875C22.7375 7.8125 23.4375 7.1125 23.4375 6.25C23.4375 5.3875 22.7375 4.6875 21.875 4.6875H3.125C2.2625 4.6875 1.5625 5.3875 1.5625 6.25C1.5625 7.1125 2.2625 7.8125 3.125 7.8125ZM21.875 10.9375H3.125C2.2625 10.9375 1.5625 11.6375 1.5625 12.5C1.5625 13.3625 2.2625 14.0625 3.125 14.0625H21.875C22.7375 14.0625 23.4375 13.3625 23.4375 12.5C23.4375 11.6375 22.7375 10.9375 21.875 10.9375ZM21.875 17.1875H3.125C2.2625 17.1875 1.5625 17.8875 1.5625 18.75C1.5625 19.6125 2.2625 20.3125 3.125 20.3125H21.875C22.7375 20.3125 23.4375 19.6125 23.4375 18.75C23.4375 17.8875 22.7375 17.1875 21.875 17.1875Z" fill="#EEEEEE"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9555 21.5171H1.54194C1.40701 21.5167 1.27443 21.4818 1.15678 21.4158C1.03913 21.3497 0.940327 21.2547 0.869745 21.1397C0.799163 21.0247 0.759148 20.8935 0.753501 20.7587C0.747854 20.6239 0.776762 20.4899 0.83748 20.3694C1.81412 18.401 2.32591 16.2346 2.33346 14.0372V11.2273C2.33346 9.12806 3.16739 7.11479 4.65178 5.63039C6.13618 4.146 8.14945 3.31207 10.2487 3.31207C12.348 3.31207 14.3612 4.146 15.8456 5.63039C17.33 7.11479 18.1639 9.12806 18.1639 11.2273V14.0214C18.1715 16.2188 18.6833 18.3851 19.6599 20.3536C19.7244 20.4746 19.7563 20.6103 19.7525 20.7474C19.7487 20.8845 19.7094 21.0183 19.6384 21.1356C19.5674 21.2529 19.4671 21.3497 19.3474 21.4166C19.2276 21.4835 19.0926 21.5181 18.9555 21.5171V21.5171ZM2.7688 19.9341H17.7286C16.9738 18.054 16.5843 16.0473 16.5809 14.0214V11.2273C16.5809 9.54791 15.9138 7.93729 14.7262 6.74978C13.5387 5.56226 11.9281 4.89512 10.2487 4.89512C8.5693 4.89512 6.95868 5.56226 5.77116 6.74978C4.58365 7.93729 3.91651 9.54791 3.91651 11.2273V14.0214C3.91313 16.0473 3.5236 18.054 2.7688 19.9341V19.9341Z" fill="#EEEEEE"/>
                            <path d="M10.2487 24.6832C9.19907 24.6832 8.19243 24.2663 7.45024 23.5241C6.70804 22.7819 6.29108 21.7752 6.29108 20.7256C6.29108 20.5157 6.37447 20.3144 6.52291 20.1659C6.67135 20.0175 6.87268 19.9341 7.0826 19.9341C7.29253 19.9341 7.49385 20.0175 7.64229 20.1659C7.79073 20.3144 7.87412 20.5157 7.87412 20.7256C7.87468 21.3552 8.12522 21.9587 8.57067 22.4036C9.02364 22.8334 9.62426 23.073 10.2487 23.073C10.8731 23.073 11.4738 22.8334 11.9267 22.4036C12.0005 22.3298 12.0881 22.2713 12.1846 22.2314C12.281 22.1914 12.3843 22.1709 12.4887 22.1709C12.5931 22.1709 12.6964 22.1914 12.7929 22.2314C12.8893 22.2713 12.9769 22.3298 13.0507 22.4036C13.1245 22.4774 13.183 22.5651 13.223 22.6615C13.2629 22.7579 13.2835 22.8612 13.2835 22.9656C13.2835 23.07 13.2629 23.1733 13.223 23.2698C13.183 23.3662 13.1245 23.4538 13.0507 23.5276C12.6825 23.8949 12.2455 24.186 11.7647 24.3843C11.2839 24.5826 10.7688 24.6842 10.2487 24.6832Z" fill="#EEEEEE"/>
                            <path d="M10.2487 4.89512C10.0388 4.89512 9.83749 4.81173 9.68905 4.66329C9.54061 4.51485 9.45721 4.31352 9.45721 4.1036V1.72902C9.45721 1.5191 9.54061 1.31777 9.68905 1.16933C9.83749 1.02089 10.0388 0.9375 10.2487 0.9375C10.4587 0.9375 10.66 1.02089 10.8084 1.16933C10.9569 1.31777 11.0403 1.5191 11.0403 1.72902V4.1036C11.0403 4.31352 10.9569 4.51485 10.8084 4.66329C10.66 4.81173 10.4587 4.89512 10.2487 4.89512Z" fill="#EEEEEE"/>
                        </svg>
                    </span>
                    {chosenCollection ? (
                        <button className="addTodo_btn nav_btn" onClick={() => setAddModal(true)}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1V17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    ) : (
                        <button className="navAddTodo_btn_disabled nav_btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1V17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    )}
                    <span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.91665 16.8333C13.2889 16.8333 16.8333 13.2889 16.8333 8.91665C16.8333 4.5444 13.2889 1 8.91665 1C4.5444 1 1 4.5444 1 8.91665C1 13.2889 4.5444 16.8333 8.91665 16.8333Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.0001 20L14.5112 14.5111" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <div className="profile" />
                </div>
                </>
            )}
        </>
    )
}

export default Navbar
