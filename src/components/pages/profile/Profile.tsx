import scss from "./Profile.module.scss";

const Profile = () => {
  return (
    <section className={scss.Profile}>
      <div className="container">
        <div className={scss.content}>Profile</div>
      </div>
    </section>
  );
};

export default Profile;
