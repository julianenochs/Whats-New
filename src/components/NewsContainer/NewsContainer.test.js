import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('News Container', () => {
    it('should match the snapshot with all data passed in correctly', () => {
<<<<<<< HEAD
        const wrapper = shallow(<NewsContainer 
=======
        const wrapper = shallow(<NewsContainer
>>>>>>> Search
            key={69}
            headline='Party on Garth'
            img='someURL'
            description='Party on Wayne'
            url='someURL'
<<<<<<< HEAD
            />);
            expect(wrapper).toMatchSnapshot();
=======
        />);
        expect(wrapper).toMatchSnapshot();
>>>>>>> Search
    });
});