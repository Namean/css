# CSS > CSS Concepts

Selects
Combinators
Pseudo-classes
Pseudo-elements
Attr Selectors
Counters
Specificity
CSS Responsive, (RWD) Reponsive Web Design
Flexbox
CSS grid
CSS pre-processor
Margin
padding
Opacity
CSS Media Queries
CSS @property Rule

## Flexbox

The CSS properties we use for the flex container are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction

- row
- column
- row-reverse
- column-reverse

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

### The CSS flex-wrap property

The flex-wrap proeprty specifies whther the flex items should wrap or not, if there is not enough room for them on one flex line.
The `flex-wrap` property can have one of the following values:

- nowrap
- wrap
- wrap-reverse
