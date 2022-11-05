/**
 * @typedef {object} propsArgs
 * @property {string} title
 * @property {*} children
 */

/**
 *
 * @param {propsArgs} props
 * @returns
 */
export default function (props) {
	const { title, children } = props;

	return (
		<>
			<h3>{title}</h3>
			<p>{children}</p>
		</>
	);
}
