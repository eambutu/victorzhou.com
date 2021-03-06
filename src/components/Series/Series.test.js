import React from 'react';
import renderer from 'react-test-renderer';
import Series from './Series';

describe('Series', () => {
  const props = {
    htmlEnd: '<div></div>',
    series: {
      frontmatter: {
        date: new Date('2019-03-14T12:00:00.000Z'),
        slug: 'test',
        title: 'test',
      },
      html: '<div></div>',
    },
    seriesPosts: {
      edges: [{
        node: {
          frontmatter: {
            title: 'test',
            date: new Date('2019-03-14T12:00:00.000Z'),
          },
        },
      }],
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Series {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
