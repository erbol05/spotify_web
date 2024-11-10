import scss from "./MyPlayList.module.scss";

const MyPlayList = () => {
  return (
    <section className={scss.MyPlayList}>
      <div className="container">
        <div className={scss.content}>MyPlayList</div>
      </div>
    </section>
  );
};

export default MyPlayList;
