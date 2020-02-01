import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('News Container', () => {
    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow(<NewsContainer
            key={69}
            headline='Party on Garth'
            img='someURL'
            description='Party on Wayne'
            url='someURL'
        />);
        expect(wrapper).toMatchSnapshot();
    });
});