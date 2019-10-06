import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('News Article', () => {
    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow(<NewsArticle />)
        expect(wrapper).toMatchSnapshot();
    });
});