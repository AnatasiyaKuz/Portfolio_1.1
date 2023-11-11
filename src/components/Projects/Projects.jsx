
import "./styles.scss";

const Projects = () => {

    //x-on:scroll.debounce="$refs.slider.scrollLeft == 0 ? start = true : start = false; Math.abs(($refs.slider.scrollWidth - $refs.slider.offsetWidth) - $refs.slider.scrollLeft) < 5 ? end = true : end = false;"

  return (
   <>
   <h1 class="title">Alpine slider</h1>
<div class="slider" x-data="{start: true, end: false}">
  <div class="slider__content" x-ref="slider" >
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1608501821300-4f99e58bba77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1608501821300-4f99e58bba77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
    <div class="slider__item">
      <img class="slider__image" src="https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Image"/>
      <div class="slider__info">
        <h2>This is a card</h2>
      </div>
    </div>
  </div>
</div>
   </>
  );
};

export default Projects;
