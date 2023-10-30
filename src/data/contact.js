import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faZhihu } from '@fortawesome/free-brands-svg-icons/faZhihu';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/kailiang-zhong',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:brice.zhong@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.linkedin.com/in/kailiang-zhong-5426a827b',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.zhihu.com/people/zhong-xian-sheng-4-44/posts',
    label: 'Zhihu',
    icon: faZhihu,
  },
  // {
  //   link: 'http://mp.weixin.qq.com/mp/homepage?__biz=MzkxMjUwODc2NA==&hid=2&sn=66fd68720b6f7e6e3af60b29fdfa1dda&scene=18#wechat_redirect',
  //   label: 'WeiXin',
  //   icon: faWeixin,
  // },
];

export default data;
