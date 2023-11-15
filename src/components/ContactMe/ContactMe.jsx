import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import { useForm, SubmitHandler } from "react-hook-form";

export const ContactUs = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({mode:'onBlur'});

  const sendEmail = (e) => {
    
    reset();

    // console.log(form);

    emailjs
      .sendForm(
        "service_h5zbyha",
        "template_boynptk",
        form.current,
        "V8wqS2EPv4J0vC0V5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-form-container">
      <a className="btn" href="mailto:anastasiya.kuzich@gmail.com">
        <button>Contact by mail</button>
      </a>
      <div className="line-container">
        <div className="light-line"></div>
        <p>OR</p>
        <div className="light-line"></div>
      </div>
      <form
        className="contact-form"
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            {...register("user_name", { required: "This field is required!" })}
          />
          <div className="submit-error">{errors?.user_name?.message}</div>
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            {...register("user_email", { required: "This field is required!" })}
          />
          <div className="submit-error">{errors?.user_email?.message}</div>
        </div>
        <div className="input-container">
          <label>Message</label>
          <textarea
            name="message"
            {...register("message", { required: "This field is required!" })}
          />
          <div className="submit-error">{errors?.message?.message}</div>
        </div>

        {/* <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" /> */}
        <button className="submit-btn" type="submit" value="Send" disabled={!isValid}>
          Send
        </button>
      </form>
    </section>
  );
};
