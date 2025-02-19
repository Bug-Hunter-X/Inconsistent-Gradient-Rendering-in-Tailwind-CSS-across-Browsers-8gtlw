```javascript
// Solution ensuring consistent gradient rendering
<div style={{ backgroundImage: `linear-gradient(to right, rgb(59, 130, 246), rgb(156, 26, 177))`, backgroundSize: '100% 100%',  padding: '1rem', borderRadius: '8px' }}>
  <p>This is some text.</p>
</div>
```
This solution uses inline styles with `linear-gradient` to explicitly define the gradient. This approach helps to bypass the browser inconsistencies.  Note: This approach is less efficient than using the Tailwind classes.