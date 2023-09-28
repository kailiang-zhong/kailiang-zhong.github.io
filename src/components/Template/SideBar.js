import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h3>Kailiang Zhong（钟锴亮）</h3>
        <p><a href="mailto:brice.zhong@gmail.com">brice.zhong@gmail.com</a></p>
        <ContactIcons />
      </header>
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/wx_official_account.jpeg`} alt="" />
      </Link>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Kailiang Zhong（钟锴亮）. I work in
        {' '}<a href="https://www.alibabagroup.com/">Alibaba Group</a> as a algorithm engineer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="https://mldangelo.com/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
