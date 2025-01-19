import Logo from "../../assets/images/logo_2.png";
import Img11 from "../../assets/images/image_11.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img-logo">
        <img src={Logo} alt="Logo ABCSport" />
      </div>
      <div className="footer-group d-flex justify-content-between gap-3">
        <div className="footer-info">
          <h6 className="footer-header">CÔNG TY TNHH ABC SPORT</h6>
          <p className="footer-content">
            Giấy CNĐKDN: 0316165103
            <br /> Ngày cấp: 26-02-2020 <br />
            Cấp bởi: Sở Kế hoạch và Đầu tư TP. HCM. <br />
            Địa chỉ ĐKKD: Số 8, đường Phú Mỹ 2B, Khu Mỹ Phú 2-S10, KP6, P.Tân
            Phú, Quận 7 <br />
            Email: abcsportvietnam@gmail.com
          </p>
          <div className="d-flex align-items-end flex-wrap gap-2">
            <a className="footer-icon" href="">
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.31377 9.32563L5.96713 9.56465C7.06896 9.967 8.32213 10.1782 9.59765 10.1766C11.0255 10.1766 12.4213 9.91147 13.6086 9.41477C14.7958 8.91807 15.7212 8.2121 16.2676 7.38611C16.814 6.56013 16.957 5.65125 16.6784 4.77439C16.3999 3.89753 15.7123 3.09209 14.7026 2.45991C13.6929 1.82773 12.4066 1.39721 11.0061 1.2228C9.60565 1.04838 8.15405 1.1379 6.83486 1.48003C5.51566 1.82216 4.38813 2.40154 3.59484 3.14491C2.80155 3.88827 2.37813 4.76223 2.37813 5.65626C2.37813 6.46766 2.71835 7.24572 3.35638 7.92998L3.73721 8.33907L3.14791 9.69573L5.31377 9.32563ZM0.576864 11.3067L1.79696 8.49955C0.993013 7.63665 0.570634 6.65525 0.573254 5.65626C0.573254 2.53554 4.61347 0.00585938 9.59765 0.00585938C14.5818 0.00585938 18.622 2.53554 18.622 5.65626C18.622 8.77698 14.5818 11.3067 9.59765 11.3067C8.00284 11.3083 6.43609 11.044 5.05838 10.541L0.576864 11.3067ZM6.34074 3.00509C6.46167 2.99944 6.5835 2.99944 6.70443 3.00283C6.75316 3.00509 6.80189 3.00848 6.85062 3.01187C6.99411 3.02204 7.15204 3.07685 7.20528 3.15257C7.47421 3.53454 7.73591 3.91933 7.9886 4.30525C8.04455 4.39114 8.01116 4.50132 7.90467 4.60868C7.83143 4.68127 7.75221 4.75143 7.66733 4.81887C7.56535 4.9008 7.34606 5.0511 7.34606 5.0511C7.34606 5.0511 7.25672 5.11778 7.29101 5.20084C7.30365 5.23248 7.34516 5.27825 7.38306 5.31667L7.4363 5.37035C7.66733 5.61162 7.97777 5.85629 8.35679 6.08682C8.46509 6.15237 8.57067 6.21961 8.68438 6.28233C9.10672 6.51569 9.58501 6.70611 10.1012 6.84737L10.1057 6.8485C10.1824 6.8694 10.2212 6.8807 10.3331 6.91065C10.3891 6.92534 10.4468 6.93834 10.5055 6.94794C10.5661 6.95761 10.63 6.95579 10.6889 6.94271C10.7479 6.92964 10.7993 6.90589 10.8367 6.87449C11.4901 6.37895 11.5496 6.34674 11.555 6.34674V6.34787C11.6004 6.32136 11.6544 6.30125 11.7132 6.28887C11.772 6.27649 11.8344 6.27214 11.8962 6.27611C11.9503 6.27837 12.0054 6.28459 12.0559 6.29871C12.5351 6.43602 13.3193 6.65017 13.3193 6.65017L13.8445 6.79764C13.933 6.8242 14.0133 6.88692 14.016 6.94738C14.0196 6.98524 14.025 7.04626 14.0043 7.15814C13.9754 7.30448 13.905 7.48021 13.8346 7.57231C13.7864 7.63517 13.7224 7.69278 13.6451 7.74296C13.554 7.80282 13.4543 7.8573 13.3473 7.90569C13.3102 7.92313 13.2726 7.94008 13.2345 7.95654C13.1222 8.00113 13.0069 8.04261 12.8888 8.08085C12.6565 8.15812 12.3999 8.20249 12.1371 8.21081C11.9702 8.21646 11.8032 8.22437 11.6354 8.21872C11.6281 8.21872 11.1228 8.16956 11.1228 8.16956C9.83973 7.95826 8.65314 7.56241 7.6574 7.01349C7.45345 6.90105 7.26484 6.78013 7.07172 6.65977C6.26855 6.15971 5.66211 5.6201 5.29391 5.11043C5.10546 4.86028 5.00366 4.588 4.99521 4.31147C4.99149 3.9684 5.17059 3.63436 5.50418 3.3622C5.57006 3.30908 5.63233 3.25371 5.73972 3.18986C5.85433 3.12206 5.92652 3.08589 6.00504 3.06103C6.10942 3.02828 6.2233 3.00906 6.33984 3.00453L6.34074 3.00509Z"
                  fill="#05141F"
                />
              </svg>
            </a>
            <a className="footer-icon" href="">
              <svg
                width="20"
                height="9"
                viewBox="0 0 20 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.01875 5.49058V2.27977C9.84779 2.81612 11.2644 3.33425 12.9398 3.89286C11.5579 4.37044 9.84779 4.9063 8.01875 5.49058ZM18.212 0.682879C17.8965 0.423831 17.3588 0.222184 16.7863 0.155425C15.1036 -0.0437126 4.60576 -0.044279 2.92395 0.155425C2.46486 0.209059 2.05606 0.338699 1.70488 0.54012C0.225188 1.396 0.688854 5.98583 1.04552 6.72932C1.1955 7.05113 1.38939 7.28322 1.63356 7.43557C1.94816 7.63698 2.37889 7.77567 2.87365 7.83786C4.25915 8.01646 11.397 8.11632 16.757 7.86468C17.2508 7.81105 17.688 7.6679 18.0327 7.45792C19.4009 6.60546 19.3076 1.75787 18.212 0.682879Z"
                  fill="#05141F"
                />
              </svg>
            </a>
            <a className="footer-icon" href="">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.87521 12.0977V6.65638H9.47038L9.89429 4.23801H6.87521V3.06012C6.87521 2.43739 6.9002 1.81964 8.26721 1.81964H9.6518V0.0905851C9.6518 0.0645876 8.46248 0.00585938 7.25929 0.00585938C4.74647 0.00585938 3.17307 1.00779 3.17307 2.84756V4.23801H0.396484V6.65638H3.17307V12.0977H6.87521Z"
                  fill="#05141F"
                />
              </svg>
            </a>
            <a className="footer-icon" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 16 16"
                id="instagram"
                width="20"
                height="20"
              >
                <g fill="none" stroke="#000" strokeMiterlimit="10">
                  <path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z"></path>
                  <circle cx="8" cy="8" r="3.5"></circle>
                  <circle cx="12.5" cy="3.5" r=".5"></circle>
                </g>
              </svg>
            </a>
            <img src={Img11} alt="Bộ công thương xác nhận" />
          </div>
        </div>
        <div className="footer-policy flex-wrap">
          <div className="footer-policy-item">
            <h6 className="footer-header">Về chúng tôi</h6>
            <ul className="footer-list">
              <li className="footer-list-item">Về chúng tôi</li>
              <li className="footer-list-item">Định hướng phát triển</li>
              <li className="footer-list-item">Chính sách bảo mật</li>
              <li className="footer-list-item">Cam kết về thông tin</li>
              <li className="footer-list-item">Trả góp qua thẻ tín dụng</li>
            </ul>
          </div>
          <div className="footer-policy-item">
            <h6 className="footer-header">Hướng dẫn</h6>
            <ul className="footer-list">
              <li className="footer-list-item">Tiêu chí bán hàng</li>
              <li className="footer-list-item">Chính sách thanh toán</li>
              <li className="footer-list-item">Chính sách đổi trả</li>
              <li className="footer-list-item">Chính sách vận chuyển</li>
              <li className="footer-list-item">Chính sách bảo hành</li>
            </ul>
          </div>
          <div className="footer-policy-item">
            <h6 className="footer-header">Xem thêm</h6>
            <ul className="footer-list">
              <li className="footer-list-item">Tin tức</li>
              <li className="footer-list-item">Thông tin tuyển dụng</li>
              <li className="footer-list-item">Video</li>
              <li className="footer-list-item">Hệ thống phân phối</li>
              <li className="footer-list-item">Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center border-top footer-copyright">
        © 2023 ABCSport. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
