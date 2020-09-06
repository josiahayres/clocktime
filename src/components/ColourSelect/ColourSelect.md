Example

```jsx
import ColourSelectGroup from "./ColourSelectGroup";

const [clockSize, setClockSize] = React.useState("animatedBackgroundOne");
<>
	{`Selected: ${clockSize}`}
	<ColourSelectGroup>
		<ColourSelect
			value="animatedBackgroundOne"
			selected={clockSize}
			onClick={(size) => setClockSize(size)}
		/>
		<ColourSelect
			value="animatedBackgroundTwo"
			selected={clockSize}
			onClick={(size) => setClockSize(size)}
		/>

		<ColourSelect
			value="red"
			selected={clockSize}
			onClick={(size) => setClockSize(size)}
		/>
	</ColourSelectGroup>
</>;
```
