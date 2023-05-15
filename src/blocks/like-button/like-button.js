const likeBtns = document.getElementsByClassName("like-button");

const likeClick = (e) => {
  const likeBtn = e.target.parentElement;
  let numberOfLikesElement = likeBtn.querySelector(".like-button__count");
  let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);

  let isLiked;

  if (likeBtn.classList.contains("isLiked")) {
    isLiked = true;
  } else isLiked = false;

  if (!isLiked) {
    likeBtn.classList.add("isLiked");
    numberOfLikes++;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  } else {
    likeBtn.classList.remove("isLiked");
    numberOfLikes--;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
  console.log(isLiked);
};

Array.from(likeBtns).forEach((element) => {
  element.addEventListener("click", likeClick);
});
