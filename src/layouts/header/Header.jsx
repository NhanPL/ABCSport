import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="header">
      <div className="header-top row align-items-center w-100 g-0">
        <div className="col-4 col-md-3 col-lg-2">
          <img src={Logo} alt="Logo ABC" />
        </div>
        <form className="header-form col col-md-5 col-lg-7">
          <input
            type="text"
            className="form-control form-control-lg w-100"
            id="exampleFormControlInput1"
            placeholder="Từ khóa tìm kiếm"
          />
          <button className="btn btn-search">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8268 0C4.86015 0 0 4.86015 0 10.8268C0 16.7934 4.86015 21.6536 10.8268 21.6536C13.4214 21.6536 15.8043 20.7322 17.6718 19.2028L24.1361 25.6671C24.2359 25.771 24.3554 25.854 24.4876 25.9111C24.6199 25.9683 24.7622 25.9985 24.9062 25.9999C25.0502 26.0014 25.1931 25.9741 25.3265 25.9197C25.4598 25.8652 25.581 25.7847 25.6829 25.6829C25.7847 25.581 25.8652 25.4598 25.9197 25.3265C25.9741 25.1931 26.0014 25.0502 25.9999 24.9062C25.9985 24.7622 25.9683 24.6199 25.9111 24.4876C25.854 24.3554 25.771 24.2359 25.6671 24.1361L19.2028 17.6718C20.7322 15.8043 21.6536 13.4214 21.6536 10.8268C21.6536 4.86015 16.7934 0 10.8268 0ZM10.8268 2.16536C15.6232 2.16536 19.4882 6.03039 19.4882 10.8268C19.4882 15.6232 15.6232 19.4882 10.8268 19.4882C6.03039 19.4882 2.16536 15.6232 2.16536 10.8268C2.16536 6.03039 6.03039 2.16536 10.8268 2.16536Z"
                fill="#05141F"
              />
            </svg>
          </button>
        </form>
        <div className="col-8 col-md-4 col-lg-3 align-items-center justify-content-end d-flex">
          <a className="header-login text-white text-decoration-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7273 20.4471C19.2715 19.1713 18.2671 18.0439 16.87 17.2399C15.4728 16.4358 13.761 16 11.9999 16C10.2388 16 8.52693 16.4358 7.12978 17.2399C5.73263 18.0439 4.72826 19.1713 4.27246 20.4471"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="ms-2">Đăng ký/Đăng nhập</span>
          </a>
          <button className="btn btn-cart justify-content-center d-flex ms-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H2.62563C3.193 1 3.47669 1 3.70214 1.12433C3.79511 1.17561 3.87933 1.24136 3.95162 1.31912C4.12692 1.50769 4.19573 1.7829 4.33333 2.33333L4.51493 3.05972C4.616 3.46402 4.66654 3.66617 4.74455 3.83576C5.01534 4.42449 5.5546 4.84553 6.19144 4.96546C6.37488 5 6.58326 5 7 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15.0001 14H4.55097C4.40477 14 4.33168 14 4.27622 13.9938C3.68863 13.928 3.28611 13.3695 3.40951 12.7913C3.42115 12.7367 3.44427 12.6674 3.4905 12.5287C3.54183 12.3747 3.56749 12.2977 3.59585 12.2298C3.88613 11.5342 4.54283 11.0608 5.29454 11.0054C5.36796 11 5.44912 11 5.61143 11H11.0001"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5279 11H7.97425C6.75833 11 6.15037 11 5.68142 10.7246C5.48338 10.6083 5.30684 10.4588 5.15956 10.2825C4.81082 9.8652 4.71087 9.2655 4.51098 8.0662C4.30844 6.85093 4.20717 6.2433 4.44758 5.79324C4.54794 5.60536 4.68717 5.44101 4.85599 5.31113C5.2604 5 5.87641 5 7.10845 5H13.7639C15.2143 5 15.9395 5 16.2326 5.47427C16.5257 5.94854 16.2014 6.59717 15.5528 7.8944L15.1056 8.7889C14.5677 9.8647 14.2987 10.4026 13.8154 10.7013C13.3321 11 12.7307 11 11.5279 11Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 18C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18Z"
                fill="white"
              />
              <path
                d="M6 18C6.55228 18 7 17.5523 7 17C7 16.4477 6.55228 16 6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="btn-toggle"
            onClick={() => {
              setIsToggle(!isToggle);
            }}
          >
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 6.5H19V8H5V6.5Z" fill="#FFFFFF" />
              <path d="M5 16.5H19V18H5V16.5Z" fill="#FFFFFF" />
              <path d="M5 11.5H19V13H5V11.5Z" fill="#FFFFFF" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`header-bottom d-flex justify-content-between ${
          isToggle && "show"
        }`}
      >
        <nav className="header-navbar">
          <ul className="header-navbar-nav">
            <li className="header-navbar-item">
              <a className="nav-link" aria-current="page" href="#">
                Về chúng tôi
              </a>
            </li>
            <li className="header-navbar-item">
              <a
                className="text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sản phẩm
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_244_11)">
                    <path
                      d="M11.9998 16C11.7661 16.0005 11.5397 15.9191 11.3598 15.77L5.35979 10.77C5.15557 10.6003 5.02715 10.3564 5.00277 10.0919C4.97839 9.8275 5.06005 9.56422 5.22979 9.36C5.39953 9.15578 5.64344 9.02736 5.90786 9.00298C6.17229 8.9786 6.43557 9.06026 6.63979 9.23L11.9998 13.71L17.3598 9.39C17.4621 9.30694 17.5798 9.2449 17.7061 9.20747C17.8324 9.17004 17.9649 9.15795 18.096 9.17189C18.227 9.18582 18.354 9.22552 18.4696 9.2887C18.5853 9.35187 18.6873 9.43727 18.7698 9.54C18.8614 9.64282 18.9307 9.76345 18.9735 9.89432C19.0163 10.0252 19.0316 10.1635 19.0185 10.3006C19.0053 10.4376 18.964 10.5705 18.8971 10.6909C18.8303 10.8112 18.7392 10.9165 18.6298 11L12.6298 15.83C12.4447 15.9555 12.2229 16.0154 11.9998 16Z"
                      fill="#CCCCCC"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_244_11"
                      x="-4"
                      y="0"
                      width="32"
                      height="32"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_244_11"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_244_11"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Xe đạp
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Máy chạy bộ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ghế massage
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ghế massage
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ghế massage
                  </a>
                </li>
              </ul>
            </li>
            <li className="header-navbar-item">
              <a className="nav-link" aria-current="page" href="#">
                Khuyến mãi
              </a>
            </li>
            <li className="header-navbar-item">
              <a className="nav-link" aria-current="page" href="#">
                Tin tức
              </a>
            </li>
            <li className="header-navbar-item">
              <a className="nav-link" aria-current="page" href="#">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-count text-white w-auto d-flex align-items-center justify-content-end">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3332 28V21.3333C19.3332 20.5969 18.7362 20 17.9998 20H13.9998C13.2635 20 12.6665 20.5969 12.6665 21.3333V28"
              stroke="#FA5A0A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.6665 14.6667V22.6667C6.6665 25.1808 6.6665 26.4379 7.44756 27.2189C8.2286 28 9.48568 28 11.9998 28H19.9998C22.514 28 23.771 28 24.5521 27.2189C25.3332 26.4379 25.3332 25.1808 25.3332 22.6667V14.6667"
              stroke="#FA5A0A"
              strokeWidth="2"
            />
            <path
              d="M6.1617 6.01991C6.40422 5.04983 6.52547 4.56479 6.88715 4.28239C7.24884 4 7.7488 4 8.74874 4H23.2512C24.2512 4 24.7512 4 25.1128 4.28239C25.4745 4.56479 25.5957 5.04983 25.8383 6.01991L27.4431 12.4392C27.5723 12.9557 27.6368 13.2139 27.6225 13.4237C27.5856 13.9676 27.2213 14.4343 26.7025 14.602C26.5025 14.6667 26.2301 14.6667 25.6855 14.6667C24.9745 14.6667 24.6192 14.6667 24.3207 14.5971C23.4844 14.4023 22.7931 13.8167 22.4633 13.0237C22.3457 12.7407 22.2885 12.3981 22.1744 11.7128C22.1424 11.521 22.1264 11.4251 22.1083 11.3999C22.0551 11.3259 21.9449 11.3259 21.8917 11.3999C21.8736 11.4251 21.8576 11.521 21.8256 11.7128L21.7169 12.3651C21.7055 12.4342 21.6996 12.4688 21.6939 12.4991C21.4585 13.734 20.3928 14.6369 19.136 14.666C19.1052 14.6667 19.0701 14.6667 19 14.6667C18.9299 14.6667 18.8948 14.6667 18.864 14.666C17.6072 14.6369 16.5415 13.734 16.3061 12.4991C16.3004 12.4688 16.2945 12.4342 16.2831 12.3651L16.1744 11.7128C16.1424 11.521 16.1264 11.4251 16.1083 11.3999C16.0551 11.3259 15.9449 11.3259 15.8917 11.3999C15.8736 11.4251 15.8576 11.521 15.8256 11.7128L15.7169 12.3651C15.7055 12.4342 15.6996 12.4688 15.6939 12.4991C15.4585 13.734 14.3928 14.6369 13.136 14.666C13.1052 14.6667 13.0701 14.6667 13 14.6667C12.9299 14.6667 12.8948 14.6667 12.864 14.666C11.6072 14.6369 10.5414 13.734 10.3061 12.4991C10.3004 12.4688 10.2946 12.4342 10.2831 12.3651L10.1743 11.7128C10.1424 11.521 10.1264 11.4251 10.1083 11.3999C10.0551 11.3259 9.94491 11.3259 9.89171 11.3999C9.87359 11.4251 9.85761 11.521 9.82565 11.7128C9.71143 12.3981 9.65432 12.7407 9.53666 13.0237C9.20699 13.8167 8.51567 14.4023 7.67935 14.5971C7.38084 14.6667 7.0254 14.6667 6.31455 14.6667C5.76983 14.6667 5.49746 14.6667 5.29742 14.602C4.77871 14.4343 4.41438 13.9676 4.37743 13.4237C4.36319 13.2139 4.42775 12.9557 4.55687 12.4392L6.1617 6.01991Z"
              stroke="#FA5A0A"
              strokeWidth="2"
            />
          </svg>
          <span className="text-primary">120 Showroom toàn quốc</span>
        </div>

        <form className="header-form">
          <input
            type="text"
            className="form-control form-control-lg w-100"
            id="exampleFormControlInput1"
            placeholder="Từ khóa tìm kiếm"
          />
          <button className="btn btn-search">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8268 0C4.86015 0 0 4.86015 0 10.8268C0 16.7934 4.86015 21.6536 10.8268 21.6536C13.4214 21.6536 15.8043 20.7322 17.6718 19.2028L24.1361 25.6671C24.2359 25.771 24.3554 25.854 24.4876 25.9111C24.6199 25.9683 24.7622 25.9985 24.9062 25.9999C25.0502 26.0014 25.1931 25.9741 25.3265 25.9197C25.4598 25.8652 25.581 25.7847 25.6829 25.6829C25.7847 25.581 25.8652 25.4598 25.9197 25.3265C25.9741 25.1931 26.0014 25.0502 25.9999 24.9062C25.9985 24.7622 25.9683 24.6199 25.9111 24.4876C25.854 24.3554 25.771 24.2359 25.6671 24.1361L19.2028 17.6718C20.7322 15.8043 21.6536 13.4214 21.6536 10.8268C21.6536 4.86015 16.7934 0 10.8268 0ZM10.8268 2.16536C15.6232 2.16536 19.4882 6.03039 19.4882 10.8268C19.4882 15.6232 15.6232 19.4882 10.8268 19.4882C6.03039 19.4882 2.16536 15.6232 2.16536 10.8268C2.16536 6.03039 6.03039 2.16536 10.8268 2.16536Z"
                fill="#05141F"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* <div
        className={`header-bottom d-flex justify-content-between ${
          isToggle && "show"
        }`}
      >
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid g-0">
            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Về chúng tôi
                  </a>
                </li>
                <li className="nav-item active dropdown">
                  <a
                    className="nav-link text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sản phẩm
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_244_11)">
                        <path
                          d="M11.9998 16C11.7661 16.0005 11.5397 15.9191 11.3598 15.77L5.35979 10.77C5.15557 10.6003 5.02715 10.3564 5.00277 10.0919C4.97839 9.8275 5.06005 9.56422 5.22979 9.36C5.39953 9.15578 5.64344 9.02736 5.90786 9.00298C6.17229 8.9786 6.43557 9.06026 6.63979 9.23L11.9998 13.71L17.3598 9.39C17.4621 9.30694 17.5798 9.2449 17.7061 9.20747C17.8324 9.17004 17.9649 9.15795 18.096 9.17189C18.227 9.18582 18.354 9.22552 18.4696 9.2887C18.5853 9.35187 18.6873 9.43727 18.7698 9.54C18.8614 9.64282 18.9307 9.76345 18.9735 9.89432C19.0163 10.0252 19.0316 10.1635 19.0185 10.3006C19.0053 10.4376 18.964 10.5705 18.8971 10.6909C18.8303 10.8112 18.7392 10.9165 18.6298 11L12.6298 15.83C12.4447 15.9555 12.2229 16.0154 11.9998 16Z"
                          fill="#CCCCCC"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_244_11"
                          x="-4"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_244_11"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_244_11"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Ghế Massage
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Máy Chạy Bộ
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Xe Đạp
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Khuyến mãi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <span className="text-white w-auto d-flex align-items-center justify-content-end">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3332 28V21.3333C19.3332 20.5969 18.7362 20 17.9998 20H13.9998C13.2635 20 12.6665 20.5969 12.6665 21.3333V28"
              stroke="#FA5A0A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.6665 14.6667V22.6667C6.6665 25.1808 6.6665 26.4379 7.44756 27.2189C8.2286 28 9.48568 28 11.9998 28H19.9998C22.514 28 23.771 28 24.5521 27.2189C25.3332 26.4379 25.3332 25.1808 25.3332 22.6667V14.6667"
              stroke="#FA5A0A"
              strokeWidth="2"
            />
            <path
              d="M6.1617 6.01991C6.40422 5.04983 6.52547 4.56479 6.88715 4.28239C7.24884 4 7.7488 4 8.74874 4H23.2512C24.2512 4 24.7512 4 25.1128 4.28239C25.4745 4.56479 25.5957 5.04983 25.8383 6.01991L27.4431 12.4392C27.5723 12.9557 27.6368 13.2139 27.6225 13.4237C27.5856 13.9676 27.2213 14.4343 26.7025 14.602C26.5025 14.6667 26.2301 14.6667 25.6855 14.6667C24.9745 14.6667 24.6192 14.6667 24.3207 14.5971C23.4844 14.4023 22.7931 13.8167 22.4633 13.0237C22.3457 12.7407 22.2885 12.3981 22.1744 11.7128C22.1424 11.521 22.1264 11.4251 22.1083 11.3999C22.0551 11.3259 21.9449 11.3259 21.8917 11.3999C21.8736 11.4251 21.8576 11.521 21.8256 11.7128L21.7169 12.3651C21.7055 12.4342 21.6996 12.4688 21.6939 12.4991C21.4585 13.734 20.3928 14.6369 19.136 14.666C19.1052 14.6667 19.0701 14.6667 19 14.6667C18.9299 14.6667 18.8948 14.6667 18.864 14.666C17.6072 14.6369 16.5415 13.734 16.3061 12.4991C16.3004 12.4688 16.2945 12.4342 16.2831 12.3651L16.1744 11.7128C16.1424 11.521 16.1264 11.4251 16.1083 11.3999C16.0551 11.3259 15.9449 11.3259 15.8917 11.3999C15.8736 11.4251 15.8576 11.521 15.8256 11.7128L15.7169 12.3651C15.7055 12.4342 15.6996 12.4688 15.6939 12.4991C15.4585 13.734 14.3928 14.6369 13.136 14.666C13.1052 14.6667 13.0701 14.6667 13 14.6667C12.9299 14.6667 12.8948 14.6667 12.864 14.666C11.6072 14.6369 10.5414 13.734 10.3061 12.4991C10.3004 12.4688 10.2946 12.4342 10.2831 12.3651L10.1743 11.7128C10.1424 11.521 10.1264 11.4251 10.1083 11.3999C10.0551 11.3259 9.94491 11.3259 9.89171 11.3999C9.87359 11.4251 9.85761 11.521 9.82565 11.7128C9.71143 12.3981 9.65432 12.7407 9.53666 13.0237C9.20699 13.8167 8.51567 14.4023 7.67935 14.5971C7.38084 14.6667 7.0254 14.6667 6.31455 14.6667C5.76983 14.6667 5.49746 14.6667 5.29742 14.602C4.77871 14.4343 4.41438 13.9676 4.37743 13.4237C4.36319 13.2139 4.42775 12.9557 4.55687 12.4392L6.1617 6.01991Z"
              stroke="#FA5A0A"
              strokeWidth="2"
            />
          </svg>
          <span className="text-primary">120 Showroom toàn quốc</span>
        </span>
      </div> */}
    </div>
  );
};

export default Header;
