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
    summary: 'Building an intelligent marketing algorithm system for Lazada',
    highlights: [
      '',
    ],
  },
  {
    name: 'Tencent',
    position: 'Algorithm Engineer',
    url: 'https://www.tencent.com/en-us/',
    startDate: '2017-01-17',
    summary: 'Be responsible for building a recommendation system for NOW, a live streaming app.',
    highlights: [
      '',
    ],
  },
];

export default work;
