import React from "react";
// import Cards from "../Cards";

const getFormattedTitle = () => null;
const getFormattedDescription = () => null;
const handleAction = () => null;
const handleInnerBtn = () => null;
const HC6 = (props) => {
  const card = cards.cards[0];
  return <Item card={card} />;
};
const Item = (props) => {
  const { card } = props;

  return (
    <div className="hc6 container">
      <Icon icon={card.icon} />
      <div className="right">
        <Title title={card.title} formatted_title={card.formatted_title} />
        <Description
          description={card.description}
          formatted_description={card.formatted_description}
        />
      </div>
    </div>
  );
};
const Icon = (props) => {
  const { icon } = props;
  return (
    <div className="icon">
      <img src={icon.image_url} alt={icon.image_type} className="icon"></img>
    </div>
  );
};
const Title = (props) => {
  const { formatted_title, title } = props;
  return (
    <div className="title">{getFormattedTitle(formatted_title) || title}</div>
  );
};
const Description = (props) => {
  const { description, formatted_description } = props;
  return (
    <div className="description">
      {getFormattedDescription(formatted_description) || description}
    </div>
  );
};
export default HC6;

const cards = {
  id: 31,
  name: "UPI Register HCG",
  design_type: "HC6",
  cards: [
    {
      name: "UPI Register card",
      title: "Setup your UPI ID",
      formatted_title: {
        text: "Setup your {}",
        entities: [
          {
            text: "UPI ID",
            color: "#FF0000",
          },
        ],
      },
      description: "Register now and start UPI payments",
      formatted_description: {
        text: "Register now and start {}",
        entities: [
          {
            text: "UPI payments",
            color: "#00FF00",
          },
        ],
      },
      icon: {
        image_type: "ext",
        image_url:
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/shape_square.png",
      },
      url: "https://youtube.com/",
    },
  ],
  is_scrollable: false,
};