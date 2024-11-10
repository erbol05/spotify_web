"use client";
import { useState } from "react";
import scss from "./SideBar.module.scss";
import { VscLibrary } from "react-icons/vsc";
import { CgExpand } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

const SideBar = () => {
  const [modal, setmodal] = useState(false);
  const [modaltwoe, setmodaltwoe] = useState(false);
  return (
    <>
      <div
        className={scss.product}
        style={{
          width: `${modal ? "700px" : "400px"}`,
        }}
      >
        <div className={scss.global}>
          <div className={scss.one}>
            <h2 onClick={() => setmodaltwoe(!modaltwoe)}>
              <VscLibrary />
              <span>моя медиатека</span>
            </h2>
            <h3>
              <FiPlus />
              <CgExpand onClick={() => setmodal(!modal)} />
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
