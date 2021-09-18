import "./Sidebar.css";
import React from 'react'

const Sidebar = ({showSidebar}) => {
    const formSubmitted = () => {}

    const onNewCollectionChange = (e) => {}

    return (
        <div className={showSidebar ? ['sideBar', 'active'].join(' ') : "sideBar"}>
            <p>
                Collections
            </p>
            <ul>
                <li>
                    <span id="coding">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M16.4961 7.90458L12.6419 3.82122C12.405 3.56998 12.0096 3.55853 11.7583 3.7956C11.5075 4.03249 11.4958 4.42809 11.7329 4.67914L15.1823 8.33333L11.7329 11.9879C11.4958 12.239 11.5075 12.6344 11.7583 12.8715C11.8792 12.9854 12.0335 13.0419 12.1873 13.0419C12.3533 13.0419 12.5192 12.9761 12.6419 12.8462L16.4961 8.76269C16.7233 8.52167 16.7233 8.1454 16.4961 7.90458Z" fill="#EEEEEE"/>
                            <path d="M4.9338 11.9878L1.48463 8.33335L4.9338 4.67896C5.17068 4.42792 5.15923 4.03228 4.90818 3.79543C4.65734 3.55854 4.2615 3.57 4.02465 3.82105L0.17046 7.90441C-0.05682 8.14523 -0.05682 8.52169 0.17046 8.76255L4.02484 12.8461C4.14776 12.9763 4.31339 13.0419 4.47944 13.0419C4.63318 13.0419 4.78758 12.9853 4.90818 12.8713C5.15945 12.6344 5.17068 12.2388 4.9338 11.9878Z" fill="#EEEEEE"/>
                            <path d="M9.34465 1.71539C9.00359 1.66373 8.68442 1.89788 8.63234 2.23893L6.79899 14.239C6.74691 14.5802 6.98128 14.8992 7.32253 14.9513C7.35463 14.9561 7.38627 14.9584 7.41775 14.9584C7.7213 14.9584 7.98754 14.737 8.03484 14.4278L9.86818 2.4277C9.92027 2.08642 9.68589 1.76748 9.34465 1.71539Z" fill="#EEEEEE"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="16.6667" height="16.6667" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                    Coding
                </li>
                <li>
                    <span id="design">
                        <svg width="7" height="19" viewBox="0 0 7 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.06525 5.46671L6.49989 4.60933C6.48957 4.4654 6.47564 4.32405 6.45965 4.18682C6.14291 1.38409 4.9631 0 4.9631 0C2.24858 1.80401 1.0337 5.27429 1.0337 5.27429L1.43092 6.60627L0.695287 6.27302C-0.57634 9.92488 0.778858 13.9492 0.778858 13.9492C0.885644 14.1086 1.00172 14.22 1.12037 14.3C2.6912 7.33159 3.69664 4.81774 3.69664 4.81774C3.34172 5.72258 2.40283 10.9788 1.80648 14.447C2.10156 14.4047 2.32235 14.2598 2.32235 14.2598C6.73668 9.4152 6.34564 5.38107 6.34564 5.38107C6.03715 5.20361 5.06525 5.46671 5.06525 5.46671Z" fill="#EEEEEE"/>
                            <path d="M1.12048 14.3C0.896587 15.2904 0.246071 17.5917 0 18.7674L0.599444 18.0731C0.599444 18.0731 1.27266 16.0436 1.80659 14.447C1.59921 14.4774 1.3552 14.4552 1.12048 14.3Z" fill="#EEEEEE"/>
                        </svg>
                    </span>
                    Design
                </li>
                <li>
                    <span id="personal">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M7.80385 7.62696C8.85166 7.62696 9.75898 7.25116 10.5003 6.5097C11.2417 5.76836 11.6175 4.86128 11.6175 3.81336C11.6175 2.7658 11.2417 1.8586 10.5002 1.11702C9.75874 0.375803 8.85154 0 7.80385 0C6.75592 0 5.84884 0.375803 5.1075 1.11714C4.36616 1.85848 3.99023 2.76568 3.99023 3.81336C3.99023 4.86128 4.36616 5.76848 5.10762 6.50982C5.84909 7.25104 6.75628 7.62696 7.80385 7.62696V7.62696Z" fill="#EEEEEE"/>
                            <path d="M14.4768 12.175C14.4554 11.8665 14.4121 11.53 14.3485 11.1746C14.2842 10.8165 14.2015 10.478 14.1024 10.1687C14.0001 9.84893 13.8609 9.53316 13.6889 9.23056C13.5104 8.91648 13.3007 8.643 13.0654 8.41795C12.8193 8.18251 12.518 7.99322 12.1696 7.85515C11.8225 7.7178 11.4377 7.64822 11.0261 7.64822C10.8645 7.64822 10.7082 7.71454 10.4063 7.91108C10.2205 8.03224 10.0032 8.17237 9.76066 8.32735C9.55325 8.4595 9.27227 8.58332 8.92522 8.69542C8.58662 8.80499 8.24282 8.86055 7.9035 8.86055C7.56418 8.86055 7.2205 8.80499 6.88154 8.69542C6.53485 8.58344 6.25387 8.45962 6.0467 8.32747C5.80643 8.17394 5.589 8.03381 5.40043 7.91096C5.09892 7.71442 4.94248 7.6481 4.78085 7.6481C4.36917 7.6481 3.98455 7.7178 3.63749 7.85527C3.28935 7.9931 2.98796 8.18239 2.74165 8.41807C2.50645 8.64324 2.29663 8.9166 2.11833 9.23056C1.94643 9.53316 1.80727 9.8488 1.70483 10.1688C1.6059 10.4782 1.52315 10.8165 1.45889 11.1746C1.39523 11.5295 1.35198 11.8661 1.3306 12.1754C1.30958 12.4783 1.29895 12.7928 1.29895 13.1104C1.29895 13.9369 1.56169 14.606 2.07979 15.0994C2.5915 15.5864 3.26857 15.8334 4.09194 15.8334H11.7158C12.5392 15.8334 13.216 15.5865 13.7278 15.0994C14.246 14.6063 14.5088 13.9371 14.5088 13.1102C14.5087 12.7912 14.4979 12.4765 14.4768 12.175V12.175Z" fill="#EEEEEE"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="15.8333" height="15.8333" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                    Personal
                </li>
                <li>
                    <span id="school">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M15.1783 13.3902V1.4881L14.7242 1.52617C12.9029 1.67673 11.1165 2.11211 9.43015 2.81663L8.63074 3.14855V15.0036L9.2129 14.7616C10.9579 14.0356 12.8055 13.5864 14.6891 13.4301L15.1783 13.3902Z" fill="#EEEEEE"/>
                            <path d="M16.6667 3.24765H15.7739V13.6643C15.7745 13.8195 15.6554 13.9491 15.5007 13.9619L14.7385 14.0244C14.5184 14.0426 14.299 14.0651 14.0805 14.092C14.0095 14.1006 13.9391 14.1119 13.8686 14.1218C13.7212 14.1414 13.5741 14.1613 13.4275 14.1846C13.3421 14.1982 13.2572 14.2142 13.172 14.2292C13.0408 14.2521 12.9093 14.275 12.7784 14.3008C12.689 14.3187 12.5998 14.3388 12.5086 14.3581C12.384 14.3845 12.2593 14.4116 12.1355 14.4411C12.0426 14.4632 11.95 14.4865 11.8578 14.5101C11.7373 14.5399 11.6174 14.572 11.4976 14.6054C11.4045 14.631 11.3113 14.658 11.2185 14.6853C11.0995 14.7205 10.9822 14.7563 10.8646 14.7938C10.7726 14.8235 10.6805 14.8533 10.5888 14.883C10.4711 14.9227 10.354 14.9636 10.2373 15.0059C10.148 15.0383 10.0587 15.0709 9.96741 15.105C9.92657 15.1206 9.88603 15.1372 9.84534 15.153H16.6667V3.24765Z" fill="#EEEEEE"/>
                            <path d="M1.94229 1.52617L1.48816 1.4881V13.3911L2.0164 13.436C3.89875 13.5934 5.74478 14.0454 7.48689 14.7753L8.03577 15.0036V3.14855L7.23723 2.81692C5.55077 2.11226 3.76404 1.67673 1.94229 1.52617V1.52617Z" fill="#EEEEEE"/>
                            <path d="M0 3.24765V15.1524H6.8262C6.78958 15.138 6.75296 15.1226 6.71605 15.109C6.63089 15.0766 6.545 15.0456 6.45926 15.0144C6.33836 14.9705 6.21759 14.9277 6.09581 14.8869C6.00775 14.8571 5.91939 14.8282 5.83089 14.8C5.71013 14.7603 5.58893 14.723 5.46759 14.6881C5.37822 14.6619 5.28899 14.6356 5.19976 14.6106C5.0774 14.5768 4.95475 14.5447 4.83181 14.5131C4.74258 14.4902 4.6532 14.4672 4.56194 14.4459C4.43726 14.4161 4.31184 14.3887 4.18658 14.3619C4.09735 14.3425 4.00798 14.3229 3.91875 14.305C3.78898 14.2795 3.65862 14.2565 3.52827 14.2337C3.44282 14.2187 3.35737 14.2039 3.27178 14.1886C3.12791 14.1658 2.9836 14.1465 2.8393 14.127C2.76635 14.1173 2.69398 14.1057 2.62117 14.0974C2.4029 14.0709 2.18462 14.0484 1.96635 14.0298L1.16519 13.9619C1.01071 13.9487 0.892276 13.8192 0.892857 13.6643V3.24765H0Z" fill="#EEEEEE"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="16.6667" height="16.6667" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                    School
                </li>
            </ul>
            <form className="addCollection_form" onSubmit={formSubmitted}>
                <input
                    className="addCollection_input"
                    autoComplete="off"
                    placeholder="Add a Collection..."
                    id="newCollection"
                    name="newCollection"
                    // value={newCollection}
                    onChange={onNewCollectionChange}
                />
                <button className="addCollection_btn">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.87097 1.19354V13.0645" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.93548 7.12903H13.8064" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Sidebar
