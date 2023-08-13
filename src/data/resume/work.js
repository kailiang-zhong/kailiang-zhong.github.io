/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Alibaba Group',
    position: 'Algorithm Engineer',
    url: 'https://smileidentity.com',
    startDate: '2022-02-24',
    summary: '负责构建智能营销系统，负责电商平台优惠券发放，在给定预算下最大化收益。 -[EN] Building an intelligent marketing algorithm system for Lazada',
    highlights: [
      '负责Uplift建模、用户定价工作，支持新人券、品类券、CLM券发放',
      '算法服务系统搭建',
      'KDD‘22 - [DESCN: Deep Entire Space Cross Networks for Individual Treatment Effect](https://arxiv.org/abs/2207.09920)',
      'LAZADA',
      'E-Commerce',
      'Uplift modeling/Casual Inference',
      'Vouchers',
    ],
  },
  {
    name: 'Tencent',
    position: 'Algorithm Engineer',
    url: 'https://www.tencent.com/en-us/',
    startDate: '2017-01-17',
    endDate: '2020-02-24',
    summary: '负责腾讯直播APP-NOW直播的内容推荐、反作弊、短视频推荐、内容理解挖掘. -[EN]Be responsible for building a recommendation system for NOW, a live streaming app.',
    highlights: [
      '推荐系统｜recommendation system',
      'QQ',
      'Label Propagation',
    ],
  },
  {
    name: 'Manto',
    position: 'Algorithm Engineer',
    url: 'https://www.tencent.com/en-us/',
    startDate: '2015-07-01',
    endDate: '2017-01-10',
    summary: '负责构建DSP广告系统，构建点击率模型实时出价，为广告主采购广告提高效率。-[EN] Be responsible for building a DSP system and DMP system for AD.',
    highlights: [
      '点击率预估模型',
      'PID消耗速度控制器',
      'DSP',
      'CTR',
    ],
  },
];

export default work;
