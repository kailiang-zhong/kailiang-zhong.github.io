import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Kailiang Zhong's personal website. Shenzhen based, "
    + 'worked at Alibaba Group.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Brief introduction</Link></h2>
          <p>Experience in recommendation system and uplift modeling.</p>
          <p>I worked at Tencent before and now at Alibaba.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        {/* <Link to="/projects">projects</Link>, {' '} */}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
