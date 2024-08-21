import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Кошик пустий"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Всього:</span>
            <span>{calcTotalPrice(items)} грн.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформити заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
