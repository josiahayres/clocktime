import PropTypes from 'prop-types';

const Conditional = (props = { when: true, children: null }) => {
    const { when, children } = props;
    if (!when) return null;
    return (when && children);
}

Conditional.propTypes = {
    /** 
     * When true, renders the children
     * @default true
     */
    when: PropTypes.bool
}
export default Conditional;