Radio items should be wrapped with a RadioGroup.

```jsx
import RadioGroup from "./RadioGroup";
const [clockSize, setClockSize] = React.useState("small");

<>
	<p>{`Selected option: ${clockSize}`}</p>

	<RadioGroup>
		<Radio
			value="tiny"
			name="clocksize"
			onClick={(size) => setClockSize(size)}
			selected={clockSize}
		/>
		<Radio
			value="small"
			name="clocksize"
			onClick={(size) => setClockSize(size)}
			selected={clockSize}
		/>
		<Radio
			value="regular"
			name="clocksize"
			onClick={(size) => setClockSize(size)}
			selected={clockSize}
		/>
		<Radio
			value="large"
			name="clocksize"
			onClick={(size) => setClockSize(size)}
			selected={clockSize}
		/>
	</RadioGroup>
</>;
```
