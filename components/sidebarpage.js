// import SidebarMenu from 'react-bootstrap';
import React from "react";
import {
  AiTwotoneSetting,
  AiFillHome,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { SlLogout } from "react-icons/sl";
import { BsPlayFill } from "react-icons/bs";
import { MdAddAlert, MdOutlineLiveHelp } from "react-icons/md";
import styles from "../styles/sidebarpage.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar() {
  const Logout = () => {
    const router = useRouter();

    useEffect(() => {
      const handleLogout = async () => {
        // Call the signOut function from next-auth/client to sign out the user
        await signOut();

        // Redirect the user to the desired page after signing out (e.g., homepage)
        router.push("/");
      };

      handleLogout();
    }, []);

    return null;
  };

  return (
    <>
      <section className={styles.section1}>
        <div className={styles.section2}>
          <div className={styles.section3}>
            <nav role="navigation">
              <div id={styles.menuToggle}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id={styles.menu}>
                  <div className={styles.menuClient}>
                    <img className={styles.clientimg} src="/lady.png" alt="" />
                    <MdAddAlert />
                  </div>

                  <img
                    src="/brandlogo.png"
                    alt=""
                    className={styles.brandimg}
                  />
                  <h1 id={styles.skill}>WeSkillYou</h1>
                  <div className={styles.client}>
                    <h1>John Doe</h1>
                    <h6>johndoe@gmail.com</h6>
                  </div>
                  <div className={styles.dash}>
                    <button className={styles.dashbtn}>
                      <AiFillHome />
                      <Link href="/dashboard">HOME</Link>
                    </button>
                    <button className={styles.dashbtn}>
                      {" "}
                      <BsPlayFill />
                      <Link href="/mytopsearches">GALLERY</Link>
                    </button>
                    <h5>
                      <button className={styles.dashbtn}>
                        <AiOutlineHeart />
                        <Link href="/favourites">FAVOURITES</Link>
                      </button>
                    </h5>
                    <h5>
                      <button className={styles.dashbtn}>
                        <AiOutlineSearch />
                        <Link href="/mysearch">SEARCH</Link>
                      </button>
                    </h5>
                    <h6>
                      <button className={styles.dashbtn}>
                        <AiTwotoneSetting />{" "}
                        <Link href="/settings">SETTINGS</Link>
                      </button>
                    </h6>
                    <div id={styles.set}>
                      <h6>
                        <button className={styles.dashbtn}>
                          <MdOutlineLiveHelp />
                          <Link href="/helps">HELP</Link>
                        </button>
                      </h6>
                      <h6>
                        <button className={styles.dashbtn}>
                          <SlLogout />
                          <Link href="/">LOG OUT</Link>
                        </button>
                      </h6>
                    </div>
                  </div>
                </ul>
              </div>
            </nav>

            <ul id={styles.menu}>
              <div className={styles.menuClient}>
                <img className={styles.clientimg} src="/lady.png" alt="" />
                <MdAddAlert />
              </div>

              <img src="/brandlogo.png" alt="" className={styles.brandimg} />
              <h1 id={styles.skill}>WeSkillYou</h1>
              <div className={styles.client}>
                <h1>John Doe</h1>
                <h6>johndoe@gmail.com</h6>
              </div>
              <div className={styles.dash}>
                <button className={styles.dashbtn}>
                  <AiFillHome />
                  <Link href="/dashboard">HOME</Link>
                </button>
                <button className={styles.dashbtn}>
                  {" "}
                  <BsPlayFill />
                  <Link href="/mytopsearches">GALLERY</Link>
                </button>
                <h5>
                  <button className={styles.dashbtn}>
                    <AiOutlineHeart />
                    <Link href="/favourites">FAVOURITES</Link>
                  </button>
                </h5>
                <h5>
                  <button className={styles.dashbtn}>
                    <AiOutlineSearch />
                    <Link href="/mysearch">SEARCH</Link>
                  </button>
                </h5>
                <h6>
                  <button className={styles.dashbtn}>
                    <AiTwotoneSetting /> <Link href="/settings">SETTINGS</Link>
                  </button>
                </h6>
                <div id={styles.set}>
                  <h6>
                    <button className={styles.dashbtn}>
                      <MdOutlineLiveHelp />
                      <Link href="/helps">HELP</Link>
                    </button>
                  </h6>
                  <h6>
                    <button className={styles.dashbtn}>
                      <SlLogout />
                      <Link href="/">LOG OUT</Link>
                    </button>
                  </h6>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
