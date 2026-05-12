
# React-useCallback
The task is to create a react based application which Renders a form with a heading **use Callback Hook**. and a form below having an input and a button named **Add Skill**. below this form there should be the list of skills added by the user with 4 preadded skills.

**Note** : This application should demonstrate the use of `useCallback` hook while handling the addition and deletion.

```
HTML
CSS
JavaScript
React
```

 
## Tasks
- The **Add Skill** button should be able to add skills and render below ever skills added before.
- On clicking the skill the particular skill should be deleted.
- Avoid adding the duplicate element to list so make the control such that the list avoids addition of duplicate and empty string skills.
## Instructions
- For the heading it should come with an `id` **heading**.
- for the `input` tag it should have an `id` of **skill-input**. and the `button` the `id` should be **skill-add-btn**.
- For rendering the skill list use a `<ul></ul>` and `<li></li>` inside using the `map` for the iterative generation of the list. while rendering assign the `id` as **skill-number-`idx`** where `idx` is the index of the map element while iterating.
