import Button from './button';
import "./global.css";

export function App() {
  return (
    <div style={{ padding: '50px' }}>
      <Button loading>Primary</Button>
      <br />
      <br />
      <Button disabled>Disabled</Button>
      <br />
      <br />
      <Button size='small'>Primary small</Button>
      <br />
      <br />
      <Button size='large'>Primary large</Button>
      <br />
      <br />
      <Button variant='secondary' loading>Secondary</Button>
      <br />
      <br />
      <Button variant='secondary' disabled>Disabled</Button>
      <br />
      <br />
      <Button variant='accent' loading>Accent</Button>
      <br />
      <br />
      <Button variant='accent' disabled>Disabled</Button>
      <br />
      <br />
      <Button variant='text'>Text</Button>
      <br />
      <br />
      <Button variant='text' disabled>Disabled</Button>
    </div>
  )
}