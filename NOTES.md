# 🥁 Eastenders Database - Step into Tech exercise

## 📝ToDo

- [ ] Conditional title on favourite to add/remove from favourites
- [ ] Modal
- [ ] Change button

## 🏗 Notes

##### 🖧 Endpoints

```
   ┌──────────────────────────────────────────────────────────────────────────────┐
   │                                                                              │
   │   GET | http://localhost:4000/dev/characters                                 │
   │   POST | http://localhost:4000/2015-03-31/functions/characters/invocations   │
   │                                                                              │
   └──────────────────────────────────────────────────────────────────────────────┘
```

So far, this is a simple single page app that lists the current Eastenders characters;

##### 🕵️‍♀️ Filter by character or actor

- When a user starts typing, the array of characters on the homepage should filter depending on the value in the search bar
- The character array should reset to it's original value, if the text in the search bar has been deleted
- There should be an error message displayed if no results could be matched

<span style="color: red;">
<em>SearchBar Component</em>  <br>
onTextChange()<br>
filterString in state gets changed as user types<br>
render method in App.js line 59 filterNames() <br>
re-renders cards in the grid when characters are filtered out<br>
if no characters match - 'No results found' is rendered in the grid

</span>

##### 💜 Favouriting a character

In the database, there's an empty boolean column called `favourite`, to get this working you'll need to;

- Create a `PUT` endpoint that updates the value of the `favourite` column

- Add button for each character that's attached to a click handler. This handler should make a request to your new `PUT` endpoint

- Make characters that have been favourited appear in the `<Favourites />` component on the app

<span style="color: red;">
Not yet implemented in backend - saved in state only<br> 
addFavourite() App.js line 37<br>
Adds favourite and unfavourites with click handler onHeartClick() </span>

##### 💔 Unfavouriting a character

- Make sure the `PUT` endpoint can also update the value of the `favourite` column to be false
- These changes should then remove any characters from the `<Favourites />` component

<span style="color: red;">
Not yet implemented in backend - saved in state only<br>
button will remove characters from favourites</span>

##### 📝 Update a characters bio

There's also an empty text column in the database called `bio`

- Adapt your `PUT` endpoint so it can also update the bio column
- Create a component in your app that will allow you to enter some text (this could be a Modal, or a new page), and make a request to the `PUT` endpoint
- Display the `bio` text underneath each character (You don't have to have a bio for **every** character)

<span style="color: red;">text</span>

##### ↕️ Sorting

There are 2 buttons to sort the characters that currently aren't hooked up to anything

- Create a click handler for each button, that sorts the characters by their character name, or their actor's name

<span style="color: red;">Sorting function added to filterNames()
in the render method App.js line 65<br>
will render alphabetically by default<br>
(sortedBy: 'characterName',) added to state<br>
onClick() will change the state to sortedBy: 'actorName'

</span>

##### 🎨 CSS

- Make the images fade in when the characters first render
  <span style="color: red;">text</span>
- Have a CSS animation trigger when you hover over a character (check out [animate.css](https://daneden.github.io/animate.css/) for some inspiration)
  <span style="color: red;">text</span>
- The app is pretty basic at the moment, you can style it however you'd like!

##### 🟢 Accessibility

- The app should get a score of **100** when run through Chrome's [Lighthouse tool](https://developers.google.com/web/tools/lighthouse)
  <span style="color: red;">text</span>
- All interactable elements (buttons, text inputs) should be able to be accessed using the keyboard only (you can test this by tabbing around the app)
  <span style="color: red;">text</span>

##### 🧪 Testing

- Create unit tests for all the components. The app already includes one simple test which uses [React's testing library](https://github.com/testing-library/react-testing-library)
  <span style="color: red;">text</span>

##### ⭐️ Extra features

If you have any ideas for new features, feel free to add them in!

> The [Movie Database](https://developers.themoviedb.org/3) is an Open API that allows you to search against TV shows and Actors. One idea could be to display the number of episodes each actor has been in?
