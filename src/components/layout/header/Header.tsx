"use client"
import { useRouter } from "next/navigation";
import scss from "./Header.module.scss";
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const router = useRouter()
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.spotify}>
            <h2>
              <FaSpotify />
            </h2>
          </div>
          <div className={scss.home}>
            <div className={scss.nom}>
              <h2>
                <GoHome />
              </h2>
            </div>
            <div className={scss.input}>
              <h2>
                <IoSearchOutline />
              </h2>
              <input type="text" placeholder="Что хочешь выключить" />
            </div>
          </div>
          <div className={scss.sign}>
            <h3 onClick={() => router.push("/signup")}>Зарегистрироваться</h3>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
