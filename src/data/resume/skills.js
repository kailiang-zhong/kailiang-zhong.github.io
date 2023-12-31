const skills = [
  {
    title: 'Causal Inference/Uplift Modeling',
    competency: 5,
    category: ['Pytorch', 'Tensorflow', 'Python', 'Deep Learning', 'Causal Inference/Uplift Modeling'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Hive',
    competency: 5,
    category: ['Databases', 'Tools'],
  },
  {
    title: 'Mysql',
    competency: 3,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow',
    competency: 4,
    category: ['Deep Learning', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Deep Learning', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },

  {
    title: 'Storm',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
