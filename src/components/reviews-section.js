import style from './reviews-section.module.css'

const ReviewsSection = () => {
  return (
    <>
      <h2>
        <span className="purpled">Reviews</span>.
      </h2>
      <span className='highlite'>What people say about Ammar</span>
      <div className={style.wrapper}>
      <div className={style.review}>
        <p className={style.reviewtext}>“ A few words spring to mind when I think of Ammar - cleverly creative, persuasive, extremely detailed, exceptional comms, I could carry on... and all this means he is one brilliant designer who we love to work with. ”</p>
        <p className="review-author"></p>
      </div>
      <p className={style.author}> - upwork client</p>

      </div>
    </>
  );
};

export default ReviewsSection;
