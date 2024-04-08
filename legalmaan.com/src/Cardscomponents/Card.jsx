import React from "react";

const Card = ({username}) => {
  return (
    <>
      <li className="rounded-xl bg-white px-8 py-12 transform  shadow-xl transition duration-300 hover:translate-x-4">
        <a href="#" className="group">
          <img
            src="https://www.svgrepo.com/show/530453/mail-reception.svg"
            alt=""
            className="mx-auto h-20 w-20"
          />
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
            {username}
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium minus consequuntur accusamus, aut atque nisi modi optio
            ea, eveniet alias porro facere voluptatem id. Reiciendis amet
            blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus
            nisi quisquam odit laboriosam.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s"
            alt=""
            className="mx-auto mt-5 h-10 w-10"
          />
        </a>
      </li>
    </>
  );
};

export default Card;
