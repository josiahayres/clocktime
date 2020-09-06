Example

```jsx
import ColourSelectGroup from "./ColourSelectGroup";

const [backgroundName, setBackgroundName] = React.useState(
	"animatedBackgroundOne"
);
<>
	{`Selected: ${backgroundName}`}
	<ColourSelectGroup>
		<ColourSelect
			value="animatedBackgroundOne"
			selected={backgroundName}
			onClick={(size) => setBackgroundName(size)}
		/>
		<ColourSelect
			value="animatedBackgroundTwo"
			selected={backgroundName}
			onClick={(size) => setBackgroundName(size)}
		/>

		<ColourSelect
			value="red"
			selected={backgroundName}
			onClick={(size) => setBackgroundName(size)}
		/>
	</ColourSelectGroup>
</>;
```
