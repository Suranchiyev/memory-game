# Memory Game Project
Matching games are games that require players to match similar elements. As the name implies, participants need to find a match for a word, picture, or card. It is a particularly good game for young children, though adults may find it challenging and stimulating as well. The scheme is often used in quiz shows and can be employed as an educational game.
## Instructions

The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

To get started, navigate to project location. Open index.html file with your browser  

### Memory Game Logic
The game randomly shuffles the cards:
   1. Used <code>shufle(array)</code> to shafle cards. Converted NodeList to Array. Saved shafled cards.
   2. Remove all cards from DOM. Created in <code>DocumentFragment</code> new contenet based on shafled array cards
   3. Append <code>DocumentFragment</code> to DOM
### Congratulations Popup
   1. Custom Popup with similar design as main app. Hidden until all cards have matched.
   2. It contains: raiting, moves, time
### Restart Button 
   1. Used <code>window.location.reload(false);</code>
### Star Rating
   1. Total we have 5 stars in the beginning. All of them ON
   2. Then more steps user does stars start getting OFF one by one
   3. There is a logic:
       <ul>
          <li><code>if(steps > 16) -> left 4 ON stars</code></li>
          <li><code> if(steps > 30) -> left 3 ON stars </code></li>
          <li><code> if(steps > 40) -> left 2 ON stars </code></li>
          <li><code> if(steps > 55) -> left 1 ON stars </code></li>
          <li><code> if(steps > 100) -> left 0 ON stars </code></li>
       </ul>
### Timer
   1. Timer starts once user load page
   2. Timer stops once all cards matched
   3. You can find your time on the Congratulations Popup
### Move Counter
   1. It shows your amount of moves on the above display

   
   

