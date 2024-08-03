const star=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill rating-star" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
`;

const halfstar=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half rating-star" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
</svg>
`;

const review = ``;

const rating =`
<h3>Rating</h3>
<div class="rating-overview">
    <h2 class="total-rating"><%= averageRating %></h2>
    <div class="rating-details">
        <div class="stars">
        <% for( let index = 0; index < Math.floor(averageRating); index++ ) { %>
            ${star}
        <% } %>
        <% if (averageRating - Math.floor(averageRating) > 0) { %>
            ${halfstar}   
        <% } %>
        </div>
        <div class="rating-counts">
            <%= reviewCount %> reviews on this movie
        </div>
    </div>
</div>
<div class="rating-percentage">
    <div class="star-percentage">
        <p>5 star</p>
        <div class="percentage-bar bar-5">
            <div></div>
            <p><%= starAverage[4] %>%</p>
        </div>
    </div>
    <div class="star-percentage">
        <p>4 star</p>
        <div class="percentage-bar bar-4">
            <div></div>
            <p><%= starAverage[3] %>%</p>
        </div>
    </div>
    <div class="star-percentage">
        <p>3 star</p>
        <div class="percentage-bar bar-3">
            <div></div>
            <p><%= starAverage[2] %>%</p>
        </div>
    </div>
    <div class="star-percentage">
        <p>2 star</p>
        <div class="percentage-bar bar-2">
            <div></div>
            <p><%= starAverage[1] %>%</p>
        </div>
    </div>
    <div class="star-percentage">
        <p>1 star</p>
        <div class="percentage-bar bar-1">
            <div></div>
            <p><%= starAverage[0] %>%</p>
        </div>
    </div>
</div>
`;

export {star,halfstar,rating,review};