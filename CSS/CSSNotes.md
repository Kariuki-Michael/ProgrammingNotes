# CSS Notes & Guides

## Resources.

[Conquering Responsive Layouts](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts) - 21 Day Free Course by Kevin Powell. A true CSS Enthusiast

[KP CSS Discord Community](https://discord.gg/9Rc6WNhNGJ)

### 1. Using Percentages & Avoiding heights

#### Percentages vs Fixed Widths

- Adding Fixed widths takes away the responsiveness capabilities of the layout.
- Default width of block elements is 100%.
- Using % ensures that child element only takes up the set value of the parent width

#### Avoiding Heights

> Websites are naturally responsive by default. It's us who ruin the responsiveness of a website

- Use padding to give your layouts more background instead of fixed height.

### 2. Getting Familiar with Relative Units

- 1`em` is equivalent to 16`px`.
- `em` tends to be a compounding unit. Looks at the font size of the parent to know what it's font size needs to be set to.
- `rem` invented to counter the compounding property of `em` as it is more consistent.
- Good usecase for `em` is whilemsetting margins and padding. As they reference the font size of the element.

### 3. Enter max-width

- `max-width` helps in moderating content when using larger screens preventing them from getting larger.
