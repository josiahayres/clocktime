Conditional example:
Children are only rendered & visible when true

```jsx padded

	<Conditional when={true}>This content will be visible</Conditional>
	<Conditional when={false}>Hidden</Conditional>
	<Conditional when={undefined}>undefined </Conditional>
	<Conditional when={null}>null </Conditional>
	<Conditional when={""}>empty string </Conditional>
	<Conditional when={"TEST"}>string </Conditional>
	<Conditional when={0}>0</Conditional>
	<Conditional when={1}>1</Conditional>
	<Conditional>Visible by default </Conditional>

```
