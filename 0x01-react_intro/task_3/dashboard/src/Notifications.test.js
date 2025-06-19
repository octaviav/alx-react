import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notification renders without crashing', () => {
    it('Notification renders', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBeDefined();
    });

    it('Notification renders ul without error', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('Notification renders three li elements without error', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('Notification renders the paragraph', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p')).toHaveLength(1);
    });
});