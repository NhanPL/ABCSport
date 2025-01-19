import { useCallback } from "react";
import "./App.css";
import ImgEvent1 from "./assets/images/event_1.png";
import ImgEvent2 from "./assets/images/event_2.png";
import ImgEvent3 from "./assets/images/event_3.png";
import ImgEvent4 from "./assets/images/event_4.png";
import Img1 from "./assets/images/image_1.png";
import Img2 from "./assets/images/image_2.png";
import Img4 from "./assets/images/image_4.png";
import Img5 from "./assets/images/image_5.png";
import Img6 from "./assets/images/image_6.png";
import Img7 from "./assets/images/image_7.png";
import Img8 from "./assets/images/image_8.png";
import Img10 from "./assets/images/image_10.png";
import ImgProduct1 from "./assets/images/product_1.png";
import ImgProduct2 from "./assets/images/product_2.png";
import ImgProduct3 from "./assets/images/product_3.png";
import ImgProduct4 from "./assets/images/product_4.png";
import ImgProduct5 from "./assets/images/product_5.png";
import ImgProduct6 from "./assets/images/product_6.png";
import ImgProduct7 from "./assets/images/product_7.png";
import ImgProduct8 from "./assets/images/product_8.png";
import ImgProduct9 from "./assets/images/product_9.png";
import ImgProduct10 from "./assets/images/product_10.png";
import Card from "./components/card/Card";
import MySlider from "./components/mySlider/MySlider";
import Header from "./layouts/header/Header";
import CardFullImage from "./components/cardFullImage/CardFullImage";
import Card2 from "./components/card2/Card2";
import Footer from "./layouts/footer/Footer";
import CustomerComment from "./components/customerComment/CustomerComment";

const sliders1 = [
  {
    img: ImgProduct1,
    name: "Ghế massage ABCSport A35",
    priceOld: "16.900.000đ",
    priceNew: "12.900.000đ",
    percent: "-24%",
  },
  {
    img: ImgProduct2,
    name: "Ghế massage ABCSport A24 NEW",
    priceOld: "20.000.000đ",
    priceNew: "14.900.000đ",
    percent: "-26%",
  },
  {
    img: ImgProduct3,
    name: "Ghế Massage ABCSport Premium A32",
    priceOld: "150.000.000đ",
    priceNew: "98.000.000đ",
    percent: "-35%",
  },
  {
    img: ImgProduct4,
    name: "Ghế massage ABCSport A35",
    priceOld: "16.900.000đ",
    priceNew: "12.900.000đ",
    percent: "-24%",
  },
  {
    img: ImgProduct2,
    name: "Ghế massage ABCSport A24 NEW",
    priceOld: "20.000.000đ",
    priceNew: "14.900.000đ",
    percent: "-26%",
  },
  {
    img: ImgProduct3,
    name: "Ghế Massage ABCSport Premium A32",
    priceOld: "150.000.000đ",
    priceNew: "98.000.000đ",
    percent: "-35%",
  },
];

const sliders2 = [
  {
    img: ImgProduct5,
    title: "Ghế Massage",
    desc: "10 sản phẩm",
  },
  {
    img: ImgProduct5,
    title: "Ghế Massage",
    desc: "10 sản phẩm",
  },
  {
    img: ImgProduct6,
    title: "Ghế Massage",
    desc: "10 sản phẩm",
  },
  {
    img: ImgProduct7,
    title: "Ghế Massage",
    desc: "10 sản phẩm",
  },
  {
    img: ImgProduct7,
    title: "Ghế Massage",
    desc: "10 sản phẩm",
  },
];

const sliders3 = [
  {
    img: ImgProduct8,
    name: "Ghế massage ABCSport A35",
    priceOld: "16.900.000đ",
    priceNew: "12.900.000đ",
    percent: "-24%",
  },
  {
    img: ImgProduct9,
    name: "Ghế massage ABCSport A35",
    priceOld: "16.900.000đ",
    priceNew: "12.900.000đ",
    percent: "-24%",
  },
  {
    img: ImgProduct10,
    name: "Ghế massage ABCSport A35",
    priceOld: "16.900.000đ",
    priceNew: "12.900.000đ",
    percent: "-24%",
  },
  {
    img: ImgProduct9,
    name: "Ghế massage ABCSport A35",
    priceOld: "16.900.000đ",
    priceNew: "12.900.000đ",
    percent: "-24%",
  },
];

const sliders4 = [
  {
    img: ImgEvent1,
    title: "This is card heading",
    time: "28 Aug,2023 19:55",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: ImgEvent2,
    title: "This is card heading",
    time: "28 Aug,2023 19:55",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: ImgEvent3,
    title: "This is card heading",
    time: "28 Aug,2023 19:55",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: ImgEvent4,
    title: "This is card heading",
    time: "28 Aug,2023 19:55",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: ImgEvent2,
    title: "This is card heading",
    time: "28 Aug,2023 19:55",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function App() {
  const renderSlider = useCallback(() => {
    return sliders1.map((slider, index) => {
      return (
        <Card
          key={index}
          image={slider.img}
          name={slider.name}
          priceOld={slider.priceOld}
          priceNew={slider.priceNew}
          percent={slider.percent}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliders1]);

  const renderSlider2 = useCallback(() => {
    return sliders2.map((slider, index) => {
      return (
        <CardFullImage
          key={index}
          image={slider.img}
          title={slider.title}
          desc={slider.desc}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliders2]);

  const renderSlider3 = useCallback(() => {
    return sliders3.map((slider, index) => {
      return (
        <Card
          key={index}
          image={slider.img}
          name={slider.name}
          priceOld={slider.priceOld}
          priceNew={slider.priceNew}
          percent={slider.percent}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliders3]);

  const renderSlider4 = useCallback(() => {
    return sliders4.map((slider, index) => {
      return (
        <Card2
          key={index}
          image={slider.img}
          title={slider.title}
          time={slider.time}
          content={slider.content}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliders4]);

  return (
    <>
      <Header />
      <div className="contain1">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Img1} className="d-block w-100" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src={Img1} className="d-block w-100" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src={Img1} className="d-block w-100" alt="Image 3" />
            </div>
            <div className="carousel-item">
              <img src={Img1} className="d-block w-100" alt="Image 4" />
            </div>
            <div className="carousel-item">
              <img src={Img1} className="d-block w-100" alt="Image 5" />
            </div>
          </div>
        </div>

        <div className="contain1_info">
          <h2 className="contain1_info_title">
            From <b className="text-primary">Stress</b>
          </h2>
          <h2 className="contain1_info_title">
            To <b className="text-primary">Serenity</b>
          </h2>
          <button className="contain1_info_btn btn btn-primary text-white d-flex align-items-center justify-content-center gap-2">
            DISCORVER MORE
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                fill="white"
              />
            </svg>
          </button>
          <img className="contain1_info_image" src={Img2} alt="Image robot" />
        </div>
      </div>

      <div className="contain2">
        <h2 className="contain2-title text-primary text-center bold">
          Flash Sale Mùa Vu lan
        </h2>
        <p className="contain2-text text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          lobortis sed sapien in pretium. Donec tincidunt, quam.
        </p>
        <div className="contain2-products">
          <MySlider sliders={renderSlider()} />
        </div>
      </div>

      <div className="contain3">
        <h2 className="contain3-title text-primary text-center bold">
          <img src={Img4} alt="Image huân chương" />
          Danh Mục Sản Phẩm
        </h2>
        <div className="contain3-products">
          <MySlider
            sliders={renderSlider2()}
            isCenteredSlides={true}
            isHideButton={true}
          />
        </div>
        <div className="contain3-btn">
          <button className="btn btn-primary text-white d-flex align-items-center justify-content-center gap-2">
            XEM TẤT CẢ
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="contain4">
        <div className="d-flex align-items-center justify-content-center gap-2">
          <img className="contain4-top-img" src={Img5} alt="Image sales" />
          <h2 className="contain4-top-title text-primary">
            Ghế Massage ABCSport
          </h2>
        </div>
        <p className="contain4-desc text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          lobortis sed sapien in pretium. Donec tincidunt, quam.
        </p>
        <div className="contain4-products">
          <MySlider sliders={renderSlider3()} />
        </div>
      </div>

      <div className="contain5 row g-0 bg-secondary">
        <div className="contain5-left col-md-12 col-xl-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="contain5-title">Khách hàng nói gì về ABCSport</h2>
          <div className="contain5-slider">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CustomerComment />
                </div>
                <div className="carousel-item">
                  <CustomerComment />
                </div>
                <div className="carousel-item">
                  <CustomerComment />
                </div>
              </div>
              <button
                className="carousel-btn carousel-btn-previous"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="" aria-hidden="true">
                  <svg
                    width="64"
                    height="20"
                    viewBox="0 0 64 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M64 10L1 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M10 1L0.999999 10L10 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-btn carousel-btn-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span aria-hidden="true">
                  <svg
                    width="64"
                    height="20"
                    viewBox="0 0 64 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H63"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M54 19L63 10L54 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-xl-6 g-0">
          <img src={Img6} className="w-100 h-100" alt="Image Khách Hàng" />
        </div>
      </div>

      <div className="contain6 row g-0">
        <div className="contain6-left col-md-12 col-xl-6 h-100 d-flex flex-column align-items-center">
          <img
            src={Img7}
            alt="Hình ảnh sản phẩm"
            className="contain6-img-top"
          />
          <img
            src={Img8}
            alt="Hình ảnh sản phẩm"
            className="contain6-img-bottom"
          />
        </div>
        <div className="contain6-right col-md-12 col-xl-6">
          <h2 className="contain6-title text-secondary">
            120 Showroom Toàn Quốc
          </h2>
          <nav id="navbar-example2" className="navbar">
            <ul className="nav nav-pills contain6-navbar-header">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  HÀ NỘI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  HỒ CHÍ MINH
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading3">
                  MIỀN BẮC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">
                  MIỀN TRUNG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading5">
                  MIỀN NAM
                </a>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            className="scrollspy-example scrollspy-content"
            tabIndex="0"
          >
            <div id="scrollspyHeading1" className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div id="scrollspyHeading2" className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div id="scrollspyHeading3" className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div id="scrollspyHeading4" className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div id="scrollspyHeading5" className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
            <div className="showgroom-group">
              <h5 className="showroom-name text-primary">ABCSport Đống Đa</h5>
              <p className="showroom-location m-0">
                94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội
              </p>
              <p className="showroom-phone m-0">Điện thoại: (024) 6259 1760</p>
              <p className="showroom-note">
                <a
                  className="text-secondary pr-1"
                  href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                >
                  Xem Bản Đồ
                </a>{" "}
                (Có chỗ đậu ô tô)
              </p>
            </div>
          </div>

          <button className="contain6_info_btn btn btn-primary text-white d-flex align-items-center justify-content-center gap-2">
            XEM TẤT CẢ
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="contain7 d-flex flex-column align-items-center">
        <h2 className="text-secondary contain7-title">Tin Tức & Sự Kiện</h2>
        <div className="contain7-slider">
          <MySlider sliders={renderSlider4()} />
        </div>
        <button className="contain7_info_btn btn btn-primary text-white d-flex align-items-center justify-content-center gap-2">
          XEM TẤT CẢ
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="contain8">
        <div className="contain8-right">
          <div className="contain8-header d-flex align-items-center justify-content-center">
            <img src={Img10} className="contain8-img" alt="Rotbot xin chào" />
            <h2 className="contain8-title text-white text-center">
              ABCSport luôn sẵn sàng đồng hành cùng bạn
            </h2>
          </div>
          <form className="row">
            <div className="col-lg-6 col-12 contain8-input-group mt-2">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Họ và tên"
                aria-label=".form-control-lg example"
              />
            </div>
            <div className="col-lg-6 col-12 contain8-input-group mt-2">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Số điện thoại"
                aria-label=".form-control-lg example"
              />
              <button
                type="text"
                className="btn btn-primary text-white d-flex align-items-center justify-content-center"
              >
                Tư vấn
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
