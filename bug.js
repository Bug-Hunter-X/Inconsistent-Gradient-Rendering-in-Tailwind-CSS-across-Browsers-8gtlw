```javascript
// Example showing the unexpected behavior
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
  <p>This is some text.</p>
</div>
```
This code snippet uses Tailwind CSS gradient classes. However, depending on the browser and its version, the gradient may not render correctly, showing a solid color instead of the expected gradient.